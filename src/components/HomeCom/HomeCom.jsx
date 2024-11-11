import React from 'react';
import "./HomeCom.css";
import {Link} from "react-router-dom";

const HomeCom = () => {
    return (

        <div className="header-img">
            <div className="header-linear">

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
                    <Link to="/about">
                        <button>
                            Learn More About Us
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomeCom;
