import Portfolio from "@/components/portfolio/Portfolio";

export const metadata = {
  title: "Portfolio | Najmul Islam",
  description:
    "Explore Najmul Islam's portfolio showcasing projects in React, Next.js, Node.js, and more.",
  keywords: ["portfolio", "web projects", "reactjs", "nextjs"],
  robots: { index: true, follow: true },
  authors: [{ name: "Najmul Islam" }],
  publisher: "Najmul Islam",
  alternates: { canonical: "https://najmulislam.vercel.app/portfolio" },
};

const PortfolioPage = () => {
  return <Portfolio />;
};
export default PortfolioPage;