import { CTA } from "./CTA";
import { FloatingNav } from "./ui/floating-navbar";

function Header() {
  return (
    <FloatingNav className="flex items-center justify-between w-full py-6 text-primary-foreground">
      <header className="flex items-center justify-between w-full px-16  text-primary-foreground">
        <h1 className="text-2xl max-md:text-xl">Next Design</h1>
        <nav className="flex items-center gap-4">
          <a href="#features">Features</a>
          <a href="#description">Description</a>
          <a href="#pricing">Pricing</a>
          <a href="#about">About</a>
          <CTA classNames="h-8" />
        </nav>
      </header>
    </FloatingNav>
  );
}

export default Header;
