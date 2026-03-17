import { personalInfo } from "../data/portfolio";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.05] bg-[#080c10]">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div>
          <span className="font-syne font-extrabold text-lg text-white">BG</span>
          <span className="text-[#4f8eff]">.</span>
          <p className="text-[#5c6e87] text-xs mt-1">Full Stack Developer & AI Engineer</p>
        </div>

        {/* Links */}
        <nav className="flex gap-6 text-xs text-[#5c6e87]">
          {["About", "FortyNx", "Skills", "Projects", "Trusted Companies", "Contact"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="hover:text-[#4f8eff] transition-colors"
            >
              {l}
            </a>
          ))}
        </nav>

        {/* Socials */}
        <div className="flex items-center gap-3">
          {[
            { icon: Github, href: personalInfo.github },
            { icon: Linkedin, href: personalInfo.linkedin },
            { icon: Mail, href: `mailto:${personalInfo.email}` },
          ].map(({ icon: Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.07] hover:border-[#4f8eff]/40 flex items-center justify-center text-[#7a8ba8] hover:text-[#4f8eff] transition-all duration-200"
            >
              <Icon size={14} />
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-white/[0.04] py-4 text-center text-[#3a4a60] text-xs flex items-center justify-center gap-1">
        © {new Date().getFullYear()} Bhargavkrishna Gurugubelli
      
      </div>
    </footer>
  );
}
