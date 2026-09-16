import React from 'react';
import { testimonials } from '@/data/testimonials';

export default function TestimonialsSection() {
  return (
    <section className="section-testimonial-1">
      <div className="img-bg">
        <img className="parallax-img" src="/image/home/testimonial.webp" alt="image" />
      </div>
      <div className="tf-container z-5">
        <div className="testimonials-wrap">
          <div
            className="swiper tf-swiper"
            data-swiper={`{
              "slidesPerView": 1,
              "spaceBetween": 10,
              "navigation": {
                  "clickable": true,
                  "nextEl": ".client-testimonials-next",
                  "prevEl": ".client-testimonials-prev"
              },
              "pagination": { "el": ".sw-pagination-client-testimonials", "clickable": true }
            }`}
          >
            <div className="swiper-wrapper">
              {testimonials.map((item, idx) => (
                <div className="swiper-slide" key={item.id}>
                  <div className="testimonials-item style-2">
                    <div className="content">
                      <div className={`ratings ${idx === 0 ? 'wow fadeInUp' : ''}`}>
                        {Array.from({ length: item.rating }).map((_, i) => (
                          <i key={i} className="icon icon-star" />
                        ))}
                      </div>
                      <div className={`desc ${idx === 0 ? 'wow fadeInUp' : ''}`} data-wow-delay=".1s">
                        "{item.quote}"
                      </div>
                      <div className={`quote-icon ${idx === 0 ? 'wow fadeInUp' : ''}`} data-wow-delay=".2s">
                        <svg width="70" height="55" viewBox="0 0 70 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M29.8764 3.92162L27.3364 0C9.76301 11.8621 0 26.2749 0 38.137C0 49.607 8.39775 55 15.524 55C24.5059 55 30.8511 47.3513 30.8511 39.3135C30.8511 32.5495 26.5554 26.7643 20.7944 24.6058C19.1355 24.016 17.5734 23.5266 17.5734 20.6842C17.5734 17.0575 20.2102 11.6676 29.8764 3.92162ZM68.6347 3.92162L66.0948 0C48.7151 11.8621 38.7584 26.2749 38.7584 38.137C38.7584 49.607 47.3498 55 54.476 55C63.5549 55 70 47.3513 70 39.3135C70 32.5495 65.6074 26.7643 59.6496 24.6058C57.9907 24.016 56.5255 23.5266 56.5255 20.6842C56.5255 17.0575 59.2591 11.6645 68.6316 3.91849L68.6347 3.92162Z" fill="black" />
                        </svg>
                      </div>
                      <h3 className={`title ${idx === 0 ? 'wow fadeInUp' : ''}`} data-wow-delay=".2s">
                        {item.author}
                      </h3>
                      <div className={`sub ${idx === 0 ? 'wow fadeInUp' : ''}`} data-wow-delay=".2s">
                        Elev8 Fitness Club
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="list-btn">
            <div className="arrow-btn style-2 client-testimonials-prev">
              <i className="icon-arrow-left" />
            </div>
            <div className="arrow-btn style-2 client-testimonials-next">
              <i className="icon-arrow-right" />
            </div>
          </div>
        </div>
      </div>
      <div className="tf-marquee marquee-2">
        <div className="marquee-wrapper">
          <div className="initial-child-container">
            <div className="marquee-child-item">
              <div className="text">
                <span className="text-White text-uppercase">clients</span>
                <span className="text-gradient-3 text-uppercase">testimonials</span>
              </div>
            </div>
            <div className="marquee-child-item">
              <div className="text">
                <span className="text-White text-uppercase">clients</span>
                <span className="text-gradient-3 text-uppercase">testimonials</span>
              </div>
            </div>
            <div className="marquee-child-item">
              <div className="text">
                <span className="text-White text-uppercase">clients</span>
                <span className="text-gradient-3 text-uppercase">testimonials</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
