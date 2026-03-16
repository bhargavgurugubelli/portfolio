import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { personalInfo } from "../data/portfolio";

const links = ["About", "Skills", "Projects", "Trusted Companies", "Certifications", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080c10]/90 backdrop-blur-xl border-b border-white/[0.05]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="font-syne font-extrabold text-lg tracking-tight">
          <span className="text-white">BG</span>
          <span className="text-[#4f8eff]">.</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-[#7a8ba8] hover:text-[#4f8eff] text-sm font-medium tracking-wide transition-colors duration-200"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={`mailto:${personalInfo.email}`}
          className="hidden md:inline-flex items-center gap-2 bg-[#4f8eff]/10 hover:bg-[#4f8eff]/20 border border-[#4f8eff]/25 text-[#4f8eff] text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200"
        >
          Hire Me
        </a>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#7a8ba8] hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#0e1520] border-t border-white/[0.05] px-6 py-4">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block py-3 text-[#7a8ba8] hover:text-[#4f8eff] text-sm font-medium border-b border-white/[0.05] transition-colors"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href={`mailto:${personalInfo.email}`}
            className="block mt-4 text-center bg-[#4f8eff]/10 border border-[#4f8eff]/25 text-[#4f8eff] text-sm font-medium px-4 py-2.5 rounded-lg"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
