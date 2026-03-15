import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle } from "lucide-react";
import { personalInfo } from "../data/portfolio";
import { SectionHeader } from "./About";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Phone, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: MessageCircle, label: "WhatsApp", value: personalInfo.phone, href: personalInfo.whatsapp },
    { icon: MapPin, label: "Location", value: personalInfo.location, href: "#" },
  ];

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeader
        label="Get In Touch"
        title="Contact Me"
        desc="Let's connect to discuss tech, projects, or collaboration opportunities."
      />

      <div className="grid md:grid-cols-[1fr_1.4fr] gap-8">
        {/* Left info panel */}
        <div className="space-y-4">
          {contactInfo.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              className="glow-card bg-[#111827] rounded-xl p-5 flex items-center gap-4 group block"
            >
              <div className="w-10 h-10 rounded-lg bg-[#4f8eff]/[0.08] border border-[#4f8eff]/20 flex items-center justify-center text-[#4f8eff] group-hover:bg-[#4f8eff]/15 transition-colors flex-shrink-0">
                <Icon size={17} />
              </div>
              <div>
                <p className="text-[10px] font-semibold tracking-widest uppercase text-[#5c6e87] mb-0.5">{label}</p>
                <p className="text-white text-sm font-medium">{value}</p>
              </div>
            </a>
          ))}

          {/* Socials */}
          <div className="glow-card bg-[#111827] rounded-xl p-5">
            <p className="text-[10px] font-semibold tracking-widest uppercase text-[#5c6e87] mb-3">Find Me Online</p>
            <div className="flex gap-3">
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
                  className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.07] hover:border-[#4f8eff]/40 flex items-center justify-center text-[#7a8ba8] hover:text-[#4f8eff] transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Availability banner */}
          <div className="rounded-xl border border-[#00e5c0]/20 bg-[#00e5c0]/[0.04] p-4 text-sm text-[#00e5c0] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00e5c0] animate-pulse flex-shrink-0" />
            I'm actively looking for freelance and full-time opportunities.
          </div>
        </div>

        {/* Right — form */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#111827] rounded-2xl border border-white/[0.07] p-7 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { name: "name", label: "Your Name", placeholder: "John Doe", type: "text" },
              { name: "email", label: "Email Address", placeholder: "john@example.com", type: "email" },
            ].map(({ name, label, placeholder, type }) => (
              <div key={name}>
                <label className="block text-[11px] font-semibold tracking-widest uppercase text-[#5c6e87] mb-2">
                  {label}
                </label>
                <input
                  type={type}
                  name={name}
                  required
                  value={form[name]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className="w-full bg-[#080c10] border border-white/[0.08] focus:border-[#4f8eff]/50 rounded-lg px-4 py-2.5 text-white text-sm placeholder-[#5c6e87] outline-none transition-colors duration-200"
                />
              </div>
            ))}
          </div>

          <div>
            <label className="block text-[11px] font-semibold tracking-widest uppercase text-[#5c6e87] mb-2">
              Message
            </label>
            <textarea
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project or opportunity..."
              className="w-full bg-[#080c10] border border-white/[0.08] focus:border-[#4f8eff]/50 rounded-lg px-4 py-2.5 text-white text-sm placeholder-[#5c6e87] outline-none transition-colors duration-200 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-[#4f8eff] hover:bg-[#6ea8ff] text-white font-medium text-sm py-3 rounded-lg transition-all duration-200 shadow-[0_0_24px_rgba(79,142,255,0.25)] hover:shadow-[0_0_32px_rgba(79,142,255,0.4)] hover:-translate-y-0.5"
          >
            {sent ? "Message Sent! ✓" : (
              <>
                <Send size={15} />
                Send Message
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
