import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';

const ApplyNow = () => {
    return (
        <>
            <Navbar />
            
            <PageBanner 
                pageTitle="Calculator" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Calculator" 
                imgClass="item-bg-2" 
            /> 

            <>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h1>calculator</h1>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </>
      
            <Footer />
        </>
    )
}

export default ApplyNow;