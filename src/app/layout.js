import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Najmul islam",
  description: "Frontend web devloper",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn("font-sans antialiased", inter.variable)} id="home">
        {children}
      </body>
    </html>
  );
}
