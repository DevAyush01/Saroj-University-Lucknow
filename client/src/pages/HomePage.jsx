import React from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import AboutUs from '../components/AboutUsSection';
import NewsEventsSection from '../components/NewsEventsSection';
import AcademicHighlights from '../components/AcademicHighlights';
import PopupForm from '../components/PopupForm';

const HomePage = () => {
    return (
        <Layout>
           
            <PopupForm/>
            <HeroSection/>
            <AboutUs/>
            <NewsEventsSection/>
            <AcademicHighlights/>
            
            
        </Layout>
    );
}

export default HomePage;
