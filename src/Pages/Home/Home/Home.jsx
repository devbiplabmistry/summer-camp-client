import FeedBack from "../../FeedBack/FeedBack";
import PopularClass from "../../PopularClass/PopularClass";
import Banner from "../Banner/Banner";
import Instructor from "../Instructor/Instructor";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <Instructor></Instructor>
            <FeedBack></FeedBack>
  
        </div>
    );
};

export default Home;