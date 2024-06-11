import { useEffect } from 'react';
import './skills.scss'
import {motion, useAnimation} from 'framer-motion'

const progressVariants = {
    initial: {
      scaleX: 0,
      opacity: 0,
      transformOrigin: 'left',
    },
    animate: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 1,
        
        staggerChildren: 0.1,	
      },
    },
  };

  


  const skills = [
    { name: 'REACT', width: '90%' },
    { name: 'REACT NATIVE', width: '90%' },
    { name: 'CSS/SCSS', width: '89%' },
    { name: 'NODE JS', width: '86%' },
    { name: 'TAILWIN CSS', width: '40%' },
    { name: 'MONGODB', width: '80%' },
    { name: 'PYTHON', width: '50%' },
    { name: 'NEXT JS', width: '40%' },
    { name: 'REDUX', width: '40%' },
   
    { name: 'FIGMA', width: '90%' },
    { name: 'JAVA SCRIPT', width: '70%' },

    
    // Add more skills as needed
  ];

  const professionalSkills = [
    { name: 'Leadership', percent: '85%' },
    { name: 'Team Work', percent: '80%' },
    { name: 'Problem solving', percent: '60%' },
    { name: 'Time management', percent: '70%' },
    { name: 'Creativity', percent: '65%' },
  ]

function Skills() {
  
  
  return (
    <div className='skill-wrapper'>
        <div className='text-container'>
        
            <h1>My Expertise & Skills</h1>
        </div>
        <h2 className='sub-title'>Technology Skills</h2>
        <div className='skills'>
        {skills.map((skill, index) => (
            <span className='skill' key={index}>
            <p>{skill.name}</p>
            <div className='skill-bar'>
            <motion.div
            className="skill-progress"
            initial="initial"
            whileInView="animate"
            variants={progressVariants}
            style={{ width: skill.width }}
          />
            </div>
        </span>


        ))}

            

           
        </div>
        <h2 className='sub-title pro'>Professional Skills</h2>
        <div className='professional-container'>

            {professionalSkills.map((skill, index) => {
                 let percent=parseInt(skill.percent)
                    const professionalVariants = {
                        initial: {
                            strokeDashoffset:0 ,
                            
                          },
                          animate: {
                            strokeDashoffset:472 * (100 - percent) / 100 ,
                            
                            transition: {
                              duration: 1.2,
                             
                            },
                          },
                      }

                return(
                    <span className='professional' key={index}>
                    <div className='outer-border'>
                        <div className='inner-border'></div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" version='1.1'
                    width='160px' height='160px'>
                        
                    <motion.circle
                        initial='initial'
                        whileInView='animate'
                        variants={professionalVariants}
                    
    
                    cx='80' cy='80' r='70' strokeLinecap='round' 
                        style={{
                        fill: 'none',
                        stroke: 'rebeccapurple',
                        strokeWidth: '20px',
                        strokeDasharray: '472',
                        
                        
                        }}></motion.circle>
                 
                 
                    </svg>
                    <p>{skill.name}</p>
                </span>
    
                )

            })}
            
        </div>
    </div>
  )
}

export default Skills