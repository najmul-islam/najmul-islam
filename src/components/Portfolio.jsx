"use client";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/config";
import { Container, Row, Col } from "react-bootstrap";
import PortfolioCard from "./PortfolioCard";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const projectCollectionRef = collection(db, "projects");

    const getProjects = async () => {
      const data = await getDocs(projectCollectionRef);
      setProjects(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getProjects();
  }, []);

  return (
    <section className="pt-5 bg-dark" id="portfolio">
      <Container className="pt-md-5 pt-2">
        <h2 className="text-center text-white py-md-5 py-3">
          <span className="fw-lighter">Featured</span>{" "}
          <span className="fw-bolder">Portfolio</span>
        </h2>
        <Row>
          {projects.map((project) => (
            <PortfolioCard
              key={project.id}
              name={project.name}
              link={project.link}
              imgurl={project.imgurl}
            />
          ))}
        </Row>
      </Container>
    </section>
  );
};
export default Portfolio;
