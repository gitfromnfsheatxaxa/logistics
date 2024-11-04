import React from 'react';
import './ServiiceCom.css';
import {Link} from "react-router-dom";

const services = [
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
        description: 'Preparing financial statements such as profit and loss statements, balance sheets, and cash flow statements.'
    },
    {
        title: 'Cost Analysis',
        description: 'Analyzing costs related to fuel, maintenance, insurance, and labor to identify areas for savings and improve profitability.'
    },
    {
        title: 'Budgeting and Forecasting',
        description: 'Developing budgets and financial forecasts for planning and decision-making.'
    },
    {
        title: 'Compliance and Regulatory Support',
        description: 'Ensuring business compliance with industry regulations, including audits and documentation.'
    },
    {
        title: 'Fleet Management Accounting',
        description: 'Tracking expenses related to the fleet, such as maintenance, fuel, and depreciation.'
    },
    {
        title: 'Cash Flow Management',
        description: 'Monitoring and managing cash flow to ensure sufficient funds for obligations.'
    }
];

const ServiceCom = () => {
    return (
        <div className="service-com-container">
            <h1 className="service-com-title">Streamline Your Operations with Our Comprehensive Solutions</h1>
            <p className="service-com-description">
                MO GLOBE TRUCKING provides turnkey solutions for all aspects of trucking operations, ensuring efficiency
                and compliance.
            </p>
            <div className="service-grid">
                {services.map((service, index) => (
                    <div key={index} className="service-item">
                        <h2 className="service-title">{service.title}</h2>
                        <p className="service-description">{service.description}</p>
                    </div>
                ))}
            </div>

        </div>
    );
};
export default ServiceCom;
