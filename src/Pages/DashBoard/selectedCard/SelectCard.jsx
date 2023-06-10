import Swal from "sweetalert2";
import useSelectedClass from "../../../Hooks/useSelectedClass";

const SelectCard = (item) => {
    const [,refetch] =useSelectedClass()
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/selectedClasses/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount >0){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${item.item.title} has been deleted sucessfully !!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
            refetch()
        })
    
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure className="w-[400px] h-[400px]"><img src={item.item.image} alt="Shoes" /></figure>
                <div className="card-body flex items-center justify-center text-center">
                    <div className="mx-auto text-center">
                        <h2 className="font-[roboto] font-bold text-white text-3xl">{item.item.title}</h2>
                        <p className="font-[roboto] font-semibold text-white text-base my-4">{item.item.description}</p>
                        <p className="font-[roboto] font-semibold text-white text-base my-4">instructor {item.item.instructor}</p>
                        <p className="font-[roboto] font-semibold text-white text-base my-4">seat left :{item.item.availableSeats}</p>
                        <button onClick={() => handleDelete(item.item._id)} className="btn btn-outline btn-secondary mr-5">DELETE</button>
                        <button className="btn btn-outline btn-secondary">PAY NOW</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectCard;