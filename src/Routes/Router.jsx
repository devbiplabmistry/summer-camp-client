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
import MyClasses from "../Pages/DashBoard/Instructor/MyClasses";
import ManageClass from "../Pages/DashBoard/Admin/ManageClass";
import ManageUsers from "../Pages/DashBoard/Admin/ManageUsers";
import FeedBack from "../Pages/DashBoard/FeedBack/FeedBack";
import Payments from "../Pages/DashBoard/Payments/Payments";
import ErrorPage from "../Pages/404Page/ErrorPage";
import PaymentHistory from "../Pages/DashBoard/Payments/PaymentHistrory/PaymentHistory";
import EnrollClass from "../Pages/DashBoard/EnrollClass/EnrollClass";



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
            },
            {
                path: "/dashboard/myClass",
                element: <MyClasses></MyClasses>
            },
            {
                path: "/dashboard/manageClasses",
                element: <ManageClass></ManageClass>
            },
            {
                path: "/dashboard/manageUsers",
                element: <ManageUsers></ManageUsers>
            },
            {
                path: "/dashboard/feedback",
                element: <FeedBack></FeedBack>
            },
            {
                path: "/dashboard/payments/:id",
                element: <Payments></Payments>
            },
            {
                path: "/dashboard/paymentHistory",
                element: <PaymentHistory></PaymentHistory>
            },
            {
                path: "/dashboard/enrollClass",
                element: <EnrollClass></EnrollClass>
            },
        ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    }
]);
export default router;