import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Hero from "@/components/header/Hero";
import Portfolio from "@/components/portfolio/Portfolio";
import Resume from "@/components/resume/Resume";
import Service from "@/components/service/Service";

const HomePage = () => {
  return (
    <div className="bg-[#212529]">
      <Header />
      <Hero />
      <Portfolio />
      <Resume />
      <About />
      <Service />
      <Contact />
      <Footer />
    </div>
  );
};
export default HomePage;
