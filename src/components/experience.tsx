import { Briefcase, Calendar } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const experienceData = [
  {
    role: "Software Developer",
    company: "Confidential (Finance Domain)",
    period: "2022 - Present",
    description:
      "Upgraded a finance-based web application for trading and money transfers using .NET Core, Blazor, and Telerik UI. Enhanced system performance, implemented new features, and managed Azure deployments. Collaborated with cross-functional teams to modernize legacy systems and improve UX.",
  },
  {
    role: "Full-Stack Developer",
    company: "Confidential (EHS Domain)",
    period: "2019 - 2022",
    description:
      "Developed and maintained enterprise web applications in the Environment, Health, and Safety domain using ASP.NET MVC, AngularJS, and SQL Server. Built RESTful APIs, handled complex data operations, and ensured regulatory compliance through robust backend logic and dynamic UIs.",
  },
  {
    role: "Frontend Developer Intern",
    company: "Product-Based UI Themes Company",
    period: "2018",
    description:
      "Designed responsive UI themes using WordPress, Elementor, HTML, CSS, and Bootstrap. Customized client templates, modernized existing themes, and ensured pixel-perfect designs across browsers and devices.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="w-full py-20 lg:py-32 bg-section">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
              Work Experience
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
              A journey through the roles and projects that shaped my skills and
              development mindset.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {experienceData.map((exp, index) => (
              <Card
                key={index}
                className="transition-all hover:shadow-lg h-full"
              >
                <CardHeader>
                  <CardTitle className="text-xl">{exp.role}</CardTitle>
                  <CardDescription className="flex items-center gap-4 pt-1">
                    <span className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4" />
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
