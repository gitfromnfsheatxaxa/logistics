import React from 'react';
import About from "../about/About.jsx";
import AboutCom from "../../components/AboutCom/AbourtCom.jsx";
import JobCom from "../../components/JobCom/JobCom.jsx";
import ContactCom from "../../components/ContactCom/ContactCom.jsx";

const Home = () => {
    return (
        <div>
            <AboutCom/>
            <JobCom/>
            <ContactCom />
        </div>
    );
};

export default Home;