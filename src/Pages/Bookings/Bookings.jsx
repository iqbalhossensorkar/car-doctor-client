import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingTable from "./BookingTable";
import img2 from '../../assets/images/checkout/checkout.png'
import { BiTrash, BiUndo } from "react-icons/bi";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";


const Bookings = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])
    const navigate = useNavigate();

    const url = `https://car-doctor-server-sigma-brown.vercel.app/bookings?email=${user?.email}`
    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (!data.error) {
                    setBookings(data);
                }
                else(
                    navigate('/')
                )
            })
    }, [url, navigate])

    const handleDelete = id => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://car-doctor-server-sigma-brown.vercel.app/bookings/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = bookings.filter(booking => booking._id !== id)
                            setBookings(remaining);
                        }
                    })
            }
        })
    }

    const handleBookingConfirm = id => {
        fetch(`https://car-doctor-server-sigma-brown.vercel.app/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // update state
                    const remaining = bookings.filter(booking => booking._id !== id);
                    const updated = bookings.find(booking => booking._id === id);
                    updated.status = 'confirm'
                    const newBookings = [updated, ...remaining];
                    setBookings(newBookings);
                }
            })
    }


    return (
        <div>
            <div className="hero my-10 w-auto relative bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-2xl" style={{ backgroundImage: `url(${img2})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-36 text-5xl font-bold">Cart Details</h1>
                        <div style={{ borderBottom: '25px solid #FF3811', borderLeft: '20px solid transparent', borderRight: '20px solid transparent' }} className="h-0 lg:w-64 absolute bottom-0">Home/Service Details</div>
                    </div>
                </div>
            </div>
            <div className="overflow-x-auto w-full mt-24">
                <table className="table w-full">
                    {
                        bookings.map(booking => <BookingTable key={booking._id} booking={booking} handleDelete={handleDelete} handleBookingConfirm={handleBookingConfirm}></BookingTable>)
                    }
                </table>
            </div>
            <div className="flex justify-between items-center mt-14 mb-28">
                <Link to='/'>
                    <div className="flex items-center gap-3 cursor-pointer">
                        <BiUndo className="h-6 w-6"></BiUndo>
                        <p>Continue Shopping</p>
                    </div>
                </Link>
                <div className="flex items-center gap-3 cursor-pointer">
                    <BiTrash className="h-6 w-6"></BiTrash>
                    <p>Clear Shopping Cart</p>
                </div>
            </div>
        </div>
    );
};

export default Bookings;