import Link from 'next/link';
import React from 'react';
import { footerGalleryItems } from '@/data/footerGallery';

const Footer = () => {
  return (
    <>
      {/* Go-top */}
        <div className="progress-wrap">
            <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" style={{transition: 'stroke-dashoffset 10ms linear', strokeDasharray: '307.919, 307.919', strokeDashoffset: '277.672'}}>
            </path>
            </svg>
        </div>
      {/* /.go-top */}
      {/* footer */}
        <footer className="footer" id="footer">
            <div className="footer-inner">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="footer-left">
                                <div className="logo-footer">
                                    <img src="/image/logo/logo-white.webp" alt="Elev8 Fitness Club" />
                                </div>
                                <div className="footer-contact">
                                    <div className="line"></div>
                                    <div className="title text-White">Reach Out We're <br /> Just a Message Away!</div>
                                    <div className="infor">
                                        <div>
                                            <div className="flex align-items-center g-15 mb-7">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M19.168 5.83301V0.833008H14.168" stroke="#DEFB02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    <path d="M13.332 6.66634L19.1654 0.833008" stroke="#DEFB02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    <path d="M18.3332 14.1004V16.6004C18.3341 16.8325 18.2866 17.0622 18.1936 17.2749C18.1006 17.4875 17.9643 17.6784 17.7933 17.8353C17.6222 17.9922 17.4203 18.1116 17.2005 18.186C16.9806 18.2603 16.7477 18.288 16.5165 18.2671C13.9522 17.9884 11.489 17.1122 9.32486 15.7087C7.31139 14.4293 5.60431 12.7222 4.32486 10.7087C2.91651 8.53474 2.04007 6.05957 1.76653 3.48374C1.7457 3.2533 1.77309 3.02104 1.84695 2.80176C1.9208 2.58248 2.03951 2.38098 2.1955 2.21009C2.3515 2.0392 2.54137 1.90266 2.75302 1.80917C2.96468 1.71569 3.19348 1.66729 3.42486 1.66707H5.92486C6.32928 1.66309 6.72136 1.80631 7.028 2.07002C7.33464 2.33373 7.53493 2.69995 7.59153 3.10041C7.69705 3.90046 7.89274 4.68601 8.17486 5.44207C8.28698 5.74034 8.31125 6.0645 8.24478 6.37614C8.17832 6.68778 8.02392 6.97383 7.79986 7.20041L6.74153 8.25874C7.92783 10.345 9.65524 12.0724 11.7415 13.2587L12.7999 12.2004C13.0264 11.9764 13.3125 11.8219 13.6241 11.7555C13.9358 11.689 14.2599 11.7133 14.5582 11.8254C15.3143 12.1075 16.0998 12.3032 16.8999 12.4087C17.3047 12.4658 17.6744 12.6697 17.9386 12.9817C18.2029 13.2936 18.3433 13.6917 18.3332 14.1004Z" stroke="#DEFB02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                                <div className="text-White text">Need any help</div>
                                            </div>
                                            <div className="text-White h3 fw-semibold">
                                                <a href="tel:+917034201452" className="text-White">+91 7034 201 452</a>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex align-items-center g-15 mb-7">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 21C12 21 20 15 20 9.5C20 5.35786 16.6421 2 12.5 2C11.6716 2 11 2.67157 11 3.5" stroke="#DEFB02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'none' }}/>
                                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="#DEFB02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    <circle cx="12" cy="10" r="3" stroke="#DEFB02" strokeWidth="2"/>
                                                </svg>
                                                <div className="text-White text">visit us</div>
                                            </div>
                                            <div className="text-White h3 fw-semibold">Near Chicking, Munda PO, Edakkara</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="footer-right">
                                <div className="footer-newsletter">
                                    <h2 className="title text-White">Visit Elev8 Today</h2>
                                    <p className="text">
                                        Mon–Sat, 5:30 AM – 9:30 PM. Ladies Special, 11:00 AM – 4:00 PM.
                                        Walk in or give us a call to get started.
                                    </p>
                                     <a href="tel:+917034201452" className="tf-btn flex-shrink-0 mb-20">CALL +91 7034 201 452</a>
                                </div>
                               
                                <div className="footer-cols pt-5">
                                    <div>
                                        <div className="text-White title">Our Services</div>
                                        <div className="list-menu">
                                            <div className="d-grid">
                                                <Link href="/services/personal-training" className="menu-item link">Personal Training</Link>
                                                <Link href="/services/cardio-training" className="menu-item link">Cardio Training</Link>
                                                <Link href="/services/strength-training" className="menu-item link">Strength Training</Link>
                                            </div>
                                            <div className="d-grid">
                                                <Link href="/services/crossfit-workouts" className="menu-item link">CrossFit Workouts</Link>
                                                <Link href="/services/diet-weight-control" className="menu-item link">Diet & Weight Control</Link>
                                                <Link href="/services/steam-bath" className="menu-item link">Steam Bath</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-White title">Links</div>
                                        <div className="d-grid">
                                            <Link href="/faqs" className="menu-item link">Question & Answers</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-gallery">
                <div className="swiper tf-swiper" data-swiper={`{
                    "slidesPerView": 2,
                    "spaceBetween": 10,
                    "pagination": { "el": ".sw-pagination-features", "clickable": true },
                    "breakpoints": {
                        "575": { "slidesPerView": 3, "slidesPerGroup": 1},
                        "1150": { "slidesPerView": 6, "slidesPerGroup": 1}
                        }
                    }`}>
                    <div className="swiper-wrapper">
                        {footerGalleryItems.map((item) => (
                            <div className="swiper-slide" key={item.id}>
                                <Link href={item.href || '/'} className="d-flex hover-img">
                                    <div className="image w-100">
                                        <img className="w-100" src={item.image} alt={item.alt} />
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="bottom">
                <p className="text">Copyright © 2026 <Link href="/" className="text-Neon fw-semibold link">ELEV8 FITNESS CLUB</Link> . All Rights Reserved.</p>
                <p className="text">Powered By <Link href="https://www.linkedin.com/in/thashibtk" className="text-Neon fw-semibold link">Thashib Tk</Link></p>
                
            </div>
        </footer>
    {/* /footer */}
    </>
  );
};

export default Footer;