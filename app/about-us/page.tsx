import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Modals from '@/components/Modals';
import TestimonialsSection from '@/components/TestimonialsSection';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn more about Elev8 Fitness Club, our mission, world-class facilities, and the team dedicated to helping you achieve your fitness goals.',
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
              <img src="/image/banner/about.webp" alt="image" />
            </div>
            <div className="page-title-content">
              <div className="title text-anime text-gradient-1">
                learn about us
              </div>
              <div className="tf-container">
                <div className="row justify-content-center">
                  <div className="col-md-10">
                    <div className="breadkcum">
                      <Link href="/" className="link-breadkcum breadkcum-item">Home</Link>
                      <span className="dot" />
                      <div className="page-breadkcum breadkcum-item">about us</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /page-title */}
          <div className="main-content">
            {/* section-about-fitness */}
            <section className="tf-spacing-1 about-wrap-2 pb-0">
              <div className="heading-section position-relative z-5">
                <div className="tf-container">
                  <div className="row">
                    <div className="col-md-4 col-xl-6">
                      <div className="text-1 text-uppercase box-gradient-2 title text-Title text-anime">about elev8 fitness club</div>
                    </div>
                    <div className="col-md-8 col-xl-6">
                      <div className="text-color-change">
                        <h2 className="text-uppercase text">
                          we are dedicated to
                          helping you live a stronger, healthier,
                          &amp; confident life.
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tf-container z-5">
                <div className="row">
                  <div className="col-md-6 col-xl-5">
                    <div className="box-mission-vision">
                      <div className="flat-animate-tab">
                        <div className="wg-tab">
                          <ul className="tab-mission-vision" role="tablist">
                            <li className="nav-tab-item" role="presentation">
                              <a href="#tabmission" data-bs-toggle="tab" role="tab" className="h4 text-uppercase active">Our Mission</a>
                            </li>
                            <li className="nav-tab-item" role="presentation">
                              <a href="#tabvision" data-bs-toggle="tab" role="tab" className="h4 text-uppercase">Our vision</a>
                            </li>
                          </ul>
                        </div>
                        <div className="tab-content">
                          <div className="tab-pane active show" id="tabmission" role="tabpanel">
                            <div className="tab-mission-vision-content">
                              <div className="text">
                                We're dedicated to giving every member men and women alike expert guidance,
                                personalized training and diet plans, and a safe, motivating environment to grow in.
                              </div>
                              <div className="list-text">
                                <div className="text-item">Imported, High-Quality Equipment</div>
                                <div className="text-item">Personalized Training &amp; Diet Plans</div>
                                <div className="text-item">Safe, Women-Friendly Environment</div>
                              </div>
                              <Link href="/contact" className="tf-btn style-black text-uppercase wow fadeInUp">Visit Us Today</Link>
                            </div>
                          </div>
                          <div className="tab-pane" id="tabvision" role="tabpanel">
                            <div className="tab-mission-vision-content">
                              <div className="text">
                                To be the Edakkara's leading premium fitness destination the place people trust for
                                real, world class results, whatever their goal or fitness level.
                              </div>
                              <div className="list-text">
                                <div className="text-item">The Only Premium Gym in Edakkara</div>
                                <div className="text-item">Certified, Experienced Trainers</div>
                                <div className="text-item">A Space Built for Everyone</div>
                              </div>
                              <Link href="/contact" className="tf-btn style-black text-uppercase wow fadeInUp">Visit Us Today</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-7">
                    <div className="about-image">
                      <div className="image tf-animate-2">
                        <img src="/image/about/message.webp" alt="image" />
                      </div>
                      <div className="content">
                        <div className="text h4">"Every rep, every drop of sweat, brings you closer to the strongest version of yourself."</div>
                        <div className="infor">
                          <div className="name">Elev8 Fitness Club</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tf-marquee marquee-2">
                <div className="marquee-wrapper">
                  <div className="initial-child-container">
                    <div className="marquee-child-item">
                      <div className="text">
                        <span className="text-Title">ELEV8</span> 
                        <span className="text-gradient-2">FITNESS</span>
                      </div>
                    </div>
                    <div className="marquee-child-item">
                      <div className="text">
                        <span className="text-Title">ELEV8</span> 
                        <span className="text-gradient-2">FITNESS</span>
                      </div>
                    </div>
                    <div className="marquee-child-item">
                      <div className="text">
                        <span className="text-Title">ELEV8</span> 
                        <span className="text-gradient-2">FITNESS</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* /section-about-fitness */}

            {/* section-about-fitness */}
            <section className="tf-spacing-1 section-about-fitness">
                <div className="heading-section position-relative z-5">
                    <div className="tf-container">
                        <div className="row">
                            <div className="col-md-3 col-xl-6">
                                <div className="text-1 text-uppercase box-gradient-2 title text-Title text-anime">about fitness center</div>
                            </div>
                            <div className="col-md-9 col-xl-6">
                                <div className="text-color-change">
                                    <h2 className="text-uppercase text">
                                        we provide the perfect environment to achieve health & fitness goals.
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tf-container w1778">
                    <div className="swiper tf-swiper" data-swiper={`{
                        "slidesPerView": 1,
                        "spaceBetween": 30,
                        "pagination": { "el": ".sw-pagination-team", "clickable": true },
                        "breakpoints": {
                            "767": { "slidesPerView": 2, "slidesPerGroup": 1},
                            "1150": { "slidesPerView": 4, "slidesPerGroup": 1}
                            }
                        }`}>
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <Link href="/services/personal-training" className="features-item style-2 wow fadeInUp">
                                    <div className="image">
                                        <img src="/image/home/personal.webp" alt="image" />
                                    </div>
                                    <div className="icon">
                                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M25 0C11.1932 0 0 11.1932 0 25C0 38.8068 11.1932 50 25 50C38.8068 50 50 38.8068 50 25C50 11.1932 38.8068 0 25 0ZM25 45.8333C13.4943 45.8333 4.1667 36.5057 4.1667 25C4.1667 13.4943 13.4943 4.1667 25 4.1667C36.5057 4.1667 45.8333 13.4943 45.8333 25C45.8333 36.5057 36.5057 45.8333 25 45.8333Z" fill="#DEFB02"/>
                                            <path d="M36.8899 13.1102C36.0763 12.2966 34.7572 12.2966 33.9436 13.1102L29.2321 17.8217C27.9915 17.0888 26.5454 16.6666 25 16.6666C23.4546 16.6666 22.0086 17.0888 20.768 17.8217L16.0565 13.1102C15.2429 12.2966 13.9238 12.2966 13.1102 13.1102C12.2966 13.9238 12.2966 15.2429 13.1102 16.0565L17.8217 20.768C17.0888 22.0085 16.6666 23.4546 16.6666 25C16.6666 26.5454 17.0888 27.9914 17.8217 29.2321L13.1102 33.9436C12.2966 34.7572 12.2966 36.0763 13.1102 36.8899C13.9238 37.7034 15.2429 37.7034 16.0565 36.8899L20.768 32.1783C22.0085 32.9113 23.4546 33.3334 25 33.3334C26.5454 33.3334 27.9914 32.9113 29.2321 32.1783L33.9436 36.8899C34.7572 37.7034 36.0763 37.7034 36.8899 36.8899C37.7034 36.0763 37.7034 34.7572 36.8899 33.9436L32.1783 29.2321C32.9113 27.9915 33.3334 26.5454 33.3334 25C33.3334 23.4546 32.9114 22.0086 32.1783 20.768L36.8899 16.0565C37.7034 15.2429 37.7034 13.9239 36.8899 13.1102ZM22.8239 28.5536C22.7274 28.239 22.5555 27.9425 22.3065 27.6935C22.0574 27.4445 21.761 27.2727 21.4463 27.176C21.0576 26.5426 20.8333 25.7976 20.8333 24.9999C20.8333 24.2023 21.0577 23.4573 21.4463 22.8239C21.761 22.7273 22.0574 22.5554 22.3065 22.3064C22.5555 22.0573 22.7273 21.7609 22.8239 21.4462C23.4573 21.0575 24.2024 20.8332 25 20.8332C25.7977 20.8332 26.5427 21.0576 27.1761 21.4462C27.2727 21.7609 27.4446 22.0573 27.6936 22.3064C27.9426 22.5554 28.2391 22.7272 28.5537 22.8239C28.9424 23.4573 29.1667 24.2023 29.1667 24.9999C29.1667 25.7976 28.9423 26.5426 28.5537 27.176C28.2391 27.2726 27.9426 27.4445 27.6936 27.6935C27.4446 27.9425 27.2728 28.239 27.1761 28.5536C26.5427 28.9423 25.7977 29.1666 25 29.1666C24.2024 29.1666 23.4573 28.9423 22.8239 28.5536Z" fill="#DEFB02"/>
                                        </svg>
                                    </div>
                                    <div className="h3 title">personal training</div>
                                    <p className="text">One-on-one guidance from certified trainers, with programs built around your specific fitness and diet goals.</p>
                                </Link>
                            </div>
                            <div className="swiper-slide">
                                <Link href="/services/cardio-training" className="features-item style-2 wow fadeInUp" data-wow-delay=".1s">
                                    <div className="image">
                                        <img src="/image/home/cardio.webp" alt="image" />
                                    </div>
                                    <div className="icon">
                                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M25 0C11.2142 0 0 11.2165 0 25C0 38.7835 11.2142 50 25 50C38.7858 50 50 38.7835 50 25C50 11.2165 38.7858 0 25 0ZM25 47.6182C12.5277 47.6182 2.38175 37.4707 2.38175 25C2.38175 12.5293 12.5277 2.38175 25 2.38175C37.4723 2.38175 47.6182 12.5293 47.6182 25C47.6182 37.4707 37.4723 47.6182 25 47.6182Z" fill="#DEFB02"/>
                                            <path d="M31.8437 22.6183H18.1565V27.3818H31.8437V22.6183Z" fill="#DEFB02"/>
                                            <path d="M8.93022 21.2783V21.7621C8.7511 21.6527 8.55478 21.5777 8.33285 21.5777C7.67531 21.5777 7.14355 22.1104 7.14355 22.7669V27.233C7.14355 27.8895 7.67531 28.4221 8.33285 28.4221C8.55478 28.4221 8.7511 28.3472 8.93022 28.2378V28.7216C8.93022 29.9348 9.84005 30.9244 11.013 31.0718V18.9281C9.84005 19.0755 8.93022 20.0651 8.93022 21.2783Z" fill="#DEFB02"/>
                                            <path d="M41.6673 21.5777C41.4454 21.5777 41.2491 21.6527 41.0701 21.7621V21.2783C41.0701 20.0651 40.1601 19.0755 38.9873 18.9281V31.0721C40.1603 30.9246 41.0701 29.9351 41.0701 28.722V28.2381C41.2492 28.3476 41.4456 28.4225 41.6673 28.4225C42.3248 28.4225 42.8566 27.8899 42.8566 27.2334V22.7672C42.8566 22.1104 42.3248 21.5777 41.6673 21.5777Z" fill="#DEFB02"/>
                                            <path d="M14.5839 15.1813C13.2703 15.1813 12.2039 16.2478 12.2039 17.5629V32.4371C12.2039 33.7522 13.2705 34.8186 14.5839 34.8186C15.8989 34.8186 16.9656 33.7522 16.9656 32.4371V17.5629C16.9656 16.2478 15.8989 15.1813 14.5839 15.1813Z" fill="#DEFB02"/>
                                            <path d="M35.4162 15.1813C34.1011 15.1813 33.0344 16.2478 33.0344 17.5629V32.4371C33.0344 33.7522 34.1011 34.8186 35.4162 34.8186C36.7297 34.8186 37.7962 33.7522 37.7962 32.4371V17.5629C37.7962 16.2478 36.7297 15.1813 35.4162 15.1813Z" fill="#DEFB02"/>
                                        </svg>
                                    </div>
                                    <div className="h3 title">cardio & strength</div>
                                    <p className="text">Dedicated cardio and strength setups with imported, high-quality machines to build endurance and raw power.</p>
                                </Link>
                            </div>
                            <div className="swiper-slide">
                                <Link href="/services/crossfit-workouts" className="features-item style-2 wow fadeInUp" data-wow-delay=".2s">
                                    <div className="image">
                                        <img src="/image/home/crossfit.webp" alt="image" />
                                    </div>
                                    <div className="icon">
                                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M47.9167 38.5417H45.2517L44.1984 35.382C47.6359 33.6801 50.0001 30.1372 50.0001 26.0417C50.0001 21.0026 46.4212 16.799 41.6668 15.8336V11.1962C45.2623 10.2719 47.9168 7.0104 47.9168 3.12505C47.9168 1.97446 46.9841 1.04175 45.8335 1.04175C44.6827 1.04175 43.75 1.97446 43.75 3.12505C43.75 4.69702 42.882 6.06333 41.5989 6.773C41.3681 5.87388 40.5545 5.20845 39.5833 5.20845C38.4327 5.20845 37.5 6.14116 37.5 7.29175V15.8336C33.2926 16.6878 30.0064 20.0784 29.3059 24.3396L13.815 27.782L9.25625 15.625H10.4167C11.5673 15.625 12.5 14.6923 12.5 13.5417C12.5 12.3912 11.5673 11.4584 10.4167 11.4584H6.26338C6.24834 11.4583 6.2333 11.4583 6.21826 11.4584H2.0833C0.932715 11.4583 0 12.3912 0 13.5417C0 14.6923 0.932715 15.625 2.0833 15.625H4.80625L10.3405 30.3831L8.70879 38.5417H2.0833C0.932715 38.5417 0 39.4745 0 40.625V46.875C0 48.0256 0.932715 48.9584 2.0833 48.9584H47.9166C49.0672 48.9584 49.9999 48.0256 49.9999 46.875V40.625C50 39.4745 49.0673 38.5417 47.9167 38.5417ZM39.5833 19.7917C43.0348 19.7917 45.8333 22.5903 45.8333 26.0417C45.8333 29.4932 43.0348 32.2917 39.5833 32.2917C36.1318 32.2917 33.3333 29.4932 33.3333 26.0417C33.3333 22.5903 36.1318 19.7917 39.5833 19.7917ZM22.8239 28.5536C22.7274 28.239 22.5555 27.9425 22.3065 27.6935C22.0574 27.4445 21.761 27.2727 21.4463 27.176C21.0576 26.5426 20.8333 25.7976 20.8333 24.9999C20.8333 24.2023 21.0577 23.4573 21.4463 22.8239C21.761 22.7273 22.0574 22.5554 22.3065 22.3064C22.5555 22.0573 22.7273 21.7609 22.8239 21.4462C23.4573 21.0575 24.2024 20.8332 25 20.8332C25.7977 20.8332 26.5427 21.0576 27.1761 21.4462C27.2727 21.7609 27.4446 22.0573 27.6936 22.3064C27.9426 22.5554 28.2391 22.7272 28.5537 22.8239C28.9424 23.4573 29.1667 24.2023 29.1667 24.9999C29.1667 25.7976 28.9423 26.5426 28.5537 27.176C28.2391 27.2726 27.9426 27.4445 27.6936 27.6935C27.4446 27.9425 27.2728 28.239 27.1761 28.5536C26.5427 28.9423 25.7977 29.1666 25 29.1666C24.2024 29.1666 23.4573 28.9423 22.8239 28.5536Z" fill="#DEFB02"/>
                                        </svg>
                                    </div>
                                    <div className="h3 title">crossfit workouts</div>
                                    <p className="text">High-intensity functional movement programs designed to improve overall conditioning and agility.</p>
                                </Link>
                            </div>
                            <div className="swiper-slide">
                                <Link href="/services/diet-weight-control" className="features-item style-2 wow fadeInUp" data-wow-delay=".3s">
                                    <div className="image">
                                        <img src="/image/home/diet.webp" alt="image" />
                                    </div>
                                    <div className="icon">
                                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M47.8119 10.164L41.9202 4.27227C41.1066 3.45869 39.7875 3.45869 38.9739 4.27227C38.1603 5.08584 38.1603 6.40498 38.9739 7.21855L40.4462 8.69082L37.0013 12.1356C34.1426 10.1175 30.7532 8.80098 27.0833 8.43662V4.1667H29.1666C30.3172 4.1667 31.2499 3.23398 31.2499 2.0834C31.25 0.932715 30.3173 0 29.1667 0H20.8334C19.6827 0 18.75 0.932715 18.75 2.0833C18.75 3.23389 19.6827 4.1666 20.8333 4.1666H22.9166V8.43662C19.2467 8.80098 15.8574 10.1175 12.9985 12.1356L9.55378 8.69082L11.026 7.21855C11.8396 6.40498 11.8396 5.08584 11.026 4.27227C10.2125 3.45869 8.89333 3.45869 8.07976 4.27227L2.18806 10.164C1.37449 10.9775 1.37449 12.2967 2.18806 13.1103C3.00164 13.9238 4.32078 13.9238 5.13435 13.1103L6.6075 11.6371L9.84382 14.8734C6.32449 18.6039 4.16667 23.6328 4.16667 29.1667C4.16667 40.6735 13.4931 50 25 50C36.5068 50 45.8333 40.6735 45.8333 29.1667C45.8333 23.6328 43.6755 18.6039 40.1561 14.8734L43.3925 11.6371L44.8656 13.1103C45.6792 13.9238 46.9983 13.9238 47.8119 13.1103C48.6255 12.2966 48.6255 10.9775 47.8119 10.164ZM25 45.8333C15.7943 45.8333 8.33328 38.3723 8.33328 29.1666C8.33328 19.9609 15.7943 12.5 25 12.5C34.2056 12.5 41.6667 19.961 41.6667 29.1667C41.6667 38.3724 34.2056 45.8333 25 45.8333Z" fill="#DEFB02"/>
                                            <path d="M27.0833 23.2736V18.75C27.0833 17.5995 26.1506 16.6667 25 16.6667C23.8494 16.6667 22.9167 17.5995 22.9167 18.75V23.2736C20.4891 24.1314 18.75 26.4448 18.75 29.1667C18.75 32.6194 21.5474 35.4167 25 35.4167C28.4526 35.4167 31.25 32.6194 31.25 29.1667C31.25 26.4448 29.5109 24.1314 27.0833 23.2736ZM25 31.25C23.8485 31.25 22.9167 30.3182 22.9167 29.1667C22.9167 28.0153 23.8485 27.0834 25 27.0834C26.1515 27.0834 27.0833 28.0153 27.0833 29.1667C27.0833 30.3182 26.1515 31.25 25 31.25Z" fill="#DEFB02"/>
                                        </svg>
                                    </div>
                                    <div className="h3 title">diet & weight control</div>
                                    <p className="text">Customized nutritional guidance from our experts to help you manage body composition effectively.</p>
                                </Link>
                            </div>
                        </div>
                        <div className="sw-pagination-team sw-pagination d-xl-none justify-content-center mt-15"></div>
                    </div>
                </div>
            </section>
            {/* /section-about-fitness */}


            {/* section-value */}
            <section className="tf-spacing-1 section-value">
              <div className="img-bg">
                <img className="parallax-img" src="/image/about/corebg.webp" alt="image" />
              </div>
              <div className="heading-section mb-100">
                <div className="tf-container">
                  <div className="row">
                    <div className="col-md-3 col-xl-6">
                      <div className="text-1 text-uppercase box-gradient-2 title text-Title text-anime">Our Core Values</div>
                    </div>
                    <div className="col-md-9 col-xl-6">
                      <div className="text-color-change-white text-top">
                        <h2 className="text-uppercase text">
                          Empowering Fitness Through Core Beliefs
                          Fitness Built Integrity
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tf-container">
                <div className="swiper tf-swiper" data-swiper="{
                          &quot;slidesPerView&quot;: 1,
                          &quot;spaceBetween&quot;: 30,
                          &quot;pagination&quot;: { &quot;el&quot;: &quot;.sw-pagination-value&quot;, &quot;clickable&quot;: true },
                          &quot;breakpoints&quot;: {
                              &quot;767&quot;: { &quot;slidesPerView&quot;: 2, &quot;slidesPerGroup&quot;: 1},
                              &quot;1150&quot;: { &quot;slidesPerView&quot;: 4, &quot;slidesPerGroup&quot;: 1}
                              }
                          }">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="value-item wow fadeInUp">
                        <div className="icon">
                          <svg width={52} height={55} viewBox="0 0 52 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M32.6665 6.62651C32.6665 10.2862 29.6818 13.253 26 13.253C22.3182 13.253 19.3335 10.2862 19.3335 6.62651C19.3335 2.96679 22.3182 0 26 0C29.6818 0 32.6665 2.96679 32.6665 6.62651Z" fill="#DEFB02" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M26 20.597C25.0501 20.5971 24.1891 20.6513 23.704 20.7331L21.3265 21.1311C15.9598 22.0294 12.0003 26.7013 12.0003 32.2056C12.0003 35.0703 10.575 37.7541 8.1883 39.3521L7.91833 39.5329C7.23896 39.9877 6.50172 40.3501 5.72601 40.6096L2.63887 41.6433C1.59212 41.9937 0.457722 41.4342 0.10517 40.3938C-0.247409 39.3535 0.315352 38.2259 1.36213 37.8752L4.44924 36.8417C4.88517 36.6957 5.30031 36.4919 5.68361 36.2353L5.95355 36.0545C7.22715 35.2018 8.00036 33.7594 8.00036 32.2056C8.00036 24.7903 13.3405 18.436 20.6622 17.2104L23.0355 16.8131C23.8472 16.6764 24.9683 16.6211 26 16.6211C27.0311 16.621 28.1517 16.676 28.9636 16.813L31.3377 17.2104C38.6594 18.436 43.9996 24.7903 43.9996 32.2056C43.9996 33.7594 44.7729 35.2018 46.0465 36.0545L46.3163 36.2353C46.6995 36.4919 47.1147 36.6957 47.5507 36.8417L50.6378 37.8752C51.6845 38.2259 52.2474 39.3535 51.8949 40.3938C51.5424 41.4342 50.408 41.9937 49.3611 41.6433L46.2739 40.6096C45.4982 40.3501 44.7609 39.9877 44.0817 39.5329L43.8116 39.3521C41.425 37.7541 39.9997 35.0703 39.9997 32.2056C39.9997 26.7013 36.04 22.0294 30.6735 21.1311L28.2954 20.733C27.8109 20.6512 26.9501 20.597 26 20.597ZM17.7335 35.9159C18.3962 35.0375 19.6498 34.8596 20.5334 35.5183C21.4171 36.177 21.5961 37.423 20.9334 38.3014L18.4681 41.5688C18.4485 41.5948 18.4292 41.6203 18.4101 41.6457C18.073 42.0929 17.8079 42.4443 17.5024 42.7619C16.7508 43.5427 15.834 44.1479 14.8182 44.5333C14.4053 44.6899 13.9765 44.7965 13.4311 44.9317C13.4002 44.9393 13.3689 44.9473 13.3373 44.955L8.55493 46.1435C7.44541 46.4192 6.66705 47.4102 6.66705 48.5468C6.66705 49.9151 7.78292 51.0243 9.15943 51.0243H10.9827C15.1051 51.0243 19.1162 49.6953 22.4142 47.2369L27.4666 43.4701C28.3503 42.8114 29.6039 42.9893 30.2665 43.8677C30.9292 44.7461 30.7503 45.9922 29.8666 46.6508L27.4541 48.4493L28.7655 48.938C30.1892 49.4687 30.8313 49.7072 31.4764 49.9079C33.4182 50.5112 35.4278 50.8732 37.4592 50.9862C38.1338 51.0235 38.8194 51.0243 40.3399 51.0243H42.8404C44.2169 51.0243 45.3329 49.9151 45.3329 48.5468C45.3329 47.4102 44.5545 46.4192 43.4449 46.1435L39.5154 45.167C39.4418 45.1487 39.3693 45.1307 39.2973 45.113C38.029 44.7986 37.0283 44.5508 36.1339 44.0381C35.8664 43.8849 35.6091 43.715 35.3635 43.5295C34.5411 42.9092 33.9227 42.0886 33.1393 41.0485C33.0947 40.9897 33.0499 40.93 33.0043 40.8696L31.0665 38.3014C30.4039 37.423 30.5828 36.177 31.4665 35.5183C32.3502 34.8596 33.6038 35.0375 34.2665 35.9159L36.2043 38.4841C37.1869 39.7866 37.4616 40.1211 37.7816 40.3625C37.8933 40.4468 38.0104 40.524 38.132 40.5937C38.48 40.7933 38.8968 40.9149 40.4858 41.3099L44.415 42.2863C47.3054 43.0044 49.3328 45.5858 49.3328 48.5468C49.3328 52.1111 46.4262 55.0002 42.8404 55.0002H40.2727C38.8368 55.0002 38.0352 55.0002 37.236 54.956C34.8752 54.8248 32.5398 54.4038 30.2831 53.7028C29.5191 53.4653 28.7684 53.1854 27.4239 52.6841L23.6043 51.2605C19.8616 53.6948 15.4768 55.0002 10.9827 55.0002H9.15943C5.57385 55.0002 2.66714 52.1111 2.66714 48.5468C2.66714 45.5858 4.69467 43.0044 7.58482 42.2863L12.3671 41.0978C13.049 40.9284 13.2311 40.8797 13.3918 40.8187C13.8535 40.6438 14.2702 40.3686 14.6118 40.0137C14.7307 39.8899 14.8465 39.742 15.2682 39.1833L17.7335 35.9159Z" fill="#DEFB02" />
                          </svg>
                        </div>
                        <div className="h4 title link">Mindfulness</div>
                        <div className="text">
                          We believe that wellness
                          goes beyond physical strength 
                          practicing mindfulness matters too.
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="value-item wow fadeInUp" data-wow-delay=".1s">
                        <div className="icon">
                          <svg width={86} height={55} viewBox="0 0 86 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M18.8816 7.42995C19.8072 1.90116 26.3041 -1.13307 31.3618 0.390044C32.2934 1.1516 32.2337 2.6987 31.4096 3.52622C28.9972 3.96996 26.2085 3.5562 24.2201 5.31918C22.2316 6.95622 22.5063 9.81056 22.0823 12.1072C32.8607 12.1972 43.639 11.7534 54.4174 11.9633C54.6861 11.2437 54.9668 10.5241 55.2534 9.81056C52.4767 9.34883 49.7418 8.73119 47.1323 7.6818C47.6637 6.63841 47.9205 4.88743 49.4432 4.9294C53.1216 4.70753 56.8239 4.74351 60.5082 4.91741C62.6101 4.95939 62.5624 7.62184 62.3116 9.12096C62.1026 10.6861 60.1917 10.4402 59.0751 10.788C58.7526 11.4056 58.4361 12.0353 58.1316 12.6649C59.5468 15.7351 61.1531 18.7094 62.6937 21.7136C67.447 20.2745 72.8571 20.2265 77.258 22.781C81.8918 25.2456 84.973 30.0068 86.0001 35.1098V40.1169C85.2119 45.2679 82.1724 50.0951 77.6103 52.6736C71.8837 56.0736 64.1806 55.6899 58.8721 51.6542C54.9966 48.9318 52.7036 44.4644 51.9393 39.8531C49.5268 39.7691 47.1084 39.6792 44.696 39.6252C37.0526 32.0396 29.1405 24.7059 21.4075 17.2043C21.2582 18.4635 21.103 19.7288 20.9657 20.9941C24.3693 22.0794 27.6835 23.7704 30.0004 26.5828C34.037 31.1102 35.1358 37.8442 33.213 43.5349C31.5111 48.4821 27.4386 52.5357 22.4645 54.1308C17.0186 55.9837 10.7008 54.8264 6.27006 51.1565C-0.0476779 46.1794 -1.8809 36.525 2.10202 29.5391C5.00412 23.9983 11.1069 20.6702 17.2694 20.5863C17.8366 16.2028 18.2964 11.8074 18.8816 7.42995ZM25.695 15.975C32.0366 22.3313 38.7305 28.3218 45.0423 34.7081C47.8071 28.3818 50.333 21.9535 52.9365 15.5492C43.86 15.963 34.7596 15.4653 25.695 15.975ZM48.6849 36.0273C49.7597 36.0153 50.8465 36.0093 51.9333 36.0093C52.5842 31.0802 55.2235 26.4749 59.3139 23.6385C58.4302 21.5817 57.4091 19.5909 56.2446 17.696C53.6113 23.7584 51.1809 29.9049 48.6849 36.0273ZM9.69763 26.6967C4.98621 29.7729 2.55585 36.0393 4.23381 41.4721C5.42809 45.6997 8.75415 49.1956 12.9162 50.5569C16.8215 51.966 21.3359 51.1925 24.7037 48.8059C29.2778 45.6697 31.5947 39.4453 29.8929 34.1024C28.621 29.617 24.8829 26.1511 20.4879 24.8198C19.8729 29.0354 19.5146 33.2809 18.798 37.4725C18.4159 39.4933 14.8808 38.9836 15.2809 36.8668C15.5377 32.6513 16.3557 28.5017 16.7379 24.3041C14.2657 24.6639 11.7578 25.2216 9.69763 26.6967ZM64.4672 25.1376C66.3661 29.0054 68.4621 32.7712 70.367 36.633C71.2866 37.8742 70.4028 40.1109 68.7368 39.967C64.3896 40.1829 60.0484 39.6552 55.7012 39.8351C56.7522 45.8136 61.8518 50.7967 67.9486 51.2165C74.2424 51.8041 80.5004 47.2648 81.9336 41.0884C83.7549 34.6781 79.7719 27.4403 73.5617 25.2696C70.6656 24.0643 67.435 24.3041 64.4672 25.1376ZM55.8028 36.1892C59.1706 36.1892 62.5445 36.2012 65.9183 36.1592C64.2463 33.137 62.8072 30.0008 61.0934 27.0086C58.2391 29.2453 56.1909 32.5313 55.8028 36.1892Z" fill="#DEFB02" />
                          </svg>
                        </div>
                        <div className="h4 title link">Practice</div>
                        <div className="text">
                          Every session is an opportunity
                          to grow stronger, improve form,
                          and push beyond your limits.
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="value-item wow fadeInUp" data-wow-delay=".2s">
                        <div className="icon">
                          <svg width={51} height={55} viewBox="0 0 51 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M13.5228 2.15548C17.1295 1.12843 20.791 -0.300137 24.6046 0.054893C27.3033 0.164783 29.0855 2.53587 30.4243 4.60688C31.5139 6.50037 32.802 8.93063 31.687 11.0777C29.7697 12.8486 27.3117 14.3406 24.6595 14.5604C21.868 14.8013 20.5461 11.5511 17.8517 11.4497C17.0112 11.213 16.344 12.0456 16.3651 12.8233C15.4866 19.2265 17.2477 25.5325 18.0586 31.8343C20.4067 30.2113 23.1476 28.8926 26.087 29.2307C29.1911 29.3448 32.1094 30.7607 34.2252 33.0092C38.2415 29.0912 44.4328 27.5739 49.7921 29.2265C51.5279 29.5942 51.3547 32.5866 49.5345 32.6162C48.0648 32.5147 46.6373 32.0709 45.1634 32.1048C41.6581 32.0709 38.1951 33.6728 35.961 36.3736C35.2895 37.054 34.6306 38.2332 33.503 37.9543C32.4472 37.8571 32.198 36.7624 31.7377 36.0143C30.4707 33.4657 27.3244 32.595 24.6764 32.7387C21.906 32.9712 19.7901 35.0253 18.0164 36.978C17.0999 38.2713 14.9123 37.3922 15.0052 35.8537C14.3168 27.7049 11.5886 19.5646 13.1258 11.3524C13.451 9.34483 15.3768 7.9543 17.3449 7.93739C19.6972 7.78101 21.8511 9.00248 23.5953 10.4564C24.9847 11.7709 26.7669 10.1944 28.0719 9.46318C28.9926 9.08701 28.224 8.13604 28.0128 7.55278C27.0034 5.72691 25.6985 3.18676 23.2194 3.48262C19.5663 3.75734 16.099 5.10561 12.6106 6.15379C8.87724 15.5071 5.6 25.1183 4.0374 35.0929C3.51794 38.0895 3.50949 41.1369 3.53905 44.1715C8.39157 47.3541 13.9832 49.4843 19.7775 49.9788C25.9392 50.5494 32.2107 48.8884 37.4729 45.672C38.44 45.0507 39.6479 44.7252 40.7586 45.2113C44.5257 46.4116 48.5082 48.8207 49.6527 52.8529C49.9019 54.1462 48.6138 54.7379 47.6002 55C46.1981 54.1758 45.856 52.4556 44.7158 51.3862C43.4023 50.1352 41.751 49.2772 40.0364 48.7108C39.4832 48.4784 38.989 48.9687 38.5203 49.1631C33.3045 52.1597 27.2611 53.7362 21.2387 53.5207C14.1479 53.3896 7.17105 50.9171 1.33874 46.9272C-0.101392 45.9847 0.080208 44.087 -3.38027e-05 42.5866C-0.0676058 33.8207 2.26785 25.2535 4.87782 16.9526C6.26305 12.7683 7.74119 8.60096 9.4685 4.54771C10.1273 2.90358 12.0658 2.68803 13.5228 2.15548Z" fill="#DEFB02" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M25.3944 17.9162C26.0279 17.1723 27.2273 17.1089 27.8777 17.8781C29.3305 19.3321 31.2352 20.4014 32.3332 22.1723C31.2901 22.3963 29.6092 21.7961 29.094 23.0726C28.9757 24.3574 29.0517 25.6507 29.0517 26.9356C28.8237 27.1131 28.3591 27.4597 28.1311 27.633C26.8219 27.5696 25.3606 27.8866 24.2499 27.0117C24.2837 25.7015 24.3555 24.3955 24.2457 23.0895C23.6291 21.813 21.982 22.3921 20.8882 22.1343C22.1383 20.4775 23.8994 19.3236 25.3944 17.9162Z" fill="#DEFB02" />
                          </svg>
                        </div>
                        <div className="h4 title link">Movement</div>
                        <div className="text">
                          We believe that staying
                          active is the key to strength,
                          balance, and longevity.
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="value-item wow fadeInUp" data-wow-delay=".3s">
                        <div className="icon">
                          <svg width={59} height={55} viewBox="0 0 59 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M7.94915 0.570059C8.68671 -0.234819 10.2438 -0.177327 10.9331 0.656296C13.3579 4.49863 15.3633 8.61884 16.8818 12.8924C18.3473 17.3767 19.6055 22.1772 18.6076 26.8963C17.6869 31.1938 15.1416 34.8684 12.9385 38.5958C23.3511 41.0152 34.4435 40.7325 44.6054 37.3597C42.2337 33.2682 39.457 29.0378 39.4232 24.1463C39.2689 16.4616 42.6386 9.26083 46.2252 2.63975C46.8952 1.61448 47.4496 0.0191011 48.9103 0.00951925C50.4963 -0.110254 51.5905 1.82529 50.6361 3.09489C47.9076 7.80438 45.4683 12.739 44.1185 18.0235C43.4147 20.9076 42.9616 23.993 43.8727 26.8819C45.155 31.1219 47.9076 34.6863 50.0624 38.5095C52.627 42.8789 54.5842 47.7992 54.4829 52.9303C54.6661 54.3148 52.9451 55.4886 51.7159 54.8035C50.2167 54.243 50.6312 52.4799 50.3998 51.2486C50.2697 49.1023 49.59 47.0518 48.8669 45.0444C36.2319 50.1755 21.8326 50.7743 8.78795 46.8218C8.1227 48.9681 7.88649 51.2007 7.71776 53.4381C7.53458 55.4934 4.21315 55.4407 3.8516 53.5052C3.54307 47.895 5.83771 42.5147 8.68671 37.7957C10.938 33.8815 13.8062 30.1685 14.7415 25.665C15.3633 21.952 14.3944 18.1911 13.1796 14.6938C11.9117 11.1676 10.2872 7.78043 8.46014 4.513C8.07931 3.92851 7.78043 3.20987 7.13446 2.8745L6.78738 2.85055L6.67168 2.80264C7.18267 2.09837 7.55386 1.33182 7.94915 0.570059ZM11.6321 40.8044C10.9476 42.0117 10.3113 43.2478 9.71833 44.4982C22.146 48.1345 35.774 47.6411 47.8111 42.8118C47.2279 41.7147 46.6253 40.6271 46.0179 39.5396C34.9834 43.219 22.8932 43.6933 11.6321 40.8044Z" fill="#DEFB02" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M25.7229 27.4569C25.4144 26.3166 26.9522 25.574 27.7621 26.2879C28.2538 27.2892 28.5141 28.3863 28.8949 29.4355C30.6641 28.9325 29.8253 25.2243 32.1682 26.2304C33.7445 27.9791 31.8452 31.6489 29.4107 31.6202C27.1836 31.8166 25.6603 29.4691 25.7229 27.4569Z" fill="#DEFB02" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M6.52693 18.833C8.91315 20.0451 10.5618 22.2825 12.4129 24.1462C12.4033 24.3953 12.3792 24.8935 12.3696 25.1427C10.5763 27.0543 8.75889 29.0138 6.56067 30.4702C6.28107 29.3922 6.84991 27.8975 5.82311 27.1309C4.17445 26.9105 2.50168 27.0447 0.848195 27.0878C-0.356969 26.0625 0.0865312 24.4432 0.033504 23.0682C0.202227 22.8526 0.539673 22.4214 0.708396 22.2058C2.3426 22.1723 3.97198 22.2489 5.60618 22.1435C6.92704 21.607 6.26179 19.8918 6.52693 18.833Z" fill="#DEFB02" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M46.4424 24.7595C47.5126 22.3161 50.1543 20.8884 51.909 18.9146C53.119 19.4943 52.1741 21.31 53.1576 22.2155C54.8834 22.2011 56.6188 22.1053 58.3398 22.2778C59.4051 23.2983 58.87 24.9559 58.8845 26.2686C57.5733 27.9407 54.9219 26.4842 53.119 27.1933C51.9138 27.8592 53.2588 29.9481 51.8994 30.2835C50.1205 28.4054 47.8693 26.9154 46.4424 24.7595Z" fill="#DEFB02" />
                          </svg>
                        </div>
                        <div className="h4 title link">Discipline</div>
                        <div className="text">
                          Discipline is the foundation
                          of every successful fitness
                          journey consistency wins.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sw-pagination-value sw-pagination pagination-white d-xl-none justify-content-center mt-15" />
                </div>
              </div>
            </section>
            {/* /section-value */}

            {/* Team */}
            <section className="tf-spacing-1 section-works">
              <div className="heading-section position-relative z-5">
                <div className="tf-container">
                  <div className="row">
                    <div className="col-md-3 col-xl-5">
                      <div className="text-1 text-uppercase box-gradient-2 title text-Title text-anime">our trainers</div>
                    </div>
                    <div className="col-md-9 col-xl-7">
                      <div className="text-color-change">
                        <h2 className="text-uppercase text">
                          Our team of experienced, certified trainers is at the heart of everything we do.
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tf-container">
                <div className="our-team-item hover-img wow fadeInUp">
                  <div className="image">
                    <img src="/image/about/team.webp" alt="Elev8 Fitness Club trainers" style={{ width: '100%', height: 'auto' }} />
                  </div>
                </div>
              </div>
            </section>
            {/* /team */}

            {/* section-testimonial-1 */}
            <TestimonialsSection />
            {/* /section-testimonial-1 */}
          </div>

        </>
        {/* Main Content End */}

        <Footer />
      </div>

      <Modals />
    </div>
  );
}