import { Github, Linkedin, Mail, MapPin, ArrowDown } from "lucide-react";
import { personalInfo } from "../data/portfolio";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 pb-16 px-6 overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute top-[-120px] right-[-80px] w-[600px] h-[600px] rounded-full bg-[#4f8eff]/[0.07] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-[-100px] w-[400px] h-[400px] rounded-full bg-[#00e5c0]/[0.05] blur-[100px] pointer-events-none" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(79,142,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(79,142,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-[1fr_300px] gap-12 items-center relative z-10">
        {/* Left */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#4f8eff]/[0.08] border border-[#4f8eff]/20 text-[#4f8eff] text-xs font-semibold px-4 py-1.5 rounded-full tracking-widest uppercase mb-6 animate-[fadeUp_0.6s_ease_both]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00e5c0] animate-[pulseDot_2s_infinite]" />
            {personalInfo.available ? "Open to Work" : "Not Available"}
          </div>

          {/* Name */}
          <h1 className="font-syne font-extrabold text-[clamp(1.8rem,6vw,4rem)] leading-[1.08] tracking-tight text-white mb-4 animate-[fadeUp_0.7s_0.1s_ease_both]">
            Hi, I'm{" "}
            <span className="text-gradient">
              {personalInfo.shortName}
            </span>
          </h1>

          {/* Role */}
          <p className="text-xl text-[#7a8ba8] font-light mb-3 animate-[fadeUp_0.7s_0.15s_ease_both]">
            {personalInfo.title}
          </p>

          {/* Tagline */}
          <p className="text-base text-[#5c6e87] max-w-xl leading-relaxed mb-8 animate-[fadeUp_0.7s_0.2s_ease_both]">
            {personalInfo.tagline}
          </p>

          {/* Location */}
          <div className="flex items-center gap-1.5 text-[#5c6e87] text-sm mb-8 animate-[fadeUp_0.7s_0.25s_ease_both]">
            <MapPin size={14} className="text-[#4f8eff]" />
            {personalInfo.location}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-10 animate-[fadeUp_0.7s_0.3s_ease_both]">
            <a
              href="#contact"
              className="bg-[#4f8eff] hover:bg-[#6ea8ff] text-white text-sm font-medium px-6 py-3 rounded-lg transition-all duration-200 shadow-[0_0_24px_rgba(79,142,255,0.3)] hover:shadow-[0_0_32px_rgba(79,142,255,0.45)] hover:-translate-y-0.5"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="bg-transparent text-[#e8edf5] hover:text-[#4f8eff] text-sm font-medium px-6 py-3 rounded-lg border border-white/10 hover:border-[#4f8eff]/40 transition-all duration-200 hover:-translate-y-0.5"
            >
              View Projects
            </a>
          </div>

          {/* Socials */}
          <div className="flex gap-4 animate-[fadeUp_0.7s_0.35s_ease_both]">
            {[
              { icon: Github, href: personalInfo.github, label: "GitHub" },
              { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                title={label}
                className="w-10 h-10 rounded-lg bg-[#111827] border border-white/[0.07] hover:border-[#4f8eff]/40 flex items-center justify-center text-[#7a8ba8] hover:text-[#4f8eff] transition-all duration-200 hover:-translate-y-0.5"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        {/* Right — Avatar Card */}
        <div className="hidden md:flex justify-center animate-[fadeUp_0.8s_0.2s_ease_both]">
          <div className="relative">
            <div className="w-64 h-72 rounded-2xl bg-[#111827] border border-white/[0.07] flex flex-col items-center justify-center gap-3 shadow-[0_30px_80px_rgba(0,0,0,0.5)] relative overflow-hidden">
              {/* Decorative accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#4f8eff] to-[#00e5c0]" />

              {/* Big faded initials */}
              <span className="absolute font-syne font-extrabold text-[7rem] leading-none text-[#4f8eff]/[0.06] select-none pointer-events-none">
                BG
              </span>

              {/* Avatar circle */}
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#4f8eff]/25 to-[#00e5c0]/15 border-2 border-[#4f8eff]/30 flex items-center justify-center text-5xl z-10">
                👨‍💻
              </div>

              <div className="z-10 text-center">
                <p className="font-syne font-bold text-white text-base">Bhargavkrishna</p>
                <p className="text-[#00e5c0] text-xs mt-0.5 tracking-wide">Full Stack Developer</p>
                <p className="text-[#5c6e87] text-xs mt-0.5">Hyderabad, India</p>
              </div>

              {/* Stats row */}
              <div className="z-10 flex gap-5 mt-2 text-center">
                {[["4+", "Projects"], ["3+", "Certs"], ["2+", "Yrs Exp"]].map(([num, label]) => (
                  <div key={label}>
                    <p className="font-syne font-bold text-white text-sm">{num}</p>
                    <p className="text-[#5c6e87] text-[10px]">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Status pill */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#0e1520] border border-[#00e5c0]/30 text-[#00e5c0] text-xs px-4 py-1.5 rounded-full shadow-lg">
              ✦ Available for Freelance
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[#5c6e87] hover:text-[#4f8eff] transition-colors text-xs"
      >
        <span className="tracking-widest uppercase text-[10px]">Scroll</span>
        <ArrowDown size={14} className="animate-bounce" />
      </a>
    </section>
  );
}
