import { services } from "../data/portfolio";
import { SectionHeader } from "./About";

export default function Services() {
  return (
    <section id="services" className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeader
        label="What I Offer"
        title="Services"
        desc="Areas where I can help you build and ship real software."
      />
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
        {services.map((svc, i) => (
          <div
            key={svc.title}
            className="glow-card bg-[#111827] rounded-2xl p-6 flex flex-col gap-4"
          >
            <div className="w-11 h-11 rounded-xl bg-[#4f8eff]/[0.08] border border-[#4f8eff]/20 flex items-center justify-center text-2xl">
              {svc.icon}
            </div>
            <div>
              <p className="font-syne font-bold text-white text-sm mb-1">{svc.title}</p>
              <p className="text-[#7a8ba8] text-xs font-light leading-relaxed">{svc.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
