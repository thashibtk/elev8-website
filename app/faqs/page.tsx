import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Modals from '@/components/Modals';

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
              <img src="/image/banner/faq.webp" alt="image" />
            </div>
            <div className="page-title-content">
              <div className="tit le text-anime text-gradient-1">
                faqs
              </div>
              <div className="tf-container">
                <div className="row justify-content-center">
                  <div className="col-md-10">
                    <div className="breadkcum">
                      <a href="/" className="link-breadkcum breadkcum-item">Home</a>
                      <span className="dot" />
                      <div className="page-breadkcum breadkcum-item">faqs</div>
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
              <div className="heading-section mb-30 position-relative z-5">
                <div className="tf-container">
                  <div className="row">
                    <div className="col-md-3 col-xl-5">
                      <div className="text-1 text-uppercase box-gradient-2 title text-Title text-anime">question &amp; answer</div>
                    </div>
                    <div className="col-md-9 col-xl-7">
                      <div className="text-color-change">
                        <h2 className="text-uppercase text">
                          Your Questions  Matter Let's Get You the Answers You Need
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tf-container">
                <div className="faqs-according" id="according-faqs">
                  <div className="faqs-according-item according-active wow fadeInUp active">
                    <a href="#according1" data-bs-toggle="collapse" className="title-according">
                      <div className="number h3">01</div>
                      <div className="title h3">What are your gym's operating hours?</div>
                      <i className="right-icon" />
                    </a>
                    <div id="according1" className="collapse show" data-bs-parent="#according-faqs">
                      <div className="according-content">
                        <p className="text">
                          We're open Monday to Saturday, 5:30 AM to 9:30 PM. We also have Ladies Special
                          hours from 11:00 AM to 4:00 PM, in a dedicated women-friendly environment.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="faqs-according-item according-active wow fadeInUp">
                    <a href="#according2" data-bs-toggle="collapse" className="title-according collapsed">
                      <div className="number">02</div>
                      <div className="title h3">Do you offer personal training sessions?</div>
                      <i className="right-icon" />
                    </a>
                    <div id="according2" className="collapse" data-bs-parent="#according-faqs">
                      <div className="according-content">
                        <p className="text">
                          Yes. Our experienced, certified trainers offer one-on-one personal training with
                          guidance and diet plans customized to your specific goals.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="faqs-according-item according-active wow fadeInUp">
                    <a href="#according3" data-bs-toggle="collapse" className="title-according collapsed">
                      <div className="number h3">03</div>
                      <div className="title h3">What types of memberships do you offer?</div>
                      <i className="right-icon" />
                    </a>
                    <div id="according3" className="collapse" data-bs-parent="#according-faqs">
                      <div className="according-content">
                        <p className="text">
                          We offer a range of membership options to suit different goals and schedules.
                          Drop by or give us a call and our team will help you pick the right plan.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="faqs-according-item according-active wow fadeInUp">
                    <a href="#according4" data-bs-toggle="collapse" className="title-according collapsed">
                      <div className="number h3">04</div>
                      <div className="title h3"> Is there a free trial or guest pass available?</div>
                      <i className="right-icon" />
                    </a>
                    <div id="according4" className="collapse" data-bs-parent="#according-faqs">
                      <div className="according-content">
                        <p className="text">
                          Reach out to our team directly for details on trial visits — we're happy to
                          walk you through the facility before you commit to a plan.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="faqs-according-item according-active wow fadeInUp">
                    <a href="#according5" data-bs-toggle="collapse" className="title-according collapsed">
                      <div className="number h3">05</div>
                      <div className="title h3">What kind of fitness training do you offer?</div>
                      <i className="right-icon" />
                    </a>
                    <div id="according5" className="collapse" data-bs-parent="#according-faqs">
                      <div className="according-content">
                        <p className="text">
                          Cardio Training, Strength Training, and CrossFit workouts, alongside Personal
                          Training with expert guidance — all on imported, high-quality equipment.
                        </p>
                        <div className="list-text">
                          <div className="text-item">Cardio Training</div>
                          <div className="text-item">Strength Training</div>
                          <div className="text-item">CrossFit Workouts</div>
                          <div className="text-item">Personal Training</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="faqs-according-item according-active wow fadeInUp">
                    <a href="#according6" data-bs-toggle="collapse" className="title-according collapsed">
                      <div className="number h3">06</div>
                      <div className="title h3">Do you provide nutrition or diet guidance?</div>
                      <i className="right-icon" />
                    </a>
                    <div id="according6" className="collapse" data-bs-parent="#according-faqs">
                      <div className="according-content">
                        <p className="text">
                          Yes. We offer customized Diet &amp; Weight Control guidance to help you manage
                          your body composition alongside your training.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="faqs-according-item according-active wow fadeInUp">
                    <a href="#according7" data-bs-toggle="collapse" className="title-according collapsed">
                      <div className="number h3">07</div>
                      <div className="title h3">How qualified are your trainers?</div>
                      <i className="right-icon" />
                    </a>
                    <div id="according7" className="collapse" data-bs-parent="#according-faqs">
                      <div className="according-content">
                        <p className="text">
                          Our trainers are experienced and certified, and work closely with every member —
                          men and women alike — to help you reach your goals safely.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="faqs-according-item according-active wow fadeInUp">
                    <a href="#according8" data-bs-toggle="collapse" className="title-according collapsed">
                      <div className="number h3">08</div>
                      <div className="title h3">Do you have a steam bath or recovery facilities?</div>
                      <i className="right-icon" />
                    </a>
                    <div id="according8" className="collapse" data-bs-parent="#according-faqs">
                      <div className="according-content">
                        <p className="text">
                          Yes, we have a steam bath to help you recover after intense training sessions.
                          Contact us for details on other amenities like lockers.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="faqs-according-item according-active wow fadeInUp">
                    <a href="#according9" data-bs-toggle="collapse" className="title-according collapsed">
                      <div className="number h3">09</div>
                      <div className="title h3">Can I pause or cancel my membership?</div>
                      <i className="right-icon" />
                    </a>
                    <div id="according9" className="collapse" data-bs-parent="#according-faqs">
                      <div className="according-content">
                        <p className="text">
                          Membership terms are explained at sign-up. Speak with our front desk team about
                          your specific plan for pausing or cancellation options.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="faqs-according-item according-active wow fadeInUp">
                    <a href="#according10" data-bs-toggle="collapse" className="title-according collapsed">
                      <div className="number h3">10</div>
                      <div className="title h3">Is Elev8 suitable for women, and are there women-only hours?</div>
                      <i className="right-icon" />
                    </a>
                    <div id="according10" className="collapse" data-bs-parent="#according-faqs">
                      <div className="according-content">
                        <p className="text">
                          Absolutely. Elev8 is a unisex gym built to be safe and comfortable for both men
                          and women, and we also offer Ladies Special hours from 11:00 AM to 4:00 PM.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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