import { FaLocationArrow, FaPhoneAlt, FaRegCalendarCheck } from "react-icons/fa";

const ContactInfo = () => {
    return (
        <div className="my-24">
            <footer className="footer p-10 bg-[#151515] rounded-lg text-neutral-content py-24">
                <div className="flex items-center gap-5">
                    <FaRegCalendarCheck className="text-orange-600 h-8 w-8"></FaRegCalendarCheck>
                    <div>
                        <p className="font-bold">We are open monday-friday</p>
                        <h3 className="font-bold text-2xl">7:00 am - 9:00 pm</h3>
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <FaPhoneAlt className="text-orange-600 h-8 w-8"></FaPhoneAlt>
                    <div>
                        <p className="font-bold">Have a question?</p>
                        <h3 className="text-2xl font-bold">+2546 251 2658</h3>
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <FaLocationArrow className="text-orange-600 h-8 w-8"></FaLocationArrow>
                    <div>
                        <p className="font-bold">Need a repair? our address</p>
                        <h3 className="text-2xl font-bold">Liza Street, New York</h3>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default ContactInfo;