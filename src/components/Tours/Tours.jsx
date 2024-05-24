import React,{useEffect,useState} from 'react'
import Loading from '../Loading/Loading';
import Tour from './Tour';
const url = "https://www.course-api.com/react-tours-project";
const Tours = () => {
  const [loading,setLoading] = useState(true);
  const [tours,setTours]=useState([]);
  const fetchTours = async()=>{
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setLoading(false);
      setTours(data);
    } catch (error) {
      console.log(error);
    }
      

  }
  const removeTour = (id)=>{
        const newTour = tours.filter((tour)=>tour.id !== id);
        setTours(newTour);
  }
  useEffect(()=>{
    fetchTours();
  },[]);
  if(loading){
    return <main>
      <Loading/>
    </main>
  }
if(tours.length === 0){
  return <main>
    <div className='title'>
        <h2>No Tour Left</h2>
        <button className='btn' onClick={()=>fetchTours()}>Refresh Tour</button>
    </div>
  </main>
}
  return (
    <section>
      <div className='title'>
          <h2>Our Tours</h2>
          <div className='underline'></div>
      </div>
      <div>
        {tours.map((tour)=>{return<Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>}
          )}
      </div>
    </section>
  )
}

export default Tours