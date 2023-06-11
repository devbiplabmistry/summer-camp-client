import axios from 'axios';
import  { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { useQuery } from 'react-query';

const useMyClass = () => {
    const {user} = useContext(AuthContext);
    const { data: addClass = [], refetch } = useQuery({
        queryKey: ['addClass'],
        queryFn: async () => {
            const res = await axios(`http://localhost:5000/instructor/addClass/${user?.email}`)
            return res.data;
        }

    })
       return [addClass,refetch]     
       
};

export default useMyClass;