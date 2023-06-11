import  { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { useQuery } from 'react-query';
import axios from 'axios';

const useInstruct = () => {
    const {user} = useContext(AuthContext);
    const { data: Instructor = [], } = useQuery({
        queryKey: ['Instructor', user?.email],
        queryFn: async () => {
            const res = await axios(`http://localhost:5000/allUsers/instructor/${user?.email}`)
            return res.data;
        }

    })
       return Instructor   
};

export default useInstruct;