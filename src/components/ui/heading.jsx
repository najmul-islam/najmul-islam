import { cn } from "@/lib/utils";

const Heading = ({ lightText, boldText, className, ...props }) => {
  return (
    <h2
      className={cn(
        "pb-8 text-center text-2xl tracking-wide text-white md:text-4xl",
        className,
      )}
      {...props}
    >
      <span className="font-light">{lightText}</span>{" "}
      <span className="font-bold">{boldText}</span>
    </h2>
  );
};
export default Heading;