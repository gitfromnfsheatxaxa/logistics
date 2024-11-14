// ServiceCom.jsx
import React from 'react';
import './ServiiceCom.css';
import {Link} from "react-router-dom";

const servicesData = {
    fleetServices: [
        {
            title: 'Base',
            description: `24/7 roadside assistance. road calls
    oil change & annual inspection
    repair estimates. insurance coordination
    company expense records
    nationwide repair network
    discounted shop rate
    truck rentals with maintenance included
    fuel cards with discounts & credit limits`
        },
        {
            title: 'base+',
            description: `All gold features, plus:
    new driver online/offline orientation
    driver handbooks
    truck preparation for new drivers
    first pti with new drivers. picture uploads
    post-trip inspections & picture uploads
    towing services at the lowest price
    5-acre parking yard access (chicago)`
        },

        {
            title: 'Pro',
            description: `All Base & Base+ features, plus:
    new driver hiring
    background checks (mvr, psp, drug test)`
        },

    ],
    accountingServices: [
        {
            title: 'Bookkeeping',
            description: 'Maintaining accurate records of all financial transactions, including income, expenses, payroll, and accounts payable/receivable.'
        },
        {
            title: 'Invoicing',
            description: 'Creating and sending invoices to shippers for services rendered, and tracking payments received.'
        },
        {
            title: 'Payroll Processing',
            description: 'Managing employee and contractors payroll, including calculations for salaries, taxes, and benefits for drivers and staff.'
        },
        {
            title: 'Financial Reporting',
            description: 'Preparing financial statements such as profit and loss statements, balance sheets, and cash flow statements to provide insights into the company’s financial health.'
        },
        {
            title: 'Cost Analysis',
            description: 'Analyzing costs related to fuel, maintenance, insurance, and labor to identify areas for savings and improve profitability.'
        },
        {
            title: 'Budgeting and Forecasting',
            description: 'Developing budgets and financial forecasts to help with planning and decision-making for future operations.'
        },
        {
            title: 'Compliance and Regulatory Support',
            description: 'Ensuring that the business complies with industry regulations, including handling audits and providing necessary documentation.'
        },
        {
            title: 'Fleet Management Accounting',
            description: 'Tracking expenses related to the fleet, such as maintenance, fuel, and depreciation, to evaluate fleet performance and profitability.'
        },
        {
            title: 'Cash Flow Management',
            description: 'Monitoring and managing cash flow to ensure the business has sufficient funds to meet its obligations.'
        }
    ],
    safetyServices: [
        {
            title: 'Driver Training Programs',
            description: 'Comprehensive training for new and existing drivers on safety regulations, defensive driving techniques, and vehicle operation.'
        },
        {
            title: 'Safety Audits and Inspections',
            description: 'Regular audits of safety practices and inspections of vehicles to ensure compliance with industry standards and regulations.'
        },
        {
            title: 'Compliance Assistance',
            description: 'Helping companies navigate federal and state safety regulations, including the Department of Transportation (DOT) requirements.'
        },
        {
            title: 'Accident Investigation',
            description: 'Conducting thorough investigations of accidents to determine causes and implement measures to prevent future incidents.'
        },
        {
            title: 'Emergency Response Plans',
            description: 'Developing and implementing plans to handle emergencies, including accidents, breakdowns, and hazardous material spills.'
        },
        {
            title: 'Fatigue Management Programs',
            description: 'Implementing strategies to monitor and manage driver fatigue, including scheduling, rest breaks, and education on the importance of sleep.'
        },
        {
            title: 'GPS and Telematics',
            description: 'Utilizing GPS tracking and telematics systems to monitor vehicle location, driver behavior, and compliance with safety protocols.'
        },
        {
            title: 'Drug and Alcohol Testing',
            description: 'Conducting regular screenings for drivers to comply with regulations and promote a safe work environment.'
        },
        {
            title: 'Safety Culture Development',
            description: 'Promoting a culture of safety within the organization, encouraging employees to prioritize safety and report unsafe conditions or practices.'
        },
        {
            title: 'Emergency Preparedness Training',
            description: 'Training drivers and staff on how to respond to emergencies, including first aid, fire safety, and evacuation procedures.'
        },
        {
            title: 'Incident Reporting Systems',
            description: 'Establishing systems for reporting and analyzing safety incidents to identify trends and areas for improvement.'
        }
    ],
    turnKeyServices: [
        {
            title: 'Fleet Management',
            description: 'We take care of everything from vehicle maintenance scheduling to route optimization, ensuring your fleet operates at peak performance.'
        },
        {
            title: 'Logistics Coordination',
            description: 'Our logistics experts manage the entire supply chain process, optimizing routes and load planning to reduce costs and improve delivery times.'
        },
        {
            title: 'Compliance Management',
            description: 'Stay compliant with industry regulations effortlessly. We handle everything from safety audits to regulatory reporting, so you can focus on your core operations.'
        },
        {
            title: 'Driver Recruitment and Training',
            description: 'We provide a comprehensive recruitment process, along with specialized training programs to ensure your drivers are well-prepared and compliant.'
        },
        {
            title: 'Accounting and Financial Services',
            description: 'Our accounting experts manage bookkeeping, invoicing, payroll, and tax preparation, providing you with clear financial insights and peace of mind.'
        },
        {
            title: 'Safety Programs',
            description: 'Implement robust safety measures with our tailored safety consulting services. We help you develop training programs and safety protocols that protect your drivers and cargo.'
        },
        {
            title: 'Technology Integration',
            description: 'We provide cutting-edge technology solutions, including fleet tracking, electronic logging devices (ELDs), and logistics software to enhance your operational efficiency.'
        }
    ],
    dispatchServices: [
        {
            title: 'Reliable and Efficient Trucking Dispatch Services',
            description: 'We specialize in providing comprehensive dispatch services designed for your trucking operations, whether you\'re an owner-operator, a small fleet, or a medium transportation company.'
        },
        {
            title: 'Expert Load Management',
            description: 'We handle the time-consuming process of load assignment, matching your available drivers with the right freight based on capacity, location, and delivery deadlines. We aim to maximize your fleet’s efficiency while keeping your drivers on schedule and reducing empty miles.'
        },
        {
            title: 'Real-Time Route Planning',
            description: 'Our dispatch team uses the latest GPS technology to plan optimal routes, accounting for road conditions, traffic, weather, and regulatory requirements. We make sure your drivers are always on the fastest, safest, and most fuel-efficient route, reducing delays and operating costs.'
        },
        {
            title: 'Seamless Communication',
            description: 'Our dispatchers maintain constant communication with your drivers throughout their journey. Whether it’s providing updates, rerouting for weather disruptions, or handling unexpected challenges, we are always just a call away. Our proactive approach ensures issues are resolved quickly, minimizing downtime.'
        },
        {
            title: 'Customer-Centric Support',
            description: 'We pride ourselves on providing exceptional customer service. From dispatching the right loads to updating customers on delivery progress, we are dedicated to maintaining strong communication with both you, your drivers, and customers. Your satisfaction is our priority, and we go above and beyond to meet your needs.'
        },
        {
            title: '24/7 Dispatch Availability',
            description: 'Providing round-the-clock dispatch services to ensure your operations run smoothly, regardless of time or day.'
        },
        {
            title: 'Load and Route Optimization',
            description: 'Maximizing efficiency by assigning the right loads to the right drivers and planning routes that minimize delays and fuel consumption.'
        },
        {
            title: 'Freight Tracking and Monitoring',
            description: 'Tracking freight in real-time to provide updates on delivery status, estimated arrival times, and any delays.'
        },
        {
            title: 'Real-Time Updates and Problem Resolution',
            description: 'Delivering timely updates to all stakeholders and resolving issues as they arise to keep your operation running without interruption.'
        },
        {
            title: 'Customer Communication and Reporting',
            description: 'Maintaining constant communication with customers to provide status updates, delivery estimates, and resolution of any concerns.'
        },
        {
            title: 'Focus on Your Business, Let Us Handle the Dispatching',
            description: 'Allowing you to focus on growing your business while we handle the logistics and operations of dispatching, route planning, and freight management.'
        }
    ]
};

const ServiceCom = () => {
    return (
        <div className="service-com-container">
            <h1 className="service-com-title">Our Comprehensive Services</h1>

            <div className="service-category">
                <h2 className="category-title">Turnkey Services</h2>
                <div className="service-grid">
                    {servicesData.turnKeyServices.map((service, index) => (
                        <div key={index} className="service-item">
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="service-category">
                <h2 className="category-title">Fleet Services</h2>
                <div className="service-grid">
                    {servicesData.fleetServices.map((service, index) => (
                        <div key={index} className="service-item">
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="service-category">
                <h2 className="category-title">Accounting Services</h2>
                <div className="service-grid">
                    {servicesData.accountingServices.map((service, index) => (
                        <div key={index} className="service-item">
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="service-category">
                <h2 className="category-title">Safety Services</h2>
                <div className="service-grid">
                    {servicesData.safetyServices.map((service, index) => (
                        <div key={index} className="service-item">
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="service-category">
                <h2 className="category-title">Dispatch Services</h2>
                <div className="service-grid">
                    {servicesData.dispatchServices.map((service, index) => (
                        <div key={index} className="service-item">
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="contact-button">
                <Link to="/contact">
                    <button className="contact-button">Contact us</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceCom;
