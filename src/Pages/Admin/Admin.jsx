import React, {useState} from 'react';
import './Admin.css';
import AdminCom from "../../components/AdminCom/AdminCom.jsx";

const AdminPage = () => {

    return (
        <div className="admin-container">
            <h1>Welcome to the Admin Page</h1>
            <p>Only accessible by admins.</p>
            <AdminCom/>
        </div>
    );
};

export default AdminPage;
