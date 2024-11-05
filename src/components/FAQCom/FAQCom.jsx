import React from 'react';
import {Accordion, AccordionSummary, AccordionDetails, Typography, Button, Box} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './FAQCom.css';
import {Link} from "react-router-dom";

const FAQCom = () => {
    const faqs = [
        {
            question: "Do you offer financing options for purchasing classic cars?",
            answer: "Yes, financing options are available through our trusted partners."
        },
        {
            question: "Are the showcased cars fully restored or in original condition?",
            answer: "Our inventory includes both fully restored and original-condition vehicles. Details are available on each listing."
        },
        {
            question: "Do you assist with shipping for purchased classic cars?",
            answer: "Yes, we can help arrange shipping through reliable carriers for safe transport of your vehicle."
        },
        {
            question: "Are your vintage cars certified or inspected for authenticity?",
            answer: "All vintage cars go through a thorough inspection to certify their authenticity."
        },
        {
            question: "Can I request additional photos before purchasing?",
            answer: "Yes, we welcome and encourage requests for more detailed photographs or videos."
        }
    ];

    return (
        <Box className="faq-container">
            <div className="faq-link">
                <Typography variant="h3" className="faq-title">FAQ</Typography>
                <Link to="/contact">
                    <Button className="ask-button">Ask a Question </Button>
                </Link>
            </div>
            <div className="faq-text">
                {faqs.map((faq, index) => (
                    <Accordion key={index} className="accordion-root">
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon className="accordion-expand-icon"/>}
                            classes={{content: 'accordion-summary-content'}}
                        >
                            {faq.question}
                        </AccordionSummary>
                        <AccordionDetails className="accordion-details">
                            <Typography>{faq.answer}</Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>

        </Box>
    );
};

export default FAQCom;
