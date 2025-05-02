"use client";
import Link from "next/link";
import NavLink from "./NavLink";
import { HiBars3BottomRight } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

const Sidebar = () => {
  return (
    <Sheet className="w-[16rem] outline-none md:hidden">
      <SheetTrigger
        asChild
        className="cursor-pointer md:hidden"
        variant="outline"
        size="icon"
      >
        <HiBars3BottomRight className="size-6" />
      </SheetTrigger>
      <SheetContent className="w-[250px] p-0">
        <SheetHeader className="flex h-[60px] items-center border-b p-0 px-3">
          <Link href="/" aria-label="home">
            <span className="font-bold">Najmul</span> Islam
          </Link>
          <SheetClose asChild className="cursor-pointer">
            <IoCloseOutline className="text-2xl" />
          </SheetClose>
        </SheetHeader>
        {/* <Separator className="my-3" /> */}
        <ul className="mt-2 flex flex-col space-y-2 pl-3">
          <SheetClose asChild className="cursor-pointer">
            <NavLink href="/">Home</NavLink>
          </SheetClose>
          <SheetClose asChild className="cursor-pointer">
            <NavLink href="/portfolio">Portfolio</NavLink>
          </SheetClose>
          <SheetClose asChild className="cursor-pointer">
            <NavLink href="/resume">Resume</NavLink>
          </SheetClose>
          <SheetClose asChild className="cursor-pointer">
            <NavLink href="/about">About</NavLink>
          </SheetClose>
          <SheetClose asChild className="cursor-pointer">
            <NavLink href="/service">Service</NavLink>
          </SheetClose>
          <SheetClose asChild className="cursor-pointer">
            <NavLink href="/contact">Contact</NavLink>
          </SheetClose>
        </ul>
      </SheetContent>
    </Sheet>
  );
};
export default Sidebar;
