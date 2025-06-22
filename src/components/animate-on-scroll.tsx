"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type AnimateOnScrollProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function AnimateOnScroll({ children, className, delay = 0 }: AnimateOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
            observer.unobserve(element);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-1000 ease-in-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        className
      )}
    >
      {children}
    </div>
  );
}
