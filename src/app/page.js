import Hero from "@/components/header/Hero";
import Portfolio from "@/components/portfolio/Portfolio";
import Resume from "@/components/resume/Resume";
import About from "@/components/about/About";
import Service from "@/components/service/Service";
import Contact from "@/components/contact/Contact";

export const metadata = {
  title: "Najmul Islam | Home",
  description:
    "Welcome to Najmul Islam's personal website, showcasing modern web development projects and services.",
  keywords: ["web development", "portfolio", "reactjs", "nextjs"],
  robots: { index: true, follow: true },
  authors: [{ name: "Najmul Islam" }],
  publisher: "Najmul Islam",
  alternates: { canonical: "https://najmulislam.vercel.app" },
};

const HomePage = () => {
  return (
    <>
      <Hero />
      <Portfolio />
      <Resume />
      <About />
      <Service />
      <Contact />
    </>
  );
};
export default HomePage;
