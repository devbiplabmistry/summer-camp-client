
import Card from "../../../Components/Card";
import useclasses from "../../../Hooks/useClasses";
const PopularClass = () => {
    const danceclass = useclasses()
    const popularClass = danceclass.filter(item => item.numberOfStudents > 15)
    // console.log(popularClass);
    return (
        < >
        <h2 className="font-[roboto] font-bold text-2xl text-center uppercase my-8 ">popular dance classes</h2>
        <div className="grid grid-cols-3 gap-4">
        {
                popularClass.map(item => <Card key={item._id} item={item}></Card>)
            }
        </div>
        </>

    );
};

export default PopularClass;