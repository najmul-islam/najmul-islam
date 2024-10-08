import projects from "@/data/projects.json";
import Heading from "../ui/heading";
import Section from "../ui/section";
import PortfolioCard from "./PortfolioCard";

const Portfolio = () => {
  return (
    <Section id="portfolio">
      <Heading lightText="Featured" boldText="Portfolio" />
      <div className="grid gap-5 py-6 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project) => (
          <PortfolioCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
};
export default Portfolio;
