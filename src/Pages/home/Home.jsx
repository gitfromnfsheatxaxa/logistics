import React from 'react';
import About from "../about/About.jsx";
import AboutCom from "../../components/AboutCom/AbourtCom.jsx";
import JobCom from "../../components/JobCom/JobCom.jsx";
import ContactCom from "../../components/ContactCom/ContactCom.jsx";
import Service from "../Service/Service.jsx";

const Home = () => {
    return (
        <div>
            <AboutCom/>
            <Service/>
            <JobCom/>
            <ContactCom/>
        </div>
    );
};

export default Home;