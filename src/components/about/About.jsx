import Image from "next/image";
import Link from "next/link";
import Heading from "../ui/heading";
import Section from "../ui/section";

const About = () => {
  return (
    <Section id="about">
      <div className="py-10 sm:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
          <div className="mb-lg-0 mx-auto mb-5 md:mx-0">
            <Image
              src="/images/najmul-islam.jpg"
              width={500}
              height={600}
              alt="najmul-islam"
              className="rounded-lg"
            />
          </div>

          <div className="flex flex-col items-start justify-center gap-6">
            <Heading lightText="About" boldText="Me" />
            <p className="text-[18px] font-light text-[#ffffff66]">
              I am a self-taught passionate Web Application Developer
              specializing in <span className="font-semibold">React.js</span>.
              As a React developer, I can convert a Figma design to a perfectly
              responsive website template and give them life using ReactJs. I am
              very comfortable with the{" "}
              <span className="font-semibold">Next.js</span> framework and have
              sound knowledge in both client and server-side rendering.
            </p>
            <p className="text-[15px] font-light text-[#ffffff66]">
              In addition to my technical expertise, I am dedicated,
              detail-oriented, and committed to delivering high-quality web
              applications. With a strong focus on problem-solving and a passion
              for continuous learning.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                className="text-nowrap rounded-full bg-[#bac964] px-6 py-2 text-center text-sm font-normal tracking-wider text-white hover:bg-[#b2c251] md:text-base"
                href="/contact"
              >
                HIRE ME
              </Link>
              <Link
                className="text-nowrap rounded-full bg-[#6c757d] px-6 py-2 text-center text-sm font-normal tracking-wider text-white hover:bg-[#565e64] md:text-base"
                href="/images/najmul-islam-cv.pdf"
                download="najmul-islam-cv"
                target="_blank"
              >
                DOWNLOAD CV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default About;
