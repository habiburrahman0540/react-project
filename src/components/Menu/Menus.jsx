import React, { useState } from 'react'
import "./menus.css"
import Categories from './Categories'
import Menu from './Menu'
import items from "./data.js"

const allCategories = ["all",...new Set(items.map((cat=>cat.category)))];

const Menus = () => {
  const [menuItems,setMenuItems] = useState(items);
  const [categories,setCategories] = useState(allCategories);
  const filterCategory = (category)=>{
    if(category === "all"){
      setMenuItems(items);
      return;
    }
        const newCat = items.filter((item)=>item.category === category);
        setMenuItems(newCat);
  }
  return (
    <main className='menu_main'>
      <section className='menu menu_section'>
          <div className='title'>
              <h2>Our Menus</h2>
              <div className='underline'></div>
          </div>
          <Categories categories={categories} filterCategory={filterCategory}/>
          <Menu items={menuItems}/>
      </section>
    </main>
  )
}

export default Menus