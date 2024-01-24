import React from 'react';
import './Home.css'
import DreamJob from '../DreamJob/DreamJob';
import Header from '../Header/Header';
import Category from '../Category/Category';
import Feature from '../Feature/Feature';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <div className='home-first'>
                <div className='container'>
                    <DreamJob></DreamJob>
                    <Category></Category>
                    <Feature></Feature>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;