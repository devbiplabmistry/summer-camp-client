import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import Card from '../../../Components/Card';

const EnrollClass = () => {
    const [enrollClass,setEnrollClass]=useState([])
    const {user} =useContext(AuthContext)
    fetch(`https://summer-school-server-psi.vercel.app/payedItem/${user?.email}`)
    .then(res=>res.json())
    .then(data=>setEnrollClass(data))
    return (
        <div>
          {
enrollClass.map(item=><Card key={item._id} item={item}></Card>)
          }
        </div>
    );
};

export default EnrollClass;