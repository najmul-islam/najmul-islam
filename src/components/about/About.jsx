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
            <p className="text-[18px] text-[#ffffff70]">
              Web development enthusiast skilled in <strong>PHP</strong> and{" "}
              <strong>JavaScript</strong>, with growing experience in both
              backend and frontend technologies. On the backend, gaining
              practical knowledge using <strong>Laravel</strong> and{" "}
              <strong>Express.js</strong> to build APIs and manage server logic.
              On the frontend, working with <strong>React</strong> and{" "}
              <strong>Vue</strong> to create responsive user interfaces.
              Comfortable with databases like <strong>MySQL</strong>,{" "}
              <strong>PostgreSQL</strong>, and <strong>MongoDB</strong>.
              Currently exploring <strong>WordPress</strong> theme and plugin
              development. Confident using <strong>Git</strong> and{" "}
              <strong>GitHub</strong> for version control, and passionate about
              teamwork, clean code, and continuous learning.
            </p>
            <p className="text-[15px] font-light text-[#ffffff66]">
              Beyond technical skills, I bring a strong sense of dedication,
              attention to detail, and a commitment to building high-quality web
              applications. I thrive on solving problems and continuously
              improving through learning and real-world experience.
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
