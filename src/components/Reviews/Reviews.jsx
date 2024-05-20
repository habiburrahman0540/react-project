import React, { useState } from 'react'
import Review from './Review'
import people from './data.js'
import './review.css'
const Reviews = () => {
  const [index,setIndex] = useState(1);
  const {name,job,image,text} = people[index];
  const prevButton =()=>{

  }
  const nextButton=(index)=>{
      const newIndex = index + 1;
      return newIndex;
  }
  return (
    <main className='container'>
        <div className='title'>
            <h2>Our Reviews</h2>
            <div className='underline'></div>
        </div>
        <Review name={name} image={image} text={text} job={job} prevButton={prevButton} nextButton={nextButton} />
    </main>
  )
}

export default Reviews