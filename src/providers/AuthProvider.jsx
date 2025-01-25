import React, { createContext, useEffect, useState } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth).then(() => {
            setUser(null); // Clear user context after logout
            setLoading(false);
        });
    };

    // Observe user state change (on refresh or session change)
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser); // Update user context
            setLoading(false); // Stop loading when state is resolved
        });

        return () => unsubscribe(); // Cleanup subscription on unmount
    }, []);

    const userInfo = {
        user,
        setUser,
        loading,
        createNewUser,
        signInUser,
        logOut,
    };
    return (
        <AuthContext.Provider value={userInfo}>
            {loading ? <p>Loading...</p> : children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;


