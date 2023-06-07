import { createContext } from "react";
import app from "../Firebase/Firebase.config";
import { getAuth } from "firebase/auth";

const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  

    const AuthInfo =null;







    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;