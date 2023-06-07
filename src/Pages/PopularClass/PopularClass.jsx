import Card from "../../Components/card";
import useclasses from "../../Hooks/useClasses";

const PopularClass = () => {
    const danceclass = useclasses()
    const popularClass = danceclass.filter(item => item.numberOfStudents > 15)
    console.log(popularClass);
    return (
        <>
            {
                popularClass.map(item => <Card key={item._id} item={item}></Card>)
            }
        </>

    );
};

export default PopularClass;