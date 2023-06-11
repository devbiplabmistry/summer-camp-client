import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';


const ManageUsers = () => {
    const { user } = useContext(AuthContext)
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/allUsers')
            return res.data
        }
    })
    const handleAdmin =(item)=>{
        fetch(`http://localhost:5000/allUsers/${item._id}`,{
            method:'PATCH'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data. modifiedCount){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${item.name} is now Admin`,
                    showConfirmButton: false,
                    timer: 1500
                  })
                  refetch()
                  event.target.disabled===true;
    
            }
        })


    }



    return (
        <>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
          #
          </label>
        </th>
        <th>photo</th>
        <th>name</th>
        <th>Email</th>
        <th>Designation</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {users.map((item,index)=>
      <tr key={item._id} >
      <th>
        <label>
            {index+1}
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={item.photo}  alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
          </div>
        </div>
      </td>
      <td>
      <div className="font-bold">{item.name}</div>
      </td>
      <td>{item.email}</td>
      <td>{item.role}</td>
      <td className='flex flex-row gap-4'>
        <button onClick={()=>handleAdmin(item)}  className="btn btn-outline btn-sucess">Make Admin</button>
        <button className="btn btn-outline btn-info">Make Instructor</button>
      </td>
    </tr>

      

      )}
     
    
     
    </tbody>
    
  </table>
</div>
  

        </>
      
    )

    }
export default ManageUsers;