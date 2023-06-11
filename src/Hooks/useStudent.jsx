import  { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { useQuery } from 'react-query';
import axios from 'axios';

const useStudent = () => {
    const {user} = useContext(AuthContext);
    const { data: student = []} = useQuery({
        queryKey: ['student', user?.email],
        queryFn: async () => {
            const res = await axios(`http://localhost:5000/allUsers/student/${user?.email}`)
            return res.data;
        }

    })
       return [student]   
};

export default useStudent;