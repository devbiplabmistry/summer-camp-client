
const Card = ({ item, items }) => {
    const { image, title, availableSeats, instructor, description } = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure className="w-[400px] h-[400px]"><img  src={image} alt="Shoes" /></figure>
            <div className="card-body flex items-center justify-center text-center">
                <div className="mx-auto text-center">
                    <h2 className="font-[roboto] font-bold text-white text-3xl">{title}</h2>
                    <p className="font-[roboto] font-semibold text-white text-base my-4">{description}</p>
                    <p className="font-[roboto] font-semibold text-white text-base my-4">instructor {instructor}</p>
                    <p className="font-[roboto] font-semibold text-white text-base my-4">seat left :{availableSeats}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;