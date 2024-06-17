import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="sidebar-item">
                <a href="/">Home</a>
            </div>
            <div className="sidebar-item">
                <a href="/courses">Courses</a>
            </div>
        </aside>
    );
}

export default Sidebar;
