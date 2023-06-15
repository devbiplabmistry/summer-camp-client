


import { useContext, useState } from 'react';
import { AuthContext } from '../../../../Providers/AuthProvider';
const PaymentHistory = () => {
    const [payments, setpayments] = useState([])
    // console.log(payments);
    const { user } = useContext(AuthContext)
    fetch(`https://summer-school-server-psi.vercel.app/payments/${user?.email}`)
        .then(res => res.json())
        .then(data => setpayments(data))
    return (
        <div className='my-20'>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email :</th>
                            <th>Transaction Id :</th>
                            <th>Date ::</th>
                            <th>itemNames :</th>
                            <th>price :</th>
                            <th>status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        payments.map((item,index)=>
                        <tr key={item._id} className="bg-base-200">
                        <th>{index+1}</th>
                        <td>{item.email}</td>
                        <td>{item.transactionId}</td>
                        <td>{item.date}</td>
                        <td>{item.itemNames}</td>
                        <td>{item.price}</td>
                        <td>{item.status}</td>   
                        </tr>   
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;