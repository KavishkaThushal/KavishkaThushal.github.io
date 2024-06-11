
import { useRef } from 'react'
import './contact.scss'
import {motion} from 'framer-motion'
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
const contactVariants = {
    initial:{
        y:500,
        opacity:0
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            duration:0.5,
            staggerChildren:0.1
        }
    }
}

function Contact() {
   const formRef = useRef()

   const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_wp54dd8', 'template_yr6fc7a', formRef.current, {
        publicKey: 'nFfRSgOIOaDiEbHzo',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success('Message Sent Successfully',{ position: "bottom-right" });
          formRef.current.reset()
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <motion.div className='contact-wrapper' variants={contactVariants} initial='initial' whileInView='animate' >
        <motion.div className='contact-text' variants={contactVariants}>
            <motion.h1 variants={contactVariants}>Let's Turn Ideas into <span style={{color:'rebeccapurple'}}>Reality Together!</span> </motion.h1>
            <motion.div className='contact-item' variants={contactVariants}>
                <h3>Email</h3>
                <p>thushalrasingolla99@gmail.com</p>
            </motion.div>

            <motion.div className='contact-item' variants={contactVariants}>
                <h3>Address</h3>
                <p>33,Hamparawa,Diyathalawa Road Bandarawela</p>
            </motion.div>

            <motion.div className='contact-item' variants={contactVariants}>
                <h3>Phone</h3>
                <p>0703279293</p>
            </motion.div>

            
        </motion.div>
        <div className='contact-form'>
           
            <form ref={formRef } onSubmit={sendEmail}>
                <input type='text' placeholder='Name' name='name' required/>
                <input type='email' placeholder='Email' name='email' required/>
                <textarea placeholder='Message' name='message' rows={8}></textarea>
                <button type='submit'>Send</button>
            </form>
        </div>
    </motion.div>
  )
}

export default Contact