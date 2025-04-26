import React from 'react'
import { PROJECTS } from '../constants'
import {motion} from 'framer-motion'
import { FaGithubSquare } from 'react-icons/fa'

const Projects = () => {
  return (
    <>
    <div className='pb-4'>
        <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-20 text-4xl text-center'>Projects</motion.h2>
    </div>
    <div>
        {PROJECTS.map((project,index)=>(
            <div key={index} className='mb-10 flex flex-wrap lg:justify-center'>
                <motion.div 
                 whileInView={{ opacity: 1, x: 0 }}
                 initial={{ opacity: 0, x: -100 }}
                 transition={{ duration: 1 }}
                className='w-full lg:w-1/3 cursor-pointer'>
                 <a href={project.live}>
                  <img src={project.image} alt={project.title} 
                   width={350}
                   height={300}
                   className='mb-6 rounded ' />
               </a>
                </motion.div>
                <motion.div 
                 whileInView={{ opacity: 1, x: 0 }}
                 initial={{ opacity: 0, x: 100 }}
                 transition={{ duration: 1 }}
                className='w-full max-w-xl lg:w-3/4'>
                    <h3 className='font-semibold text-2xl mb-2'>{project.title}</h3>
                    <p className='mb-4 text-stone-400 '>{project.description}</p>
                     {project.technologies.map((tech,index)=>(
                        <span key={index} className='mr-2 rounded bg-stone-900 p-2 text-sm 
                        font-medium  text-stone-300'>{tech}</span>
                     ))} 
                    
                    <div className='flex font-bold mt-4 text-gray-300 '>
                   GitHub : <a className='pl-1' href={project.gitHub}> <FaGithubSquare className='text-2xl '/></a>   
                    </div>
                    
                    <div className='mt-4 text-gray-300 font-bold'>Live :
                      <a
                       target="_blank"
                      rel="noopener noreferrer"
                      className='inline-flex items-center text-white hover:underline'
                    href={project.live}> {project.projectName}</a>
                    </div>

                </motion.div>
            </div>
        ))}
    </div>
    </>
  )
}

export default Projects