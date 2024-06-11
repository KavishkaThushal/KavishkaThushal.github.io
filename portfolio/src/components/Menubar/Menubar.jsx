import { useState } from 'react';
import Links from './Links/Links';
import Toggle from './Toggle/Toggle';
import './menubar.scss'
import {delay, motion} from 'framer-motion'

// import { SiAboutdotme } from "react-icons/si";
// const menuItem=[
//     {name:'Home',icon:<GoHomeFill />}
//     {name:'Home',icon:<SiAboutdotme />}
//     {name:'Home',icon:<GoHomeFill />}
//     {name:'Home',icon:<GoHomeFill />}
// ]



function Menubar() {
  const [open,setOpen]=useState(false)
 
  const variant={
    open:{
      clipPath:"circle(1200px at 50px 50px)",
      transition:{
        type:"spring",
        stiffness:20,
      }
    },
    closed:{
      clipPath:"circle(0px at 50px 50px)",
      transition:{
        
        type:"spring",
        stiffness:400,
        damping:40,
      }
    }
  }
  return (
    <motion.div className='side-bar' animate={open ? "open":"closed"}>
      <motion.div className='bg' variants={variant}>
        <Links/>
      </motion.div>
      <Toggle open={open} setOpen={setOpen}/>
    </motion.div>
  )
}

export default Menubar