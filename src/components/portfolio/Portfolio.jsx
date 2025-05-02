import Heading from "../ui/heading";
import Section from "../ui/section";
import PortfolioCard from "./PortfolioCard";

const Portfolio = ({ projects }) => {
  return (
    <Section id="portfolio">
      <Heading lightText="Featured" boldText="Portfolio" />
      <div className="grid grid-cols-1 gap-6 py-6 sm:grid-cols-2 md:grid-cols-3">
        {projects?.map((project) => (
          <PortfolioCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
};
export default Portfolio;
