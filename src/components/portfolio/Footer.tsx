import { profile } from "@/data/portfolio";
import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => (
  <footer className="border-t border-border/50 py-10 mt-10">
    <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} {profile.name}. Built with React, Tailwind & care.
      </div>
      <div className="flex items-center gap-3">
        <a href={`mailto:${profile.email}`} className="grid h-9 w-9 place-items-center rounded-lg border border-border hover:border-primary/50 hover:text-primary transition">
          <Mail size={15} />
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-lg border border-border hover:border-primary/50 hover:text-primary transition">
          <Github size={15} />
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-lg border border-border hover:border-primary/50 hover:text-primary transition">
          <Linkedin size={15} />
        </a>
      </div>
    </div>
  </footer>
);
