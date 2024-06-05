import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <nav className="container mx-auto flex justify-between py-4">
        <a className="text-xl" href="#home">
          <span className="font-bold">Najmul</span> Islam
        </a>
        <div>
          <ul className="flex space-x-5">
            <Link
              href="#home"
              className="cursor-pointer text-gray-600 hover:text-black"
            >
              Home
            </Link>
            <Link
              href="#portfolio"
              className="cursor-pointer text-gray-600 hover:text-black"
            >
              Portfolio
            </Link>
            <Link
              href="#resume"
              className="cursor-pointer text-gray-600 hover:text-black"
            >
              Resume
            </Link>
            <Link
              href="#about"
              className="cursor-pointer text-gray-600 hover:text-black"
            >
              About
            </Link>
            <Link
              href="#service"
              className="cursor-pointer text-gray-600 hover:text-black"
            >
              Service
            </Link>
            <Link
              href="#contact"
              className="cursor-pointer text-gray-600 hover:text-black"
            >
              Contact
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Header;
