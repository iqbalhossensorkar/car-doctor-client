import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'


const About = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='lg:w-1/2 relative'>
                        <img src={person} className=" rounded-lg w-3/4 bg-contain" />
                        <img src={parts} className=" rounded-lg w-1/2 border-8 border-white absolute top-1/2 right-5" />
                    </div>
                    <div className='lg:w-1/2 p-4 space-y-4'>
                        <h4 className='text-orange-600 font-bold'>About Us</h4>
                        <h1 className="text-5xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
                        <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                        <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                        <button className="btn bg-orange-600 border-none">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;