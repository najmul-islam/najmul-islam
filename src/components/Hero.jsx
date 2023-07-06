import style from "@/css/hero.module.css";

const Hero = () => {
  return (
    <section
      className={`${style.hero} vh-100 d-flex justify-content-center align-items-center`}
      id="home"
    >
      <div className={style.overlay}></div>
      <div className={style.textbox}>
        <h1 className="display-4 text-center text-white">Hello, I'm</h1>
        <h1 className="display-2 fw-semibold text-center text-white mb-4">
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
