import React from 'react';
import './AboutCom.css';
import Image1 from '../../../public/photo_2024-11-11_18-31-04.png';
import Image2 from '../../../public/IMG_4610.png';
import Image3 from '../../../public/photo_2024-11-12_11-57-03.png';
const AboutCom = () => {
    const cards = [
        {
            title: 'Welcome to MO GLOBE TRUCKING',
            img:'../../../../../../public/photo_2024-11-12_11-57-03.png',
            description: `Streamline Your Operations with MO GLOBE TRUCKING\n\nAt MO GLOBE TRUCKING, we understand that reliable freight transportation is essential to the success of your business. With years of experience in the trucking and logistics industry, our dedicated team works tirelessly to provide tailored, cost-effective solutions to meet your unique shipping needs. We pride ourselves on our ability to offer seamless, comprehensive services that simplify your logistics, ensuring your freight arrives on time, every time. Trust us to be your reliable partner in optimizing your transportation operations.`
        },
        {
            title: 'Why Choose Us?',
            img:'../../../public/IMG_4610.png',
            description: `MO GLOBE TRUCKING stands out for its unwavering commitment to providing dependable service and exceptional customer care. We specialize in a range of freight transportation services, including full truckload (FTL), less-than-truckload (LTL) shipping, refrigerated transport, and expedited freight. Our team is equipped with the resources and expertise to handle all aspects of your logistics, no matter how complex.\n\nKey Features that Set Us Apart:\n\n• Dependable Service: Timely deliveries are critical, and we ensure your freight arrives on schedule, every time.\n• Experienced Professionals: Our team of skilled drivers and logistics experts is highly trained to handle all types of cargo with care and security.\n• Advanced Technology: Using state-of-the-art tracking systems, we provide real-time 24/7 updates, keeping you informed about your shipment’s status at all times.\n• Comprehensive Solutions: From long-haul trucking to temperature-sensitive cargo and expedited freight, we offer a full range of tailored services to meet your business needs.`
        },
        {
            title: 'Our Services Include',
            img:'../../../public/photo_2024-11-12_11-57-03.png',
            description: `• Full Truckload (FTL) and Less-than-Truckload (LTL) Shipping: Flexible solutions to accommodate shipments of all sizes, providing cost-effective options without compromising on service quality.\n• Refrigerated Transport: Specialized for temperature-sensitive cargo, ensuring safe and secure delivery of perishable goods.\n• Expedited Freight Services: For time-critical deliveries that require urgent attention, we guarantee quick, reliable service to meet tight deadlines.\n• Logistics and Supply Chain Management: Our team works with you to streamline your logistics, providing end-to-end solutions that optimize your supply chain and reduce costs.`
        },
        {
            title: 'Get Started Today!',
            img:'../../../public/photo_2024-11-11_18-31-04.png',
            description: `At MO GLOBE TRUCKING, we are committed to being your trusted partner in freight transportation. Whether you’re looking to move large shipments or need specialized logistics services, we offer flexible, cost-effective solutions that meet your needs. Contact us today for a free quote or to learn more about how we can help streamline your transportation and logistics operations. Let us take the hassle out of shipping so you can focus on growing your business.`
        }
    ];


    return (
        <div className="about-container">
            <div className="cards-grid">
                {cards.map((card, index) => (
                    <div key={index} className="card">
                        <h2 className="card-title">{card.title}</h2>

                        <div className={`card-content ${index % 2 === 0 ? 'left' : 'right'}`}>
                            <div className="card-image">
                                {/* Replace with actual image if needed */}
                                <img src={card.img} alt="Card Image"/>
                            </div>
                            <div className="card-text">
                                <p className="card-description">{card.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

};

export default AboutCom;
