import React from "react";

const About = () => { 
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                About Me
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>
                Hi. I'm Daniel Yang, nice to meet you. Feel free to take a look around.
              </p>
            </div>
            <div>
              <p>
                {" "}
                I'm an aspiring Data Engineer with a background as a Data Analyst at Squirrel and a Technology Insights Analyst at 2degrees.
                I have a strong interest in both finance and data, where I currently serve as an Equity Analyst at UAIC on top of managing my own porfolio.
                I am Eager to contribute my skills to cutting-edge projects in data engineering and financial analytics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;