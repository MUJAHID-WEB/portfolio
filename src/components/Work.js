import React from "react";
//motion
import { motion } from "framer-motion";
//variant
import { fadeIn } from "../variants";
//component
import WorkCard from "./WorkCard";
import workData from "./workData";
import Button from "./Button";
// Work Experience
const Work = () => {
  return (
    <section className=" bg-cyan-950" id="work">
      <div className="container mx-auto align-middle py-[150px]">
        <div className="flex flex-col gap-x-10 gap-y-10 align-middle m-5">
          {/* Heading */}
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col gap-y-6 mb-2"
          >
            {/* {text} */}
            <div>
              <h2 className="h2 leading-tight text-cyan-500 lg:text-5xl font-tertiary text-center">
                My Latest Projects
              </h2>

              <p className="text-cyan-500 text-base text-center visible">
                Hover over the blocks to know more!
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="grid grid-cols-2 gap-10"
          >
           {
            workData.map((item, index)=>(
              <WorkCard key={index} project={item}/>
            ))
           }
        
          </motion.div>
        </div>
        <a href='https://github.com/MUJAHID-WEB' target="_blank" rel="noreferrer" className="flex justify-center items-center">
        <Button btnText='View all projects' className='my-14'/>
        </a>
      </div>
    </section>
  );
};

export default Work;
