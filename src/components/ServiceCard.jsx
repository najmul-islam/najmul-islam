"use client";
import { Col, Image } from "react-bootstrap";
import style from "@/css/servicecard.module.css";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <Col lg={4} md={6} className="mb-4 d-flex align-self-stretch ">
      <div className={`${style.service}`}>
        <div className={`mb-4 text-center`}>
          <span className={`${style.iconbox}`}>
            <Image src={icon} fluid width="60" />
          </span>
        </div>

        <h5 className="text-center fw-light mb-4">{title}</h5>
        <p className={`${style.description} fw-light`}>{description}</p>
      </div>
    </Col>
  );
};
export default ServiceCard;
