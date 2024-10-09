import React, { useState } from 'react';
import './Dashboard.css';

import Header from './Dashboard-Items/Header';
import Sidebar from './Dashboard-Items/Sidebar';
import MainContent from './Dashboard-Items/MainContent';
import Footer from './Dashboard-Items/Footer';
import { Outlet } from 'react-router-dom'; 


const Dashboard = () => {
    const [isSidebarVisible, setSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };

    return (
        <div>
            <Header toggleSidebar={toggleSidebar} />
            <Sidebar isVisible={isSidebarVisible} />
            <main id="main" className="main">
            <Outlet />
            </main>
            
            <Footer />

            <a href="#" className="back-to-top d-flex align-items-center justify-content-center">
                <i className="bi bi-arrow-up-short"></i>
            </a>
        </div>
    );
};

export default Dashboard;
