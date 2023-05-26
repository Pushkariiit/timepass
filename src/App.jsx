import React from "react";
import { Routes,Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Service from "./Service";
import { Navigate } from "react-router-dom";
import Navbar from './Navbar';
import Footer from "./Footer";
const App=()=>{
    return(
        <>
        <Navbar/>
            <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route exact path='/about' element={<About/>}></Route>
            <Route path='/service' element={<Service/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='*' element={<Navigate to="/" />}></Route>
            </Routes>
        <Footer/>
        </>
    )
}
export default App;