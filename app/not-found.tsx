import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Modals from '../components/Modals';
import Loading from '../components/Loading';

export default function Page() {
  return (
    <div className="counter-scroll">
      <Loading />

      <div className="wrapper">
        <Header />
        <div className="main-content">
          {/* section-404 */}
          <div className="tf-spacing-3">
            <div className="tf-container">
              <div className="wrap-404">
                <div className="image tf-animate-2">
                  <img src="/image/section/404.png" alt="image" />
                </div>
                <div className="h2 heading">
                  Something went Wrong...
                </div>
                <div className="text">
                  Sorry, we couldn't find your page.
                </div>
                <a href="/" className="tf-btn style-black text-uppercase wow fadeInUp">back to home</a>
              </div>
            </div>
          </div>
          {/* /section-404 */}
        </div>
        <Footer />
      </div>

      <Modals />
    </div>
  );
}
