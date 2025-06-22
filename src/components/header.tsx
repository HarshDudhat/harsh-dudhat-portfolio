"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu, Code } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#about", label: "About Me" },
  { href: "#experience", label: "Experince" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-card shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <a
            href="#"
            className="flex items-center gap-2 font-bold text-xl text-primary"
          >
            <Code className="h-6 w-6" />
            <span>Harsh Dudhat</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-6 pt-12">
                  <a
                    href="#"
                    className="flex items-center gap-2 font-bold text-xl text-primary mb-4"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Code className="h-6 w-6" />
                    <span>Harsh Dudhat</span>
                  </a>
                  {navLinks.map((link) => (
                    <SheetClose key={link.href} asChild>
                      <a
                        href={link.href}
                        className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                      >
                        {link.label}
                      </a>
                    </SheetClose>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
