import React from 'react'
import "./menus.css"
const Categories = ({categories,filterCategory,values}) => {

  return (
    <div className='btn-container'>
        {categories.map((item,index)=>{
            return <button type='button' key={index} className={`filter-btn ${values === item && 'filter-selected'} `} onClick={()=>filterCategory(item)}>{item}</button>
        })}
        
    </div>
  )
}

export default Categories