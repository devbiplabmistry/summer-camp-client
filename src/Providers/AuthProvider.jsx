import { createContext, useState } from "react";
import app from "../Firebase/Firebase.config";
import { getAuth, signOut, updateProfile, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();

    const signUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const googleSignUp =()=>{
     return  signInWithPopup(auth, provider)
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
            fetch('http://localhost:5000/jwt',{
                method:'POST'
            })
            .then(res=>res.json())
            .then(data=>{
                localStorage.setItem('access-token',data.token)
            })
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
        googleSignUp,
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;