import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "github", label: "GitHub" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const Navbar = () => {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const offsets = sections.map((s) => {
        const el = document.getElementById(s.id);
        return { id: s.id, top: el ? el.getBoundingClientRect().top : Infinity };
      });
      const current = offsets.filter((o) => o.top <= 120).pop();
      if (current) setActive(current.id);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div
        className={cn(
          "container flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300",
          scrolled ? "glass-strong shadow-card" : ""
        )}
      >
        <button onClick={() => go("home")} className="flex items-center gap-2 font-display font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-primary text-primary-foreground">
            D
          </span>
          <span className="hidden sm:inline text-gradient">Dinesh Goud</span>
        </button>

        <nav className="hidden md:flex items-center gap-1">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => go(s.id)}
              className={cn(
                "relative px-3 py-1.5 text-sm font-medium transition-colors rounded-lg",
                active === s.id ? "text-primary" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {s.label}
              {active === s.id && (
                <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-primary" />
              )}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="grid h-9 w-9 place-items-center rounded-lg border border-border/60 bg-card/40 backdrop-blur transition hover:border-primary/50 hover:text-primary"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            className="md:hidden grid h-9 w-9 place-items-center rounded-lg border border-border/60 bg-card/40"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="container md:hidden mt-2">
          <div className="glass-strong rounded-2xl p-3 flex flex-col">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => go(s.id)}
                className={cn(
                  "text-left px-4 py-2 rounded-lg text-sm font-medium",
                  active === s.id ? "text-primary bg-primary/10" : "text-muted-foreground"
                )}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
