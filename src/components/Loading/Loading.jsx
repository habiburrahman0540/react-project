import React from 'react'
import "./Loading.css"
const Loading = () => {
  return (
    <div className='bg'>
      <svg className="spinner" viewBox="0 0 50 50">
      <circle cx="25" cy="25" r="20" fill="none" />
    </svg>
    </div>
  )
}

export default Loading;