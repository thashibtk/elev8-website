"use client";

import React, { useEffect, useState } from 'react';

const Loading = () => {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Start fade out after a short delay to simulate page load
    const fadeTimer = setTimeout(() => {
      setFading(true);
    }, 500);

    // Completely remove from DOM after fade out completes
    const removeTimer = setTimeout(() => {
      setLoading(false);
    }, 1100);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <>
      <style>{`
        #loading {
          transition: opacity 0.6s ease;
        }
        .loading-logo-wipe {
          /* Inline width is taking precedence for size */
          clip-path: inset(0 100% 0 0);
          animation: wipeIn 1.5s cubic-bezier(0.25, 1, 0.5, 1) infinite alternate;
        }

        @keyframes wipeIn {
          0% {
            clip-path: inset(0 100% 0 0);
            opacity: 0.2;
          }
          100% {
            clip-path: inset(0 0 0 0);
            opacity: 1;
          }
        }
      `}</style>
      {/* .preload */}
      <div id="loading" suppressHydrationWarning style={{ backgroundColor: '#000', opacity: fading ? 0 : 1 }}>
          <div id="loading-center">
              <div className="loader-container">
                  <div className="wrap-loader">
                      <div className="loader" style={{ width: '220px', height: '220px' }}>
                      </div>
                      <div className="icon" style={{ maxWidth: 'none', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                          <img 
                            src="/image/logo/logo-white.webp" 
                            alt="logo" 
                            style={{ width: '160px', maxWidth: '70vw', display: 'block' }} 
                            className="loading-logo-wipe" 
                          />
                      </div>
                  </div>
              </div>
          </div>
      </div>
      {/* /.preload */}
    </>
  );
};

export default Loading;
