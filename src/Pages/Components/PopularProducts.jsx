import { useEffect, useState } from "react";
import PopularProductsCard from "./PopularProductsCard";

const PopularProducts = () => {

    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [])

    return (
        <>
            <div className="my-10 text-center">
                <p className="text-orange-600 font-bold">Popular Products</p>
                <h2 className="text-3xl font-bold my-3">Browse Our Products</h2>
                <p className="my-4">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3">
                {
                    products.map(product => <PopularProductsCard key={product._id} product={product}></PopularProductsCard>)
                }
            </div>
            <div className="text-center mb-20">
                <button className="btn btn-outline border-2 text-orange-600 border-orange-600">More Products</button>
            </div>
        </>
    );
};

export default PopularProducts;