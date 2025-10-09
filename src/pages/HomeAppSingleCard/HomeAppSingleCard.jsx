import { Download, Star } from "lucide-react";
import { Link } from "react-router";

const HomeAppSingleCard = ({singleCard}) => {

    const {image, title, description, downloads, ratingAvg, id} = singleCard;

    return (
        <Link to={`/appDetails/${id}`}>
            <div className="mx-auto mt-4">
                <div className="card bg-base-100 w-full max-w-sm shadow-sm border border-gray-100 p-3 hover:-translate-y-1 hover:scale-105 transition-transform duration-300">
                    <figure className="bg-white shadow-lg rounded-lg py-5"> <img src={image} alt="Shoes" className="h-32 w-32" /> </figure>
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <p>{description}</p>
                        <div className="flex justify-between items-center mt-2">
                            <div className="flex items-center bg-[#F1F5E8] text-green-500 gap-1 p-1 rounded-md">
                                <Download></Download> {downloads}
                            </div>
                            <div className="flex items-center bg-[#FFF0E1] text-[#FF8811] gap-1 p-1 rounded-md">
                                <Star></Star> {ratingAvg}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default HomeAppSingleCard;