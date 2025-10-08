import { Download, Star } from "lucide-react";

const HomeAppSingleCard = ({singleCard}) => {

    const {image, title, description, downloads, ratingAvg} = singleCard;

    return (
        <div className="mx-auto mt-4">
            <div className="card bg-base-100 w-[300px] h-[400px] shadow-sm border-1 border-gray-100 p-2">
                <figure className="bg-white shadow-lg rounded-lg py-5"> <img src={image} alt="Shoes" className="h-32 w-32" /> </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <div className="flex justify-between items-center">
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
    );
};

export default HomeAppSingleCard;