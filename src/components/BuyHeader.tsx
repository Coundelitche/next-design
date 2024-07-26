import { Link } from "react-router-dom";

function BuyHeader() {
  return (
    <header className="flex items-center justify-between w-full px-16 py-8 text-primary-foreground absolute top-0 z-50">
      <h1 className="text-2xl max-md:text-xl">Next Design</h1>
      <nav className="flex items-center gap-4">
        <Link to="/">Accueil</Link>
      </nav>
    </header>
  );
}

export default BuyHeader;
