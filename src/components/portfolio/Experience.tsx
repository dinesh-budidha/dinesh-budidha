import { motion } from "framer-motion";
import { Award, BookOpen } from "lucide-react";
import { experience } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";

const icons = [Award, BookOpen];

export const Experience = () => {
  return (
    <section id="experience" className="relative py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Experience"
          title="Training, internships & certifications."
        />

        <div className="mt-12 relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/40 to-transparent" />

          <div className="space-y-10">
            {experience.map((e, i) => {
              const Icon = icons[i];
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={e.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`relative md:grid md:grid-cols-2 md:gap-12 ${left ? "" : "md:[&>*:first-child]:col-start-2"}`}
                >
                  <div className={`pl-12 md:pl-0 ${left ? "md:text-right md:pr-8" : "md:pl-8"}`}>
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-2 grid h-8 w-8 place-items-center rounded-full bg-gradient-primary text-primary-foreground shadow-glow">
                      <Icon size={14} />
                    </div>
                    <div className="glass rounded-2xl p-6 inline-block text-left">
                      <div className="text-xs font-mono text-primary">{e.period}</div>
                      <h3 className="mt-1 font-display text-xl font-bold">{e.title}</h3>
                      <div className="text-sm text-muted-foreground mt-0.5">{e.org}</div>
                      <p className="mt-3 text-sm text-foreground/80">{e.detail}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
