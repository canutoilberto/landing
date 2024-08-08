import Link from "next/link";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <header className="px-4 lg:px-6 h-14 bg-background">
      <div className="max-w-[1400px] flex mx-auto py-6">
        <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <PencilIcon className="h-6 w-6" />
          <span className="sr-only">Jane Doe Portfolio</span>
        </Link>
        <div className="ml-auto flex items-center gap-4 sm:gap-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="lg:hidden">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] bg-background p-4">
              <nav className="grid gap-4">
                <Link
                  href="#"
                  className="text-sm font-medium hover:underline underline-offset-4"
                  prefetch={false}
                >
                  Work
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium hover:underline underline-offset-4"
                  prefetch={false}
                >
                  About
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium hover:underline underline-offset-4"
                  prefetch={false}
                >
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <nav className="hidden lg:flex gap-4 sm:gap-6">
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Work
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              About
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function PencilIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
    </svg>
  );
}

export default Navbar;
