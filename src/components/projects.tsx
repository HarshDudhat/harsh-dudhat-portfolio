import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projectsData = [
  {
    title: "UI Theme Development (Internship)",
    description:
      "Designed and developed responsive web themes using WordPress, Elementor, HTML, and Bootstrap. Created custom templates, styled components, and ensured modern design standards across devices.",
    technologies: ["WordPress", "Elementor", "HTML", "CSS", "Bootstrap"],
  },
  {
    title: "EHS (Environment, Health, and Safety) Web Application",
    description:
      "Built a web application for the EHS sector using AngularJS, ASP.NET MVC, and SQL Server. Focused on full-stack development with optimized performance, backend logic, and clean UI for compliance management.",
    technologies: ["ASP.NET MVC", "AngularJS", "SQL", "ASP.NET Web API"],
  },
  {
    title: "Finance Website for Trading & Money Transfer",
    description:
      "Developed a secure and scalable trading platform using ASP.NET MVC, jQuery, Kendo UI, and SQL. Implemented real-time data integration, user-friendly UI, and deployed via Microsoft Azure. Later upgraded using .NET Core, Blazor, and Telerik.",
    technologies: [
      ".NET Core",
      "Blazor",
      "Kendo UI",
      "SQL",
      "Azure",
      "Telerik",
    ],
  },
  {
    title: "Library Management System (Personal Project)",
    description:
      "A full-featured library system developed using ASP.NET Core MVC. Includes functionalities like book borrowing/returning, due date and fine calculation, and search/filter features using SQL and Razor views.",
    technologies: [".NET Core", "ASP.NET MVC", "SQL Server", "Razor Pages"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="w-full py-20 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            My Projects
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
            A selection of my work. See how I put my skills into practice.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projectsData.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden transition-all hover:shadow-xl flex flex-col"
            >
              <CardContent className="p-6 flex-grow">
                <CardTitle className="mb-2 text-xl">{project.title}</CardTitle>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
