import React from "react";
//images
import MyImage from "../assets/cover.webp";
//icons
// import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { SiLeetcode, SiHackerrank, SiCodingninjas } from "react-icons/si";
//type animation
import { TypeAnimation } from "react-type-animation";
//motion
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";
import { HiArrowNarrowRight } from "react-icons/hi";
import Image from "react-bootstrap/Image";
import Button from "./Button";

const Banner = () => {
  return (
    <section
      className="min-h-[80vh] lg:min-h-[85vh] flex sm:justify-center"
      id="home"
    >
      {/* <div className="mx-auto md:mx-auto"> */}
        <div
          className="flex flex-col sm:pt-20 pb-20 md:pt-0 gap-y-10 lg:flex-row lg:items-center
        lg:align-middle overflow-hidden "
        >
          {/* {text} */}
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 text-center align-middle font-secondary xl:ml-[3vw] lg:text-left sm:w-full text-2xl md:mb-12  md:mt-[7vh]"
          >
            <p className="text-cyan-600 mb-3 lg:mb-8">
              <span className="text-[2rem]">Hi there!</span>
              <span
                className="wave ml-3 text-4xl"
                role="img"
                aria-labelledby="wave"
              >
                👋🏻
              </span>
            </p>

            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[6vh] leading-[0.8] lg:text-[6vh] font-semibold pb-2"
            >
              <span className="text-cyan-700">I'M</span> Mujahidul{" "}
              <span>Islam</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=" text-[3vh] lg:text-[3vh] font-secondary uppercase leading-[1] pt-1
              flex flex-row lg:justify-start justify-center py-6 xl:space-y-11"
            >
              <TypeAnimation
                sequence={[
                  "Front-End Engineer",
                  2000,
                  "React and Next.js Developer",
                  2000,
                  "Front-End Developer",
                  2000,
                ]}
                speed={50}
                className="text-cyan-700 pt-2 font-extrabold text-2xl"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="xl:mt-5mx-auto text-[3vh] lg:text-[2vh] lg:mx-0"
            >
              Nice to meet you. Please take a look around.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center my-8 mx-auto lg:mx-0 text-sm"
            >
              <div>
                <Link to="work" activeClass="active">
            
                  <Button btnText='My Projects' />
                </Link>
              </div>
              <a
                href="https://flowcv.com/resume/0psai9n22g"
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className="px-4 py-3 border-b-4 border-cyan-200 text-cyan-200 hover:text-white hover:bg-cyan-700
                  transition-all duration-200 w-[150px] xl:w-[200px] flex justify-center flex-row items-center text-base xl:text-xl"
                >
                  See my Resume
                  <HiArrowNarrowRight className="ml-3" />
                </div>
              </a>
            </motion.div>
            <div className="space-y-5 ">
              <a href="/" className="text-gradient btn-link md:mb-5">
                FIND ME ON
              </a>
              {/* {Socials} */}
              <div className="flex flex-wrap text-[20px] gap-2 max-w-max mx-auto justify-center md:justify-start lg:mx-0">
                {/* <a href="https://github.com/serverf21" target="_blank" rel="noreferrer">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/sarvagya-saxena-a8740195/" target="_blank" rel="noreferrer">
                  <FaLinkedin />
                </a>
                <a href="https://leetcode.com/user0367PG/" target="_blank" rel="noreferrer">
                  <SiLeetcode />
                </a>
                <a href="https://www.hackerrank.com/saxena_sarvagya1" target="_blank" rel="noreferrer">
                  <SiHackerrank />
                </a>
                <a href="https://www.codingninjas.com/studio/profile/b61adbc3-1a17-4936-9b8b-0f1c07b9282b" target="_blank" rel="noreferrer">
                  <SiCodingninjas />
                </a> */}
                <a
                  href="https://www.linkedin.com/in/md-mujahidul-islam/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white"
                    alt="LinkedIn Badge"
                  />
                </a>
                <a
                  href="https://www.upwork.com/freelancers/~0119e1d121c251c417"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://img.shields.io/badge/upwork-73bb44?style=for-the-badge&logo=upwork&logoColor=white"
                    alt="Upwork Badge"
                  />
                </a>
                <a
                  href="https://www.fiverr.com/s/2bG1rq"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://img.shields.io/badge/Fiverr-388E3C?style=for-the-badge&logo=fiverr&logoColor=white"
                    alt="Fiverr Badge"
                  />
                </a>

                <a
                  href="https://wa.me/+8801849100112"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://img.shields.io/badge/WhatsApp-075E54?style=for-the-badge&logo=whatsapp&logoColor=white"
                    alt="Whatsapp Badge"
                  />
                </a>
                <a
                  href="https://www.facebook.com/mujahidul.islam.90410/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white"
                    alt="Facebook Badge"
                  />
                </a>
                <a
                  href="skype:live:.cid.1a3f6e3d8988f339?chat"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://img.shields.io/badge/Skype-00AFF0?style=for-the-badge&logo=skype&logoColor=white"
                    alt="Skype Badge"
                  />
                </a>
              </div>
            </div>
          </motion.div>

          {/* {image} */}
          <div className="flex justify-center items-center align-middle mx-auto md:mb-12 lg:mb-0 md:mt-[6vh]">
            <motion.div
              variants={fadeIn("down", 0.5)}
              initial="hidden"
              whileInView={"show"}
              className="visible md:flex
          md:mx-auto justify-center mix-blend-lighten brightness-150 md:ml-[10vw] lg:ml-[15vw] xl:ml-[3vw]"
            >
              <Image src={MyImage} alt="" height={950} width={950} fluid />
            </motion.div>
          </div>
        </div>
      {/* </div> */}
    </section>
  );
};

export default Banner;
