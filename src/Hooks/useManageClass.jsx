import axios from 'axios';
import { useQuery } from 'react-query';


const useManageClass = () => {
    const { data: manageClass = [] } = useQuery({
        queryKey: ['manageClass'],
        queryFn: async () => {
            const res = await axios('http://localhost:5000/instructor/addClass')
            return res.data;
        }

    })
       return manageClass     
       
};

export default useManageClass;