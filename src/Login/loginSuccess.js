import {app} from './Firebase';
import React from 'react';
import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";
import { ref, push, child, update,onValue } from "firebase/database";

export const loginSuccess=()=>
 {
      let obj = {
        Login:1,
      };
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
      return 1;
  };