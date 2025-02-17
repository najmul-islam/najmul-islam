import { FaCalendarAlt } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import { IoBriefcaseOutline } from "react-icons/io5";

const ExperienceCard = ({ experience }) => {
  const { company, description, position, year } = experience;
  return (
    <div className="my-5 min-h-[220px] rounded-lg bg-[#333333] p-6 shadow-lg">
      <h6 className="flex items-center gap-3 text-[16px] font-medium text-white">
        <FaCalendarAlt /> {year}
      </h6>
      <h5 className="my-4 flex items-center gap-2 text-[20px] font-medium text-[#bac964]">
        <IoBriefcaseOutline /> {position}
      </h5>
      <p className="flex items-center gap-3 text-[16px] text-[#ffffff66]">
        <FaRegFileAlt /> {description}
      </p>
      <p className="mt-4 flex items-center gap-3  text-[16px] font-semibold text-[#ffffff66]">
        <FaBuilding /> {company}
      </p>
    </div>
  );
};
export default ExperienceCard;
