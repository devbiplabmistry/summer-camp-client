import { useEffect, useState } from "react";

const useclasses =()=>{
    const [dances,setdances]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/classes')
        .then(res=>res.json())
        .then(data=>setdances(data))
    },[])
    return dances;

}
export default useclasses;