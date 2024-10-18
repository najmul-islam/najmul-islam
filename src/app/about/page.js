import About from "@/components/about/About";

export const metadata = {
  title: "About | Najmul Islam",
  description:
    "Learn more about Najmul Islam, a modern web developer specializing in React, Node.js, Laravel, and WordPress.",
  keywords: ["about me", "web developer", "reactjs", "nextjs"],
  robots: { index: true, follow: true },
  authors: [{ name: "Najmul Islam" }],
  publisher: "Najmul Islam",
  alternates: { canonical: "https://najmulislam.vercel.app/about" },
};

const AboutPage = () => {
  return <About />;
};
export default AboutPage;
