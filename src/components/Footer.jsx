"use client";
import {
  FaLinkedinIn,
  FaGithub,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import style from "@/css/footer.module.css";

const Footer = () => {
  return (
    <footer className={`${style.footer} py-5 bg-dark text-white`}>
      <p className="text-center fw-light">
        Copyright © {new Date().getFullYear()} All rights reserved | This
        template is made by <strong>Najmul Islam</strong>
      </p>
      <div className={`${style.iconbox} text-center`}>
        <a href="https://www.linkedin.com/in/najmulislam519/" target="_blank">
          <span>
            <FaLinkedinIn />
          </span>
        </a>
        <a href="https://github.com/najmul-islam" target="_blank">
          <span>
            <FaGithub />
          </span>
        </a>
        <a href="https://www.facebook.com/najmulislam519/" target="_blank">
          <span>
            <FaFacebookF />
          </span>
        </a>
        <a href="https://twitter.com/najmulislam519" target="_blank">
          <span>
            <FaTwitter />
          </span>
        </a>
        <a href="https://www.instagram.com/najmulislam571/" target="_blank">
          <span>
            <FaInstagram />
          </span>
        </a>
      </div>
    </footer>
  );
};
export default Footer;
