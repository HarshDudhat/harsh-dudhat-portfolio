import { Button } from "@/components/ui/button";
import { ArrowDown, FileText } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="w-full h-screen min-h-[600px] flex items-center justify-center bg-background"
    >
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl font-headline bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Full-Stack .NET Developer
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Hey, I’m Harsh — a curious problem-solver who turns coffee and C#
            into clean, efficient code. I specialize in building reliable web
            apps using .NET Core, Blazor, and Azure.
          </p>
          <p className="text-base md:text-lg text-muted-foreground">
            I enjoy creating intuitive digital experiences that just make sense
            — whether it’s modernizing enterprise systems or crafting smooth
            user interfaces from scratch.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <a href="#projects">
                View My Work
                <ArrowDown className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">
                Contact Me
                <FileText className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
