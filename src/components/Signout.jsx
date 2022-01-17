
import { useContext , useEffect} from "react";
import { useNavigate , useLocation, Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
export const Signout=()=>{
 
 const {handleToken}=useContext(AuthContext)
 const navigate=useNavigate();
 useEffect(() => {
    handleToken("");
    navigate("/");
 },[]);
 return (
<></>
 );
}