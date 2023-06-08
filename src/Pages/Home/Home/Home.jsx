
import Banner from "../Banner/Banner";
import FeedBack from "../FeedBack/FeedBack";
import PopularInstructor from "../Instructor/PopularInstructor";
import PopularClass from "../PopularClass/PopularClass";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <PopularInstructor></PopularInstructor>
           <FeedBack></FeedBack>
        </div>
    );
};

export default Home;