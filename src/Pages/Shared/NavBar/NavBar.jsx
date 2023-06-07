import { Link } from "react-router-dom";
import { FaUserAlt } from 'react-icons/fa';

const NavBar = () => {
 const   user =true
    const menu = <>
        <li> <Link to="/">Home</Link> </li>
        <li> <Link>instructor</Link> </li>
        <li> <Link>classes</Link> </li>
       {user &&  <li> <Link>Dashboard </Link> </li>}
    </>

    return (
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
             {
                user ?  <Link to="/login"> <FaUserAlt></FaUserAlt> </Link> : <Link className="btn">Login</Link>
             }
            </div>
        </div>
    );
};

export default NavBar;