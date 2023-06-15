
import  { useContext,  } from 'react';
import {  useQuery } from 'react-query';
import { AuthContext } from '../Providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const useAdmin = () => {
    const [axios]=useAxiosSecure()
    const {user} = useContext(AuthContext);
    const { data: admin = [],isLoading:isAdminLoading ,refetch } = useQuery({
        queryKey: ['admin', user?.email],
        queryFn: async () => {
            const res = await axios(`https://summer-school-server-psi.vercel.app/allUsers/admin/${user?.email}`)
            return res.data;
        }

    })
       return [admin,isAdminLoading]   
}

export default useAdmin;