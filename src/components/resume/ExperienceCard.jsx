import { FaCalendarAlt } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import { IoBriefcaseOutline } from "react-icons/io5";

const ExperienceCard = ({ experience }) => {
  const { company, description, position, year } = experience;
  return (
    <div className="my-5 min-h-[220px] rounded-lg bg-[#333333] p-6 shadow-lg">
      <table className="flex flex-col gap-3">
        <tr>
          <td>
            <FaCalendarAlt className="text-base text-white" />
          </td>
          <td className="px-2 text-sm font-semibold text-white md:text-base">
            {year}
          </td>
        </tr>
        <tr>
          <td>
            <IoBriefcaseOutline className="text-lg text-[#bac964]" />
          </td>
          <td className="px-2 text-base font-semibold text-[#bac964] md:text-xl">
            {position}
          </td>
        </tr>
        <tr>
          <td>
            <FaRegFileAlt className="text-base text-[#ffffff66]" />
          </td>
          <td className="px-2 text-base text-[#ffffff66]">{description}</td>
        </tr>
        <tr>
          <td>
            <FaBuilding className="text-base text-[#ffffff66]" />
          </td>
          <td className="px-2 text-base font-semibold text-[#ffffff66]">
            {company}
          </td>
        </tr>
      </table>
    </div>
  );
};
export default ExperienceCard;
