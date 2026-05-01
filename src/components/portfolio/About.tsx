import { motion } from "framer-motion";
import { GraduationCap, Brain, Code2 } from "lucide-react";
import { about } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";

const icons = [GraduationCap, Brain, Code2];

export const About = () => {
  return (
    <section id="about" className="relative py-24">
      <div className="container">
        <SectionHeader eyebrow="About" title="Engineer first. Builder always." />

        <div className="grid lg:grid-cols-5 gap-10 items-start mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <p className="text-xl sm:text-2xl text-foreground/90 leading-relaxed">
              {about.intro}
            </p>
            <p className="mt-6 text-muted-foreground">
              I care about <span className="text-primary">measurable impact</span> — clean
              architecture, honest evaluation of AI outputs, and UIs that feel fast. Currently
              focused on full-stack systems, LLM tooling, and shipping things people actually use.
            </p>
          </motion.div>

          <div className="lg:col-span-2 space-y-3">
            {about.highlights.map((h, i) => {
              const Icon = icons[i];
              return (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-2xl p-5 flex items-center gap-4 transition-all hover:border-primary/40 hover:shadow-glow"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
                    <Icon size={20} />
                  </div>
                  <div>
                    <div className="font-display font-semibold">{h.label}</div>
                    <div className="text-sm text-muted-foreground">{h.detail}</div>
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
