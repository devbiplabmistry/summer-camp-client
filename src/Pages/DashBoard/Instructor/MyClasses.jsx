import useMyClass from "../../../Hooks/useMyClass";

const MyClasses = () => {
    const [addClass, refetch] = useMyClass()

    return (
        <>
            <div className="grid grid-cols-3 gap-3">
                {
                    addClass.map(item =>
                        <div key={item._id} className="card w-96 bg-base-100 shadow-xl image-full">
                            <figure><img src={item?.image} alt="Shoes" /></figure>
                            <div className="card-body text-center">
                                <h2 className="font-[roboto] text-3xl text-orange-400 font-bold">{item.className}</h2>
                                <p className="font-[roboto] text-lg font-semibold text-red-400">status :{item.status}</p>
                                <p className="font-[roboto] text-lg font-semibold text-yellow-400"> Email :{item.instructorEmail}</p>
                                <p className="font-[roboto] text-lg font-semibold text-yellow-400"> instructorName:{item.instructorName}</p>
                                <p className="font-[roboto] text-lg font-semibold text-yellow-400"> price:{item.price}</p>
                                <p className="font-[roboto] text-lg font-semibold text-yellow-400"> availableSeats:{item.availableSeats}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
};

export default MyClasses;