import './navbar.scss'
import FaceBook from '../../assets/fac.png' 
import Instergram from '../../assets/ins.png' 
import Linkdin from '../../assets/lin.png' 
import Github from '../../assets/git.png' 
import {motion} from 'framer-motion'
import Menubar from '../Menubar/Menubar'
function Navbar() {
  return (
    <div className='navbar '>
        <div className='wrapper'>
          <Menubar/>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'100%' }}>
            <motion.span
            initial={{opacity:0,scale:0.5}}
            animate={{opacity:1,scale:1}}
            transition={{duration:0.5}}
            >Kavishka Thushal</motion.span>
            <div className='social-icons'>
                <a href='https://www.facebook.com/profile.php?id=61553409470599&mibextid=ZbWKwL'><img src={FaceBook} alt=''/></a>
                <a href='https://www.instagram.com/kavishkathushal?igsh=MW9qMmwwcGNpanNlMQ=='><img src={Instergram} alt=''/></a>
                <a href='https://www.linkedin.com/in/kavishka-thushal-rasingolla19b348245'><img src={Linkdin} alt=''/></a>
                <a href='https://github.com/KavishkaThushal'><img src={Github} alt=''/></a>
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default Navbar