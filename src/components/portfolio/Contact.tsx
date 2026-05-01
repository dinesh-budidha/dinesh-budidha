import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send, MapPin } from "lucide-react";
import { z } from "zod";
import { profile } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(80),
  email: z.string().trim().email("Enter a valid email").max(160),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
});

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.errors[0].message);
      return;
    }
    setSending(true);
    const subject = encodeURIComponent(`Portfolio contact from ${parsed.data.name}`);
    const body = encodeURIComponent(`${parsed.data.message}\n\n— ${parsed.data.name} (${parsed.data.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setTimeout(() => {
      toast.success("Opening your email client…");
      setSending(false);
    }, 400);
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Contact"
          title="Open to opportunities in AI & Software Engineering."
          description="Have a role, project, or idea? Let's talk."
        />

        <div className="mt-12 grid lg:grid-cols-5 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 glass rounded-2xl p-7 flex flex-col justify-between"
          >
            <div className="space-y-5">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-3 group">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary group-hover:bg-gradient-primary group-hover:text-primary-foreground transition">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Email</div>
                  <div className="font-medium">{profile.email}</div>
                </div>
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 group">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary group-hover:bg-gradient-primary group-hover:text-primary-foreground transition">
                  <Github size={18} />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">GitHub</div>
                  <div className="font-medium">@{profile.githubUser}</div>
                </div>
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 group">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary group-hover:bg-gradient-primary group-hover:text-primary-foreground transition">
                  <Linkedin size={18} />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">LinkedIn</div>
                  <div className="font-medium">in/dineshgoud</div>
                </div>
              </a>
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Based in</div>
                  <div className="font-medium">{profile.location}</div>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-primary/20 bg-primary/5 p-4">
              <div className="text-xs font-mono text-primary">// status</div>
              <div className="mt-1 text-sm">
                Available for internships & full-time AI / SWE roles.
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={submit}
            className="lg:col-span-3 glass rounded-2xl p-7 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-mono text-muted-foreground">NAME</label>
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  maxLength={80}
                  className="mt-1.5 w-full rounded-xl bg-input/60 border border-border px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-xs font-mono text-muted-foreground">EMAIL</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  maxLength={160}
                  className="mt-1.5 w-full rounded-xl bg-input/60 border border-border px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                  placeholder="you@company.com"
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-mono text-muted-foreground">MESSAGE</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={6}
                maxLength={1000}
                className="mt-1.5 w-full rounded-xl bg-input/60 border border-border px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition resize-none"
                placeholder="Tell me about the role or project…"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 font-semibold text-primary-foreground shadow-elevated transition hover:shadow-glow disabled:opacity-60"
            >
              <Send size={16} />
              {sending ? "Sending…" : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
