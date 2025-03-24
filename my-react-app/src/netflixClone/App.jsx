import React from "react";
import './App.css';
import Home from "./Home";
import Login from "./Login";
import { Route, Routes } from "react-router-dom";


function App(){
    return(
        <div className="app">
            <Routes>
                <Route path="/Home" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </div>
    )
}


export default App;