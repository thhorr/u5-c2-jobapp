import { useState,useEffect } from "react"
export const Todo=()=>{
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
        <>
        <div className="font-bold text-3xl">ADMIN PAGE</div>
        <img/>
    <div className="flex flex-col mx-60">
        <input value={name} type="text" placeholder="Enter Company Name" onChange={(e)=>{setName(e.target.value)}} className="border-solid border-2 border-brown-500 w-2/3 m-2"/>
        <input value={text} type="text" placeholder="Enter Company Title" onChange={(e)=>{setText(e.target.value)}} className="border-solid border-2 border-brown-500 w-2/3 m-2"/>
        <input value={salary} type="number" placeholder="Enter Salary" onChange={(e)=>{setSalary(e.target.value)}} className="border-solid border-2 border-brown-500 w-2/3 m-2"/>
        <input value={des} type="text" placeholder="Enter Company Title" onChange={(e)=>{setDes(e.target.value)}} className="border-solid border-2 border-brown-500 w-2/3 m-2"/>
        <input value={locat} type="text" placeholder="Enter Location" onChange={(e)=>{setLocat(e.target.value)}} className="border-solid border-2 border-brown-500 w-2/3 m-2"/>
        <input value={jt} type="text" placeholder="Enter Job Type" onChange={(e)=>{setJt(e.target.value)}} className="border-solid border-2 border-brown-500 w-2/3 m-2"/>
        <button onClick={()=>{
            const payload={
                "name":name,
                "title": text,
                "salary":salary,
                "description":des,
                "Jobtype":jt,
                "location":locat,
                "status":false
            }
            console.log(payload);
            fetch("http://localhost:3001/todos",{
                method:"POST",
                body:JSON.stringify(payload),
                headers:{
                    "content-type":"application/json"
                }
            }).then(()=>{getTodo()})
        }} className="border-solid border-2 border-sky-500 w-1/3 m-2 bg-pink-200">ADD JOB</button> 
       
    </div>
    </>
    );
   
}