import React, { useState } from 'react'
import Review from './Review'
import people from './data.js'
import './review.css'
const Reviews = () => {
  const [index,setIndex] = useState(1);
  const {name,job,image,text} = people[index];
  const checkNumber =(number)=>{
    if(number > people.length -1){
      return 0;
    }
    if(number < 0){
      return people.length -1
    }
      return number;
  }
  const prevButton =()=>{
    setIndex((index)=>{
      const newIndex = index - 1;
      return checkNumber(newIndex);
    });
  }
  const nextButton=()=>{
    setIndex((index)=>{
      const newIndex = index + 1;
      return checkNumber(newIndex);
    });
     
  }
  const randonPerson = ()=>{
    let randomNumber = Math.floor(Math.random() * people.length );
    if(randomNumber === index){
       randomNumber = index + 1;
    }
     setIndex(checkNumber(randomNumber));
  }
  return (
    <main className='container'>
        <div className='title'>
            <h2>Our Reviews</h2>
            <div className='underline'></div>
        </div>
        <Review name={name} image={image} text={text} job={job} prevButton={prevButton} nextButton={nextButton} randonPerson={randonPerson} />
    </main>
  )
}

export default Reviews