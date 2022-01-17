import { Link } from "react-router-dom";
import { AuthContext } from '../contexts/AuthContext';
 import { useContext } from "react";
export const Navbar=()=>{
    const { token }= useContext(AuthContext);
    return (
        <div className="flex flex-row border-solid border-2 border-gray-400 m-4 bg-yellow-500 text-white">
            <Link to="/" style={{margin:"10px"}} className="mx-12 px-12 text-2xl font-semibold">HOME</Link>
            <Link to="/todo" style={{margin:"10px"}} className="mx-12 px-12 text-2xl font-semibold">ADMIN</Link>
            <Link to="/job" style={{margin:"10px"}} className="mx-12 px-12 text-2xl font-semibold">JOB</Link>
            <Link to="/login" style={{margin:"10px"}} className="mx-12 px-12 text-2xl font-semibold">LOGIN</Link>
            <Link to="/signout" style={{margin:"10px"}} className="mx-12 px-12 text-2xl font-semibold">SIGNOUT</Link>
            <h3 style={{margin:"10px"}} className="mx-12 px-12 text-2xl font-semibold">STATUS : {token?"Logged in":"Logged out"}</h3>
        </div>
    );
}