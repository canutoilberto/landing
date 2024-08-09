import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Criando Experiências Digitais Excepcionais
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Sou um designer web com paixão por criar sites belos e funcionais
              que cativam os usuários e geram resultados.
            </p>
            <Button asChild>
              <Link href="#">Confira meus trabalhos</Link>
            </Button>
          </div>
          <Image
            src="/placeholder.png"
            width={550}
            height={550}
            alt="Hero"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
          />
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Alguns dos meus projetos
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Confira alguns dos meus projetos recentes de design web que
                mostram minhas habilidades e criatividade.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[1, 2, 3].map((projectNumber) => (
              <Card key={projectNumber} className="overflow-hidden">
                <Image
                  src="/placeholder.png"
                  width={550}
                  height={310}
                  alt={`Project ${projectNumber}`}
                  className="aspect-video object-cover"
                />
                <CardHeader>
                  <CardTitle className="text-lg">
                    Project {projectNumber}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-muted-foreground">
                    {projectNumber === 1 &&
                      "A modern and responsive website for a leading tech company."}
                    {projectNumber === 2 &&
                      "A sleek and modern e-commerce website for a luxury brand."}
                    {projectNumber === 3 &&
                      "A visually stunning website for a creative agency."}
                  </p>
                  <div className="flex items-center gap-2">
                    <Button variant="link" size="sm" asChild>
                      <Link href="#">Veja o projeto</Link>
                    </Button>
                    <Button variant="link" size="sm" asChild>
                      <Link href="#">Live Site</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About Me
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              I&apos;m a passionate web designer with over 5 years of experience
              in the industry. I specialize in creating visually stunning and
              user-friendly websites that help businesses and individuals
              achieve their online goals.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <h3 className="text-lg font-bold">Skills</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>UI/UX Design</li>
                  <li>Responsive Web Design</li>
                  <li>Branding</li>
                  <li>WordPress Development</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold">Experience</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>5+ Years as a Web Designer</li>
                  <li>Worked with 20+ Clients</li>
                  <li>Launched 15+ Successful Websites</li>
                  <li>Certified in Figma and Adobe Creative Cloud</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Get in Touch
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              If you&apos;re interested in working with me or have any
              questions, please don&apos;t hesitate to reach out. I&apos;d love
              to hear from you!
            </p>
            <form className="grid gap-4">
              <Input
                type="text"
                placeholder="Nome"
                className="max-w-xxl flex-1"
              />
              <Input
                type="email"
                placeholder="Email"
                className="max-w-xxl flex-1"
              />
              <Textarea
                placeholder="Mensagem"
                className="max-w-xxl flex-1"
                rows={5}
              />
              <Button type="submit">Enviar</Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
