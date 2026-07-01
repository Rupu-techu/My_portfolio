import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const username = process.env.GITHUB_USERNAME ?? "Rupu-techu";
const token = process.env.GITHUB_TOKEN;

type RepoNode = {
  name: string;
  url: string;
  description: string | null;
  stargazerCount: number;
  updatedAt: string;
  isFork: boolean;
  primaryLanguage: { name: string; color: string | null } | null;
  languages?: {
    edges: Array<{
      size: number;
      node: { name: string; color: string | null };
    }>;
  };
};

type PublicEvent = {
  id: string;
  type: string;
  created_at: string;
  repo: { name: string };
  payload: Record<string, unknown>;
};

type SearchItem = {
  repository_url?: string;
  repository?: {
    html_url?: string;
    full_name?: string;
  };
};

type SearchResponse<TItem> = {
  total_count: number;
  items: TItem[];
};

type ContributionDay = {
  date: string;
  contributionCount: number;
};

function getYearRange() {
  const year = new Date().getUTCFullYear();
  return {
    start: `${year}-01-01`,
    end: `${year}-12-31`,
  };
}

function getRollingYearRange() {
  const end = new Date();
  const start = new Date(end);
  start.setUTCDate(start.getUTCDate() - 365);
  return {
    from: start.toISOString(),
    to: end.toISOString(),
  };
}

function computeStreak(days: ContributionDay[]): number {
  const byDate = new Map(days.map(day => [day.date, day.contributionCount]));
  const sortedDates = [...byDate.keys()].sort();
  let streak = 0;
  let cursor = sortedDates.at(-1) ?? null;
  while (cursor) {
    if ((byDate.get(cursor) ?? 0) <= 0) break;
    streak += 1;
    const prev = new Date(`${cursor}T00:00:00Z`);
    prev.setUTCDate(prev.getUTCDate() - 1);
    cursor = prev.toISOString().slice(0, 10);
  }
  return streak;
}

function aggregateLanguages(repos: RepoNode[]) {
  const languageSizes = new Map<string, { name: string; color: string | null; size: number }>();
  repos.forEach(repo => {
    if (repo.languages?.edges?.length) {
      repo.languages.edges.forEach(edge => {
        const current = languageSizes.get(edge.node.name);
        languageSizes.set(edge.node.name, {
          name: edge.node.name,
          color: edge.node.color,
          size: (current?.size ?? 0) + edge.size,
        });
      });
      return;
    }
    if (repo.primaryLanguage?.name) {
      const current = languageSizes.get(repo.primaryLanguage.name);
      languageSizes.set(repo.primaryLanguage.name, {
        name: repo.primaryLanguage.name,
        color: repo.primaryLanguage.color,
        size: (current?.size ?? 0) + 1,
      });
    }
  });
  return [...languageSizes.values()].sort((a, b) => b.size - a.size).slice(0, 6);
}

function mapRecentActivity(events: PublicEvent[]) {
  return events.slice(0, 6).map(event => {
    const repoName = event.repo?.name ?? "repository";
    switch (event.type) {
      case "PushEvent":
        return {
          type: "Push",
          title: `Pushed to ${repoName}`,
          detail: `${Array.isArray(event.payload.commits) ? (event.payload.commits as Array<{ message?: string }>).length : 0} commit(s)`,
          date: event.created_at,
          url: `https://github.com/${repoName}`,
        };
      case "PullRequestEvent":
        return {
          type: "Pull Request",
          title: `Pull request activity in ${repoName}`,
          detail: String(event.payload.action ?? "updated"),
          date: event.created_at,
          url: `https://github.com/${repoName}`,
        };
      case "IssuesEvent":
        return {
          type: "Issue",
          title: `Issue activity in ${repoName}`,
          detail: String(event.payload.action ?? "updated"),
          date: event.created_at,
          url: `https://github.com/${repoName}`,
        };
      case "CreateEvent":
        return {
          type: "Create",
          title: `Created something in ${repoName}`,
          detail: String(event.payload.ref_type ?? "repository"),
          date: event.created_at,
          url: `https://github.com/${repoName}`,
        };
      default:
        return {
          type: event.type.replace(/Event$/, ""),
          title: `Activity in ${repoName}`,
          detail: "Public GitHub activity",
          date: event.created_at,
          url: `https://github.com/${repoName}`,
        };
    }
  });
}

