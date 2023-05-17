
import { useLoaderData } from 'react-router-dom';
import img2 from '../../assets/images/checkout/checkout.png'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Checkout = () => {
    const { user } = useContext(AuthContext)
    // console.log(user);
    const services = useLoaderData();
    const { _id, title, img } = services;
    // console.log(services);

    const handleGetService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const price = form.price.value;
        const email = form.email.value;
        const message = form.message.value;
        const order = {
            service_id: _id,
            customerName: name,
            title,
            email,
            date,
            img,
            price,
            message
        }
        // console.log(order);

        fetch('https://car-doctor-server-sigma-brown.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('service book successfully')
                }
            })
    }
    return (
        <div className=''>
            <div className="hero my-10 w-auto relative bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-2xl" style={{ backgroundImage: `url(${img2})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-36 text-5xl font-bold">Checkout</h1>
                        <div style={{ borderBottom: '25px solid #FF3811', borderLeft: '20px solid transparent', borderRight: '20px solid transparent' }} className="h-0 lg:w-64 absolute bottom-0">Home/Service Details</div>
                    </div>
                </div>
            </div>
            <div className='my-20 text-center'>
                <p className='text-orange-600 font-bold'>Ready For Checkout</p>
                <p className="mt-5 text-2xl font-bold">{title}</p>
            </div>
            <div className='p-4 lg:p-20 rounded-lg my-28 bg-[#F3F3F3]'>
                <form onSubmit={handleGetService}>
                    <div className='lg:flex gap-4'>
                        <div className="form-control w-full">
                            <input type="text" placeholder="Name" defaultValue={user?.displayName} name='name' className="input w-full mb-4" required />
                        </div>
                        <div className="form-control w-full">
                            <input type="date" name='date' className="input w-full mb-4" required />
                        </div>
                    </div>
                    <div className='lg:flex gap-4'>
                        <div className="form-control w-full">
                            <input type="text" placeholder="Your Phone" defaultValue={'$ ' + services?.price} name='price' className="input w-full mb-4" readOnly />
                        </div>
                        <div className="form-control w-full">
                            <input type="email" defaultValue={user?.email} placeholder="Your Email" name='email' className="input w-full mb-4" required />
                        </div>
                    </div>
                    <div className="form-control">
                        <textarea className="textarea h-40 mb-6" name='message' placeholder="Your Message"></textarea>
                    </div>
                    <div>
                        <input className='btn border-none w-full bg-orange-600' type="submit" value="Order Confirm" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Checkout;