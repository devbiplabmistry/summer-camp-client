import  { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { useQuery } from 'react-query';
import axios from 'axios';

const useInstruct = () => {
    const {user} = useContext(AuthContext);
    const { data: Instructor = [],isLoading:isInstructorLoading } = useQuery({
        queryKey: ['Instructor', user?.email],
        queryFn: async () => {
            const res = await axios(`https://summer-school-server-psi.vercel.app/allUsers/instructor/${user?.email}`)
            return res.data;
        }

    })
       return [Instructor ,isInstructorLoading]  
};

export default useInstruct;