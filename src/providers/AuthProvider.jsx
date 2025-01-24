import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

export  const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createNewUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password) ;
    };

    const signInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = ()=>{
        return signOut(auth);
    }

    const userInfo = {
        user,
        setUser,
        loading,
        createNewUser,
        signInUser,
        logOut,
    }
    return (

        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>

    );
};

export default AuthProvider;


