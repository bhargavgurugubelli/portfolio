import { projects } from "../data/portfolio";
import { SectionHeader } from "./About";
import { ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeader
        label="What I've Built"
        title="My Projects"
        desc="Real-world applications demonstrating my skills across different domains."
      />

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="glow-card bg-[#111827] rounded-2xl p-6 relative overflow-hidden group"
          >
            {/* Top accent bar */}
            <div
              className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: `linear-gradient(90deg, ${project.accent}, transparent)` }}
            />

            {/* Bg gradient bubble */}
            <div className={`absolute top-0 right-0 w-40 h-40 rounded-full bg-gradient-to-br ${project.color} blur-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

            <div className="flex items-start justify-between mb-4 relative z-10">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                   style={{ background: `${project.accent}15`, border: `1px solid ${project.accent}30` }}>
                {project.icon}
              </div>
              <span
                className="text-xs font-semibold px-3 py-1 rounded-full"
                style={{ background: `${project.accent}15`, color: project.accent, border: `1px solid ${project.accent}25` }}
              >
                {project.category}
              </span>
            </div>

            <h3 className="font-syne font-bold text-white text-lg mb-2 relative z-10">
              {project.title}
            </h3>
            <p className="text-[#7a8ba8] text-sm leading-relaxed mb-5 font-light relative z-10">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 relative z-10">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] text-[#7a8ba8] bg-white/[0.04] px-2.5 py-1 rounded-md border border-white/[0.06]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
