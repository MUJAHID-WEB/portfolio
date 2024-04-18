import React from "react";
//motion
import { motion } from "framer-motion";
//variant
import { fadeIn } from "../variants";

export default function EducationCard({eduexp}) {
    const {time, title, company, certificateLink} = eduexp;
  return (
    <>
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="education-content relative pl-[2rem] my-[1vh]"
      >
        <div className="content relative p-[1rem] bg-gray-900 shadow-slate-800 shadow-sm bg-opacity-50 rounded-lg mb-2 font-light">
          <div className="year flex flex-row items-center text-sm text-gradient font-tertiary">
            <img
              className="max-h-[30px] pr-[1rem]"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAThJREFUaEPtWcENgzAMND8yRjYpk7WdrGzCGOTXKqhINIIY4wgT9fJCIo59d+Ei4oYqH03l9RMAWCt4WIGxHd7L4l3worW08XNuUdJlwdoCtPEAoGVQG79LgbEdbkR0/06Oz2ePpwv+kUua/QZSls6ufpGvc8H3a/k3AYztEJHP7BvWPqXuXfCdFMCPTRojqB4AbZ0zuS10JQX0AKQnrXbL7bXZ3QoAgFASKHChQ2zSDi4k3MLFp0OB4pQKF4QCKWEpI5xvS99z+dgfGs5GASC5xZASBgWEJqKeDhdSU6hcAApwviz1ec6GuXxwIY5B7XsowJ2MSlMRh8OFxJQVDvhLBV5EZNETWNXuiAJXArDZ6MhdLUb2IwjzkbvWZLuUho2OuSMT2V/tzkRmWQDm9DMFAIC1QtUr8AE8WCdAvpj18wAAAABJRU5ErkJggg=="
              alt=""
            />
            {time}
          </div>
          <a
        href={certificateLink}
        target="_blank"
        rel="noreferrer"
      >
          <h4 className="h3 mb-0 text-xl">{title}</h4>
          </a>
          <p>{company}</p>
          {/* <p className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis quis magni recusandae officia dicta praesentium.</p> */}
        </div>
      </motion.div>
    </>
  );
}
