import React from "react";
import NavBar from "./NavBar";
import {Routes,Route,Navigate} from 'react-router'
import Home from "./Home";
import Contact from "./Contact";

const App = (()=>{

  return(
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Navigate to="/home"/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </>
  )

})

export default App;