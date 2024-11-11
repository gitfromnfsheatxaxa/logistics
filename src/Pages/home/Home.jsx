import React from 'react';
import About from "../about/About.jsx";
import AboutCom from "../../components/AboutCom/AbourtCom.jsx";
import JobCom from "../../components/JobCom/JobCom.jsx";
import ContactCom from "../../components/ContactCom/ContactCom.jsx";
import Service from "../Service/Service.jsx";
import HomeCom from "../../components/HomeCom/HomeCom.jsx";
import FAQCom from "../../components/FAQCom/FAQCom.jsx";
import ServiceHomeCom from "../../components/Service/ServiceHomeCom.jsx";

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
            <FAQCom/>
            <br/>
            <JobCom/>
            <br/>
            <ContactCom/>
            <br/>
        </div>
    );
};

export default Home;