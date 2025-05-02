import { cn } from "@/lib/utils";

const Heading = ({ lightText, boldText, className, ...props }) => {
  return (
    <h1
      className={cn(
        "pb-6 text-center text-2xl tracking-wide text-white md:pb-8 md:text-4xl",
        className,
      )}
      {...props}
    >
      <span className="font-light">{lightText}</span>{" "}
      <span className="font-bold">{boldText}</span>
    </h1>
  );
};
export default Heading;
