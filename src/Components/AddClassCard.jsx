import React from 'react';


const AddClassCard = ({ item, admin }) => {

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
                                <button className="btn btn-secondary  btn-sm ">Approve</button>
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