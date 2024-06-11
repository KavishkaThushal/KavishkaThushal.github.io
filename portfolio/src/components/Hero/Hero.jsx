import './hero.scss'
import HeroImg from '../../assets/meee.png'

import cv from '../../assets/cv.pdf'
import { motion} from 'framer-motion'    
import Tsparticles from '../Tsparticles/Tsparticles'

const textVariants={
    initial:{
        x:500,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildern:0.1,
        }
    },
    scrollBtn:{
        opacity:0,
        y:10,
        transition:{
          repeat:Infinity,
          duration:2,
         
        }
}
}
const sliderVariants={
    initial:{
        x:0,
       
    },
    animate:{
        x:"-220%",
       
        transition:{
            duration:20,
            repeatType:'mirror',
            repeat:Infinity,
        }
    },
  
}



const  roles=[
    'Frontend developer',
    'Backend developer',
    'Fullstack developer',
    'Graphic designer',
    'Freelancer'

]

function Hero() {
   
  return (
    <div className='hero'>
        <Tsparticles/>
        <div className='wrapper'>
        <motion.div className='text-container' variants={textVariants} initial='initial' animate='animate'>
            <motion.h2 variants={textVariants}>Hello, It's Me</motion.h2>
            <motion.h1 variants={textVariants}>Kavishka Thushal</motion.h1>
            <motion.h2 variants={textVariants}>And I'm a <span style={{color:'rebeccapurple'}}>
                  Web Developer
                </span></motion.h2>
            <motion.p>Crafting visually stunning and highly functional websites, I specialize in both frontend and backend development. With a passion for design and an eye for detail, I create seamless user experiences from concept to completion. Whether you need a dynamic web application or a captivating graphic design, I bring creativity and technical expertise to every project.</motion.p>    
            <motion.div variants={textVariants} className='buttons'>
                <motion.a  href={cv} download={cv} variants={textVariants} >Download CV</motion.a>
                <motion.a variants={textVariants} href='#contact' >Contact Me</motion.a>
                
            </motion.div>
            
        </motion.div>
        </div>
        <motion.div className='slidingText-container' initial="initial" animate='animate' variants={sliderVariants}>
            Frontend developer Backend developer Fullstack developer Graphic designer Freelancer
        </motion.div>
        <div className='image-container'>
            <img src={HeroImg} alt='' />
        </div>
        
    </div>
  )
}

export default Hero