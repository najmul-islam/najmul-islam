const Hero = () => {
  return (
    <section
      className="relative flex h-[calc(100vh-60px)] content-center items-center bg-cover bg-center bg-no-repeat "
      id="home"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      <div className="absolute bottom-0 left-0 right-0 top-0  h-[100%] w-[100%] bg-[rgba(0,0,0,0.712)] opacity-100"></div>
      <div className="">
        <h1 className="display-4 text-center text-white">Hello, I'm</h1>
        <h1 className="display-2 fw-semibold mb-4 text-center text-white">
          Najmul Islam
        </h1>
        <h5 className=" text-uppercase fw-light text-center text-white">
          And this is my rezume
        </h5>
      </div>
    </section>
  );
};
export default Hero;
