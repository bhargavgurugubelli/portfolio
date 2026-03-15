import { certifications } from "../data/portfolio";
import { SectionHeader } from "./About";

export default function Certifications() {
  return (
    <section id="certifications" className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeader
        label="My Achievements"
        title="Certifications"
        desc="Courses and credentials that reflect my dedication to learning and growth."
      />

      <div className="grid md:grid-cols-2 gap-5">
        {certifications.map((cert) => (
          <div
            key={cert.title}
            className="glow-card bg-[#111827] rounded-2xl p-5 flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-[#4f8eff]/[0.08] border border-[#4f8eff]/20 flex items-center justify-center text-2xl flex-shrink-0">
              {cert.icon}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-syne font-bold text-white text-sm leading-snug">{cert.title}</p>
              <p className="text-[#7a8ba8] text-xs mt-0.5">{cert.issuer}</p>
            </div>
            <div className="flex-shrink-0 text-right">
              <span className="text-[10px] font-semibold text-[#4f8eff] bg-[#4f8eff]/10 border border-[#4f8eff]/20 px-2.5 py-1 rounded-full whitespace-nowrap">
                {cert.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
