"use client";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/config";
import EducationCard from "./EducationCard";
import ExperienceCard from "./ExperienceCard";

const Resume = () => {
  const [educations, setEducations] = useState([]);
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const educationCollectionRef = collection(db, "educations");

    const getEducations = async () => {
      const data = await getDocs(educationCollectionRef);
      setEducations(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getEducations();
  }, []);

  useEffect(() => {
    const experienceCollectionRef = collection(db, "experiences");
    const getExperiences = async () => {
      const data = await getDocs(experienceCollectionRef);
      setExperiences(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getExperiences();
  }, []);

  return (
    <section className="pt-5 bg-dark text-white" id="resume">
      <h2 className="text-center text-white py-md-5 py-4">
        <span className="fw-lighter">My</span>{" "}
        <span className="fw-bolder">Resume</span>
      </h2>
      <Container>
        <Row>
          <Col md={6} className="py-4">
            <h4 className="fw-light mb-3">Education</h4>

            {educations.map((education) => (
              <EducationCard
                key={education.id}
                year={education.year}
                course={education.course}
                description={education.description}
                academy={education.academy}
              />
            ))}
            {/* <ResumeCard
              year="March 2013 - Present"
              course="Masteral in information Technology"
              description="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
              academy="New York University"
            />
            <ResumeCard
              year="March 2013 - Present"
              education="Masteral in information Technology"
              about="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
              academy="New York University"
            />
            <ResumeCard
              year="March 2013 - Present"
              education="Masteral in information Technology"
              about="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
              academy="New York University"
            /> */}
          </Col>
          <Col md={6} className="py-4">
            <h4 className="fw-light mb-3">Experience</h4>
            {experiences.map((experience) => (
              <ExperienceCard
                key={experience.id}
                year={experience.year}
                company={experience.company}
                description={experience.description}
                position={experience.position}
              />
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Resume;
