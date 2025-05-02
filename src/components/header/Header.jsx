import Logo from "./Logo";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 shadow-md backdrop-blur-lg">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <Logo />
        <div>
          <Navbar />
          <Sidebar />
        </div>
      </nav>
    </header>
  );
};
export default Header;
