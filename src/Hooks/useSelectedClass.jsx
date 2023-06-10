// import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery} from "react-query";
const useSelectedClass = () => {
const {user,loading} =useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();
    const {data: selectClasses=[], isLoading,refetch} = useQuery({
        queryKey: ['selectedClass'],
        enabled:!loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/selectedClasses/?email=${user.email}`);
            return res.data;
        }
    })
    return selectClasses;
}
export default useSelectedClass;