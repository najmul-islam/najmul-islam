import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Najmul Islam",
  description: "Your Partner in Modern Web Development",
  keywords: [
    "reactjs",
    "nextjs",
    "nodejs",
    "mongodb",
    "wordpress",
    "php",
    "javascript",
    "laravel",
    "wordpress theme",
    "wordpress plugin",
  ],
  authors: [
    {
      name: "Najmul Islam",
    },
  ],
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={cn("font-sans antialiased", inter.variable)} id="home">
        {children}
      </body>
    </html>
  );
};
export default RootLayout;
