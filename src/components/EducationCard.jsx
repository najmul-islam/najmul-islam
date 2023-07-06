import style from "@/css/resumecard.module.css";
import { FaCalendarAlt } from "react-icons/fa";

const EducationCard = ({ year, course, description, academy }) => {
  return (
    <div className={`${style.card} mb-4`}>
      <h6 className="">
        <FaCalendarAlt /> {year}
      </h6>
      <h5 className="fw-light my-4">{course}</h5>
      <p className="fw-light">{description}</p>
      <p className="fw-light">{academy}</p>
    </div>
  );
};
export default EducationCard;
