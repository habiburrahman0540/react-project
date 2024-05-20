import React from 'react'
import './review.css'
import {FaQuoteRight} from "react-icons/fa"
const Review = ({name,job,image,text}) => {
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
    </article>
  )
}

export default Review