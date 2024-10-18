import Logo from "./Logo";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Header = () => {
  return (
    <>
      <header className="sticky top-0 z-50 bg-[#ffffff]">
        <nav className="container mx-auto flex items-center justify-between px-12 py-4">
          <Logo />
          <div>
            <Navbar />
            <Sidebar />
          </div>
        </nav>
      </header>
    </>
  );
};
export default Header;
