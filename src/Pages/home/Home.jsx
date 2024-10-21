import React from 'react';
import About from "../about/About.jsx";
import AboutCom from "../../components/AboutCom/AbourtCom.jsx";
import JobCom from "../../components/JobCom/JobCom.jsx";
import ContactCom from "../../components/ContactCom/ContactCom.jsx";
import FooterCom from "../../components/FooterCom/FooterCom.jsx";

const Home = () => {
    return (
        <div>
            <AboutCom/>
            <JobCom/>
            <ContactCom/>
            <FooterCom/>
        </div>
    );
};

export default Home;