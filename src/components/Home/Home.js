import React from 'react';
import Banner from '../Banner/Banner';
import ExtraSection from '../ExtraSection/ExtraSection';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Services />
            <ExtraSection />
            <Footer />
        </div>
    );
};

export default Home;