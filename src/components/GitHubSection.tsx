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
  repositoriesContributedTo: number | null;
};

function valueOrDash(value: number | null | undefined) {
  return value === null || value === undefined ? "-" : String(value);
}

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
    <section id="github" className="pt-8 pb-24 bg-bg">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader label="Open Source" title="GitHub Profile Highlights" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          viewport={{ once: true }}
          className="bg-surface border border-border rounded-2xl p-7 flex flex-wrap gap-6 items-center mb-7 shadow-card"
        >
          <div className="relative w-[72px] h-[72px] rounded-full overflow-hidden bg-gradient-to-br from-[#e8ddd5] to-[#d4c4b5] border-2 border-border flex items-center justify-center shrink-0">
            {loading ? (
              <span className="text-xl font-semibold text-primary">GH</span>
            ) : data?.avatarUrl ? (
              <Image src={data.avatarUrl} alt={data.name ?? personal.githubUsername} fill sizes="72px" className="object-cover" />
            ) : (
              <span className="text-xl font-semibold text-primary">GH</span>
            )}
          </div>

          <div className="flex-1 min-w-[200px]">
            <h3 className="font-serif text-xl text-ink mb-1">{data?.username ?? personal.githubUsername}</h3>
            {data?.name && <p className="text-sm text-secondary mb-1">{data.name}</p>}
            {data?.bio && <p className="text-sm text-muted mb-3 leading-[1.6]">{data.bio}</p>}
            {!data?.bio && (
              <p className="text-sm text-muted mb-3">Live GitHub profile data, updated automatically from GitHub.</p>
            )}
            <div className="flex flex-wrap gap-5">
              <div className="text-center">
                <strong className="block font-serif text-xl text-primary">{valueOrDash(data?.publicRepositories)}</strong>
                <span className="text-xs text-muted">Public Repositories</span>
              </div>
              <div className="text-center">
                <strong className="block font-serif text-xl text-primary">{valueOrDash(data?.totalContributionsThisYear)}</strong>
                <span className="text-xs text-muted">Contributions this year</span>
              </div>
              <div className="text-center">
                <strong className="block font-serif text-xl text-primary">{valueOrDash(data?.pullRequests)}</strong>
                <span className="text-xs text-muted">Pull Requests</span>
              </div>
              <div className="text-center">
                <strong className="block font-serif text-xl text-primary">{valueOrDash(data?.repositoriesContributedTo)}</strong>
                <span className="text-xs text-muted">Repositories Contributed To</span>
              </div>
            </div>
          </div>

          <a href={personal.github} target="_blank" rel="noopener noreferrer" className="btn-outline shrink-0">
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
