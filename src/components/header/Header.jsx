import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";

const Header = () => {
  return (
    <>
      <header className="sticky top-0 z-50 bg-[#ffffff]">
        <nav className="container mx-auto flex items-center justify-between px-12 py-4">
          <Link className="text-xl" href="#home">
            <span className="font-bold">Najmul</span> Islam
          </Link>
          <div>
            <ul className="hidden space-x-5 md:flex ">
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
            <Sheet className="w-[16rem] md:hidden">
              <SheetTrigger
                asChild
                className="cursor-pointer md:hidden"
                variant="outline"
                size="icon"
              >
                <HiBars3BottomRight className="text-2xl" />
              </SheetTrigger>
              <SheetContent className="w-[250px] p-0">
                <SheetHeader className="flex h-[60px] items-center border-b p-0 px-3">
                  <Link href="#home" aria-label="home">
                    <span className="font-bold">Najmul</span> Islam
                  </Link>
                  <SheetClose asChild className="cursor-pointer">
                    <IoCloseOutline className="text-2xl" />
                  </SheetClose>
                </SheetHeader>
                {/* <Separator className="my-3" /> */}
                <ul className="flex flex-col space-y-2 pl-3">
                  <SheetClose asChild className="cursor-pointer">
                    <Link
                      href="#home"
                      className="cursor-pointer text-gray-600 hover:text-black"
                    >
                      Home
                    </Link>
                  </SheetClose>
                  <SheetClose asChild className="cursor-pointer">
                    <Link
                      href="#portfolio"
                      className="cursor-pointer text-gray-600 hover:text-black"
                    >
                      Portfolio
                    </Link>
                  </SheetClose>
                  <SheetClose asChild className="cursor-pointer">
                    <Link
                      href="#resume"
                      className="cursor-pointer text-gray-600 hover:text-black"
                    >
                      Resume
                    </Link>
                  </SheetClose>
                  <SheetClose asChild className="cursor-pointer">
                    <Link
                      href="#about"
                      className="cursor-pointer text-gray-600 hover:text-black"
                    >
                      About
                    </Link>
                  </SheetClose>
                  <SheetClose asChild className="cursor-pointer">
                    <Link
                      href="#service"
                      className="cursor-pointer text-gray-600 hover:text-black"
                    >
                      Service
                    </Link>
                  </SheetClose>
                  <SheetClose asChild className="cursor-pointer">
                    <Link
                      href="#contact"
                      className="cursor-pointer text-gray-600 hover:text-black"
                    >
                      Contact
                    </Link>
                  </SheetClose>
                </ul>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Header;
