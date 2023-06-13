import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from "../../../assets/banner/banner1.jpg"
import banner2 from "../../../assets/banner/banner2.jpg"
import banner6 from "../../../assets/banner/banner6.jpg"
import banner3 from "../../../assets/banner/banner3.jpg"
import banner4 from "../../../assets/banner/banner4.jpg"
import banner5 from "../../../assets/banner/banner5.jpg"



const Banner = () => {
    return (
        <Carousel>
            <div>
                <img src={banner1} />
                <div className="absolute top-1/2 left-1/4">
                    <h1 className="text-white font-[roboto] text-7xl font-bold mb-4 "> Mastering the Art of Dance</h1>
                    <p className="font-[roboto] text-lg text-white">Unlock Your Potential and Move with Confidence</p>
                </div>
            </div>
            <div>
                <img src={banner3} />
                <div className="absolute top-1/2 left-1/4">
                    <h1 className="text-white font-[roboto] sm:text-lg md:text-7xl font-bold mb-4 "> Journey from Beginner to Pro</h1>
                    <p className="font-[roboto] sm:text-sm md:text-lg text-white">Learn, Progress, and Shine on the Dance Floor</p>
                </div>
            </div>
            <div>
                <img src={banner4} />
                <div className="absolute top-1/2 left-1/4">
                    <h1 className="text-white font-[roboto] text-7xl font-bold mb-4 "> Discover the Magic of Dance</h1>
                    <p className="font-[roboto] text-lg text-white">Explore Different Styles and Unleash Your Inner Dancer</p>
                </div>
            </div>
            <div>
                <img src={banner5} />
                <div className="absolute top-1/2 left-1/4">
                    <h1 className="text-white font-[roboto] text-7xl font-bold mb-4 sm:text-lg "> Blending Styles, Unleashing Creativity</h1>
                    <p className="font-[roboto] sm:text-sm md:text-lg text-white"> Embrace Diversity and Create Unique Dance Compositions</p>
                </div>
            </div>
            <div>
                <img src={banner2} />
                <div className="absolute top-1/2 left-1/4">
                    <h1 className="text-white font-[roboto] text-7xl font-bold mb-4 ">Ballet Mastery for All Ages</h1>
                    <p className="font-[roboto] text-lg text-white">Develop Poise, Strength, and Artistry through Classical Dance</p>
                </div>
            </div>
            <div>
                <img src={banner6} />
                <div className="absolute top-1/2 left-1/4">
                    <h1 className="text-white font-[roboto] sm:text-lg md:text-lg xl:text-7xl font-bold mb-4 ">The Beat's Guide: Hip-Hop and Street Dance Essentials</h1>
                    <p className="font-[roboto] md:text-lg sm:text-sm text-white">Master Urban Dance Moves and Command the Stage</p>
                </div>
            </div>

        </Carousel>
    );
};

export default Banner;