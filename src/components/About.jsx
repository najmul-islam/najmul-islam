"use client";
import { Container, Image, Row, Col } from "react-bootstrap";
import style from "@/css/about.module.css";

const About = () => {
  return (
    <section className={`py-5 bg-dark text-white`} id="about">
      <Container className="py-4">
        <Row>
          <Col lg={6} className="mb-5 mb-lg-0">
            <Image src="images/najmul.jpg" fluid rounded />
          </Col>
          <Col lg={6} className="ps-lg-5 ps-3 d-flex align-items-center">
            <div>
              <h2 className="text-white mb-5 text-lg-start text-center">
                <span className="fw-lighter">About</span>{" "}
                <span className="fw-bolder">Me</span>
              </h2>
              <p className={`${style.aboutText1} fw-lighter`}>
                I am a self-taught passionate Web Application Developer
                specializing in <span className="fw-normal">React.js</span>. As
                a React developer, I can convert a Figma design to a perfectly
                responsive website template and give them life using ReactJs. I
                am very comfortable with the{" "}
                <span className="fw-normal">Next.js</span> framework and have
                sound knowledge in both client and server-side rendering.
              </p>
              <p className={`${style.aboutText2} fw-lighter mb-5`}>
                In addition to my technical expertise, I am dedicated,
                detail-oriented, and committed to delivering high-quality web
                applications. With a strong focus on problem-solving and a
                passion for continuous learning.
              </p>

              <div>
                <a
                  className={`${style.hiremebtn} btn btn-primary btn-sm px-4 py-2 smoothscroll me-2`}
                  href="#contact"
                >
                  HIRE ME
                </a>
                <a
                  className={`${style.downloadbtn} btn btn-secondary btn-sm px-4 py-2 smoothscroll`}
                  href="images/najmul-islam-cv.pdf"
                  download="najmul-islam-cv"
                >
                  DOWNLOAD CV
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default About;
