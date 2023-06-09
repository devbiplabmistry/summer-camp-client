import { createContext, useState } from "react";
import app from "../Firebase/Firebase.config";
import { getAuth, signOut, updateProfile, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    const signUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }
    const updateUserProfile = (userName, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: `${userName}`, photoURL: `${photo}`
        })
    }
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user)
            setLoading(false)
        }  
            return () => {
                return unsubscribe()
            }
    });


    const AuthInfo = {
        signUp,
        signIn,
        logOut,
        user,
        loading,
        updateUserProfile,
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;