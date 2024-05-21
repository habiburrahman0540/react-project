// Accordions.jsx
import React, { useState } from 'react';
import "./accordion.css";
import data from "./data.js";
import Accordion from './Accordion.jsx';

const Accordions = () => {
  const [questions, setQuestions] = useState(data);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <main className='accordion_main'>
      <div className='accordion_container'>
        <h3>Questions and answers about login</h3>
        <section className='accordion_info'>
          {questions.map((question, index) => {
            return (
              <Accordion
                key={question.id}
                isOpen={index === openIndex}
                toggleAccordion={() => toggleAccordion(index)}
                {...question}
              />
            );
          })}
        </section>
      </div>
    </main>
  );
};

export default Accordions;
