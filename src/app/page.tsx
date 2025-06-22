import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <AnimateOnScroll>
          <About />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Experience />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Skills />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Projects />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Contact />
        </AnimateOnScroll>
      </main>
      <Footer />
    </div>
  );
}
