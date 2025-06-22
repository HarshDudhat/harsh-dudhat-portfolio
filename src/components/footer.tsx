import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-primary-foreground border-t">
      <div className="container mx-auto px-4 md:px-6 py-6 flex flex-col sm:flex-row items-center justify-between">
        <p className="text-sm text-muted-foreground mb-4 sm:mb-0">
          © {new Date().getFullYear()} Harsh Dudhat. All rights reserved.
        </p>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://github.com/HarshDudhat/" // <-- Replace with actual username
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://linkedin.com/in/harsh-dudhat-908a581b4"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="mailto:dudhatharsh2701@gmail.com" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </Button>

          <Button variant="ghost" size="icon" asChild>
            <a href="/Harsh_Resume.pdf" download aria-label="Resume">
              <FileText className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
