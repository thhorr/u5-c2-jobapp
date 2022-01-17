import { useState,useEffect } from "react"
import { Link } from "react-router-dom";
export const Job=()=>{
    const [ text, setText]=useState("");
    const [ name, setName]=useState("");
    const [ salary, setSalary]=useState(0);
    const [ des, setDes]=useState("");
    const [ locat, setLocat]=useState("");
    const [ jt, setJt]=useState("");
    const [ todo, setTodo]=useState([]);
    const [ page, setPage]=useState(1);
    useEffect(()=>{
        getTodo()},
        [page]
    )
    const getTodo=()=>{
        fetch(`http://localhost:3001/todos?_page=${page}&_limit=3`)
        .then(d=>d.json()).then(res=>{
            console.log(res);
            setTodo(res);
            setName("");
            setText("");
            setSalary(0);
            setDes("");
            setLocat("");
            setJt("");
        })
    }
    return (
    <div>
    <input value={name} type="text" placeholder="Enter Company Name" onChange={(e)=>{setName(e.target.value)}} className="border-solid border-2 border-black-500 w-2/3 m-2"/>
    <button onClick={()=>{setTodo(todo.filter(word => word.name===name))}} className="border-solid border-2 border-black-500 w-20 m-2">Filter</button>
    <button onClick={()=>{setTodo(todo.sort((a,b)=>b.salary-a.salary))}} className="border-solid border-2 border-black-500 w-20 m-2">L to H</button>
    <button onClick={()=>{setTodo(todo.sort((a,b)=>a.salary-b.salary))}} className="border-solid border-2 border-black-500 w-20 m-2">H to L</button>
    {todo.map((e)=>(
    <div className="text-red-900 flex flex-row border-solid border-2 border-red-500 my-1">
    <div className="mx-14 my-4"><div className="font-bold">Company name:</div> {e.name}</div>
    <div className="mx-14 my-4"><div className="font-bold">Job title:</div> {e.title}</div>
    <div className="mx-14 my-4"><div className="font-bold">Salary: </div>{e.salary}</div>
    <div className="mx-14 my-4"><div className="font-bold">Job Description:</div>{e.description}</div>
    <div className="mx-14 my-4"><div className="font-bold">Location: </div>{e.location}</div>
    <div className="mx-14 my-4"><div className="font-bold">Job Type: </div>{e.Jobtype}</div>
    <Link to={`/todo/${e.id}`} className="mx-1 my-4 font-bold">Go to</Link>
    </div>
    
    ))}
<div className="flex flex-row">
<button disabled={page==1} onClick={()=>{setPage(page-1)}} className="border-solid border-2 border-black-500 w-1/2 m-2">Prev</button>
<button onClick={()=>{setPage(page+1)}} className="border-solid border-2 border-black-500 w-1/2 m-2">Next</button>
</div>
</div>);}