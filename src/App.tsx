
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { Sponsors } from "./components/Sponsors";
import { Pricing } from "./components/Pricing";
import { Cta } from "./components/Cta";
import { Smm } from "./components/Smm";
import { Marketing } from "./components/Marketing";
import { PersonalBrand } from "./components/Personal";
import { TargetAdvertising } from "./components/Target";



function App() {
  return (
    <>
      <Navbar />

      <section id="boshsahifa" className="scroll-mt-16">
        <Hero />
      </section>

      <section id="xizmatlar" className="scroll-mt-16">
        <Services />
      </section>
       <Sponsors/>
       <Smm/>
       <Marketing/>
       <PersonalBrand/>
       <TargetAdvertising/>
      <section id="narxlar" className="scroll-mt-16">
        <Pricing/>
      </section>

      <section id="aloqa" className="scroll-mt-16">
        <Cta/>
      </section>
      
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;

