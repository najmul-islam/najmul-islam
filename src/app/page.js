import Hero from "@/components/header/Hero";
import Portfolio from "@/components/portfolio/Portfolio";
import Resume from "@/components/resume/Resume";
import About from "@/components/about/About";
import Service from "@/components/service/Service";
import Contact from "@/components/contact/Contact";

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
