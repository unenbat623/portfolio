import SmoothScroll from "@/components/SmoothScroll";
import WebGLLayer from "@/components/webgl/WebGLLayer";
import TopStrip from "@/components/TopStrip";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Numbers from "@/components/Numbers";
import Experience from "@/components/Experience";
import Work from "@/components/Work";
import Stack from "@/components/Stack";
import Education from "@/components/Education";
import Brief from "@/components/Brief";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Dock from "@/components/Dock";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <WebGLLayer />

      <div className="relative z-10">
        <TopStrip />
        <Header />
        <main>
          <Hero />
          <Services />
          <Numbers />
          <Experience />
          <Work />
          <Stack />
          <Education />
          <Brief />
          <Faq />
          <Contact />
        </main>
        <Footer />
        <Dock />
      </div>
    </>
  );
}
