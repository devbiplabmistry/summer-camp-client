
import useInstructor from "../../Hooks/useInstructor";
const Instructor = () => {
    const instructor = useInstructor();
    return (
        <div className="my-20">
            <h1 className="font-[roboto] font-bold text-3xl text-orange-500 text-center uppercase ">All instructor are  Here</h1>
            <div className="grid grid-cols-3 gap-4">
                {
                    instructor.map(item => <div key={item._id} className="card w-96 bg-base-100 shadow-xl">
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

export default Instructor;