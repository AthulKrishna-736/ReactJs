import React, { useState, useEffect } from "react";
import './Nav.css'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";
import { auth,db } from "./firebase";
import { useNavigate } from "react-router-dom";
function Nav(){
    const navigate = useNavigate();
    const [show, handleShow] = useState(false);
    const [isLogged, setIsLogged] = useState(false);
    const [username, setUsername] = useState('')

    useEffect(()=>{
        const unsubcribe = onAuthStateChanged(auth, async (user) => {
            if(user){
                setIsLogged(true);
                try {
                    const userDoc = await getDoc(doc(db, 'users', user.uid)); 
                    if (userDoc.exists()) {
                        setUsername(userDoc.data().username); 
                    } else {
                        console.log('No such document');
                    }
                } catch (error) {
                    console.error('Error fetching user document:', error);
                }
            } else {
                setIsLogged(false);
                setUsername('');
            }
        })
        return ()=> unsubcribe();
    },[])

    const handleScroll = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll); // Correctly reference the function
        };
    }, []);

    const handleAuthClick = () => {
        if (isLogged) {
            signOut(auth)
                .then(() => {
                    console.log("User logged out");
                    setIsLogged(false);
                    setUsername('');
                    navigate('/login')
                })
                .catch((error) => {
                    console.error("Error logging out:", error);
                });
        } else {
            console.log("Redirect to login");
        }
    };


    return(
        <div className={`nav ${show && 'nav__black'}`}>
            <div className="nav__left">
                <img 
                    className="nav__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
                    alt="Netflix Logo" 
                />
                <button className="nav__loginButton" onClick={handleAuthClick}>
                    {isLogged ? 'Logout' : 'Login'}
                </button>
                {isLogged && (
                    <span className="nav__username">Welcome, {username}</span>
                )}
            </div>

            <img 
                className="nav__avatar"
                src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-vnl1thqrh02x7ra2.webp" 
                alt="Netflix Avatar" 
            />
        </div>
    );
}

export default Nav;