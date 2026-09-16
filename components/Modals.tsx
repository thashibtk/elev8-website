'use client';

import Link from 'next/link';
import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { services } from '@/data/services';


const Modals = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Clean up Bootstrap offcanvas backdrops
      const backdrops = document.querySelectorAll('.offcanvas-backdrop, .modal-backdrop');
      backdrops.forEach((b) => b.remove());
      
      // Restore body scrolling
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      document.body.classList.remove('modal-open');
      
      // Hide any open offcanvas elements
      const openOffcanvas = document.querySelectorAll('.offcanvas.show');
      openOffcanvas.forEach((el) => {
        el.classList.remove('show');
      });
    }
  }, [pathname]);

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname?.startsWith(path);
  };

  return (
    <>
{/* Mobile-nav-wrap */}
        <div className="offcanvas offcanvas-start mobile-nav-wrap" id="canvasMobile">
            <div className="inner-mobile-nav">
                <div className="top-header-mobi">
                    <div className="logo-mobile">
                        <a href="/">
                            <img src="/image/logo/logo-black.webp" alt="Elev8 Fitness Club" />
                        </a>
                    </div>
                    <button className="mobile-nav-close" data-bs-dismiss="offcanvas" aria-label="Close">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="black" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 122.878 122.88" enableBackground="new 0 0 122.878 122.88" xmlSpace="preserve">
                            <g>
                                <path d="M1.426,8.313c-1.901-1.901-1.901-4.984,0-6.886c1.901-1.902,4.984-1.902,6.886,0l53.127,53.127l53.127-53.127 c1.901-1.902,4.984-1.902,6.887,0c1.901,1.901,1.901,4.985,0,6.886L68.324,61.439l53.128,53.128c1.901,1.901,1.901,4.984,0,6.886 c-1.902,1.902-4.985,1.902-6.887,0L61.438,68.326L8.312,121.453c-1.901,1.901-4.984,1.902-6.886,0 c-1.901-1.901-1.901-4.984,0-6.886l53.127-53.128L1.426,8.313L1.426,8.313z">
                                </path>
                            </g>
                        </svg>
                    </button>
                </div>
                <nav className="mobile-main-nav">
                    <ul id="menu-mobile" className="menu">
                        <li className={`menu-item ${isActive('/') ? 'current-menu-mobile-item' : ''}`}>
                            <Link href="/">Home</Link>
                        </li>
                        <li className={`menu-item ${isActive('/about-us') ? 'current-menu-mobile-item' : ''}`}>
                            <Link href="/about-us">About Us</Link>
                        </li>
                        <li className={`menu-item menu-item-has-children-mobile ${isActive('/services') ? 'current-menu-mobile-item' : ''}`}>
                            <a href="#dropdown-menu-3" data-bs-toggle="collapse" className="collapsed">Services</a>
                            <div id="dropdown-menu-3" className="collapse" data-bs-parent="#menu-mobile">
                                <ul className="sub-menu-mobile">
                                    <li className={`menu-item ${pathname === '/services' ? 'current-menu-mobile-item' : ''}`}><Link href="/services">All Services</Link></li>
                                    {services.map((service) => (
                                        <li className={`menu-item ${pathname === `/services/${service.slug}` ? 'current-menu-mobile-item' : ''}`} key={service.slug}>
                                            <Link href={`/services/${service.slug}`}>{service.title}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                        <li className={`menu-item ${isActive('/portfolio') ? 'current-menu-mobile-item' : ''}`}>
                            <Link href="/portfolio">Gallery</Link>
                        </li>
                        <li className={`menu-item ${isActive('/contact') ? 'current-menu-mobile-item' : ''}`}>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                    <div className="contact-mobile">
                        <div className="title-contact-mobile h6">Contact Info</div>
                        <ul className="mb-15">
                            <li className="content-contact-moblile">
                                <Link href="/" className="caption-1">Near Chicking, Munda PO, Edakkara</Link>
                            </li>
                            <li className="content-contact-moblile">
                                <a href="tel:+917034201452" className="caption-1"> +91 7034 201 452</a>
                            </li>
                            <li className="content-contact-moblile">
                                <Link href="/" className="caption-1">Mon–Sat, 5:30 AM – 9:30 PM</Link>
                            </li>
                        </ul>
                        <ul className="wg-social">
                            <li><Link href="https://www.instagram.com/elev8_fitnessclub/" className="social-item"><i className="icon-instagram"></i></Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
        {/* /.mobile-nav-wrap */}

        {/* canvasSearch */}
        <div className="offcanvas offcanvas-top offcanvas-search" id="canvasSearch">
            <button className="btn-close-popup" data-bs-dismiss="offcanvas" aria-label="Close">
                <i className="icon-close"></i>
            </button>
            <div className="tf-container">
                <div className="wg-box-search">
                    <form acceptCharset="utf-8" data-mailchimp="true" className="form-search-siderbar">
                        <fieldset>
                            <input type="text" placeholder="Keywords" />
                        </fieldset>
                        <button type="submit" className="tf-btn-search"><i className="icon-search"></i></button>
                    </form>
                </div>
            </div>
        </div>
        {/* /canvasSearch */}

        {/* OffcanvasMegamenu */}
        <div className="offcanvas offcanvas-end offcanvasMegamenu" id="canvnasMegamenu">
            <div className="heading flex justify-content-between">
                <div className="logo-megamenu">
                    <img src="/image/logo/logo-black.webp" alt="Elev8 Fitness Club" style={{ width: '160px', height: 'auto' }} />
                </div>
                <button className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
                </button>
            </div>
            <div className="desc">
                The only premium fitness center in the region unisex, women-friendly, and equipped with imported, high-quality machines.
            </div>

            <div className="contact-mega-menu meag-menu-item">
                <ul className="contact-list-mega-menu">
                    <li>
                        <p>Address:
                            <Link href="/" target="_blank">
                                Near Chicking, Munda PO, Edakkara
                            </Link>
                        </p>
                    </li>
                    <li>
                        <p> Call: <a href="tel:+917034201452">
                                +91 7034 201 452</a>
                        </p>
                    </li>
                    <li>
                        <p>Timing:
                            <Link href="/">
                                Mon–Sat, 5:30 AM – 9:30 PM
                            </Link>
                        </p>
                    </li>
                    <li>
                        <p>Ladies Special:
                            <Link href="/">
                                11:00 AM – 4:00 PM
                            </Link>
                        </p>
                    </li>
                </ul>
            </div>

        
            <div className="megamenu-recent">
                <div className="title-content h5">
                    Why Elev8
                </div>
                <ul className="mb-15">
                    <li className="content-contact-moblile"><span className="caption-1">Imported, high-quality equipment</span></li>
                    <li className="content-contact-moblile"><span className="caption-1">Personal Training with diet plans</span></li>
                    <li className="content-contact-moblile"><span className="caption-1">Cardio | Strength | CrossFit</span></li>
                    <li className="content-contact-moblile"><span className="caption-1">Steam bath for recovery</span></li>
                </ul>
            </div>

            <div className="megamenu-subscribe">
                <div className="title-content h5">
                    Our Services
                </div>
                <ul className="mb-15">
                    {services.map((service) => (
                        <li className={`menu-item ${pathname === `/services/${service.slug}` ? 'current-menu-mobile-item' : ''}`} key={service.slug}>
                            <Link href={`/services/${service.slug}`}>{service.title}</Link>
                        </li>
                    ))}

                </ul>
            </div>

        </div>
        {/* /.offcanvasMegamenu */}

        

    
    </>
  );
};

export default Modals;