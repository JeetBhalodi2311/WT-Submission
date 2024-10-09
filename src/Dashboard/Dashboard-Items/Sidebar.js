import React from 'react';
import { Link } from 'react-router-dom';




function Sidebar({ isVisible }) {
    return (
        <aside className={`sidebar ${isVisible ? 'visible' : ''}`}>
            <ul className="sidebar-nav" id="sidebar-nav">

                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/">
                        <i className="bi bi-grid"></i>
                        <span>Dashboard</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/student">
                        <i className="bi bi-person"></i>
                        <span>Student</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/faculty">
                        <i className="bi bi-question-circle"></i>
                        <span>Faculty</span>
                    </Link>
                </li>


            </ul>
        </aside>
    );
}

export default Sidebar;
