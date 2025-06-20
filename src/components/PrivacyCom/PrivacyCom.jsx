
import React from "react";
import './PrivacyCom.css';

const PrivacyPolicy = () => {
    return (
        <div className="privacy-container">
            <h1 className="privacy-heading">Privacy & Policy</h1>
            <p className="privacy-description">
                <b>MO Globe Trucking Corp</b> values your privacy and is committed to protecting your personal information.
            </p>
            <p className="privacy-description">
                We collect and store your contact details (such as name, phone number, and email) solely for business-related purposes, including dispatch communication, load assignments, updates, payment notifications, and customer support.
            </p>
            <p className="privacy-description">
                By providing your phone number, you consent to receive SMS messages from MO Globe Trucking regarding business operations. These messages may include time-sensitive information related to your loads or account. Message and data rates may apply. You may receive up to 4 messages per month, depending on your interaction with us.
            </p>
            <p className="privacy-description">
                You can unsubscribe from these messages at any time by replying <b>STOP</b>. For assistance, reply <b>HELP</b> or contact our team at:
            </p>
            <p className="privacy-contact">Email: <a href="mailto:support@moglobetrucking.com">support@moglobetrucking.com</a></p>
            <p className="privacy-contact">Phone: <a href="tel:+12679340439">+1 (267) 934-0439</a></p>
            <p className="privacy-description">
                We do <b>not</b> sell, rent, or share your information with third parties. Your data is securely stored and only accessible to authorized company personnel.
            </p>
            <p className="privacy-description">
                If you have any questions about this privacy policy or the use of your information, please contact us.
            </p>
        </div>
    );
};

export default PrivacyPolicy;
