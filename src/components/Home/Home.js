import React from 'react';
import Banner from '../Banner/Banner';
import Brand from '../Brand/Brand';
import Counter from '../Counter/Counter';
import CustomerReview from '../CustomerReview/CustomerReview';
import DifferentBg from '../DifferentBg/DifferentBg';
import ExtraSection from '../ExtraSection/ExtraSection';
import Features from '../Features/Features';
import Footer from '../Footer/Footer';
import Gallery from '../Gallery/Gallery';
import Header from '../Header/Header';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Features/>
            <DifferentBg/>
            <Services />
            <ExtraSection />
            <Brand/>
            <Counter/>
            {/* <Reviews /> */}
            <CustomerReview/>
            <Gallery/>
            <Footer />
        </div>
    );
};

export default Home;