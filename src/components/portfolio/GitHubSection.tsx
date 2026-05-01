import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Star, GitFork, ExternalLink } from "lucide-react";
import { profile } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
};

export const GitHubSection = () => {
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://api.github.com/users/${profile.githubUser}/repos?sort=updated&per_page=6`)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((data: Repo[]) => setRepos(data))
      .catch(() => setError(true));
  }, []);

  return (
    <section id="github" className="relative py-24">
      <div className="container">
        <SectionHeader
          eyebrow="GitHub"
          title="Code, commits, contributions."
          description="Live snapshot of recent repositories — where the actual work lives."
        />

        <div className="mt-10 grid lg:grid-cols-3 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-7 lg:col-span-1 flex flex-col justify-between"
          >
            <div>
              <div className="grid h-14 w-14 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
                <Github size={26} />
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold">@{profile.githubUser}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Open-source experiments, AI tooling, and full-stack builds. Follow the work in real time.
              </p>
            </div>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:shadow-glow"
            >
              <Github size={16} /> View Full GitHub
            </a>
            <img
              src={`https://ghchart.rshah.org/14e8d4/${profile.githubUser}`}
              alt="GitHub contribution graph"
              loading="lazy"
              className="mt-6 w-full opacity-80"
              onError={(e) => ((e.currentTarget.style.display = "none"))}
            />
          </motion.div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4 content-start">
            {(repos ?? Array.from({ length: 4 })).slice(0, 4).map((r: any, i: number) => (
              <motion.a
                key={r?.id ?? i}
                href={r?.html_url ?? profile.github}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="glass rounded-2xl p-5 group transition-all hover:border-primary/50 hover:shadow-glow hover:-translate-y-1"
              >
                {r ? (
                  <>
                    <div className="flex items-start justify-between">
                      <h4 className="font-display font-semibold text-foreground group-hover:text-primary transition">
                        {r.name}
                      </h4>
                      <ExternalLink size={14} className="text-muted-foreground" />
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2 min-h-[2.5rem]">
                      {r.description || "No description provided."}
                    </p>
                    <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground font-mono">
                      {r.language && (
                        <span className="flex items-center gap-1.5">
                          <span className="h-2 w-2 rounded-full bg-primary" /> {r.language}
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <Star size={12} /> {r.stargazers_count}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork size={12} /> {r.forks_count}
                      </span>
                    </div>
                  </>
                ) : (
                  <div className="space-y-3">
                    <div className="h-4 w-32 rounded bg-muted animate-pulse" />
                    <div className="h-3 w-full rounded bg-muted animate-pulse" />
                    <div className="h-3 w-2/3 rounded bg-muted animate-pulse" />
                  </div>
                )}
              </motion.a>
            ))}
            {error && (
              <div className="sm:col-span-2 glass rounded-2xl p-5 text-sm text-muted-foreground">
                Couldn't reach the GitHub API right now — check the profile directly.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
