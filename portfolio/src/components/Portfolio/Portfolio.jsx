import { useRef } from 'react'
import './portfolio.scss'
import {motion,useScroll,useSpring, useTransform} from 'framer-motion'
import Sample from '../../assets/sample.jpg'
import Rodha from '../../assets/rodha.png'
import Food from '../../assets/food.png'
import FilmReel from '../../assets/film.png'
import Estate from '../../assets/estate.png'
import NexPay from '../../assets/nexpay.jpg'

const items=[
    {
        id:1,
        title:"RODHA",
        img:Rodha,
        desc:"Rodha is a comprehensive MERN stack web application designed for buying and selling vehicles. This platform provides a user-friendly interface where individuals can effortlessly create advertisements to sell their vehicles. Whether you're selling a car, motorcycle, truck, or any other type of vehicle, Rodha offers a streamlined process to reach potential buyers.",
        link:'https://github.com/KavishkaThushal/Rodha'
    },
    {
        id:2,
        title:"MR FOOD",
        img:Food,
        desc:"Mr. Food Mr. Food is a comprehensive food delivery web application developed using the MERN stack (MongoDB, Express.js, React, Node.js). This application allows users to browse a diverse selection of dishes, place orders, and enjoy a seamless food delivery experience.",
        link:'https://github.com/KavishkaThushal/Mr-Food'
    },
    {
        id:3,
        title:"NEXPAY",
        img:NexPay,
        desc:"NexPay is a cutting-edge digital payment application designed to revolutionize how users manage their financial transactions. With a focus on convenience, security, and versatility, NexPay offers a user-friendly experience for individuals seeking an efficient solution for their everyday payments.",
        link:'https://github.com/KavishkaThushal/NexPay',
    },
    {
        id:4,
        title:"DREAM HOME",
        img:Estate,
        desc:"Our platform aims to simplify the process of buying and selling residences by providing a user-friendly interface for users to browse available properties, schedule visits, and list their own properties for sale.",
        link:'https://github.com/KavishkaThushal/Estate'
    },
    {
        id:5,
        title:"FILM REEL",
        img:FilmReel,
        desc:"Film Reel is an advanced Next.js web application designed to provide comprehensive information about movies. This platform serves as a go-to source for movie enthusiasts, offering details on the latest releases, popular films, cast information, and ratings.",
        link:'https://github.com/KavishkaThushal/Film-Reel'
    }
]


function Portfolio() {
    const ref=useRef()
    
    const {scrollYProgress}=useScroll({
        target:ref,
        offset:["end end","start start"]
    })
  const scaleX=useSpring(scrollYProgress, {stiffness:100,damping:30})

  return (
    <div className='portfolio-wrapper' ref={ref}>
        <div className='portfolio-text-content'>
            <h1>Featured Works</h1>
            <motion.div style={{scaleX}} className='progress-bar'></motion.div>

        </div>
     {items.map((items,i)=>{
           
            return(
                <section  key={items.id} >
                    <div className='item-wraper'>
                        <div className='item-container'>
                        <div className='item-img-container' >

                        
                        <img src={items.img} alt=""/>
                        </div>
                        <div className='item-text' >
                            <h2 >{items.title}</h2>
                            <p>{items.desc}</p>
                            <a href={items.link} >View Project</a>
                        </div>
                    </div>
                
                </div>
                </section>
             )
     })}
    </div>
  )
}

export default Portfolio