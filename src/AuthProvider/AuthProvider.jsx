/* eslint-disable react/prop-types */
import axios from 'axios';
import { createContext, useEffect, useState } from "react"
import auth from "../FirebaseConfig/firebase.config"
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null)
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    // Create User
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // Sign In
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Sign In with google
    const googleLogIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // Observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                console.log("User logged in:", currentUser.email);
                setUser(currentUser);
                axios.post('http://localhost:4000/authentication', {
                    email: currentUser.email,
                })
                .then((data) => {
                    if (data.data) {
                        localStorage.setItem("access-token", data?.data?.token);
                        setLoading(false);
                    }
                });
            } else {
                console.log("User logged out, removed token");
                setUser(null);
                localStorage.removeItem("access-token");
                setLoading(false);
            }
        });
    
        return () => {
            console.log("Unsubscribing from auth listener");
            unsubscribe();
        };
    }, []);

    // LogOut
    const logOut = () => {
        setLoading(true)
        setUser(null)
        signOut(auth)
    }

    // update user profile 
    const updateUserProfile = (name, photo) => {
        setLoading(true)
        return updateUserProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }


    const authInfo = {
        user,
        createUser,
        setUser,
        loading,
        setLoading,
        logOut,
        googleLogIn,
        signIn,
        updateUserProfile
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

