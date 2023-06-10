import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Instructor from "../Pages/Instructor/Instructor";
import AllClass from "../Pages/AllClass/AllClass";
import DashBoard from "../Layouts/DashBoard";
import SelectedClass from "../Pages/DashBoard/SelectedClass/SelectedClass";
import AddClass from "../Pages/DashBoard/Instructor/AddClass";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "register",
                element: <Register></Register>
            },
            {
                path: "instructor",
                element: <Instructor></Instructor>
            },
            {
                path: "classes",
                element: <AllClass></AllClass>
            }

        ]
    },
    {
        path: "/dashboard",
        element: <DashBoard></DashBoard>,
        children: [
            {
                path: "/dashboard/selectedClasses",
                element: <SelectedClass></SelectedClass>
            },
            {
                path: "/dashboard/addaClass",
                element: <AddClass></AddClass>
            }
        ]
    }
]);
export default router;