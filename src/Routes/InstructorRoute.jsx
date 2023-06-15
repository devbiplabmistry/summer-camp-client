import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
import useInstruct from "../Hooks/useInstruct";


const InstructorRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [Instructor, isInstructorLoading] =useInstruct()
    const location = useLocation();

    if(loading || isInstructorLoading){
        return <progress className="progress w-56"></progress>
    }

    if (user && Instructor) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default InstructorRoute