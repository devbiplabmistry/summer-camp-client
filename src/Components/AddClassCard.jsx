import React from 'react';
import Swal from 'sweetalert2';
import useMyClass from '../Hooks/useMyClass';


const AddClassCard = ({ item, admin }) => {
    const [,refetch] =useMyClass()
    const handleApproved = (id) => {
        // console.log(id);
        fetch(`http://localhost:5000/instructor/addClass/${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                refetch()
                if(data.modifiedCount){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'yes Approved !!!',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
    }

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src={item?.image} alt="Shoes" /></figure>
                <div className="card-body text-center">
                    <h2 className="font-[roboto] text-3xl text-orange-400 font-bold">{item.className}</h2>
                    <p className="font-[roboto] text-lg font-semibold text-red-500">status :{item.status}</p>
                    <p className="font-[roboto] text-lg font-semibold text-yellow-400"> Email :{item.instructorEmail}</p>
                    <p className="font-[roboto] text-lg font-semibold text-yellow-400"> instructorName:{item.instructorName}</p>
                    <p className="font-[roboto] text-lg font-semibold text-yellow-400" > price:{item.price}</p>
                    <p className="font-[roboto] text-lg font-semibold text-yellow-400"> Total Enrolled Student:{item?.totalEnrolled}</p>
                    <p className="font-[roboto] text-lg font-semibold text-yellow-400"> availableSeats:{item.availableSeats}</p>
                    <div className=" flex gap-4 justify-center items-center">
                        {admin ?
                            <div className='flex  gap-4'>
                                <button onClick={() => handleApproved(item._id)} className="btn btn-secondary  btn-sm ">Approved</button>
                                <button className="btn btn-secondary  btn-sm ">Deny</button>
                                <button className="btn btn-secondary  btn-sm ">Feedback</button>
                            </div>
                            :
                            <>
                                <button className="btn btn-secondary  btn-sm ">update</button>
                                <button className="btn btn-secondary  btn-sm ">Feedback</button>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddClassCard;