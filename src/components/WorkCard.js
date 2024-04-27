import React, { useState } from "react";
import ReactPlayer from "react-player";
import Button from "./Button";

export default function WorkCard({ project }) {
  const { workLink, imageUrl, videoUrl, title, tech, description } = project;
  const [showVideo, setShowVideo] = useState(false);

  const watchDemo = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  const handleClickForVideo = () => {
    setShowVideo(true);
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
  };

  return (
    <>
      <div>
        <div className="group relative overflow-hidden border-2 border-white/50 rounded-lg">
          {/* Overlay */}
          <div className="bg-black/30 group-hover:bg-black/80 w-full h-full absolute z-30 transition-all duration-300"></div>

          <img
            className="scale-100 group-hover:scale-150 transition-all duration-500"
            src={imageUrl}
            alt=""
          />

          <div className="absolute -bottom-full left-4 group-hover:bottom-4 transition-all duration-500 z-40">
            <a href={workLink} target="_blank" rel="noreferrer">
              <div className="text-gradient md:text-xl text-sm">{title}</div>

              <div className=" md:text-sm text-gradient text-xs">{tech}</div>

              <div className=" md:text-sm text-white text-sm">
                {description}
              </div>
            </a>
          </div>

       
        </div>

        <div className="flex flex-row gap-3 justify-center">
          <Button
            role="link"
            onClick={() => watchDemo(workLink)}
            btnText="Live Preview"
            className='mt-3'
         />
            
   
          {videoUrl && (
            <Button
              onClick={handleClickForVideo}
              className="mt-3"
              btnText='Watch Video'
            />
              
           
          )}

          {showVideo && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-50">
              <div className="bg-gray-500 p-8 rounded-lg shadow-lg">
                <ReactPlayer url={videoUrl} controls />
                <button
                  className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md"
                  onClick={handleCloseVideo}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
