import React, { useEffect, useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "./firebase";
import './Login.css'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login(){

    const navigate = useNavigate();
    const[signin, setSignin] = useState('Sign In');
    const[userData, setUserData] = useState({
        username:'',
        email:'',
        password:''
    })

    const [errors,setErrors] = useState({
        username:'',
        email:'',
        password:''
    })


    const handleSignIn = ()=>{
        setSignin('Sign In')

        setErrors({
            username:'',
            email:'',
            password:''
        })

        setUserData({
            username:'',
            email:'',
            password:''
        })
    }

    const handleSignUp = ()=>{
        setSignin('Sign Up')

        setErrors({
            username:'',
            email:'',
            password:''
        })

        setUserData({
            username:'',
            email:'',
            password:''
        })
    }

    const emailPattern = /^[a-zA-Z0-9_]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/
    const usernamePattern = /^[a-zA-Z0-9_]{4,16}$/
    const passPattern = /^[a-zA-Z0-9_]{6,18}$/

    const handleSubmit = async (event)=>{
        event.preventDefault();

        const isValidemail = emailPattern.test(userData.email)
        const isValidusername = usernamePattern.test(userData.username)
        const isValidpass = passPattern.test(userData.password)
        
        setErrors({
            username:'',
            email:'',
            password:''
        });

        if(signin == 'Sign In'){
            if(!isValidemail || !isValidemail ){
                setErrors((prevState)=>({
                    ...prevState,
                    email: !isValidemail ? 'Invalid email address' : '',
                    password: !isValidpass ? 'Password must be min 6 characters with letters, digit, underscore' : ''
                }))
                return;
            }
            try {
                console.log('User getting signed in.')
                await signInWithEmailAndPassword(auth, userData.email, userData.password);
                console.log('User signed is Successfully')
                navigate('/Home')
                return;
            } catch (error) {
                setErrors((prevState) => ({
                    ...prevState,
                    email: error.code === 'auth/user-not-found' ? 'No account found with this email. Please sign up first.' :
                           error.code === 'auth/email-already-in-use' ? 'Email is already in use. Please use another one.' :
                           error.code === 'auth/invalid-email' ? 'Invalid email address. Please enter a valid email.' :
                           prevState.email,
                    password: error.code === 'auth/wrong-password' ? 'Incorrect password. Please try again.' :
                              error.code === 'auth/weak-password' ? 'Password should be at least 6 characters.' :
                              error.code === 'auth/invalid-credential' ? 'Password is incorrect please try again' :
                              prevState.password
                }));
        
                console.error('Sign-in error:', error.message);
            }
        }
        
        else if(signin == 'Sign Up'){
            if(!isValidemail || !isValidusername || !isValidpass){
                setErrors((prevState)=>({
                    ...prevState,
                    username: !isValidusername ? 'Username must be 4-16 characters also with digits, letter, underscore' : '',
                    email: !isValidemail ? 'Invalid email address' : '',
                    password: !isValidpass ? 'Password must be min 6 characters with letters, digit, underscore' : ''
                }))
                return;
            }
            try {
                console.log('firebase signup started')
                const userCredential = await createUserWithEmailAndPassword(auth, userData.email, userData.password)
                console.log(userCredential.user)
                setSignin("Sign In")

                await setDoc(doc(db, 'users', userCredential.user.uid),{
                    username: userData.username,
                    email: userData.email,
                    password: userData.password
                })

                console.log('user details stored to firestore')

            } catch (error) {
                console.error('Sign up error', error.message)
                setErrors((prevState) => ({
                    ...prevState,
                    email: error.code === 'auth/user-not-found' ? 'No user found with this email. Please sign up first.' :
                           error.code === 'auth/email-already-in-use' ? 'Email is already in use. Please try another one.' :
                           error.code === 'auth/invalid-email' ? 'Invalid email address. Please enter a valid email.' :
                           error.code === 'auth/operation-not-allowed' ? 'Email/password accounts are not enabled. Please contact support.' :
                           prevState.email,
                    password: error.code === 'auth/weak-password' ? 'Password should be at least 6 characters.' : prevState.password
                }));
            }
        }


    }

    useEffect(()=>{
        console.log(`email : ${errors.email}`)
        console.log(`username : ${errors.username}`)
        console.log(`password : ${errors.password}`)
    },[])

    return(
        <div className="login">
            <img className="login-logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="logo" />

            <div className="login-form">
                <h1 className="heading">{signin}</h1>
                <form>
                    {
                        signin == 'Sign Up'?
                        <div>
                        <input type="text" 
                        value={userData.username}
                        placeholder="Your name"
                        onChange={(e)=>{setUserData(({...userData,username:e.target.value}))}}
                        />
                       {errors.username && <p className="error-message">{errors.username}</p>}                
                        </div>:<></>
                    }

                    <div>
                    <input type="email"
                    value={userData.email} 
                    placeholder="Email"
                    onChange={(e)=>{setUserData(({...userData,email:e.target.value}))}}/>
                    {errors.email && <p className="error-message">{errors.email}</p>}
                    </div>

                    <div>
                    <input type="password"
                    value={userData.password}
                    placeholder="Password"
                    onChange={(e)=>{setUserData(({...userData,password:e.target.value}))}}/>
                    {errors.password && <p className="error-message">{errors.password}</p>}
                    </div>
                    <button onClick={handleSubmit}>{signin}</button>

                </form> 

                <div className="form-switch">
                    {
                        signin == 'Sign Up'?
                <p>Already have account? <span onClick={handleSignIn}>Sign In Now</span></p>:
                <p>New to Netflix? <span onClick={handleSignUp}>Sign Up Now</span></p>
                    }
                </div>
            </div>
        </div>
    )
}

export default Login;