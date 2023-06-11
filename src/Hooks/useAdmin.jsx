import axios from 'axios';
import  { useContext,  } from 'react';
import {  useQuery } from 'react-query';
import { AuthContext } from '../Providers/AuthProvider';

const useAdmin = () => {
    const {user} = useContext(AuthContext);
    const { data: admin = [], refetch } = useQuery({
        queryKey: ['admin', user?.email],
        queryFn: async () => {
            const res = await axios(`http://localhost:5000/allUsers/admin/${user?.email}`)
            return res.data;
        }

    })
       return [admin]   
}

export default useAdmin;