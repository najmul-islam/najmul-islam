"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`inline-block min-w-[65px] cursor-pointer text-center transition-all duration-200 ease-linear hover:font-semibold hover:text-white ${pathname === href ? "font-semibold text-white" : "text-slate-200"}`}
    >
      {children}
    </Link>
  );
};
export default NavLink;
