import projects from "@/data/projects.json";
import educations from "@/data/educations.json";
import experiences from "@/data/experiences.json";
import services from "@/data/services.json";
import Hero from "@/components/header/Hero";
import Portfolio from "@/components/portfolio/Portfolio";
import Resume from "@/components/resume/Resume";
import About from "@/components/about/About";
import Service from "@/components/service/Service";
import Contact from "@/components/contact/Contact";

const HomePage = () => {
  const feturedProjects = projects?.slice(0, 6);
  return (
    <>
      <Hero />
      <Portfolio projects={feturedProjects} />
      <Resume educations={educations} experiences={experiences} />
      <About />
      <Service services={services} />
      <Contact />
    </>
  );
};
export default HomePage;
