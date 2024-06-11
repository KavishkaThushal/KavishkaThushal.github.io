import { useRef } from 'react'
import './parallax.scss'
import {motion,useScroll,useTransform} from 'framer-motion'
import Planet from '../../assets/planets.png'
import Sun from '../../assets/sun.png'
function Parallax({type}) {
    const ref=useRef()
    const {scrollYProgress} = useScroll({
        target: ref,
        offset:["start start","end start"],
        
    })
    const transText=useTransform(scrollYProgress,[0,1],["0%","500%"])
    const transBg=useTransform(scrollYProgress,[0,1],["0%","100%"])

  return (
    <div  
    ref={ref}
    className='parallax' style={{ background: type === 'skills' ? 'linear-gradient(180deg, #111132, #0c0c1d)' : 'linear-gradient(180deg, #111132, #505064)' }}>
        <motion.h1 style={{y:transText}} transition={{ duration: 2 }} >{type==='skills'? 'What are my Skills?':'What I Did?'}</motion.h1>
        <motion.div transition={{ duration: 2 }} className='mountains'></motion.div>
        <motion.div transition={{ duration: 2 }} style={{y:transBg,backgroundImage:`url(${type === "skills" ? Planet:Sun})`}}  className='planets'></motion.div>
        <motion.div  transition={{ duration: 2 }} style={{x:transBg}}  className='stars'></motion.div>
    </div>
  )
}

export default Parallax