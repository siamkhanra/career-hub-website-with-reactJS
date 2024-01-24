import React from 'react';
import './DreamJob.css'
import person from '../../../assets/images/user.png'
const DreamJob = () => {
    return (
        <div className='dream-job-container'>
            <div className='quotation'> 
                <p className='quote'>One Step <br></br> Closer To Your <span className='quote-dream'>Dream Job</span></p>
                <p className='quotes'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='apply-btn'>Get Started</button>
            </div>
            <div className='person-img'>
                <img src={person} alt="" />
            </div>
        </div>
    );
};

export default DreamJob;