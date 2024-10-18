import Contact from "@/components/contact/Contact";

export const metadata = {
  title: "Contact | Najmul Islam",
  description:
    "Get in touch with Najmul Islam for web development services or collaborations.",
  keywords: ["contact", "web development", "nextjs", "reactjs"],
  robots: { index: true, follow: true },
  authors: [{ name: "Najmul Islam" }],
  publisher: "Najmul Islam",
  alternates: { canonical: "https://najmulislam.vercel.app/contact" },
};

const ContactPage = () => {
  return <Contact />;
};
export default ContactPage;
