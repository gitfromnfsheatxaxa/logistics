import React from 'react';
import AboutCom from "../../components/AboutCom/AbourtCom.jsx";
import JobCom from "../../components/JobCom/JobCom.jsx";
import ContactCom from "../../components/ContactCom/ContactCom.jsx";
import HomeCom from "../../components/HomeCom/HomeCom.jsx";
import ServiceHomeCom from "../../components/Service/ServiceHomeCom.jsx";
import JobOfferCom from "../../components/JobCom/JobOfferCom.jsx";

const Home = () => {
    return (
        <div>
            <HomeCom/>
            <br/>
            <div className="about-home">
                <AboutCom/>
            </div>
            <br/>
            <ServiceHomeCom/>
            <br/>
            <JobOfferCom/>
            <br/>
            <ContactCom/>
            <br/>
        </div>
    );
};

export default Home;