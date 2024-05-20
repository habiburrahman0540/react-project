import React from 'react'
import './review.css'
import {FaChevronLeft, FaChevronRight, FaQuoteRight} from "react-icons/fa"
const Review = ({name,job,image,text,prevButton,nextButton}) => {
  return (
    <article className='review'>
        <div className='img-container'>
            <img src={image} alt={name} className='person-img' />
            <span className='quote-icon'>
                <FaQuoteRight/>
            </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='text'>{text}</p>
        <div className='button-container'>
            <button onClick={prevButton} className='prev-btn'>
                <FaChevronLeft/>
            </button>
            <button onClick={nextButton} className='next-btn'>
                <FaChevronRight/>
            </button>
        </div>
        <button className='random-btn'>Surprise Me</button>
    </article>
  )

}

export default Review