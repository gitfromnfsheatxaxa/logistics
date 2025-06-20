import React from 'react';
import AboutCom from "../../components/AboutCom/AbourtCom.jsx";
import JobCom from "../../components/JobCom/JobCom.jsx";
import ContactCom from "../../components/ContactCom/ContactCom.jsx";
import HomeCom from "../../components/HomeCom/HomeCom.jsx";
import ServiceHomeCom from "../../components/Service/ServiceHomeCom.jsx";
import JobOfferCom from "../../components/JobCom/JobOfferCom.jsx";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div>
            <HomeCom/>
            <div className="header-text">
                <h1>
                    Your Trusted Freight Partner
                </h1>
                <p>
                    At MO GLOBE TRUCKING, we specialize in providing reliable, efficient, and cost-effective freight
                    solutions that keep your business moving forward. From local deliveries to long-haul transport,
                    our experienced team ensures timely and secure delivery of your goods, no matter the distance.
                    Let us take the complexity out of logistics so you can focus on what matters most—growing your
                    business.
                </p>
                <Link to="/apply">
                    <button>
                        Become a Driver
                    </button>
                </Link>
            </div>
            <br/>

            <div className="about-home">
                <ServiceHomeCom/>
            </div>
            <br/>
            <JobOfferCom/>
            <br/>
            <AboutCom/>
            <br />


            <br />
            <ContactCom/>
            <br/>
        </div>
    );
};

export default Home;