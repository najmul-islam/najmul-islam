"use client";
import Link from "next/link";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className={` bg-dark py-5 text-white`}>
      <div className="container px-4">
        <p className="text-center font-light text-[#ffffff66]">
          Copyright © {new Date().getFullYear()} All rights reserved | This
          template is made by <strong>Najmul Islam</strong>
        </p>
        <div className="flex items-center justify-center py-3">
          <Link
            href="https://www.linkedin.com/in/najmulislam519/"
            target="_blank"
          >
            <span className="mx-3 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#333333] text-[30px] text-[#bac964]">
              <FaLinkedinIn />
            </span>
          </Link>
          <Link href="https://github.com/najmul-islam" target="_blank">
            <span className="mx-3 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#333333] text-[30px] text-[#bac964]">
              <FaGithub />
            </span>
          </Link>
          <Link href="https://www.facebook.com/najmulislam519/" target="_blank">
            <span className="mx-3 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#333333] text-[30px] text-[#bac964]">
              <FaFacebookF />
            </span>
          </Link>
          <Link href="https://twitter.com/najmulislam519" target="_blank">
            <span className="mx-3 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#333333] text-[30px] text-[#bac964]">
              <FaXTwitter />
            </span>
          </Link>
          <Link href="https://www.instagram.com/najmul_519/" target="_blank">
            <span className="mx-3 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#333333] text-[30px] text-[#bac964]">
              <FaInstagram />
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
