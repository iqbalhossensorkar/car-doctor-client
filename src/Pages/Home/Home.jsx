import About from "../Components/About";
import Banner from "../Components/Banner";
import ContactInfo from "../Components/ContactInfo";
import PopularProducts from "../Components/PopularProducts";
import Services from "../Components/Services";
import Testimonial from "../Components/Testimonial";
import WhyChooseUs from "../Components/WhyChooseUs";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <ContactInfo></ContactInfo>
            <PopularProducts></PopularProducts>
            <WhyChooseUs></WhyChooseUs>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;