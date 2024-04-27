//tech I have worked on
import { React } from "react";
import "../index.css";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import SkillName from "./SkillName";

// Remove bars and put circular icons divided by sections

const Skills = () => {
  return (
    <section className="section min-h-fit top-0 pt-10" id="skills">
      <div className="container mx-auto align-middle">
        <div className="md:gap-x-5 gap-y-6 md:gap-y-2 align-middle gap-x-10">
          {/* <!--   *******  Main Heading Starts  *******   --> */}
          <motion.div
            variants={fadeIn("top", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="container main-title flex text-center justify-center flex-col mb-12"
          >
            <h1 className="h1 text-cyan-500 text-5xl font-primary">
              MY SKILLS
            </h1>

            <p>Elevating Skills, One Tech at a Time.</p>
          </motion.div>

          <div className="main-container flex justify-center flex-col lg:flex-row lg:gap-5 md:flex-col top-0">
            {/* Left Container */}
            <motion.div
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="sm:mx-auto flex justify-start flex-col align-top bg-gray-900 border rounded-xl p-10"
            >
              <motion.div 
              variants={fadeIn("down", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
              className="lg:max-w-[30vw] lg:min-w-[25vw]">
                <h2 className="title-text">Web Development</h2>

                <div className="flex flex-row flex-wrap justify-center">
                  <SkillName name='React.Js'/>
                  <SkillName name='Next.Js'/>
                  <SkillName name='TypeScript'/>
                  <SkillName name='Tailwind CSS'/>
                  <SkillName name='SASS'/>
                  <SkillName name='HTML5'/>
                  <SkillName name='CSS3'/>
                  <SkillName name='JavaScript'/>
                  <SkillName name='Flutter'/>
                  {/* <SkillName name='Storybook'/> */}
                </div>
              </motion.div>

              <motion.div
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="lg:max-w-[30vw] lg:min-w-[25vw]"
              >
                <h1 className="title-text">Animation</h1>

                <div className="flex flex-row flex-wrap justify-center">
                {/* <SkillName name='React Spring'/>
                <SkillName name='Anime.Js'/>
                <SkillName name='Pixi.Js'/> */}
                <SkillName name='Framer Motion'/>

                
                </div>
              </motion.div>
            </motion.div>

            {/* Mid Container */}
            <div className="sm:mx-auto flex justify-start flex-col align-middle p-10">
            <motion.div
                variants={fadeIn("down", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.5 }}
                className="lg:max-w-[30vw] lg:min-w-[25vw]"
              >
                <div className="lg:max-w-[30vw] lg:min-w-[25vw]">
                  <h1 className="title-text">UI FrameWork</h1>

                  <div className="flex flex-row flex-wrap justify-center">
                  <SkillName name='Material UI'/>
                  <SkillName name='Ant Design'/>
                  <SkillName name='React BootStrap'/>
                  {/* <SkillName name='Chakra UI'/>
                  <SkillName name='Storybook'/>
                  <SkillName name='React BootStrap'/> */}
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="lg:max-w-[30vw] lg:min-w-[25vw]"
              >
                <h1 className="title-text">State & API Management</h1>

                <div className="flex flex-row flex-wrap justify-center">
                <SkillName name='Redux'/>
                {/* <SkillName name='MobX'/> */}
                <SkillName name='Context API'/>
                {/* <SkillName name='Zustand'/> */}
                {/* <SkillName name='React-query'/> */}
                <SkillName name='REST API'/>
                {/* <SkillName name='GraphQL'/> */}
                </div>
              </motion.div>
              

              <motion.div
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="lg:max-w-[30vw] lg:min-w-[25vw]"
              >
                <h1 className="title-text">Version Control</h1>

                <div className="flex flex-row flex-wrap justify-center">
                <SkillName name='Git'/>
                <SkillName name='GitHub'/>
                {/* <SkillName name='GitLab'/> */}
                {/* <SkillName name='BitBucket'/> */}
                </div>
              </motion.div>

              
            </div>

            {/* Right Container */}
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="sm:mx-auto flex justify-start flex-col align-top p-10"
            >
            <motion.div
                variants={fadeIn("down", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.5 }}
                className="lg:max-w-[30vw] lg:min-w-[25vw]"
              >
                <div className="lg:max-w-[30vw] lg:min-w-[25vw]">
                  <h1 className="title-text">Cloud/Databases</h1>

                  <div className="flex flex-row flex-wrap justify-center">
                  <SkillName name='Firebase'/>
                  <SkillName name='MongoDB'/>
                  {/* <SkillName name='DynamoDB'/> */}
                  {/* <SkillName name='Supabase'/> */}
                  {/* <SkillName name='PostgreSQL'/> */}
                  </div>
                </div>
              </motion.div>
              <div className="lg:max-w-[30vw] lg:min-w-[25vw]">
                <h1 className="title-text">Headless CMS</h1>
                <div className="flex flex-row flex-wrap justify-center">
                <SkillName name='Contentful'/>
                <SkillName name='Sanity'/>
                <SkillName name='Strapi'/>
                {/* <SkillName name='Wordpress'/>
                <SkillName name='Payload'/> */}
                </div>
              </div>

              {/* <div className="lg:max-w-[30vw] lg:min-w-[25vw]">
                <h1 className="title-text">Testing</h1>
                <div className="flex flex-row flex-wrap justify-center">
                <SkillName name='Mocha'/>
                <SkillName name='Jest'/>
                <SkillName name='Cypress'/>
                </div>
              </div> */}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;




