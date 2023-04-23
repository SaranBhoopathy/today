import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'


const Home = () => {
    


    
        
  return (
    <div className='mainAlert'>
    <div className='Alert'>
        
        
      <Marquee id="scroll"  pauseOnHover direction='right'   speed={250} 
      > WELCOME TO ToDo-List App</Marquee> 


    <br/>
    <button id="buttonlink"><Link to={'/Task'} >
    
         <center>  <h1> Click Here To Open App</h1></center></Link>
    </button>
 </div>
    
    </div>
       
  )
}




export default Home