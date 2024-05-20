import React, { useState } from 'react'
import "./accordion.css"
import data from "./data.js"
import Accordion from './Accordion.jsx'
const Accordions = () => {
  const [questions,setQuestions] = useState(data);
  return (
    <main className='accordion_main'>
        <div className='accordion_container'>
            <h3>Questions and answers about login</h3>
            <section className='accordion_info'>
                {questions.map((question)=>{
                    return <Accordion key={question.id} {...question}></Accordion>
                })}
            </section>
        </div>
    </main>
  )
}

export default Accordions