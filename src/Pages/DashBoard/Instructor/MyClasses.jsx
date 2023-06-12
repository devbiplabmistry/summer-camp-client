import AddClassCard from "../../../Components/AddClassCard";
import useMyClass from "../../../Hooks/useMyClass";


const MyClasses = () => {
    const [addClass] = useMyClass()
    // console.log(addClass);

    return (
        <>
            <div className="grid grid-cols-3 gap-4 my-20">
                {
                    addClass.map(item => <AddClassCard key={item._id} item={item}></AddClassCard>)
                }
            </div>
        </>
    );
};

export default MyClasses;