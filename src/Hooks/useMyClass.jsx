import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { useQuery } from 'react-query';

const useMyClass = () => {
    const user = useContext(AuthContext);
    const { data: addClass = [], refetch } = useQuery({
        queryKey: ['addClass', user?.email],
        queryFn: async () => {
            const res = await axios('http://localhost:5000/instructor/addClass')
            return res.data;
        }

    })
       return [addClass,refetch]     
       
};

export default useMyClass;