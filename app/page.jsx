import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Criando Experiências Digitais Excepcionais
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Sou um designer web com paixão por criar sites belos e funcionais
              que cativam os usuários e geram resultados.
            </p>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Confira meus trabalhos
            </Link>
          </div>
          <Image
            src="/placeholder.png"
            width="550"
            height="550"
            alt="Hero"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
          />
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
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
            <Link
              href="#"
              className="group grid gap-4 bg-background rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              prefetch={false}
            >
              <Image
                src="/placeholder.png"
                width="550"
                height="310"
                alt="Project 1"
                className="aspect-video object-cover"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-lg font-bold group-hover:underline">
                  Projeto 1
                </h3>
                <p className="text-muted-foreground">
                  A modern and responsive website for a leading tech company.
                </p>
                <div className="flex items-center gap-2">
                  <Button variant="link" size="sm">
                    Veja o projeto
                  </Button>
                  <Link
                    href="#"
                    className="text-sm font-medium text-primary hover:underline underline-offset-4"
                    prefetch={false}
                  >
                    Live Site
                  </Link>
                </div>
              </div>
            </Link>
            <Link
              href="#"
              className="group grid gap-4 bg-background rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              prefetch={false}
            >
              <Image
                src="/placeholder.png"
                width="550"
                height="310"
                alt="Project 2"
                className="aspect-video object-cover"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-lg font-bold group-hover:underline">
                  Project 2
                </h3>
                <p className="text-muted-foreground">
                  A sleek and modern e-commerce website for a luxury brand.
                </p>
                <div className="flex items-center gap-2">
                  <Button variant="link" size="sm">
                    Veja o projeto
                  </Button>
                  <Link
                    href="#"
                    className="text-sm font-medium text-primary hover:underline underline-offset-4"
                    prefetch={false}
                  >
                    Live Site
                  </Link>
                </div>
              </div>
            </Link>
            <Link
              href="#"
              className="group grid gap-4 bg-background rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              prefetch={false}
            >
              <Image
                src="/placeholder.png"
                width="550"
                height="310"
                alt="Project 3"
                className="aspect-video object-cover"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-lg font-bold group-hover:underline">
                  Project 3
                </h3>
                <p className="text-muted-foreground">
                  A visually stunning website for a creative agency.
                </p>
                <div className="flex items-center gap-2">
                  <Button variant="link" size="sm">
                    Veja o projeto
                  </Button>
                  <Link
                    href="#"
                    className="text-sm font-medium text-primary hover:underline underline-offset-4"
                    prefetch={false}
                  >
                    Live Site
                  </Link>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 grid gap-8 lg:grid-cols-2 lg:gap-16">
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
