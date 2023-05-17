import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/react-flicking/dist/flicking-inline.css";
import { AutoPlay } from "@egjs/flicking-plugins";
import icon1 from '../../assets/icons/check.svg'
import icon2 from '../../assets/icons/group.svg'
import icon3 from '../../assets/icons/person.svg'
import icon4 from '../../assets/icons/quote.svg'
import icon5 from '../../assets/icons/Wrench.svg'
import icon6 from '../../assets/icons/deliveryt.svg'



const WhyChooseUs = () => {
    const plugins = [new AutoPlay({ duration: 3000, direction: "NEXT", stopOnHover: false })];
    return (
        <div className="my-20">
            <div className="my-10 text-center">
                <p className="text-orange-600 font-bold">Core Features</p>
                <h2 className="text-3xl font-bold my-3">Why Choose Us</h2>
                <p className="my-4">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <Flicking
                plugins={plugins}
                align="prev"
                circular={true}
                onMoveEnd={e => {
                    console.log(e);
                }}>
                <div className="panel border-2 px-8 py-6 mr-10 rounded-lg hover:text-white hover:bg-orange-600"><img src={icon1} alt="" className="h-20 w-20 mb-4" /><span className="font-bold">Expert Team</span></div>
                <div className="panel border-2 px-8 py-6 mr-10 rounded-lg hover:text-white hover:bg-orange-600"><img src={icon2} alt="" className="h-20 w-20 mb-4" /><span className="font-bold">Expert Team</span></div>
                <div className="panel border-2 px-8 py-6 mr-10 rounded-lg hover:text-white hover:bg-orange-600"><img src={icon3} alt="" className="h-20 w-20 mb-4" /><span className="font-bold">Expert Team</span></div>
                <div className="panel border-2 px-8 py-6 mr-10 rounded-lg hover:text-white hover:bg-orange-600"><img src={icon4} alt="" className="h-20 w-20 mb-4" /><span className="font-bold">Expert Team</span></div>
                <div className="panel border-2 px-8 py-6 mr-10 rounded-lg hover:text-white hover:bg-orange-600"><img src={icon5} alt="" className="h-20 w-20 mb-4" /><span className="font-bold">Expert Team</span></div>
                <div className="panel border-2 px-8 py-6 mr-10 rounded-lg hover:text-white hover:bg-orange-600"><img src={icon6} alt="" className="h-20 w-20 mb-4" /><span className="font-bold">Expert Team</span></div>
            </Flicking>
        </div>
    );
};

export default WhyChooseUs;