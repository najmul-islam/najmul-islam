import MouseButton from "@/components/ui/mousebutton";

const Hero = () => {
  return (
    <section
      className="relative flex h-[70vh] content-center items-center bg-cover bg-center bg-no-repeat md:h-[calc(100vh-60px)] "
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      <div className="absolute bottom-0 left-0 right-0 top-0  h-[100%] w-[100%] bg-[rgba(0,0,0,0.712)] opacity-100"></div>
      <div className="z-30 w-[100%]">
        <h1 className="mb-2 text-center text-3xl text-white md:text-4xl lg:text-5xl">
          Hello, I'm
        </h1>
        <h1 className="mb-4 text-center text-4xl font-semibold text-white md:text-5xl lg:text-7xl">
          Najmul Islam
        </h1>
        <h5 className="text-center text-xl font-light text-white md:text-2xl lg:text-2xl">
          And this is my rezume
        </h5>
      </div>

      <MouseButton />
    </section>
  );
};
export default Hero;
