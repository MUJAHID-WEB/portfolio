import { React } from "react";
import "../index.css";
import EducationCard from "./EducationCard";
import EducationData, { ExperienceData } from "./EducationData";

const Education = () => {
  return (
    <section className="section" id="education">
      <div className="container mx-auto">
        <div className="gap-x-40 gap-y-10 mb-6 lg:mb-20 lg:p-5">
          <div className="flex flex-col lg:flex-row justify-center items-center">
            {/* Both education and experience */}
            <div
              className="education-row
            flex flex-wrap gap-[5rem] m-10"
            >
              <div className="column-row flex-1 lg:mr-10">
                <h2 className="h2 text-cyan-500 title-[2.5rem] m-[1rem] mb-[2vh]">
                  Certifications
                </h2>
                <div className="education-box border-l-2 border-opacity-40 border-l-cyan-800">
                  {EducationData.map((item, index) => (
                    <EducationCard key={index} eduexp={item} />
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div className="column-row flex-1 lg:ml-10">
                <h2 className="h2 text-cyan-500 title-[2.5rem] m-[1rem] mb-[2vh]">
                  Experience
                </h2>
                <div className="education-box border-l-2 border-opacity-40 border-l-cyan-800 mr-5">
                  {ExperienceData.map((item, index) => (
                    <EducationCard key={index} eduexp={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Certifications */}

          <div className="flex align-middle text-center justify-center">
            <a
              href="https://drive.google.com/drive/folders/1Pd-VHo86ejG50XTBIgrIThCJo7e7pNCi?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <button
                className="btn btn-sm
                            hover:text-blue-950 hover:shadow-[inset_25rem_0_0_0] hover:shadow-[#A0C1D1] duration-[400ms,700ms]
                            transition-[color,box-shadow] border-b-4 border-l-2 shadow-lg border-blue-700"
              >
                <div className="px-10 md:text-lg">See my Certifications</div>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
