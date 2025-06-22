import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export function Contact() {
  return (
    <section id="contact" className="w-full py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-2xl">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
                Get in Touch
              </CardTitle>
              <CardDescription className="md:text-xl">
                Have a project in mind or just want to connect? I&apos;d love to
                hear from you.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground text-lg">
                Feel free to reach out to me directly at:
              </p>
              <a
                href="mailto:dudhatharsh2701@gmail.com"
                className="text-primary text-lg font-medium hover:underline break-all"
              >
                dudhatharsh2701@gmail.com
              </a>
              <p className="text-sm text-muted-foreground">
                I typically respond within a day.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
