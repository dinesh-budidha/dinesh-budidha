import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const Loader = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] grid place-items-center bg-background"
        >
          <div className="flex flex-col items-center gap-4">
            <div className="relative h-14 w-14">
              <div className="absolute inset-0 rounded-2xl bg-gradient-primary animate-glow-pulse" />
              <div className="absolute inset-0 grid place-items-center font-display font-bold text-primary-foreground text-2xl">
                D
              </div>
            </div>
            <div className="font-mono text-xs text-muted-foreground tracking-widest">LOADING…</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
