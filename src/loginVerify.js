
import React from 'react';
import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";
import { ref, push, child, update,onValue } from "firebase/database";

export const loginVerify=()=>
 {
      let obj = {
        Login:1,
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
      const authUID = localStorage.getItem("authUID");
        if (authUID){
          const userRef = ref(database, 'users/' + authUID);
    
          onValue(userRef, (snapshot) => {
            const userData = snapshot.val();
            if(userData["Login"]=="1")
            {
                return 1;
            }
            else{
                window.location.replace("/");
            }
          });
        }
        else{
            window.location.replace("/");
        }
  };