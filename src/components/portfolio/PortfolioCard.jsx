import Image from "next/image";
import Link from "next/link";

const PortfolioCard = ({ project }) => {
  const { name, thumbnail, link } = project;
  return (
    <div className="flex flex-col items-center justify-center text-center text-white">
      <Image
        src={`/projects/${thumbnail}`}
        width={400}
        height={400}
        className="w-full rounded"
        alt={name}
      />
      <h5 className="mt-3 text-2xl">{name}</h5>
      <Link
        href={link}
        target="_blank"
        className="mb-3 flex items-center text-lg underline decoration-white/40 transition ease-in-out hover:decoration-white/100"
      >
        visit site
      </Link>
    </div>
  );
};
export default PortfolioCard;
