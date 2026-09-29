import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Modals from '@/components/Modals';
import PortfolioGallery from '@/components/PortfolioGallery';

export const metadata: Metadata = {
  title: 'Photo Gallery',
  description: 'View photos from Elev8 Fitness Club, showcasing our premium equipment, training sessions, and world-class facilities.',
};

export default function Page() {
  return (
    <div className="counter-scroll">

      <div className="wrapper">
        <Header />
        
        {/* Main Content Start */}
        <>

          {/* page-title */}
          <div className="page-title">
            <div className="image">
              <img src="/image/banner/portfolio.webp" alt="image" />
            </div>
            <div className="page-title-content">
              <div className="title text-anime text-gradient-1">
                photo gallery
              </div>
              <div className="tf-container">
                <div className="row justify-content-center">
                  <div className="col-md-10">
                    <div className="breadkcum">
                      <Link href="/" className="link-breadkcum breadkcum-item">Home</Link>
                      <span className="dot" />
                      <div className="page-breadkcum breadkcum-item">photo gallery</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /page-title */}
          <div className="main-content">
            {/* section-portfolio */}
            <section className="tf-spacing-1 section-portfolio">
              <div className="heading-section position-relative z-5">
                <div className="tf-container">
                  <div className="row">
                    <div className="col-md-3 col-xl-5">
                      <div className="text-1 text-uppercase box-gradient-2 title text-Title text-anime">photo gallery</div>
                    </div>
                    <div className="col-md-9 col-xl-7">
                      <div className="text-color-change">
                        <h2 className="text-uppercase text">
                          Behind the Scenes of
                          your Fitness Journey Every Workout Tells a Story
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <PortfolioGallery />
            </section>
            {/* /section-portfolio */}
          </div>
        </>
        {/* Main Content End */}

        <Footer />
      </div>

      <Modals />
    </div>
  );
}