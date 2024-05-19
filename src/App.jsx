import { useState } from 'react'
import {data} from "./data/data"
import './App.css'

function App() {
  const [persons, setPersons] = useState(data)
console.log(persons);
const handleClick =(id)=>{
    const p = persons.filter(x=>x.id !== id);
    console.log("p:",p);
    setPersons(p);
}
  return (
    <>
     {persons.map(person=>{
        const {id, name}=person;
        return <div key={id}>
              {name}
              <br />
              <button type='button' onClick={()=>handleClick(id)}  className='' style={{backgroundColor:"red",color:"white"}}>remove</button>
        </div>
     })}
      <button type='button'  className='' style={{backgroundColor:"blue",color:"white"}}>Add</button>
    </>
  )
}

export default App
