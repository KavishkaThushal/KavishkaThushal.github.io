import './about.scss'
import AboutImg from '../../assets/meee.png'
import { motion } from 'framer-motion'
function About() {

const aboutContentvariant={
    initial:{
        x:30,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:3,
            staggerChildern:0.1,
        }
    }
}

const aboutImgvariant={
    initial:{
        x:-100,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildern:0.1,
        }
    }
}

  return (
    <div className='about-wrapper'>
        <div className='about-container'>
            <motion.div className='about-img' initial='initial' whileInView='animate' variants={aboutImgvariant}>
                <motion.img src={AboutImg} alt='' variants={aboutImgvariant}/>
            </motion.div>

            <motion.div className='about-content' initial='initial' whileInView='animate' variants={aboutContentvariant}>
                <motion.div className='about-title' variants={aboutContentvariant}>
                    <motion.h1 variants={aboutContentvariant}>About <span>Me</span></motion.h1>
                    <motion.h3 variants={aboutContentvariant}>Fullstack Developer</motion.h3>
                </motion.div>
                
                <motion.p variants={aboutContentvariant}>Hello! I'm Kavishka Thushal Rasingolla, currently an undergraduate student at Sabaragamuwa University of Sri Lanka, pursuing a Bachelor of Science Honours degree in Information Systems. Hailing from the beautiful town of Bandarawela, I am passionate about web development and technology.

                As a Full Stack Developer, I have honed my skills in creating dynamic and responsive web applications. My expertise lies in using technologies such as React, Node.js, Express.js, MongoDB, Python, and JavaScript. These tools allow me to build robust and scalable applications that provide excellent user experiences.

                I pride myself on my leadership abilities, strong teamwork skills, and problem-solving capabilities. These qualities enable me to effectively collaborate with others and tackle complex challenges efficiently. Whether working on individual projects or as part of a team, I strive to deliver high-quality results and innovative solutions.

                Beyond my technical skills, I am dedicated to continuous learning and growth in the field of information systems. My goal is to leverage my knowledge and experience to contribute positively to the tech industry and make a meaningful impact through my work.</motion.p>
            </motion.div>
        </div>
    </div>
  )
}

export default About