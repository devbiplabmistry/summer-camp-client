import { useState } from 'react';
import Swal from 'sweetalert2';
import useMyClass from '../Hooks/useMyClass';
import { Link } from 'react-router-dom';


const AddClassCard = ({ item, admin }) => {
    // console.log(item);
    const [, refetch] = useMyClass()
    // const [feedback,setFeedBack]=useState("")
    const [isDisabled, setIsdisabled] = useState(false)
    // console.log(feedback);
    const handleApproved = (id) => {
        event.target.disabled = true;
        {
            if (event.target.disabled == true) {
                setIsdisabled(true)
            }
        }
        // console.log(id);
        fetch(`https://summer-school-server-psi.vercel.app/instructor/addClass/${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
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
    const handleDeny = (id) => {
        event.target.disabled = true;
        {
            if (event.target.disabled == true) {
                setIsdisabled(true)
            }
        }
        // console.log(id);
        fetch(`https://summer-school-server-psi.vercel.app/instructor/addClass/deny/${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'This class is Denied !!!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    // 
    const handleFeedBack = (id) => {
        const text = prompt("write something")
        const newFeedback ={
            feedback:text,
            feedbackId:id
        }
        fetch(`https://summer-school-server-psi.vercel.app/feedback/${id}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newFeedback), 
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
            });
        };
        // update feedback

        const handleUpdateFeedBack =(id)=>{
            fetch(`https://summer-school-server-psi.vercel.app/feedback/${id}`, {
                method: 'GET',
              })
                .then((res) => res.json())
                .then((data) => {
                    const updateFeedBack =data.feedback;
                alert(updateFeedBack)
                });
            };

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
                                <button onClick={() => handleApproved(item._id)} className="btn btn-secondary  btn-sm " disabled={isDisabled}>Approved</button>
                                <button onClick={() => handleDeny(item._id)} className="btn btn-secondary  btn-sm "  >Deny</button>
                                <Link><button onClick={() => handleFeedBack(item._id)} className="btn btn-secondary  btn-sm ">Feedback</button></Link>
                            </div>
                            :
                            <>
                                <button className="btn btn-secondary  btn-sm ">update</button>
                                <button onClick={()=>handleUpdateFeedBack(item._id)} className="btn btn-secondary  btn-sm ">Feedback</button>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddClassCard;