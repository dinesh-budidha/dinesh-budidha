import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Github, Sparkles, ArrowUpRight, Check } from "lucide-react";
import { projects } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";
import { cn } from "@/lib/utils";

const filters = ["All", "AI", "Web", "Data"] as const;

export const Projects = () => {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Projects"
          title="Selected work that ships."
          description="Each project below is a real, working build — code, architecture, and outcomes."
        />

        <div className="mt-10 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all border",
                filter === f
                  ? "bg-gradient-primary text-primary-foreground border-transparent shadow-glow"
                  : "border-border bg-card/40 text-muted-foreground hover:text-foreground hover:border-primary/40"
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid lg:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.article
                key={p.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative glass rounded-2xl p-7 overflow-hidden transition-all hover:border-primary/50 hover:shadow-elevated hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-[0.04] transition-opacity" />
                <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-mono text-primary">/ {p.category.toLowerCase()}</span>
                      {p.badge && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-gradient-primary px-2.5 py-0.5 text-[11px] font-semibold text-primary-foreground">
                          <Sparkles size={11} /> {p.badge}
                        </span>
                      )}
                    </div>
                    <ArrowUpRight
                      size={20}
                      className="text-muted-foreground transition-all group-hover:text-primary group-hover:rotate-45"
                    />
                  </div>

                  <h3 className="font-display text-2xl font-bold leading-tight">{p.title}</h3>
                  <p className="mt-2 text-muted-foreground">{p.description}</p>

                  <ul className="mt-5 space-y-2">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <Check size={15} className="mt-0.5 text-primary shrink-0" />
                        <span className="text-foreground/80">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-border/60 bg-muted/30 px-2 py-1 text-[11px] font-mono text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:shadow-glow"
                      >
                        <ExternalLink size={14} /> Live Demo
                      </a>
                    )}
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card/40 px-4 py-2 text-sm font-medium transition hover:border-primary/50 hover:text-primary"
                      >
                        <Github size={14} /> GitHub
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
