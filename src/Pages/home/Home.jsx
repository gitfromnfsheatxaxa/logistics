import React from 'react';
import About from "../about/About.jsx";
import AboutCom from "../../components/AboutCom/AbourtCom.jsx";
import JobCom from "../../components/JobCom/JobCom.jsx";
import ContactCom from "../../components/ContactCom/ContactCom.jsx";
import Service from "../Service/Service.jsx";
import HomeCom from "../../components/HomeCom/HomeCom.jsx";

const Home = () => {
    return (
        <div>
            <HomeCom/>
            <div className="about-home">
                <AboutCom/>
            </div>
            <Service/>

            <JobCom/>
            <ContactCom/>
        </div>
    );
};

export default Home;