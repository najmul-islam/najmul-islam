import Heading from "../ui/heading";
import Section from "../ui/section";
import EducationCard from "./EducationCard";
import ExperienceCard from "./ExperienceCard";

const Resume = ({ educations, experiences }) => {
  return (
    <Section id="resume">
      <Heading lightText="My" boldText="Resume" />

      <div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* education */}
          <div className="py-4">
            <h4 className="mb-3 text-2xl text-white">Education</h4>
            {educations?.slice(0, 3).map((education) => (
              <EducationCard key={education.id} education={education} />
            ))}
          </div>

          {/* exprience */}
          {experiences?.length !== 0 && (
            <div className="py-4">
              <h4 className="mb-3 text-2xl text-white">Experience</h4>
              {experiences
                ?.slice(0, 3)
                .sort((a, b) => b.id - a.id)
                .map((experience) => (
                  <ExperienceCard key={experience.id} experience={experience} />
                ))}
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};
export default Resume;
