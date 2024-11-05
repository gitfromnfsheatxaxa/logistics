import React from 'react';
import './AboutCom.css';
import { Link } from "react-router-dom";

const AboutCom = () => {
    return (
        <div className="about-container">
            <h1 className="about-heading">Streamline Your Operations with MO GLOBE TRUCKING</h1>
            <p className="about-description">
                At MO GLOBE TRUCKING, we understand that reliable freight transportation is essential to your success. With years of experience in the industry, our team is committed to providing tailored, cost-effective solutions designed to meet your specific shipping needs. Our comprehensive services help simplify your logistics while ensuring your freight arrives on time, every time.
            </p>
            <h2 className="sub-heading">Why Choose MO GLOBE TRUCKING?</h2>
            <p className="about-description">
                MO GLOBE TRUCKING stands out for its reliable service and exceptional customer care. Whether you need full truckload (FTL) or less-than-truckload (LTL) shipping, refrigerated transport, or expedited freight, we have the experience and resources to manage all aspects of your logistics.
            </p>
            <h2 className="sub-heading">Our Key Features Include:</h2>
            <ul className="solutions-list">
                <li><strong>Dependable Service:</strong> We guarantee that your freight arrives on schedule, supported by a dedicated team of logistics experts and experienced drivers.</li>
                <li><strong>Experienced Professionals:</strong> Our team of skilled drivers and logistics experts are trained to safely handle all types of cargo, ensuring a smooth and secure transport process.</li>
                <li><strong>Advanced Technology:</strong> We use state-of-the-art tracking systems to provide real-time 24/7 updates on your shipment’s status, so you’re always informed.</li>
                <li><strong>Comprehensive Solutions:</strong> Whether you're looking for long-haul trucking, refrigerated transport, or expedited freight, we offer a full range of services to suit your needs.</li>
            </ul>
            <h2 className="sub-heading">Our Services Include:</h2>
            <ul className="solutions-list">
                <li>Full Truckload (FTL) and Less-than-Truckload (LTL) Shipping</li>
                <li>Refrigerated Transport for temperature-sensitive cargo</li>
                <li>Expedited Freight Services for time-critical deliveries</li>
                <li>Logistics and Supply Chain Management to streamline operations</li>
            </ul>
            <h2 className="sub-heading">Why Choose Us?</h2>
            <p className="about-description">
                <strong>Efficiency:</strong> Our streamlined processes ensure your freight moves seamlessly from origin to destination.<br/>
                <strong>Reliability:</strong> With a proven track record of on-time deliveries, you can count on us to get your goods to their destination as promised.<br/>
                <strong>Cost-Effectiveness:</strong> We provide flexible, tailored solutions to meet your budget, helping you save on transportation costs while maintaining high service standards.
            </p>
            <h2 className="sub-heading">Get Started Today!</h2>
            <p className="about-description">
                Let MO GLOBE TRUCKING be your trusted partner in freight transportation. Contact us today for a free quote or to discuss how our solutions can meet your logistics needs.
            </p>
            <Link to="/contact">
                <button className="contact-button">Contact Us</button>
            </Link>
        </div>
    );
};

export default AboutCom;
