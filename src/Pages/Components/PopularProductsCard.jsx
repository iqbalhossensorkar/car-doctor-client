import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';



const PopularProductsCard = ({ product }) => {

    const { picture, rating, prize, name } = product;

    return (
        <div>
            <div className="card w-96 bg-base-100 border mb-10">
                <figure className="px-10 pt-10">
                    <img src={picture} alt="Shoes" className="rounded-xl bg-[#F3F3F3] h-60 w-80 p-5" />
                </figure>
                <div className="card-body items-center text-center">
                    <Rating
                        style={{ maxWidth: 100 }}
                        value={rating}
                        readOnly
                    />
                    <h2 className="card-title">{name}</h2>
                    <p className="text-orange-600 font-bold">${prize}.00</p>
                </div>
            </div>
        </div>
    );
};

export default PopularProductsCard;