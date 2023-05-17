import { Link } from "react-router-dom";


const ServicesCard = ({ service }) => {
    // console.log(service);
    const { _id, img, title, price } = service;
    return (
        <div>
            <div className="card w-96 border h-96 mb-10">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body text-left">
                    <h2 className="card-title font-bold">{title}</h2>
                    <div className="flex items-center text-orange-600 font-bold">
                        <p className="flex-1">Price: ${price}</p>
                        <div className="card-actions">
                            <Link to={`/checkout/${_id}`}><button className="p-2 rounded-full hover:bg-black hover:bg-opacity-20">❯</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;