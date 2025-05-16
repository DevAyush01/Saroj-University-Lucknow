import React from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import AboutUs from '../components/AboutUsSection';
import NewsEventsSection from '../components/NewsEventsSection';
import AcademicHighlights from '../components/AcademicHighlights';

const HomePage = () => {
    return (
        <Layout>
            <HeroSection/>
            <AboutUs/>
            <NewsEventsSection/>
            <AcademicHighlights/>
            
            
        </Layout>
    );
}

export default HomePage;
