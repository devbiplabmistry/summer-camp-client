import useInstructor from "../../../Hooks/useInstructor";

const PopularInstructor = () => {
    const instructor = useInstructor()
    const popular = instructor.filter(item => item.classesTaken >= 30)
    // console.log("instructor ", popular);
    return (
        <div>
            <h1 className="font-[roboto] font-bold text-orange-600 uppercase text-2xl text-center mt-24 mb-4">this is our popular instructor</h1>
            <div className="grid sm:grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-4">
                {
                    popular.map(item => <div key={item._id} className="card w-96 bg-base-100 shadow-xl mx-auto">
                        <figure className="px-10 pt-10">
                            <img src={item.image} alt="Shoes" className="rounded-xl w-[300px] h-[300px]" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title font-[roboto] font-bold text-3xl">{item.name}</h2>
                            <p className="font-[roboto] font-medium text-xl text-orange-600">{item.email}</p>
                            <p className="font-[roboto] font-medium text-xl text-orange-600"> ClassTaken:{item.classesTaken}</p>
                            <p className="font-[roboto] font-medium text-xl text-orange-600"> Dance :{item.classesNames[0]}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PopularInstructor;
