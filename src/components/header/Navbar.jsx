import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <ul className="hidden gap-x-5 md:flex">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/portfolio">Portfolio</NavLink>
      <NavLink href="/resume">Resume</NavLink>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/service">Service</NavLink>
      <NavLink href="/contact">Contact</NavLink>
    </ul>
  );
};
export default Navbar;
