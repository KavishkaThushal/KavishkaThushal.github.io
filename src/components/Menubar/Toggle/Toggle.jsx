import React from 'react'
import './toggle.scss'
import { PiDotsNineBold } from "react-icons/pi";
import { IoClose } from "react-icons/io5";
function Toggle({ open,setOpen }) {
  return (
    <button className='toggle-btn' onClick={() => setOpen(prev => !prev)}>
      {open? <IoClose />:<PiDotsNineBold/>}
    </button>
  );
}

export default Toggle;
