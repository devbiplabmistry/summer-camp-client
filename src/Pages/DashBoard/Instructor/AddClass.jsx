import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const AddClass = () => {
    const {user} =useContext(AuthContext)
    const { register, handleSubmit} = useForm();
    const onSubmit = data => {
        const addClass ={
            className:data.className,
            instructorName:data.instructorName,
            instructorEmail:data.instructorEmail,
            price:data.price,
            availableSeats:data.availableSeats,
            image:data.image,
            status:"pending"
        }
        fetch('http://localhost:5000/instructor/addClass',{
            method:'POST',
            headers: {
                "Content-Type": "application/json",
              },
              body:JSON.stringify(addClass)
        })
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
            if(data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'sucessfully added classes',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    };


    return (
        <div>
            <div className=" bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                        <form onSubmit={ handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Class Name</span>
                                </label>
                                <input type="text" {...register("className")} placeholder="class name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Instructor Name</span>
                                </label>
                                <input type="text" {...register("instructorName")} placeholder="Instructor Name" defaultValue={user?.displayName} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Instructor Email</span>
                                </label>
                                <input type="email" {...register("instructorEmail")} placeholder="Instructor Email" defaultValue={user?.email} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Available Seats</span>
                                </label>
                                <input type="text" {...register("availableSeats")} placeholder="Available seats" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" {...register("price")} placeholder="price" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Add Image</span>
                                </label>
                                <input type="file" {...register("image")} placeholder="price" />
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Add a Class</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddClass;