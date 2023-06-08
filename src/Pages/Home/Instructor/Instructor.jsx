import useInstructor from "../../../Hooks/useInstructor";

const Instructor = () => {
    const instructor = useInstructor()
    const popular = instructor.filter(item => item.classesTaken >= 30)
    console.log("instructor ", popular);
    return (
        <div>
            <h1 className="font-[roboto] font-bold text-orange-600 uppercase text-lg text-center">this is our popular instructor</h1>
            <div className="grid grid-cols-3 gap-4">
                {
                    popular.map(item =>
                        <div key={item._is}>
                            <div  className="text-center ">
                                <img className="w-[300px] h-[300px] rounded-2xl" src={item.image} alt="" />
                                <p className="font-[roboto] text-base font-semibold"><small>
                                    name :{item.name}</small></p>
                                <p className="font-[roboto]  text-base font-semibold"><small>email :{item.email}</small></p>
                                <p className="font-[roboto]  text-base font-semibold"><small>class :{item.classesNames[0]
                                }</small></p>
                                <p className="font-[roboto] text-orange-500 text-base font-semibold"><small>classTaken :{item.classesTaken}</small></p>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Instructor;
