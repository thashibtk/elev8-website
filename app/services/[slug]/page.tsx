import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Modals from '@/components/Modals';
import { getServiceBySlug, services } from '@/data/services';

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  
  if (!service) {
    return { title: 'Service Not Found' };
  }
  
  return {
    title: service.title,
    description: service.tagline,
    openGraph: {
      title: `${service.title} | Elev8 Fitness Club`,
      description: service.tagline,
      images: [service.detailImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} | Elev8 Fitness Club`,
      description: service.tagline,
      images: [service.detailImage],
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="counter-scroll">

      <div className="wrapper">
        <Header />

        {/* Main Content Start */}
        <>

          {/* page-title */}
          <div className="page-title service-detail-title">
            
            <div className="page-title-content">
              <div className="tf-container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="title text-anime">
                      {service!.title}
                    </div>
                    <div className="breadkcum">
                      <Link href="/" className="link-breadkcum breadkcum-item">Home</Link>
                      <span className="dot" />
                      <Link href="/services" className="link-breadkcum breadkcum-item">Services</Link>
                      <span className="dot" />
                      <div className="page-breadkcum breadkcum-item">{service!.title}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /page-title */}
          
          <div className="main-content">
            {/* services-details */}
            <section className="tf-spacing-1">
              <div className="tf-container">
                <div className="row">
                  <div className="col-lg-4 col-md-5 order-2 order-md-1 rg-30">
                    <div className="col-right md-mb-30 sticky-top">
                      <div className="services-list">
                        {services.map((s) => (
                          <Link href={`/services/${s.slug}`} key={s.slug} className={s.slug === service!.slug ? 'active' : undefined}>
                            <span className="number">{s.number}</span>
                            <span className="h3 title">
                              {s.title}
                            </span>
                            <i className="icon icon-arrow-up-right" />
                          </Link>
                        ))}
                      </div>
                      <div className="sidebar-cta">
                        <img src="/image/banner/service-cta.webp" alt="Elev8 Fitness Club" />
                        <div className="content">
                          <h3 className="title">Don't Wait — Start Training Now!</h3>
                          <Link href="/contact" className="tf-btn">JOIN NOW</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-7 order-1 order-md-2">
                    <div className="services-details-wrap">
                      <div className="image mb-40">
                        <img src={service!.detailImage} alt={service!.title} />
                      </div>
                      <h2 className="title text-Title text-uppercase mb-30">{service!.tagline}</h2>
                      {service!.description.map((paragraph, i) => (
                        <div className={`text text-Paragraph ${i === service!.description.length - 1 ? 'mb-70' : 'mb-30'}`} key={i}>
                          {paragraph}
                        </div>
                      ))}
                      <h3 className="sub-title text-Title text-uppercase mb-50">What's Included</h3>
                      <div className="list-text mb-50">
                        {service!.features.map((feature) => (
                          <div className="text-item" key={feature}>{feature}</div>
                        ))}
                      </div>
                      <hr className="mb-50 mt-50" style={{ border: 0, height: '1px', background: 'linear-gradient(90deg, var(--Neon) 0%, rgba(255,255,255,0.1) 50%, transparent 100%)' }} />
                      <h2 className="title text-Title text-uppercase mb-20 mt-50">
                        The only premium fitness center in Edakkara.
                      </h2>
                      <div className="text text-Paragraph mb-40">
                        Elev8 is a unisex gym that welcomes both men and women in a safe, comfortable, women friendly
                        environment. Equipped with imported, high quality machines and guided by experienced, certified
                        trainers, we're here to help you achieve serious, world-class results whatever your goal.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* /services-details */}
          </div>

        </>
        {/* Main Content End */}

        <Footer />
      </div>

      <Modals />
    </div>
  );
}