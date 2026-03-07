import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import Projects from '@/components/Projects';
import Sectors from '@/components/Sectors';
import FirstNations from '@/components/FirstNations';
import CtaBand from '@/components/CtaBand';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <WhyUs />
      <Projects />
      <Sectors />
      <FirstNations />
      <CtaBand />
      <Contact />
      <Footer />
    </>
  );
}
