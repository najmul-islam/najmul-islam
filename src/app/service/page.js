import Service from "@/components/service/Service";

export const metadata = {
  title: "Services | Najmul Islam",
  description:
    "Discover web development services offered by Najmul Islam, including React, Next.js, Node.js, WordPress, and more.",
  keywords: ["services", "web development", "nextjs", "wordpress"],
  robots: { index: true, follow: true },
  authors: [{ name: "Najmul Islam" }],
  publisher: "Najmul Islam",
  alternates: { canonical: "https://najmulislam.vercel.app/services" },
};

const ServicePage = () => {
  return <Service />;
};
export default ServicePage;
