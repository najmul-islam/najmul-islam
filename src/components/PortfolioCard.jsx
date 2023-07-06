import { Col, Image } from "react-bootstrap";

const PortfolioCard = ({ name, link, imgurl }) => {
  return (
    <Col md={4} sm={6} className="mx-auto d-block mb-5 text-center text-white">
      <Image src={imgurl} fluid className="mb-2" />
      <h5 className="fw-normal">{name}</h5>
      <a
        href={link}
        className="link-light fw-light link-offset-2 link-underline-opacity-10 link-underline-opacity-100-hover"
      >
        visit site
      </a>
    </Col>
  );
};
export default PortfolioCard;
