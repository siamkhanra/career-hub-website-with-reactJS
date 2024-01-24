import React from 'react';
import './Header.css'
import logo from '../../../images/logo.png'
import Home from '../Home/Home';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <div className={`header-container ${isHomePage ? 'home-page' : ''}`}>
                <img src={logo} alt="" />
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/statistics'>Statistics</Link>
                    <Link to='/jobs'>Applied Jobs</Link>
                    <Link to='/blogs'>Blogs</Link>
                </nav>
                <button className='apply-btn'>Start Applying</button>
        </div>
    );
};

export default Header;