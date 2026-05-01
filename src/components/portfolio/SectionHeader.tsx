import { motion } from "framer-motion";

export const SectionHeader = ({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
    className={align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-3xl"}
  >
    <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-mono text-primary">
      <span className="h-1.5 w-1.5 rounded-full bg-primary animate-glow-pulse" />
      {eyebrow}
    </div>
    <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold tracking-tight">
      {title}
    </h2>
    {description && (
      <p className="mt-4 text-muted-foreground text-lg">{description}</p>
    )}
  </motion.div>
);
