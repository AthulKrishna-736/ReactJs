import React, { useState, useEffect } from "react";
import './Nav.css'

function Nav(){

    const [show, handleShow] = useState(false);


    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                handleShow(true);
            }else{
                 handleShow(false);
            }
        });
        return ()=> {
            window.removeEventListener('scroll')
        };
    },[])


    return(
        <div className={`nav ${show && 'nav__black'}`}>
            <img 
            className="nav__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
            alt="Netflix Logo" />

            <img 
            className="nav__avatar"
            src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-vnl1thqrh02x7ra2.webp" 
            alt="Netflix Logo" />
        </div>
    )
}

export default Nav;