'use client';

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { services } from '../data/services';

const Header = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname?.startsWith(path);
  };

  const renderNavItems = () => (
    <ul className="menu-primary-menu">
      <li className={`menu-item ${isActive('/') ? 'active' : ''}`}>
        <Link href="/" className="item-link body-2">
          <span>Home</span>
        </Link>
      </li>
      <li className={`menu-item ${isActive('/about-us') ? 'active' : ''}`}>
        <Link href="/about-us" className="item-link body-2">
          <span>About Us</span>
        </Link>
      </li>
      <li className={`menu-item menu-item-has-children position-relative ${isActive('/services') ? 'active' : ''}`}>
        <Link href="/services" className="item-link body-2">
          <span>Services</span>
        </Link>
        <ul className="sub-menu">
          {services.map((service) => (
            <li className={`sub-menu-item ${pathname === `/services/${service.slug}` ? 'active' : ''}`} key={service.slug}>
              <Link href={`/services/${service.slug}`} className="item-link-2">
                {service.title}
              </Link>
            </li>
          ))}
        </ul>
      </li>
      <li className={`menu-item ${isActive('/portfolio') ? 'active' : ''}`}>
        <Link href="/portfolio" className="item-link body-2">
          <span>Gallery</span>
        </Link>
      </li>
      <li className={`menu-item ${isActive('/contact') ? 'active' : ''}`}>
        <Link href="/contact" className="item-link body-2">
          <span>Contact</span>
        </Link>
      </li>
    </ul>
  );

  return (
    <>
      {/* Header Sticky */}
      <header className="header header-sticky" id="header-sticky">
        <div className="header-content flex justify-content-between align-items-center">
          <div className="logo logo-header">
            <Link href="/">
              <img src="/image/logo/logo-black.webp" alt="Elev8 Fitness Club" style={{ width: '180px', height: 'auto' }} />
            </Link>
          </div>
          <nav className="main-menu">
            {renderNavItems()}
          </nav>
          <div className="header-right">
            <div className="nav-icon">
              <div className="nav-btn d-xl-flex d-none">
                <a href="#canvnasMegamenu" data-bs-toggle="offcanvas" className="d-flex">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3H3V10H10V3Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 3H14V10H21V3Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 14H14V21H21V14Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 14H3V21H10V14Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
              <div className="mobile-button nav-btn d-xl-none">
                <a href="#canvasMobile" data-bs-toggle="offcanvas" aria-label="Open Mobile Menu">
                  <span></span>
                  <span></span>
                  <span></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Header Main */}
      <header className="header style-box" id="header">
        <div className="header-content flex justify-content-between align-items-center">
          <div className="header-left">
            <div className="logo logo-header">
              <Link href="/">
                <img src="/image/logo/logo-white.webp" alt="Elev8 Fitness Club" style={{ width: '180px', height: 'auto' }} />
              </Link>
            </div>
            <nav className="main-menu">
              {renderNavItems()}
            </nav>
          </div>
          <div className="header-right">
            <div className="nav-icon">
              <div className="nav-btn d-xl-flex d-none">
                <a href="#canvnasMegamenu" data-bs-toggle="offcanvas" className="d-flex">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3H3V10H10V3Z" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 3H14V10H21V3Z" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 14H14V21H21V14Z" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 14H3V21H10V14Z" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
              <div className="mobile-button style-white nav-btn d-xl-none">
                <a href="#canvasMobile" data-bs-toggle="offcanvas" aria-label="Open Mobile Menu">
                  <span></span>
                  <span></span>
                  <span></span>
                </a>
              </div>
            </div>
            <a href="tel:+917034201452" className="tf-btn flex-shrink-0 btn-quote style-sm">JOIN NOW</a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
