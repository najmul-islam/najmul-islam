import { FaCalendarAlt } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";

const EducationCard = ({ education }) => {
  const { course, description, academy, year } = education;
  return (
    <div className="my-5 min-h-[220px] rounded-lg bg-[#333333] p-6 shadow-lg">
      <h6 className="flex items-center gap-3 text-[16px] font-medium text-white">
        <FaCalendarAlt /> {year}
      </h6>
      <h5 className="my-4 flex items-center gap-2 text-[20px] font-medium text-[#bac964]">
        <FaGraduationCap /> {course}
      </h5>
      <p className="flex items-center gap-3 text-[16px] text-[#ffffff66]">
        <FaRegFileAlt />
        {description}
      </p>
      <p className="mt-3 flex items-center gap-3 text-[16px] font-semibold text-[#ffffff66]">
        <FaSchool /> {academy}
      </p>
    </div>
  );
};
export default EducationCard;
