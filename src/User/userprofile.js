import React, { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

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
  const db = getDatabase(app);
  
  function UserProfile({ userId }) {
    const [userProfile, setUserProfile] = useState(null);
  
    useEffect(() => {
      const userRef = ref(db, `users/${userId}`);
      const unsubscribe = onValue(userRef, (snapshot) => {
        if (snapshot.exists()) {
          const userData = snapshot.val();
          setUserProfile(userData);
        } else {
          setUserProfile(null);
        }
      });
  
      return () => {
        // Cleanup the event listener
        unsubscribe();
      };
    }, [db, userId]);
  
    if (!userProfile) {
      return <div>Loading...</div>;
    }

  const { firstName, lastName, email, password } = userProfile;

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {firstName}</p>
      <p>Email: {lastName}</p>
      <p>Age: {email}</p>
      <p>Address: {password}</p>
    </div>
  );
}

export default UserProfile;
