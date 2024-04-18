import React from "react";

export default function WorkCard({project}) {

    const {workLink, imageUrl, title, tech, description} = project;
  return (
    <div className="group relative overflow-hidden border-2 border-white/50 rounded-lg">
      <a
        href={workLink}
        target="_blank"
        rel="noreferrer"
      >
        {/* Overlay */}
        <div className="bg-black/30 group-hover:bg-black/80 w-full h-full absolute z-30 transition-all duration-300"></div>
        {/* img */}
        <img
          className="scale-100 group-hover:scale-150 transition-all duration-500"
          src={imageUrl}
          alt=""
        />

        <div className="absolute -bottom-full left-4 group-hover:bottom-4 transition-all duration-500 z-40">
          {/* pretitle */}
          <div className="text-gradient md:text-xl text-sm">{title}</div>
          {/* title */}
          <div className=" md:text-sm text-gradient text-xs">
            {tech}
          </div>
          <div className=" md:text-sm text-white text-sm">
            {description}
          </div>
        </div>
      </a>
    </div>
  );
}
