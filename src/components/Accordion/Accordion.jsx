// Accordion.jsx
import React from 'react';
import "./accordion.css";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Accordion = ({ title, info, isOpen, toggleAccordion }) => {
  return (
    <article className='accordion_question'>
      <header>
        <h4>{title}</h4>
        <button onClick={toggleAccordion} className='accordion_btn'>
          {isOpen ? <AiOutlineMinus/> : <AiOutlinePlus/>}
        </button>
      </header>
      {isOpen && <p>{info}</p>}
    </article>
  );
};

export default Accordion;
