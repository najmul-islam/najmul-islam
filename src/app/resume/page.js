import educations from "@/data/educations.json";
import experiences from "@/data/experiences.json";
import Resume from "@/components/resume/Resume";

export const metadata = {
  title: "Resume | Najmul Islam",
  description:
    "View Najmul Islam's resume, detailing his expertise in web development and modern technologies.",
  keywords: ["resume", "CV", "web developer", "reactjs"],
  robots: { index: true, follow: true },
  authors: [{ name: "Najmul Islam" }],
  publisher: "Najmul Islam",
  alternates: { canonical: "https://najmulislam.me/resume" },
};

const ResumePage = () => {
  return <Resume educations={educations} experiences={experiences} />;
};
export default ResumePage;
