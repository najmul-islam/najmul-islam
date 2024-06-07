import Image from "next/image";

const ServiceCard = ({ service }) => {
  const { title, description, icon } = service;
  return (
    <div className="flex flex-col gap-3 rounded-lg bg-[#333333] p-6 shadow-lg">
      <div className="flex self-center">
        <span className="flex h-[100px] w-[100px] items-center justify-center rounded-full bg-[#bac964]">
          <Image src={`/services/${icon}`} width={60} height={60} alt={title} />
        </span>
      </div>

      <h5 className="mb-4 text-center text-xl font-light text-white ">
        {title}
      </h5>
      <p className="text-[16px] font-light text-[#ffffff66]">{description}</p>
    </div>
  );
};
export default ServiceCard;
