"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import { personal } from "@/lib/data";
import SectionHeader from "./SectionHeader";

type GitHubProfileData = {
  username: string;
  name: string | null;
  bio: string | null;
  avatarUrl: string;
  profileUrl: string;
  publicRepositories: number;
  totalContributionsThisYear: number | null;
  pullRequests: number | null;
  commits: number | null;
  repositoriesContributedTo: number | null;
};

function valueOrDash(value: number | null | undefined) {
  return value === null || value === undefined ? "-" : String(value);
}

const statItems = [
  { label: "Public Repositories", key: "publicRepositories" as const },
  { label: "Contributions (Last 12 Months)", key: "totalContributionsThisYear" as const },
  { label: "Pull Requests", key: "pullRequests" as const },
  { label: "Commits", key: "commits" as const },
  { label: "Repositories Contributed To", key: "repositoriesContributedTo" as const },
] as const;

export default function GitHubSection() {
  const [data, setData] = useState<GitHubProfileData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    async function loadProfile() {
      try {
        const response = await fetch("/api/github-dashboard", { cache: "no-store" });
        const json = (await response.json()) as GitHubProfileData & { error?: string };
        if (!response.ok) {
          throw new Error(json.error ?? "Unable to load GitHub profile.");
        }
        if (active) setData(json);
      } catch (err) {
        if (active) setError(err instanceof Error ? err.message : "Unable to load GitHub profile.");
      } finally {
        if (active) setLoading(false);
      }
    }

    void loadProfile();
    return () => {
      active = false;
    };
  }, []);

  return (
    <section id="github" className="py-24 bg-bg">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader label="Open Source" title="GitHub Profile Highlights" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          viewport={{ once: true }}
          whileHover={{ y: -6, scale: 1.01 }}
          className="bg-surface border border-border rounded-[20px] p-7 flex flex-wrap lg:flex-nowrap gap-6 items-start shadow-[0_12px_35px_rgba(0,0,0,0.08)] transition-all duration-200 hover:shadow-[0_16px_42px_rgba(0,0,0,0.11)]"
        >
          <div className="relative w-[104px] h-[104px] rounded-full overflow-hidden bg-gradient-to-br from-[#e8ddd5] to-[#d4c4b5] border-2 border-border flex items-center justify-center shrink-0">
            {loading ? (
              <span className="text-2xl font-semibold text-primary">GH</span>
            ) : data?.avatarUrl ? (
              <Image src={data.avatarUrl} alt={data.name ?? personal.githubUsername} fill sizes="104px" className="object-cover" />
            ) : (
              <span className="text-2xl font-semibold text-primary">GH</span>
            )}
          </div>

          <div className="flex-1 min-w-[200px]">
            <h3 className="font-serif text-2xl text-ink mb-1">{data?.username ?? personal.githubUsername}</h3>
            {data?.name && <p className="text-sm text-secondary mb-1">{data.name}</p>}
            {data?.bio && (
              <p
                className="text-sm text-muted mb-3 leading-[1.7] max-w-2xl"
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 2,
                  overflow: "hidden",
                }}
              >
                {data.bio}
              </p>
            )}
            {!data?.bio && (
              <p className="text-sm text-muted mb-3">Live GitHub profile data, updated automatically from GitHub.</p>
            )}
            <div className="mt-4 rounded-2xl border border-border bg-bg overflow-hidden">
              <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap">
                {statItems.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`flex-1 basis-full md:basis-1/3 lg:basis-0 px-4 py-4 text-center ${
                      index !== statItems.length - 1 ? "lg:border-r lg:border-border" : ""
                    } ${index !== statItems.length - 1 ? "border-b border-border md:border-b-0" : ""}`}
                  >
                    <strong className="block font-serif text-[2rem] text-primary leading-none">{valueOrDash(data?.[stat.key])}</strong>
                    <span className="block text-[0.65rem] uppercase tracking-[0.14em] text-muted mt-1 leading-[1.35]">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <a href={personal.github} target="_blank" rel="noopener noreferrer" className="btn-outline shrink-0 self-start lg:mt-1">
            <FiGithub size={15} /> View Profile
          </a>
        </motion.div>

        {error && (
          <div className="text-sm text-muted bg-[#fdf0e8] border border-[#f0d0b4] rounded-2xl p-4">
            {error}
          </div>
        )}
      </div>
    </section>
  );
}
