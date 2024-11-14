import React from "react";
import shipperIcon from "../../../public/Icon (3).webp";
import driverIcon from "../../../public/Icon (4).webp";
import {Link} from "react-router-dom";

const JobOfferCom = () => {
    return (
        <div className="job-offer-container">
            <h1 className="job-offer-heading">Job Opportunities</h1>
            <div className="job-cards-grid">
                <Link to="/contact">
                    <div className="job-card">
                        <h2 className="job-card-title">Shipper</h2>
                        <div className="job-card-content">
                            <div className="job-card-image">
                                <img src={shipperIcon} alt="Shipper Icon"/>
                            </div>
                            <p className="job-card-description">
                                As a shipper, you will be responsible for coordinating and
                                overseeing the logistics of transporting goods. Your duties will
                                include managing inventory, handling shipment schedules, and
                                ensuring that all freight reaches its destination safely and on time.
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to="/apply">
                    <div className="job-card">
                        <h2 className="job-card-title">Driver</h2>
                        <div className="job-card-content">
                            <div className="job-card-image">
                                <img src={driverIcon} alt="Driver Icon"/>
                            </div>
                            <p className="job-card-description">
                                As a driver, you will be responsible for safely transporting
                                freight across various locations. Your tasks include ensuring the
                                cargo is secure, following all traffic and safety regulations, and
                                providing excellent customer service during deliveries.
                            </p>
                        </div>
                    </div>
                </Link>
            </div>


        </div>
    );
};

export default JobOfferCom;
