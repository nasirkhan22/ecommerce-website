import React from "react";
import {Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";

 
 function App() {
  return (
    <div>
    
      <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/shop" element={<ShopPage/>}/>
    </Routes>
    
    
    </div>
  )
}

 export default App;
