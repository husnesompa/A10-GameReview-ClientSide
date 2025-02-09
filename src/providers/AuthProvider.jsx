import React, { createContext, useEffect, useState } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    signInWithPopup,
    GoogleAuthProvider

} from 'firebase/auth';
import { auth } from '../firebase/firebase.init';
import Spinner from '../components/Spinner';



const googleProvider = new GoogleAuthProvider();
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

    const signInWithGoogle = async () => {
        setLoading(true);
        try {
            const result = await signInWithPopup(auth, googleProvider);
            setUser(result.user);
        } catch (error) {
            console.error("Google Sign-In Error:", error.message);
        } finally {
            setLoading(false);
        }
    };
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
        signInWithGoogle,
    };
    return (
        <AuthContext.Provider value={userInfo}>
            {loading ? <Spinner /> : children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;


