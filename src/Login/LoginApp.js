import React from "react";
import "./LoginApp.css";
import { onAuthStateChanged } from "firebase/auth";
import { signInWithGoogle } from "./Firebase";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import {app} from './Firebase';
import { useState } from "react";
import logo from './logo.png';

import { FaPhoneAlt } from 'react-icons/fa';

function Login() {

const auth = getAuth(app);

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const SignIn=()=>{
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    localStorage.setItem("authUID", userCredential.user.uid);
    if(email==="team.tri2champ@gmail.com"||email==="danushathithya.24cs@licet.ac.in")
      {
        window.location.pathname="/AdminPage";
      }
      else{
        window.location.pathname="/UserPage";
      }
  })
  .catch((error) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const email=userCredential.user.email;
      console.log(email);
      localStorage.setItem("authUID", userCredential.user.uid);
      if(email==="team.tri2champ@gmail.com"||email==="danushathithya.24cs@licet.ac.in")
      {
        window.location.pathname="/AdminPage";
      }
      else{
        window.location.pathname="/UserPage";
      }
    })
    .catch((error)=>{
      window.alert(error);
    })
  });
// })
}
  const currPath = window.location.pathname;
  return (
    <div className="LoginApp">
          <div className="bg-blue-950 pb-4 Log_box mx-auto d-block">   
            <br/>
            <br/>
            <div id="logo" className="mx-auto d-block">
              <img src={logo} />
            </div>
            <br />
            <p className="hd">Sign In</p>
            <div id="head">
            </div>
            <input className="in1 mb-5 mt-5 text-black rounded-lg p-2 " type="text" name="username" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
            <br/>
            <input className="in2 mb-5 text-black rounded-lg p-2 " type="password" name="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
            <br/>
            <button className="bg-orange-400 p-2 pl-8 pr-8 rounded-lg m-3 sig" onClick={SignIn}>Sign In</button>
            <br/>
            <br/>
            <button class="login-with-google-btn h-5  rounded-lg" onClick={signInWithGoogle}>
              Sign in with Google
            </button>
            <br/>
            <br />
            <a className="button_Phn btn-success bg-white-900 rounded mb-8" href="/PhoneVer">
              <FaPhoneAlt className="text-blue-600" />
              Sign In with Phone
            </a>
          </div>
    </div>
  );
  
}
export default Login;
