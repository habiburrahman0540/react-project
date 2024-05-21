import React, { useState } from 'react'
import "./menus.css"
import Categories from './Categories'
import Menu from './Menu'
import items from "./data.js"
const Menus = () => {
  const [menuItems,setMenuItems] = useState(items);
  const [categories,setCategories] = useState([]);
  return (
    <main className='menu_main'>
      <section className='menu menu_section'>
          <div className='title'>
              <h2>Our Menus</h2>
              <div className='underline'></div>
          </div>
          <Categories/>
          <Menu items={menuItems}/>
      </section>
    </main>
  )
}

export default Menus