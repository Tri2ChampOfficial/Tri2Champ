import React from 'react';
import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";
import { ref, push, child, update,onValue } from "firebase/database";

export const logout=()=>
 {
      let obj = {
        Login:0,
      };
      const firebaseConfig = {
        apiKey: "AIzaSyB_mIscj9j6Dqyf3ujlqfgbP1JakEygD68",
        authDomain: "tri2champ.firebaseapp.com",
        databaseURL: "https://tri2champ-default-rtdb.firebaseio.com",
        projectId: "tri2champ",
        storageBucket: "tri2champ.appspot.com",
        messagingSenderId: "318844875234",
        appId: "1:318844875234:web:c76a1750ee286f168e89bb",
        measurementId: "G-VV8HWE99L3"
      };
      
      const app = initializeApp(firebaseConfig);
      const database = getDatabase(app);
      const newUserRef = push(ref(database, "login/"));
      const newUserId = localStorage.getItem("authUID");

      const updates = {};
      updates["/login/" + newUserId] = obj;
      update(ref(database), updates);
      setTimeout(() => {
        localStorage.setItem("authUID","");
        window.location.replace("/");
      }, 2500);
      localStorage.setItem("authUID","");
    window.location.replace("/");
  };