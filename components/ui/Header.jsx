import Link from "next/link";
import { Button } from "./button";
//components
import Nav from "../Nav";
import MobaileNav from "../MobaileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white bg-pink-50/20">
      <div className="container mx-auto flex justify-between items-center">
        {/*logo*/}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Moaaz<span className="text-accent">.</span>
          </h1>
        </Link>
        {/* dekstop nav hire me bitton */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire me </Button>
          </Link>
        </div>

        {/* mobaile nav */}
        <div className="xl:hidden">
          <MobaileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
