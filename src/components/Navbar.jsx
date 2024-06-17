import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ searchQuery, setSearchQuery }) => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">Engineering Grace</div>
            <div className="navbar-search">
                <input 
                    type="text" 
                    placeholder="Search..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            <div className="navbar-actions">
                <button className="btn">Signup</button>
                <Link to="/notes" className="btn">Notes</Link>
            </div>
        </nav>
    );
}

export default Navbar;
