import './FeedBack.css';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";
const FeedBack = () => {
    return (
        <>
        <h1 className='font-[roboto] text-4xl text-center text-orange-600 font-bold uppercase my-10'>What people say about us :</h1>
            <div className="FeedBack">
                <Swiper
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="mx-auto text-center">
                            <h3 className="font-[roboto]  text-4xl text-white font-bold">Incredible Experience</h3>
                            <p className="font-[roboto] px-32 text-white  text-lg font-bold">The dance class exceeded my expectations. The instructor's energy and expertise made the class enjoyable and inspiring. I can't wait for the next session!</p>

                            <Rating className='mx-auto my-4'
                                style={{ maxWidth: 180 }}
                                value={3.5}
                                readOnly
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="mx-auto text-center">
                            <h3 className="font-[roboto] text-4xl text-white font-bold">Highly Recommended Dance Class</h3>
                            <p className="font-[roboto] px-32 text-white  text-lg font-bold">I had an amazing time in this dance class. The instructor was skilled, patient, and provided clear instructions. I would highly recommend this class to anyone interested in learning dance.</p>

                            <Rating className='mx-auto my-4'
                                style={{ maxWidth: 180 }}
                                value={3.5}
                                readOnly
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="mx-auto text-center">
                            <h3 className="font-[roboto] text-4xl text-white  font-bold">Transformative Dance Experience</h3>
                            <p className="font-[roboto] px-32 text-white  text-lg font-bold">Taking this dance class has been transformative for me. The instructor's passion and guidance helped me improve my skills and gain confidence on the dance floor. It's been an incredible journey.</p>
                            <Rating className='mx-auto my-4'
                                style={{ maxWidth: 180 }}
                                value={3.5}
                                readOnly
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="mx-auto text-center">
                            <h3 className="font-[roboto] text-4xl text-white font-bold">Fantastic Choreography</h3>
                            <p className="font-[roboto] px-32 text-white  text-lg font-bold">The choreography taught in this class was fantastic! It was challenging yet achievable, and the instructor broke it down step by step. I felt accomplished and proud after mastering the routine.</p>
                            <Rating className='mx-auto my-4'
                                style={{ maxWidth: 180 }}
                                value={3.5}
                                readOnly
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="mx-auto text-center">
                            <h3 className="font-[roboto]  text-4xl text-white font-bold">Top-Notch Dance Instruction</h3>
                            <p className="font-[roboto] px-28 text-white  text-lg font-bold">The dance instruction in this class was top-notch. The instructor's attention to detail and individualized feedback helped me refine my technique and take my dancing to the next level.</p>
                            <Rating className='mx-auto my-4'
                                style={{ maxWidth: 180 }}
                                value={3.5}
                                readOnly
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="mx-auto text-center">
                            <h3 className="font-[roboto] text-4xl text-white font-bold">Unforgettable Dance Class</h3>
                            <p className="font-[roboto] text-white  text-lg font-bold px-28">This dance class was truly unforgettable. The instructor's creativity, the music selection, and the sense of community created an experience that left me feeling inspired and motivated to continue dancing.</p>
                            <Rating className='mx-auto my-4'
                                style={{ maxWidth: 180 }}
                                value={3.5}
                                readOnly
                            />
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </>
    );
};

export default FeedBack;