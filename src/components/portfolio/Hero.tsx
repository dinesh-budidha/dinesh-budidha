import { motion } from "framer-motion";
import { ArrowRight, Github, Sparkles } from "lucide-react";
import { profile } from "@/data/portfolio";
import { ParticleField } from "./ParticleField";

export const Hero = () => {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-24">
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg" />
      <ParticleField />
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/20 blur-3xl animate-blob" />
      <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-secondary/20 blur-3xl animate-blob [animation-delay:2s]" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-primary mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Open to AI & Software Engineering roles
          </motion.div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="block"
            >
              {profile.name}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="block text-gradient"
            >
              {profile.subRole}
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-6 max-w-2xl text-lg sm:text-xl text-muted-foreground"
          >
            {profile.tagline}.{" "}
            <span className="text-foreground/80">
              Computer Science student shipping production-grade AI & web projects.
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <button
              onClick={() => go("projects")}
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3.5 font-medium text-primary-foreground shadow-elevated transition-all duration-300 hover:scale-[1.02] hover:shadow-glow"
            >
              <Sparkles size={18} />
              View Projects
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl glass px-6 py-3.5 font-medium transition-all duration-300 hover:border-primary/50 hover:scale-[1.02]"
            >
              <Github size={18} />
              GitHub Profile
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-16 grid grid-cols-3 max-w-md gap-6"
          >
            {[
              { k: "3+", v: "Real Projects" },
              { k: "AI/LLM", v: "Specialization" },
              { k: "Full-Stack", v: "Capability" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-2xl font-bold text-gradient">{s.k}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