async function fetchRestJson<T>(url: string): Promise<T> {
  const response = await fetch(url, {
    headers: token
      ? {
          Authorization: `Bearer ${token}`,
          "X-GitHub-Api-Version": "2022-11-28",
          Accept: "application/vnd.github+json",
        }
      : {
          Accept: "application/vnd.github+json",
        },
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error(`GitHub REST request failed: ${response.status}`);
  }
  return response.json() as Promise<T>;
}

async function fetchSearchJson<T>(url: string, preview = false): Promise<T> {
  const response = await fetch(url, {
    headers: {
      Accept: preview
        ? "application/vnd.github.cloak-preview+json"
        : "application/vnd.github+json",
      ...(token
        ? {
            Authorization: `Bearer ${token}`,
            "X-GitHub-Api-Version": "2022-11-28",
          }
        : {
            "X-GitHub-Api-Version": "2022-11-28",
          }),
    },
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error(`GitHub search request failed: ${response.status}`);
  }
  return response.json() as Promise<T>;
}

function uniqueRepoCount(items: SearchItem[]) {
  const repos = new Set<string>();
  items.forEach(item => {
    if (item.repository_url) {
      repos.add(item.repository_url);
    }
    const repoUrl = item.repository?.html_url;
    if (repoUrl) {
      repos.add(repoUrl);
    }
    const fullName = item.repository?.full_name;
    if (fullName) {
      repos.add(`https://github.com/${fullName}`);
    }
  });
  return repos.size;
}

async function loadSearchFallback(username: string) {
  const { start, end } = getYearRange();
  const [issues, prs, commitSearch] = await Promise.all([
    fetchSearchJson<SearchResponse<SearchItem>>(
      `https://api.github.com/search/issues?q=author:${encodeURIComponent(username)}+type:issue+created:${start}..${end}&per_page=100`
    ),
    fetchSearchJson<SearchResponse<SearchItem>>(
      `https://api.github.com/search/issues?q=author:${encodeURIComponent(username)}+type:pr+created:${start}..${end}&per_page=100`
    ),
    fetchSearchJson<SearchResponse<SearchItem>>(
      `https://api.github.com/search/commits?q=author:${encodeURIComponent(username)}+committer-date:${start}..${end}&per_page=100`,
      true
    ),
  ]);

  const repositoriesContributedTo = uniqueRepoCount([
    ...issues.items,
    ...prs.items,
    ...commitSearch.items,
  ]);

  return {
    totalContributionsThisYear: issues.total_count + prs.total_count + commitSearch.total_count,
    pullRequests: prs.total_count,
    commits: commitSearch.total_count,
    repositoriesContributedTo,
  };
}

export async function GET() {
  try {
    const [profile, repos, events] = await Promise.all([
      fetchRestJson<{
        login: string;
        name: string | null;
        bio: string | null;
        avatar_url: string;
        html_url: string;
        followers: number;
        following: number;
        public_repos: number;
      }>(`https://api.github.com/users/${encodeURIComponent(username)}`),
      fetchRestJson<RepoNode[]>(
        `https://api.github.com/users/${encodeURIComponent(username)}/repos?per_page=100&sort=updated&direction=desc`
      ),
      fetchRestJson<PublicEvent[]>(
        `https://api.github.com/users/${encodeURIComponent(username)}/events/public?per_page=30`
      ),
    ]);

    const totalStars = repos.reduce((sum, repo) => sum + repo.stargazerCount, 0);
    const languages = aggregateLanguages(repos);
    const recentRepos = repos
      .filter(repo => !repo.isFork)
      .slice(0, 6)
      .map(repo => ({
        name: repo.name,
        url: repo.url,
        description: repo.description,
        stars: repo.stargazerCount,
        updatedAt: repo.updatedAt,
        language: repo.primaryLanguage?.name ?? null,
      }));

    let pinnedRepos = recentRepos.slice(0, 4);
    let contributionStreak: number | null = null;
    let totalContributionsThisYear: number | null = null;
    let pullRequests: number | null = null;
    let commits: number | null = null;
    let repositoriesContributedTo: number | null = null;

    if (token) {
      const { from, to } = getRollingYearRange();
      const gqlResponse = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        cache: "no-store",
        body: JSON.stringify({
          query: `
            query($login: String!, $from: DateTime!, $to: DateTime!) {
              user(login: $login) {
                pinnedItems(first: 6, types: REPOSITORY) {
                  nodes {
                    ... on Repository {
                      name
                      url
                      description
                      stargazerCount
                      updatedAt
                      primaryLanguage { name color }
                    }
                  }
                }
                contributionsCollection(from: $from, to: $to) {
                  contributionCalendar {
                    totalContributions
                    weeks {
                      contributionDays {
                        date
                        contributionCount
                      }
                    }
                  }
                  totalPullRequestContributions
                  totalCommitContributions
                  totalRepositoriesWithContributedCommits
                }
              }
            }
          `,
          variables: { login: username, from, to },
        }),
      });

      if (gqlResponse.ok) {
        const gqlData = await gqlResponse.json() as {
          data?: {
            user?: {
              pinnedItems?: {
                nodes?: Array<{
                  name: string;
                  url: string;
                  description: string | null;
                  stargazerCount: number;
                  updatedAt: string;
                  primaryLanguage: { name: string; color: string | null } | null;
                }>;
              };
              contributionsCollection?: {
                contributionCalendar?: {
                  totalContributions: number;
                  weeks: Array<{ contributionDays: ContributionDay[] }>;
                };
                totalPullRequestContributions?: number;
                totalCommitContributions?: number;
                totalRepositoriesWithContributedCommits?: number;
              };
            };
          };
        };

        const pinned = gqlData.data?.user?.pinnedItems?.nodes ?? [];
        if (pinned.length) {
          pinnedRepos = pinned.map(repo => ({
            name: repo.name,
            url: repo.url,
            description: repo.description,
            stars: repo.stargazerCount,
            updatedAt: repo.updatedAt,
            language: repo.primaryLanguage?.name ?? null,
          }));
        }

        const calendar = gqlData.data?.user?.contributionsCollection?.contributionCalendar;
        if (calendar) {
          totalContributionsThisYear = calendar.totalContributions;
          const contributionDays = calendar.weeks.flatMap(week => week.contributionDays);
          contributionStreak = computeStreak(contributionDays);
        }

        pullRequests = gqlData.data?.user?.contributionsCollection?.totalPullRequestContributions ?? null;
        commits = gqlData.data?.user?.contributionsCollection?.totalCommitContributions ?? null;
        repositoriesContributedTo = gqlData.data?.user?.contributionsCollection?.totalRepositoriesWithContributedCommits ?? null;
      }
    }

    if (
      totalContributionsThisYear === null ||
      pullRequests === null ||
      commits === null ||
      repositoriesContributedTo === null
    ) {
      const fallback = await loadSearchFallback(username);
      totalContributionsThisYear = totalContributionsThisYear ?? fallback.totalContributionsThisYear;
      pullRequests = pullRequests ?? fallback.pullRequests;
      commits = commits ?? fallback.commits;
      repositoriesContributedTo = repositoriesContributedTo ?? fallback.repositoriesContributedTo;
    }

    return NextResponse.json({
      username: profile.login,
      name: profile.name ?? profile.login,
      bio: profile.bio,
      avatarUrl: profile.avatar_url,
      profileUrl: profile.html_url,
      followers: profile.followers,
      following: profile.following,
      publicRepositories: profile.public_repos,
      totalStars,
      contributionStreak,
      totalContributionsThisYear,
      pullRequests,
      commits,
      repositoriesContributedTo,
      languages,
      pinnedRepos,
      recentRepos,
      recentActivity: mapRecentActivity(events),
      hasToken: Boolean(token),
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Unable to load GitHub dashboard.",
      },
      { status: 500 }
    );
  }
}
