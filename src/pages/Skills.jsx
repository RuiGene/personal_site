import { Tooltip } from '@mui/material';
import React from 'react';
import {FaPython, FaSnowflake,FaHtml5, FaCss3Alt   } from "react-icons/fa";
import { SiRstudio, SiPostgresql, SiPowerbi, SiTableau, SiDbt, SiJavascript, SiGrafana, SiAzuredevops    } from "react-icons/si";

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className=' w-full flex justify-center items-center flex-col mb-7'>
              <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center '>Skills</p>
              <p className='py-4 text-2xl'>I enjoy diving into and learning new things. Here's a list of technologies I've worked with:</p>
          </div> 
          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className=' hover:scale-110 duration-500 flex items-center justify-center'>
                <Tooltip title = "Python">
                  <FaPython size={100}/>
                </Tooltip>
              </div>
              <div className=' hover:scale-110 duration-500 flex items-center justify-center'>
                <SiRstudio size={100}/>
              </div>
              <div className=' hover:scale-110 duration-500 flex items-center justify-center'>
                <SiPostgresql size={100}/>
              </div>
              <div className=' hover:scale-110 duration-500 flex items-center justify-center'>
                <SiPowerbi size={100}/>
              </div>
              <div className=' hover:scale-110 duration-500 flex items-center justify-center'>
                <SiTableau  size={100}/>
              </div>
              <div className=' hover:scale-110 duration-500 flex items-center justify-center'>
                <FaSnowflake  size={100}/>
              </div>
              <div className=' hover:scale-110 duration-500 flex items-center justify-center'>
                <SiDbt  size={100}/>
              </div>
              <div className=' hover:scale-110 duration-500 flex items-center justify-center'>
                <SiJavascript  size={100}/>
              </div>
              <div className=' hover:scale-110 duration-500 flex items-center justify-center'>
                <FaHtml5    size={100}/>
              </div>
              <div className=' hover:scale-110 duration-500 flex items-center justify-center'>
                <FaCss3Alt   size={100}/>
              </div>
              <div className=' hover:scale-110 duration-500 flex items-center justify-center'>
                <SiGrafana   size={100}/>
              </div>
              <div className=' hover:scale-110 duration-500 flex items-center justify-center'>
                <SiAzuredevops    size={100}/>
              </div>
          </div>
      </div>
    </div>
  );
};
export default Skills;