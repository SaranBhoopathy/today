import React from 'react';
import Task from './Task';

import Home from './components/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';



const App=()=>  {
  
  

  return (
<>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Task" element={<Task/>} />
      </Routes></BrowserRouter>

      </>
    
  );
}

// const time =() =>{
//   Date.now()
// }

  



export default App;
