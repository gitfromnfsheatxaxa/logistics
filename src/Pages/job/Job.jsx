import React from 'react';
import JobCom from "../../components/JobCom/JobCom.jsx";
import '../Pages.css'; // Assuming you have a CSS file for styling

const Job = () => {
    return (
        <div className="job-container">
            <h1 className="job-heading">Join Our Team</h1>
            <p className="job-description">
                We are excited to announce new job opportunities! If you're passionate about making an impact and
                working in a dynamic environment, we want to hear from you. Please explore the available positions
                below and submit your application.
            </p>
            <JobCom/>
        </div>
    );
};

export default Job;
