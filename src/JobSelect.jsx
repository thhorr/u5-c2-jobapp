import { useParams , useNavigate, Navigate } from "react-router-dom";
import { useEffect , useState} from "react";
import { AuthContext } from './contexts/AuthContext';
 import { useContext } from "react";
export const JobSelect=()=>{
    const {userid} = useParams();
    const [ user ,setUser]=useState({});
    const { token }= useContext(AuthContext);
    useEffect(() => {
       fetch(`http://localhost:3001/todos/${userid}`)
       .then(d=>d.json()).then(d=>{
        console.log(d);
       setUser(d);
       
       })
    }, [userid]);
    if(!token){
        return <Navigate to={"/login"}/>
    }
   
    return (
        <div>
             <div className="text-yellow-900 flex flex-row border-solid border-2 border-blue-500 my-1">
    <div className="mx-14 my-4"><div className="font-bold">Company name:</div> {user.name}</div>
    <div className="mx-14 my-4"><div className="font-bold">Job title:</div> {user.title}</div>
    <div className="mx-14 my-4"><div className="font-bold">Salary: </div>{user.salary}</div>
    <div className="mx-14 my-4"><div className="font-bold">Job Description:</div>{user.description}</div>
    <div className="mx-14 my-4"><div className="font-bold">Location: </div>{user.location}</div>
    <div className="mx-14 my-4"><div className="font-bold">Job Type: </div>{user.Jobtype}</div>
    </div>
        </div>
    );
}