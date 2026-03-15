import { skills } from "../data/portfolio";
import { SectionHeader } from "./About";

function SkillBar({ name, level }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between text-sm mb-1.5">
        <span className="text-[#c8d4e8] font-medium">{name}</span>
        <span className="text-[#7a8ba8]">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#4f8eff] to-[#00e5c0] skill-fill"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

const techStack = [
  "React", "Django", "Flutter", "Python", "JavaScript", "CSS3",
  "HTML5", "SQL", "Vite", "Tailwind CSS", "REST API", "Git",
  "Machine Learning", "Image Processing", "Figma (Basic)",
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeader
        label="What I Know"
        title="My Skills"
        desc="A snapshot of my technical strengths across web, mobile, and ML."
      />

      <div className="grid md:grid-cols-3 gap-6 mb-14">
        {skills.map((group) => (
          <div
            key={group.category}
            className="glow-card bg-[#111827] rounded-2xl p-6"
          >
            <h3 className="font-syne font-bold text-white flex items-center gap-2 mb-5">
              <span className="text-xl">{group.icon}</span>
              {group.category}
            </h3>
            {group.items.map((s) => (
              <SkillBar key={s.name} name={s.name} level={s.level} />
            ))}
          </div>
        ))}
      </div>

      {/* Tech tag cloud */}
      <div>
        <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#4f8eff] mb-5">Also Familiar With</p>
        <div className="flex flex-wrap gap-2.5">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="bg-[#111827] border border-white/[0.07] hover:border-[#4f8eff]/35 text-[#7a8ba8] hover:text-[#4f8eff] text-sm px-4 py-1.5 rounded-full transition-all duration-200 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
