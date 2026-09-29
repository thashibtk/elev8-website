import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Modals from '@/components/Modals';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Elev8 Fitness Club. Find our location, contact details, and send us a message to start your fitness journey today.',
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
              <img src="/image/banner/contact.webp" alt="image" />
            </div>
            <div className="page-title-content">
              <div className="title text-anime text-gradient-1">
                contact us
              </div>
              <div className="tf-container">
                <div className="row justify-content-center">
                  <div className="col-md-10">
                    <div className="breadkcum">
                      <Link href="/" className="link-breadkcum breadkcum-item">Home</Link>
                      <span className="dot" />
                      <div className="page-breadkcum breadkcum-item">contact</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /page-title */}
          <div className="main-content">
            {/* section-contact */}
            <section className="tf-spacing-1 section-contact">
              <div className="tf-container z-5">
                <div className="row rg-30">
                  <div className="col-lg-4 col-md-5">
                    <div className="contact-content">
                      <div className="h4 title text-Title text-uppercase">
                        Reach out to us anytime through
                        our contact form or phone 
                        and we'll get back to you as soon 
                        as possible.
                      </div>
                      <div>
                        <div className="sub mb-30">contact US</div>
                        <p className="text mb-20">
                          Near Chicking, Munda PO, <br />
                          Edakkara, Kerala
                        </p>
                        <a className="text d-flex mb-20 link" href="mailto:info@elev8fitness.in">info@elev8fitness.in</a>
                        <a className="text d-flex link" href="tel:+917034201452">+91 7034 201 452</a>
                      </div>
                      <div>
                        <div className="sub mb-30">social media</div>
                        <div className="d-flex g-30">
                          <a className="social-text link" href="https://www.instagram.com/elev8_fitnessclub/">Instagram</a>
                          <a className="social-text link" href="https://www.facebook.com/">Facebook</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-7">
                    <div className="contact-form-wrap">
                      <h3 className="heading">
                        send us message
                      </h3>
                      <div className="sub">
                        Your email address will not be published. Required fields are marked *
                      </div>
                      <ContactForm />
                    </div>
                  </div>
                </div>
              </div>
              <div className="tf-marquee marquee-2">
                <div className="marquee-wrapper">
                  <div className="initial-child-container">
                    <div className="marquee-child-item">
                      <div className="text">
                        <span className="text-Title text-uppercase">Get</span> 
                        <span className="text-gradient-2 text-uppercase"> in touch - get in touch</span>
                      </div>
                    </div>
                    <div className="marquee-child-item">
                      <div className="text">
                        <span className="text-Title text-uppercase">Get</span> 
                        <span className="text-gradient-2 text-uppercase"> in touch - get in touch</span>
                      </div>
                    </div>
                    <div className="marquee-child-item">
                      <div className="text">
                        <span className="text-Title text-uppercase">Get</span> 
                        <span className="text-gradient-2 text-uppercase"> in touch - get in touch</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* /section-contact */}
            {/* map */}
            <div className="tf-spacing-1 pt_0">
              <div className="tf-container">
                <div className="wg-map">
                  <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.6163609277605!2d76.3208911!3d11.3627071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba623ff2ee1f677%3A0x52a8bc1a4aaaf6c9!2sElev8%20Fitness%20Club!5e0!3m2!1sen!2sin!4v1789473365447!5m2!1sen!2sin" height={670} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                  </iframe>
                </div>
              </div>
            </div>
            {/* /map */}
          </div>

        </>
        {/* Main Content End */}

        <Footer />
      </div>

      <Modals />
    </div>
  );
}