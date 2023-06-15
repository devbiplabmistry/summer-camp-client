import { useEffect, useState } from "react";

const useInstructor = () => {
    const [instructor, setInstructor] = useState([]);
    useEffect(() => {
        fetch('https://summer-school-server-psi.vercel.app/instructor')
            .then(res => res.json())
            .then(data => setInstructor(data))
    }, [])
    return instructor;

}
export default useInstructor;