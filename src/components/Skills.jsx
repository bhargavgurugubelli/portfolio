import { skills } from "../data/portfolio";
import { SectionHeader } from "./About";

function SkillBar({ name, proficiency }) {
  const getProficiencyColor = (level) => {
    switch (level) {
      case "Expert":
        return "bg-green-500/10 border-green-500/30 text-green-400";
      case "Advanced":
        return "bg-blue-500/10 border-blue-500/30 text-blue-400";
      case "Intermediate":
        return "bg-yellow-500/10 border-yellow-500/30 text-yellow-400";
      case "Beginner":
        return "bg-gray-500/10 border-gray-500/30 text-gray-400";
      default:
        return "bg-[#4f8eff]/[0.08] border-[#4f8eff]/20 text-[#4f8eff]";
    }
  };

  return (
    <div className="flex items-center justify-between bg-[#111827] border border-white/[0.07] rounded-lg px-3 py-2 mb-2 mr-2 transition-all duration-200 hover:border-[#4f8eff]/35">
      <span className="text-[#c8d4e8] font-medium text-sm">{name}</span>
      <span className={`text-xs px-2 py-0.5 rounded-full border ${getProficiencyColor(proficiency)}`}>
        {proficiency}
      </span>
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
            <h3 className="font-syne font-bold text-white flex items-center gap-2 mb-4">
              <span className="text-xl">{group.icon}</span>
              {group.category}
            </h3>
            <div className="space-y-1">
              {group.items.map((s) => (
                <SkillBar key={s.name} name={s.name} proficiency={s.proficiency} />
              ))}
            </div>
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
