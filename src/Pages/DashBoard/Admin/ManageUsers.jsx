import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

const ManageUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axios.get('/users')
        return res.data;
    })

    return (
        <div>
            
        </div>
    );
};

export default ManageUsers;