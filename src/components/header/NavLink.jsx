"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`cursor-pointer text-gray-600 hover:text-black ${pathname === href ? " font-semibold text-black" : ""}`}
    >
      {children}
    </Link>
  );
};
export default NavLink;
