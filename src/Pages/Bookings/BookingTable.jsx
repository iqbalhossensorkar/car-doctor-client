
const BookingTable = ({ booking, handleDelete, handleBookingConfirm }) => {
    // console.log(booking);
    const { _id, img, title, price, date, status } = booking;



    return (
        <tbody>
            <tr>
                <td>
                    <button onClick={() => handleDelete(_id)} className="btn btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </td>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-half rounded-lg w-24 h-24">
                                <img src={img} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{title}</div>
                        </div>
                    </div>
                </td>
                <td className="font-bold">
                    {price}
                </td>
                <td className="font-bold">
                    {date}
                </td>
                <th>
                    {
                        status ==='confirm' ? <button className="btn btn-outline btn-success">Approved</button> : <button onClick={() => handleBookingConfirm(_id)} className=" btn bg-orange-600 border-none">Pending</button>
                    }
                </th>
            </tr>
        </tbody>
    );
};

export default BookingTable;