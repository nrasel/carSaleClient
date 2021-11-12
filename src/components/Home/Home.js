import React from 'react';
import Banner from '../Banner/Banner';
import ExtraSection from '../ExtraSection/ExtraSection';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Services />
            <ExtraSection />
            <Reviews />
            <Footer />
        </div>
    );
};

export default Home;