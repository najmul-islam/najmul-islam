import services from "@/data/services.json";
import Heading from "../ui/heading";
import Section from "../ui/section";
import ServiceCard from "./ServiceCard";

const Service = () => {
  return (
    <Section id="service">
      <Heading lightText="My" boldText="Services" />
      <div className="container px-4 py-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </Section>
  );
};
export default Service;