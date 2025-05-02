import { FaCalendarAlt } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";

const EducationCard = ({ education }) => {
  const { course, description, academy, year } = education;
  return (
    <div className="my-5 min-h-[220px] rounded-lg bg-[#333333] p-6 shadow-lg">
      <table className="flex flex-col gap-3">
        <tr className="">
          <td>
            <FaCalendarAlt className="text-base text-white" />
          </td>
          <td className="px-2 text-sm font-semibold text-white md:text-base">
            {year}
          </td>
        </tr>
        <tr>
          <td>
            <FaGraduationCap className="text-lg text-[#bac964]" />
          </td>
          <td className="px-2 text-base font-semibold text-[#bac964] md:text-xl">
            {course}
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
            <FaSchool className="text-base text-[#ffffff66]" />
          </td>
          <td className="px-2 text-base font-semibold text-[#ffffff66]">
            {academy}
          </td>
        </tr>
      </table>
    </div>
  );
};
export default EducationCard;
