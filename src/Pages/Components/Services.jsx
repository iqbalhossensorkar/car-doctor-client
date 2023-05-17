import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";


const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://car-doctor-server-sigma-brown.vercel.app/cars')
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
    }, [])
    return (
        <>
            <div className="my-10 text-center">
                <p className="text-orange-600 font-bold">Service</p>
                <h2 className="text-3xl font-bold my-3">Our Service Area</h2>
                <p className="my-4">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3">
                {
                    services.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
                }
            </div>
            <div className="text-center mb-20">
            <button className="btn btn-outline border-2 text-orange-600 border-orange-600">More Services</button>
            </div>
        </>
    );
};

export default Services;