import Link from "next/link";

const Footer = () => {
  return (
    <footer className="sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <div className="max-w-[1400px] flex mx-auto">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 NenoLand. Todos os direitos reservados.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Privacidade
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Termos
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
