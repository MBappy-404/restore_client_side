import React from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../Firebase/Firebase.config'
import { createContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';


export  const AuthContext = createContext();
const auth = getAuth(app);

const Auth = () => {

     
     const [user, setUser] = useState(null);
     const [loading, setLoading] = useState();


     const createUser = (email, password) =>{
          setLoading(true)
          return createUserWithEmailAndPassword(auth, email, password);
     }

     const signIn = (email, password) =>{
          return signInWithEmailAndPassword(auth, email, password);
     }
     const logOut = () =>{
          setLoading(true)
          return signOut(auth);
     }

     const updateUser = (userInfo) =>{
          return updateProfile(auth.currentUser, userInfo);

     }

     const googleProvider = (provider) =>{
          return signInWithPopup(auth,provider);
     }

     useEffect(()=>{

        const unsubscribe =  onAuthStateChanged(auth, currentUser =>{
               console.log('observing');
               setUser(currentUser);
               setLoading(false)
          });

          return () => unsubscribe();

          
     },[])
     

     const authInfo = {
          createUser,
          signIn,
          logOut,
          user,
          updateUser,
          googleProvider

     }
     return (
          <div>
               
          </div>
     );
};

export default Auth;