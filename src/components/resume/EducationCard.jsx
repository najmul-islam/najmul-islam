import { FaCalendarAlt } from "react-icons/fa";

const EducationCard = ({ education }) => {
  const { course, description, academy, year } = education;
  return (
    <div className="my-5 rounded-lg bg-[#333333] p-6 shadow-lg">
      <h6 className="flex items-center gap-2 text-[16px] font-medium text-white">
        <FaCalendarAlt /> {year}
      </h6>
      <h5 className="my-4 text-[20px] font-medium text-[#bac964]">{course}</h5>
      <p className="font-[16px] text-[#ffffff66]">{description}</p>
      <p className="font-[16px] text-[#ffffff66]">{academy}</p>
    </div>
  );
};
export default EducationCard;
