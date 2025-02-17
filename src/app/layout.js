import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Najmul Islam",
  description: "Your Partner in Modern Web Development",
  keywords: [
    "reactjs",
    "nextjs",
    "vuejs",
    "nodejs",
    "mongodb",
    "wordpress",
    "php",
    "javascript",
    "laravel",
    "wordpress theme",
    "wordpress plugin",
  ],
  robots: {
    index: true,
    follow: true,
    maxSnippet: -1,
    maxImagePreview: "large",
    maxVideoPreview: -1,
  },
  authors: [
    {
      name: "Najmul Islam",
    },
  ],
  publisher: "Najmul Islam",
  alternates: {
    canonical: "https://najmulislam.me",
  },
  openGraph: {
    title: "Najmul Islam",
    description: "Your Partner in Modern Web Development",
    url: "https://najmulislam.me",
    type: "website",
    site_name: "Najmul Islam",
    images: [
      {
        url: "https://najmulislam.me/images/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Najmul Islam, web developer specializing in modern web development technologies.",
      },
    ],
  },
  twitter: {
    handle: "@najmulislam",
    site: "@najmulislam",
    cardType: "summary_large_image",
  },
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={cn("bg-[#212529] font-sans antialiased", inter.variable)}
        id="home"
      >
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
};
export default RootLayout;
