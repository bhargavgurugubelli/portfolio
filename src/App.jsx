import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import AboutFortynx from "./components/AboutFortynx";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import TrustedCompanies from "./components/TrustedCompanies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function Divider() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#080c10] relative">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-[#4f8eff]/[0.04] blur-[120px]" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-[#00e5c0]/[0.03] blur-[120px]" />
      </div>
      <Navbar />
      <Hero />
      <Divider />
      <About />
      <Divider />
      <AboutFortynx />
      <Divider />
      <Skills />
      <Divider />
      <Services />
      <Divider />
      <Projects />
      <Divider />
      <TrustedCompanies />
      <Divider />
      <Contact />
      <Footer />
    </div>
  );
}
