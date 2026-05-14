import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Brands } from "@/components/sections/Brands";
import { Services } from "@/components/sections/Services";
import { Websites } from "@/components/sections/Websites";
import { Projects } from "@/components/sections/Projects";
import { MobileApps } from "@/components/sections/MobileApps";
import { VideoAds } from "@/components/sections/VideoAds";
import { ContentCreation } from "@/components/sections/ContentCreation";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-main">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <Brands />
      <section id="services">
        <Services />
      </section>
      <section id="websites">
        <Websites />
        <Projects />
      </section>
      <section id="apps">
        <MobileApps />
      </section>
      <section id="content">
        <VideoAds />
        <ContentCreation />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </main>
  );
}
