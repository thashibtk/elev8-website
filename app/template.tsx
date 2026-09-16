'use client';

import { useEffect, useLayoutEffect } from 'react';
import { usePathname } from 'next/navigation';

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Instant synchronous scroll reset before browser paints
  useIsomorphicLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  }, [pathname]);

  useEffect(() => {
    // 2. Wait for page's DOM to mount, then cleanup & re-init scripts
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined') {
        // Ensure scroll is at top before GSAP recalculates positions
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;

        // Clean up old ScrollTriggers from previous page
        if ((window as any).ScrollTrigger) {
          (window as any).ScrollTrigger.getAll().forEach((t: any) => t.kill());
        }

        // Re-trigger global initialization functions
        const funcs = [
          'changetext', 'animateText', 'animateImgItem', 'animateImgScroll', 
          'animateFlipText', 'animateSectionBg', 'video', 'btn', 'change_image', 
          'counter', 'progresslevel', 'circlesProgressLevel', 'handleAccordionBorders', 
          'parallaxImage', 'gotop', 'switchPrice', 'headerSticky', 'initCarousel'
        ];

        funcs.forEach(fn => {
          try {
            if (typeof (window as any)[fn] === 'function') {
              (window as any)[fn]();
            }
          } catch (e) {
            console.error(`Error running ${fn} on route change:`, e);
          }
        });
        
        // Re-initialize WOW JS if present
        if (typeof (window as any).WOW !== 'undefined') {
          if (!(window as any)._wowInstance) {
            (window as any)._wowInstance = new (window as any).WOW({ live: false });
            (window as any)._wowInstance.init();
          } else {
            (window as any)._wowInstance.sync();
          }
        }

        // Tell GSAP to recalculate all positions now that the new DOM is injected & scroll is at 0
        if (typeof (window as any).ScrollTrigger !== 'undefined') {
          (window as any).ScrollTrigger.refresh();
          
          setTimeout(() => {
            if (typeof (window as any).ScrollTrigger !== 'undefined') {
              (window as any).ScrollTrigger.refresh();
            }
          }, 300);
        }
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [pathname]);

  return <>{children}</>;
}
