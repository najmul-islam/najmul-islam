import Resume from "@/components/resume/Resume";

export const metadata = {
  title: "Resume | Najmul Islam",
  description:
    "View Najmul Islam's resume, detailing his expertise in web development and modern technologies.",
  keywords: ["resume", "CV", "web developer", "reactjs"],
  robots: { index: true, follow: true },
  authors: [{ name: "Najmul Islam" }],
  publisher: "Najmul Islam",
  alternates: { canonical: "https://najmulislam.vercel.app/resume" },
};

const ResumePage = () => {
  return <Resume />;
};
export default ResumePage;