import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";

import Swal from "sweetalert2";

const Card = ({ item }) => {
    const { image, title, availableSeats, instructor, _id, description } = item;
    const { user } = useContext(AuthContext);
    const handleJoin = (item) => {
        if (!user) {
            alert('Please login before join the course !!')
        }
        const { image, title, availableSeats, instructor, _id, description } = item;
        const selectedClass = {_id,image, title, availableSeats, instructor, description}
        fetch(`http://localhost:5000/selectedClasses/${user.email}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(selectedClass),
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'You selected one !!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    return (
        <>
            {
                availableSeats > 0 ? <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure className="w-[400px] h-[400px]"><img src={image} alt="Shoes" /></figure>
                    <div className="card-body flex items-center justify-center text-center">
                        <div className="mx-auto text-center">
                            <h2 className="font-[roboto] font-bold text-white text-3xl">{title}</h2>
                            <p className="font-[roboto] font-semibold text-white text-base my-4">{description}</p>
                            <p className="font-[roboto] font-semibold text-white text-base my-4">instructor {instructor}</p>
                            <p className="font-[roboto] font-semibold text-white text-base my-4">seat left :{availableSeats}</p>
                            {
                                user?.role == 'admin' || user?.role == 'instructor' || availableSeats <= 0 ? <button disabled className="btn btn-outline btn-secondary">Join Now</button>
                                    : <button onClick={() => handleJoin(item)} className="btn btn-outline btn-secondary">Join Now</button>
                            }
                        </div>
                    </div>
                </div>
                    :
                    <div className="card-body bg-red-600 items-center justify-center text-center">
                        <div className="mx-auto text-center">
                            <h2 className="font-[roboto] font-bold text-white text-3xl">{title}</h2>
                            <p className="font-[roboto] font-semibold text-white text-base my-4">{description}</p>
                            <p className="font-[roboto] font-semibold text-white text-base my-4">instructor {instructor}</p>
                            <p className="font-[roboto] font-semibold text-white text-base my-4">seat left :{availableSeats}</p>
                            {
                                user?.role == 'admin' || user?.role == 'instructor' || availableSeats <= 0 ? <button disabled className="btn btn-outline btn-secondary">Join Now</button>
                                    : <button onClick={handleJoin} className="btn btn-outline btn-secondary">Join Now</button>
                            }
                        </div>

                    </div>
            }
        </>
    );
};

export default Card;