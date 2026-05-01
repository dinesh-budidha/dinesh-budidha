import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";
import { Code, Globe, Wrench, Lightbulb } from "lucide-react";

const icons = [Code, Globe, Wrench, Lightbulb];

export const Skills = () => {
  return (
    <section id="skills" className="relative py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Skills"
          title="A focused, real-world toolkit."
          description="No buzzword soup — these are tools I've actually used to ship the projects below."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((cat, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="glass rounded-2xl p-6 transition-all hover:border-primary/40 hover:shadow-glow group"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-primary text-primary-foreground transition-transform group-hover:scale-110">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-display font-semibold">{cat.category}</h3>
                </div>
                <div className="space-y-3">
                  {cat.items.map((s) => (
                    <div key={s.name}>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="text-foreground/90">{s.name}</span>
                        <span className="font-mono text-xs text-muted-foreground">{s.level}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-primary"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
