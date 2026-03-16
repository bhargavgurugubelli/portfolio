import { trustedCompanies } from "../data/portfolio";
import { SectionHeader } from "./About";

export default function TrustedCompanies() {
  return (
    <section id="trusted-companies" className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeader
        label="Trusted By"
        title="Companies I've Worked With"
        desc="Past projects and collaborations that demonstrate real-world impact."
      />

      <div className="md:grid md:grid-cols-3 lg:grid-cols-6 md:gap-6 hidden md:block">
        {trustedCompanies.map((company) => (
          <div key={company.name} className="flex items-center justify-center">
            <div className="w-28 h-28 md:w-32 md:h-32 flex items-center justify-center rounded-2xl bg-[#0b1220] border border-white/[0.07] overflow-hidden">
              {company.image ? (
                <img
                  src={company.image}
                  alt={company.name}
                  className="w-full h-full object-contain"
                />
              ) : (
                <span className="text-4xl">{company.logo}</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile horizontal scroll */}
      <div className="md:hidden overflow-x-auto pb-4">
        <div className="flex gap-6 px-2 min-w-max">
          {trustedCompanies.map((company) => (
            <div key={company.name} className="flex items-center justify-center flex-shrink-0">
              <div className="w-28 h-28 flex items-center justify-center rounded-2xl bg-[#0b1220] border border-white/[0.07] overflow-hidden">
                {company.image ? (
                  <img
                    src={company.image}
                    alt={company.name}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <span className="text-4xl">{company.logo}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}