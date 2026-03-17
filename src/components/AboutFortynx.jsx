import { SectionHeader } from "./About";
import { ShieldCheck, Code, Rocket, Server } from "lucide-react";

export default function AboutFortynx() {
  const features = [
    {
      icon: <Code size={24} />,
      title: "Web Development",
      desc: "Modern web applications using React and Django tailored for startups and SMEs.",
      color: "#4f8eff"
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Cybersecurity",
      desc: "Advanced security solutions, VAPT, and ethical hacking to protect your digital presence.",
      color: "#10b981"
    },
    {
      icon: <Rocket size={24} />,
      title: "Startup Solutions",
      desc: "High-performance architectures built to help modern enterprises scale securely.",
      color: "#8b5cf6"
    },
    {
      icon: <Server size={24} />,
      title: "SaaS Security",
      desc: "Comprehensive security measures specifically designed for cloud infrastructure.",
      color: "#ec4899"
    },
  ];

  return (
    <section id="fortynx" className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeader
        label="My Startup"
        title="FortyNx"
        desc="Cybersecurity & Web Development Experts."
      />

      <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#f97316]/10 border border-[#f97316]/20 text-[#f97316] text-xs font-semibold px-4 py-1.5 rounded-full tracking-widest uppercase">
            Founder
          </div>
          <h3 className="text-3xl font-syne font-bold text-white leading-tight">
            Building Secure & Scalable Digital Experiences
          </h3>
          <p className="text-[#7a8ba8] font-light leading-relaxed text-base">
            I am the founder of <span className="text-white font-medium">FortyNx</span>, an agency dedicated to helping businesses protect their digital presence and scale rapidly. At FortyNx, we combine top-tier software engineering with state-of-the-art security practices.
          </p>
          <p className="text-[#7a8ba8] font-light leading-relaxed text-base">
            While I lead the <strong>Full-Stack Web Development</strong> division—architecting robust Django and React systems—our dedicated cybersecurity team handles complete Vulnerability Assessments and Penetration Testing (VAPT) operations for startups, SMEs, and major enterprises globally.
          </p>
          <div className="pt-4">
            <a
              href="https://fortynx.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#111827] hover:bg-[#1f2937] text-white border border-white/10 hover:border-[#4f8eff]/50 text-sm font-medium px-8 py-3.5 rounded-xl transition-all duration-300 shadow-lg"
            >
              Explore FortyNx
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-[#111827] border border-white/[0.05] p-6 rounded-2xl relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
              {/* Background Glow */}
              <div 
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                style={{ backgroundColor: feature.color }}
              />
              
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 relative z-10"
                style={{ backgroundColor: `${feature.color}15`, color: feature.color }}
              >
                {feature.icon}
              </div>
              <h4 className="text-white font-medium mb-2 relative z-10">{feature.title}</h4>
              <p className="text-[#5c6e87] text-sm leading-relaxed relative z-10">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
