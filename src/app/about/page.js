import About from "@/components/about/About";

export const metadata = {
  title: "About | Najmul Islam",
  description:
    "Discover the journey of Najmul Islam, a modern web developer specializing in React, Node.js, Laravel, and WordPress.",
  keywords: ["about me", "web developer", "reactjs", "nextjs"],
  robots: { index: true, follow: true },
  authors: [{ name: "Najmul Islam" }],
  publisher: "Najmul Islam",
  alternates: { canonical: "https://najmulislam.me/about" },
};

const AboutPage = () => {
  return <About />;
};
export default AboutPage;
