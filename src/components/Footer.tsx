import { personal } from "@/lib/data";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-ink text-white py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4">
        <p className="font-serif text-[1.1rem] opacity-90">{personal.name}</p>
        <p className="text-xs opacity-50">Designed with care</p>
        <div className="flex gap-3">
          {[
            { href: personal.github, label: "GitHub", Icon: FiGithub },
            { href: personal.linkedin, label: "LinkedIn", Icon: FiLinkedin },
            { href: `mailto:${personal.email}`, label: "Email", Icon: FiMail },
          ].map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-[34px] h-[34px] bg-white/10 border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
