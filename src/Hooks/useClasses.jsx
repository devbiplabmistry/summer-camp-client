import { useEffect, useState } from "react";


const useclasses =()=>{
    const [dances,setdances]=useState([]);
    useEffect(()=>{
        fetch('https://summer-school-server-psi.vercel.app/classes')
        .then(res=>res.json())
        .then(data=>setdances(data))
    },[])
    return dances;

}
export default useclasses;