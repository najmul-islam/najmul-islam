import educations from "@/data/educations.json";
import experiences from "@/data/experiences.json";
import Heading from "../ui/heading";
import Section from "../ui/section";
import EducationCard from "./EducationCard";
import ExperienceCard from "./ExperienceCard";

const Resume = () => {
  return (
    <Section id="resume">
      <Heading lightText="My" boldText="Resume" />

      <div className="container px-4">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* education */}
          <div className="py-4">
            <h4 className="mb-3 text-2xl text-white">Education</h4>
            {educations.map((education) => (
              <EducationCard key={education.id} education={education} />
            ))}
          </div>

          {/* exprience */}
          <div className="py-4">
            <h4 className="mb-3 text-2xl text-white">Experience</h4>
            {experiences.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
export default Resume;