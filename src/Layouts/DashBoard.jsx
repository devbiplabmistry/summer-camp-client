import { Link, Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const DashBoard = () => {
    const { user } = useContext(AuthContext)
    const isStudent = false;
    const isInstructor = true;
    const isAdmin = false;

    const menu =
        <>
            {isStudent &&
                <div className="flex">
                    <li className="font-[roboto] font-semibold text-lg text-orange-500"><Link to="/dashboard/selectedClasses">My Selected Classes</Link></li>
                    <li  className="font-[roboto] font-semibold text-lg text-orange-500"><Link>My Enrolled Classes</Link></li>
                </div>
            }
            {isInstructor &&
                <div className="flex">
                    <li  className="font-[roboto] font-semibold text-lg text-orange-500 uppercase"><Link to="/dashboard/addaclass" >Add a Class</Link></li>
                    <li  className="font-[roboto] font-semibold text-lg text-orange-500 uppercase"><Link to="/dashboard/myClass">My Classes</Link></li>
                </div>
            }
            {isAdmin &&
                <div className="flex">
                    <li  className="font-[roboto] font-semibold text-lg text-orange-500"><Link to="/dashboard/manageClasses">Manage Classes</Link></li>
                    <li  className="font-[roboto] font-semibold text-lg text-orange-500"><Link to="manageUsers">Manage Users</Link></li>
                </div>
            }
        </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menu}
                        </ul>
                    </div>
                    <Link><h3 className="font-[allura] text-4xl">contempo <br /> <span className="font-[roboto]">Dance school</span></h3></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menu}
                    </ul>
                </div>
                <div className="navbar-end">
                   <Link to="/"> <img className="w-20 h-20 rounded-full" src={user?.photoURL} alt="img" /></Link>
                </div>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default DashBoard;