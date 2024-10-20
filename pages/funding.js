import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import AboutFunding from '../components/Funding/AboutFunding';
import WhyPeopleChooseUsTwo from '../components/Common/WhyPeopleChooseUsTwo';
import HowItWork from '../components/Funding/HowItWorks';
import ApplyForFunding from '../components/Funding/ApplyForFunding';
import Footer from '../components/_App/Footer';
import Head from 'next/head';

const Funding = () => {
    return (
        <>
            <Head>
              <title>Funding - Konnect Financial</title>
              <meta name="description" content="Discover the different types of legal funding we offer at Konnect Financial." />
              <link rel="icon" href="/assets/images/logo-sm.png" />
            </Head>
            <Navbar />

            <PageBanner 
                pageTitle="Pre-Settlement Funding" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Pre-Settlement Funding" 
                imgClass="item-bg-5" 
            /> 

            <AboutFunding />

            <WhyPeopleChooseUsTwo />

            <HowItWork />

            <ApplyForFunding />
            
            <Footer />
        </>
    )
}

export default Funding;