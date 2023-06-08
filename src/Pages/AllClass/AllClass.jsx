import Card from "../../Components/Card";
import useclasses from "../../Hooks/useClasses";

const AllClass = () => {
    const classes =useclasses()
    return (
        <>
        <h1 className="font-[roboto] font-bold text-3xl text-orange-500 text-center uppercase">All classes Here</h1>
        <div className="grid grid-cols-3 gap-3 mt-20 mb-20">
            {
                classes.map(item=><Card key={item._id} item={item}></Card>)
            }
        </div>
      </>
    );
};

export default AllClass;