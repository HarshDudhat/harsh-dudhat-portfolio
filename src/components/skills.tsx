import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code2, Database, Cloud, Palette, Laptop, Globe } from "lucide-react";

const skillsData = [
  { name: "C# & .NET Core", level: 95, Icon: Code2 },
  { name: "ASP.NET MVC & Web API", level: 90, Icon: Code2 },
  { name: "Blazor", level: 80, Icon: Laptop },
  { name: "SQL Server", level: 90, Icon: Database },
  { name: "Microsoft Azure", level: 85, Icon: Cloud },
  { name: "AngularJS", level: 75, Icon: Globe },
  { name: "JavaScript & jQuery", level: 80, Icon: Globe },
  { name: "Kendo UI & Telerik", level: 85, Icon: Palette },
  { name: "HTML, CSS, Bootstrap", level: 95, Icon: Palette },
];

export function Skills() {
  return (
    <section id="skills" className="w-full py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            Technical Skills
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
            A summary of my technical proficiency. I&apos;m always learning and
            expanding my skillset.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillsData.map(({ name, level, Icon }) => (
            <Card
              key={name}
              className="transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg font-medium">{name}</CardTitle>
                <Icon className="h-6 w-6 text-accent" />
              </CardHeader>
              <CardContent>
                <Progress
                  value={level}
                  aria-label={`${name} proficiency ${level}%`}
                />
                <p className="text-xs text-muted-foreground mt-2 text-right">
                  {level}% Proficient
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
