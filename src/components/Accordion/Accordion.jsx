import React, { useState } from 'react'
import "./accordion.css"
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
const Accordion = ({title,info}) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className='accordion_question'>
        <header>
            <h4>{title}</h4>
            <button onClick={()=>setShowInfo(!showInfo)} className='accordion_btn'>
              {showInfo ? <AiOutlineMinus/> : <AiOutlinePlus/>}
            </button>
        </header>
        {showInfo && <p>{info}</p>}
        
    </article>
  )
}

export default Accordion