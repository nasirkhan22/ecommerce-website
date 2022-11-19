import React from "react";
import {Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";

 const HatsPage= () =>(

   <div>
   <h1>heloo</h1>
   </div>
   )
 function App() {
  return (
    <div>
    
      <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/hats" element={<HatsPage/>}/>
    </Routes>
    
    
    </div>
  )
}

 export default App;
