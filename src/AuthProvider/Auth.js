import React from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import { createContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import app from '../Firebase/Firebase.config';


export  const AuthContext = createContext();
const auth = getAuth(app);

const Auth = ({children}) => {

     
     const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true);


     const createUser = (email, password) =>{
          setLoading(true)
          return createUserWithEmailAndPassword(auth, email, password);
     }

     const signIn = (email, password) =>{
          return signInWithEmailAndPassword(auth, email, password);
     }
     const logOut = () =>{
          setLoading(true)
          localStorage.removeItem('accessToken')
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
          loading,
          user,
          updateUser,
          googleProvider

     }
     return (
          <AuthContext.Provider value={authInfo}>
          {children}
     </AuthContext.Provider>
     );
};

export default Auth;