import React from 'react';
import './Footer.css'
import social from '../../../public/icons/social.png'

const Footer = () => {
    return (
        <div className='footer-main-container'>
            <div className='footer-container'>
                <div className='footer-text'>
                    <h2>CareerHub</h2>
                    <p>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                    <img src={social} alt="" />
                </div>
                <div>
                    <h3>Company</h3>
                    <p>About Us</p>
                    <p>Work</p>
                    <p>Latest News</p>
                    <p>Careers</p>
                </div>
                <div>
                    <h3>Product</h3>
                    <p>Prototype</p>
                    <p>Plans & Pricing</p>
                    <p>Customers</p>
                    <p>Integration</p>
                </div>
                <div>
                    <h3>Support</h3>
                    <p>Help Desk</p>
                    <p>Sales</p>
                    <p>Become a Partner</p>
                    <p>Developers</p>
                </div>
                <div>
                    <h3>Contact</h3>
                    <p>524 Broadway , NYC</p>
                    <p>+8801702......</p>
                </div>
            </div>
            <div className='footer-last'>
                <p>@2024 CareerHub. All Rights Reserved</p>
                <p>Powered by SiamKhan</p>
            </div>
        </div>
    );
};

export default Footer;