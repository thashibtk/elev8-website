'use client';

import React, { useState } from 'react';
import { portfolioItems } from '@/data/portfolio';

const PAGE_SIZE = 9;
const LOAD_MORE_STEP = 6;

export default function PortfolioGallery() {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const visibleItems = portfolioItems.slice(0, visibleCount);
  const hasMore = visibleCount < portfolioItems.length;

  return (
    <>
      <div className="tf-container">
        <div className="row row-xl-gap-70 rg-30 mb-40">
          {visibleItems.map((item, i) => (
            <div className="col-lg-4 col-md-6" key={item.id}>
              <div className="portfolio-item hover-img wow fadeInUp" data-wow-delay={i % 3 ? `.${i % 3}s` : undefined}>
                <button
                  type="button"
                  className="image d-flex"
                  onClick={() => setLightboxImage(item.image)}
                  style={{
                    border: 0,
                    padding: 0,
                    background: 'none',
                    cursor: 'zoom-in',
                    width: '100%',
                    aspectRatio: '4 / 3',
                    overflow: 'hidden',
                  }}
                  aria-label={`View full image: ${item.title}`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </button>
                <div className="title h4">{item.title}</div>
              </div>
            </div>
          ))}
        </div>

        {hasMore && (
          <div className="flex justify-content-center mt-40">
            <button
              type="button"
              className="tf-btn text-uppercase justify-content-center"
              onClick={() => setVisibleCount((c) => Math.min(c + LOAD_MORE_STEP, portfolioItems.length))}
            >
              Load More
            </button>
          </div>
        )}
      </div>

      {lightboxImage && (
        <div
          role="button"
          tabIndex={0}
          onClick={() => setLightboxImage(null)}
          onKeyDown={(e) => e.key === 'Escape' && setLightboxImage(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            cursor: 'zoom-out',
            padding: '20px',
          }}
        >
          <button
            type="button"
            onClick={() => setLightboxImage(null)}
            aria-label="Close"
            style={{
              position: 'absolute',
              top: 20,
              right: 20,
              background: 'none',
              border: 'none',
              color: '#fff',
              fontSize: '32px',
              lineHeight: 1,
              cursor: 'pointer',
            }}
          >
            &times;
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={lightboxImage}
            alt=""
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              width: 'auto',
              height: 'auto',
              objectFit: 'contain',
            }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}