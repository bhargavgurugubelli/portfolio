import { personalInfo } from "../data/portfolio";

function SectionHeader({ label, title, desc }) {
  return (
    <div className="mb-10">
      <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#4f8eff] mb-2">{label}</p>
      <h2 className="font-syne font-extrabold text-[clamp(1.8rem,3vw,2.4rem)] text-white tracking-tight leading-tight mb-3">
        {title}
      </h2>
      {desc && <p className="text-[#7a8ba8] font-light text-base max-w-xl">{desc}</p>}
    </div>
  );
}

export { SectionHeader };

export default function About() {
  const infoItems = [
    { label: "Full Name", value: personalInfo.name },
    { label: "Date of Birth", value: personalInfo.dob },
    { label: "Location", value: personalInfo.location },
    { label: "Email", value: personalInfo.email },
    { label: "Phone", value: personalInfo.phone },
    { label: "Status", value: "Available for Work" },
  ];

  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeader
        label="Who I Am"
        title="About Me"
        desc="A passionate developer building meaningful software solutions."
      />

      {/* Bio card */}
      <div className="bg-[#111827] rounded-xl border-l-2 border-[#4f8eff] border-t border-r border-b border-white/[0.07] p-6 mb-8 text-[#7a8ba8] font-light leading-relaxed text-base">
        {personalInfo.about}
      </div>

      {/* Info grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
        {infoItems.map(({ label, value }) => (
          <div
            key={label}
            className="glow-card bg-[#111827] rounded-xl p-4"
          >
            <p className="text-[10px] font-semibold tracking-widest uppercase text-[#5c6e87] mb-1">{label}</p>
            <p className="text-white text-sm font-medium truncate">{value}</p>
          </div>
        ))}
      </div>

    </section>
  );
}
