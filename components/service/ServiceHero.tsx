// interface Service {
//   icon: string;
//   category: string;
//   categorySlug: string;
//   slug: string;
//   image: string;
//   title: string;
//   description: string;
// }

// const servicesData: Service[] = [
//   {
//     icon: "https://cdn.prod.website-files.com/669e1212d181ce4bfbbea18b/66a0abdb7f0df5ff7eff4c57_Icon%201.svg",
//     category: "Diagnostics",
//     categorySlug: "diagnostics",
//     slug: "brake-repair",
//     image:
//       "https://cdn.prod.website-files.com/669e1212d181ce4bfbbea18b/66a0ab889875482b2767f298_Services-1.jpg",
//     title: "Brake Repair",
//     description:
//       "At Carsy, we offer a comprehensive range of automotive services to keep your vehicle running smoothly. Trust Carsy for all your car care needs.",
//   },
//   {
//     icon: "https://cdn.prod.website-files.com/669e1212d181ce4bfbbea18b/66a0ac9e7baaf7a5204eca08_Icon%202.svg",
//     category: "Maintenance",
//     categorySlug: "maintenance",
//     slug: "engine-repair",
//     image:
//       "https://cdn.prod.website-files.com/669e1212d181ce4bfbbea18b/66a0ac90b5a47945ab458f1b_Services-3.jpg",
//     title: "Engine Repair",
//     description:
//       "At Carsy, we offer a comprehensive range of automotive services to keep your vehicle running smoothly. Trust Carsy for all your car care needs.",
//   },
//   {
//     icon: "https://cdn.prod.website-files.com/669e1212d181ce4bfbbea18b/66a0c2b3299201590725cf38_Icon%203.svg",
//     category: "Repair",
//     categorySlug: "repair",
//     slug: "tire-repair",
//     image:
//       "https://cdn.prod.website-files.com/669e1212d181ce4bfbbea18b/66a0accf8e908b0a64e4848f_Services-6.jpg",
//     title: "Tire Repair",
//     description:
//       "At Carsy, we offer a comprehensive range of automotive services to keep your vehicle running smoothly. Trust Carsy for all your car care needs.",
//   },
//   {
//     icon: "https://cdn.prod.website-files.com/669e1212d181ce4bfbbea18b/66a0c310ccc2982f485a2389_Icon%209.svg",
//     category: "Diagnostics",
//     categorySlug: "diagnostics",
//     slug: "clutch-repair",
//     image:
//       "https://cdn.prod.website-files.com/669e1212d181ce4bfbbea18b/66a0ad03ec4ec71580a633e6_Services-7.jpg",
//     title: "Clutch Repair",
//     description:
//       "At Carsy, we offer a comprehensive range of automotive services to keep your vehicle running smoothly. Trust Carsy for all your car care needs.",
//   },
//   {
//     icon: "https://cdn.prod.website-files.com/669e1212d181ce4bfbbea18b/66a0c3901714b284cc80183e_Icon%2015.svg",
//     category: "Maintenance",
//     categorySlug: "maintenance",
//     slug: "battery-repair",
//     image:
//       "https://cdn.prod.website-files.com/669e1212d181ce4bfbbea18b/66a0acb7d1c1ac6d1b58bc71_Services-2.jpg",
//     title: "Battery Repair",
//     description:
//       "At Carsy, we offer a comprehensive range of automotive services to keep your vehicle running smoothly. Trust Carsy for all your car care needs.",
//   },
//   {
//     icon: "https://cdn.prod.website-files.com/669e1212d181ce4bfbbea18b/66a0c37e8b1779d69f276536_Icon%2014.svg",
//     category: "Repair",
//     categorySlug: "repair",
//     slug: "oil-change",
//     image:
//       "https://cdn.prod.website-files.com/669e1212d181ce4bfbbea18b/66a0ad5199476e28af308748_Services-5.jpg",
//     title: "Oil Change",
//     description:
//       "At Carsy, we offer a comprehensive range of automotive services to keep your vehicle running smoothly. Trust Carsy for all your car care needs.",
//   },
//   {
//     icon: "https://cdn.prod.website-files.com/669e1212d181ce4bfbbea18b/66a0c3d84e8678024408f030_13%20new.svg",
//     category: "Diagnostics",
//     categorySlug: "diagnostics",
//     slug: "system-repair",
//     image:
//       "https://cdn.prod.website-files.com/669e1212d181ce4bfbbea18b/66a0ad864e86780244f81034_Services-4.jpg",
//     title: "System Repair",
//     description:
//       "At Carsy, we offer a comprehensive range of automotive services to keep your vehicle running smoothly. Trust Carsy for all your car care needs.",
//   },
//   {
//     icon: "https://cdn.prod.website-files.com/669e1212d181ce4bfbbea18b/66a0c41cec4ec71580b63b0c_Icon%2016.svg",
//     category: "Maintenance",
//     categorySlug: "maintenance",
//     slug: "radiator-service",
//     image:
//       "https://cdn.prod.website-files.com/669e1212d181ce4bfbbea18b/66a0ae9e8a6ef3229fb17a6d_Services-8.jpg",
//     title: "Radiator Service",
//     description:
//       "At Carsy, we offer a comprehensive range of automotive services to keep your vehicle running smoothly. Trust Carsy for all your car care needs.",
//   },
// ];

// function ServicesPage() {
//   return (
    // <div className="relative-page-wrapper">
    //   <div className="inner-small-banner">
    //     <div className="base-container">
    //       <div
    //         data-w-id="41536fe9-08cd-993f-2ff5-cb8926cec48d"
            
    //         className="inner-title-wrap"
    //       >
    //         <h1 className="inner-banner-title">What We Offer</h1>
    //       </div>
    //     </div>
    //     <div className="inner-clip-photo-banner">
    //       <div
    //         data-w-id="41536fe9-08cd-993f-2ff5-cb8926cec491"
    //         style={{
    //           WebkitTransform:
    //             "translate3d(0, 0, 0) scale3d(1.15, 1.15, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
    //           MozTransform:
    //             "translate3d(0, 0, 0) scale3d(1.15, 1.15, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
    //           msTransform:
    //             "translate3d(0, 0, 0) scale3d(1.15, 1.15, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
    //           transform:
    //             "translate3d(0, 0, 0) scale3d(1.15, 1.15, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
    //         }}
    //         className="inner-photo-banner services-banner"
    //       ></div>
    //       <div className="inner-banner-overlay with-bottom-light-gradient">
    //         <div className="red-inner-grad-1"></div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="section-news">
    //     <div className="base-container">
    //       <div className="blog-grid-wrapper">
    //         <div className="collection-list-services w-dyn-list">
    //           <div role="list" className="carsy-services-grid w-dyn-items">
    //             {servicesData.map((service, index) => (
    //               <div
    //                 key={index}
    //                 role="listitem"
    //                 className="services-coll-item w-dyn-item"
    //               >
    //                 <div
    //                   data-w-id="2b09b0d4-5489-dd98-c3c6-c9a69b154b26"
                      
    //                   className="carsy-item"
    //                 >
    //                   <div className="news-cover-publication">
    //                     <img
    //                       src={service.icon}
    //                       loading="lazy"
    //                       alt=""
    //                       className="services-icon"
    //                     />
    //                   </div>
    //                   <div className="news-card-top">
    //                     <div
    //                       id="w-node-_2b09b0d4-5489-dd98-c3c6-c9a69b154b2a-fbbea256"
    //                       className="top-news-wrap"
    //                     >
    //                       <div
    //                         id="w-node-_2b09b0d4-5489-dd98-c3c6-c9a69b154b2b-fbbea256"
    //                         className="link-wrap"
    //                       >
    //                         <a
    //                           href={`/services-categories/${service.categorySlug}`}
    //                           className="carsy-serv-category"
    //                         >
    //                           {service.category}
    //                         </a>
    //                       </div>
    //                     </div>
    //                   </div>
    //                   <div
    //                     id="w-node-_2b09b0d4-5489-dd98-c3c6-c9a69b154b2d-fbbea256"
    //                     data-w-id="2b09b0d4-5489-dd98-c3c6-c9a69b154b2d"
    //                     className="portfolio-3-image blog-page-height"
    //                   >
    //                     <a
    //                       data-w-id="2b09b0d4-5489-dd98-c3c6-c9a69b154b2e"
    //                       href={`/services/${service.slug}`}
    //                       className="bg-blog-link-2 full-height w-inline-block"
    //                     >
    //                       <div
    //                         data-w-id="2b09b0d4-5489-dd98-c3c6-c9a69b154b2f"
    //                         className="cursur-wrapper"
    //                       >
    //                         <div className="card-cursur on">
    //                           <div
    //                             id="w-node-_2b09b0d4-5489-dd98-c3c6-c9a69b154b31-fbbea256"
    //                             className="cursur-text"
    //                           >
    //                             Details
    //                           </div>
    //                           <div
    //                             id="w-node-_2b09b0d4-5489-dd98-c3c6-c9a69b154b33-fbbea256"
    //                             className="cursor-top"
    //                           >
    //                             <div className="cursur-top-outline"></div>
    //                           </div>
    //                           <div
    //                             id="w-node-_2b09b0d4-5489-dd98-c3c6-c9a69b154b35-fbbea256"
    //                             className="cursor-top bottom"
    //                           >
    //                             <div className="cursur-top-outline bottom"></div>
    //                           </div>
    //                         </div>
    //                       </div>
    //                     </a>
    //                     <div className="background-wrapper-2 big-size">
    //                       <div
    //                         data-w-id="2b09b0d4-5489-dd98-c3c6-c9a69b154b38"
    //                         style={{
    //                           backgroundImage: `url("${service.image}")`,
    //                         }}
    //                         className="background-portfolio-3"
    //                       >
    //                         <div
    //                           data-w-id="2b09b0d4-5489-dd98-c3c6-c9a69b154b39"
    //                           className="overlay-services-slider"
    //                         ></div>
    //                       </div>
    //                     </div>
    //                   </div>
    //                   <a
    //                     href={`/services/${service.slug}`}
    //                     className="project-3-card-bottom w-inline-block"
    //                   >
    //                     <div className="news-content-2">
    //                       <div className="blog-flex-wrapper">
    //                         <div className="hover-clip-wrapper">
    //                           <div className="clip-title">
    //                             <h5 className="services-hero-title">
    //                               {service.title}
    //                             </h5>
    //                           </div>
    //                           <div className="clip-title bottom">
    //                             <h5 className="services-hero-title hover-color">
    //                               {service.title}
    //                             </h5>
    //                           </div>
    //                         </div>
    //                       </div>
    //                       <p className="news-description">
    //                         {service.description}
    //                       </p>
    //                     </div>
    //                     <p className="par-hidden">h</p>
    //                   </a>
    //                 </div>
    //               </div>
    //             ))}
    //           </div>
    //           <div
    //             role="navigation"
    //             aria-label="List"
    //             className="w-pagination-wrapper pagination"
    //           ></div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="gradient-wrapper grad-wrapper-3">
    //       <div
    //         data-w-id="41536fe9-08cd-993f-2ff5-cb8926cec4be"
            
    //         className="red-grad-9"
    //       ></div>
    //       <div
    //         data-w-id="41536fe9-08cd-993f-2ff5-cb8926cec4bf"
            
    //         className="red-grad-7"
    //       ></div>
    //     </div>
    //   </div>
    // </div>
//   );
// }

// export default ServicesPage;






"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { fetchAllServices, getImageUrl } from "@/lib/fetchAllServices";

export default function ServicesPage() {
  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllServices().then((data) => {
      setServices(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="section-news">
        <div className="base-container">Loading services...</div>
      </div>
    );
  }

  if (services.length === 0) {
    return (
      <div className="section-news">
        <div className="base-container">No services found.</div>
      </div>
    );
  }

  return (
    <div className="relative-page-wrapper">
      <div className="inner-small-banner">
        <div className="base-container">
          <div
            data-w-id="41536fe9-08cd-993f-2ff5-cb8926cec48d"
            className="inner-title-wrap"
          >
            <h1 className="inner-banner-title">What We Offer</h1>
          </div>
        </div>
        <div className="inner-clip-photo-banner">
          <div
            data-w-id="41536fe9-08cd-993f-2ff5-cb8926cec491"
            style={{
              WebkitTransform:
                "translate3d(0, 0, 0) scale3d(1.15, 1.15, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              MozTransform:
                "translate3d(0, 0, 0) scale3d(1.15, 1.15, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              msTransform:
                "translate3d(0, 0, 0) scale3d(1.15, 1.15, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              transform:
                "translate3d(0, 0, 0) scale3d(1.15, 1.15, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            }}
            className="inner-photo-banner services-banner"
          ></div>
          <div className="inner-banner-overlay with-bottom-light-gradient">
            <div className="red-inner-grad-1"></div>
          </div>
        </div>
      </div>
      <div className="section-news">
        <div className="base-container">
          <div className="blog-grid-wrapper">
            <div className="collection-list-services w-dyn-list">
              <div role="list" className="carsy-services-grid w-dyn-items">
                {services.map((service) => (
                  <div
                    key={service.id}
                    role="listitem"
                    className="services-coll-item w-dyn-item"
                  >
                    <div
                      data-w-id="2b09b0d4-5489-dd98-c3c6-c9a69b154b26"
                      className="carsy-item"
                    >
                      {/* Service Icon */}
                      {/* <div className="news-cover-publication">
                      <img
                        src={
                          getImageUrl(service.bannerSection?.icon) ||
                          service.bannerSection?.iconUrl ||
                          "/placeholder-icon.svg"
                        }
                        loading="lazy"
                        alt={service.bannerSection?.title || "Service icon"}
                        className="services-icon"
                      />
                    </div> */}

                      {/* Category */}
                      <div className="news-card-top">
                        <div
                          id="w-node-_2b09b0d4-5489-dd98-c3c6-c9a69b154b2a-fbbea256"
                          className="top-news-wrap"
                        >
                          <div
                            id="w-node-_2b09b0d4-5489-dd98-c3c6-c9a69b154b2b-fbbea256"
                            className="link-wrap"
                          >
                            {service.bannerSection?.category?.show && (
                              <Link
                                href={`/services-categories/${service.bannerSection.category.slug}`}
                                className="carsy-serv-category"
                              >
                                {service.bannerSection.category.label}
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Image + Hover Cursor */}
                      <div
                        id="w-node-_2b09b0d4-5489-dd98-c3c6-c9a69b154b2d-fbbea256"
                        data-w-id="2b09b0d4-5489-dd98-c3c6-c9a69b154b2d"
                        className="portfolio-3-image blog-page-height"
                      >
                        <Link
                          href={`/services/${service.slug}`}
                          data-w-id="2b09b0d4-5489-dd98-c3c6-c9a69b154b2e"
                          className="bg-blog-link-2 full-height w-inline-block"
                        >
                          <div
                            data-w-id="2b09b0d4-5489-dd98-c3c6-c9a69b154b2f"
                            className="cursur-wrapper"
                          >
                            <div className="card-cursur on">
                              <div
                                id="w-node-_2b09b0d4-5489-dd98-c3c6-c9a69b154b31-fbbea256"
                                className="cursur-text"
                              >
                                Details
                              </div>
                              <div
                                id="w-node-_2b09b0d4-5489-dd98-c3c6-c9a69b154b33-fbbea256"
                                className="cursor-top"
                              >
                                <div className="cursur-top-outline"></div>
                              </div>
                              <div
                                id="w-node-_2b09b0d4-5489-dd98-c3c6-c9a69b154b35-fbbea256"
                                className="cursor-top bottom"
                              >
                                <div className="cursur-top-outline bottom"></div>
                              </div>
                            </div>
                          </div>
                        </Link>

                        {/* Background Image */}
                        <div className="background-wrapper-2 big-size">
                          <div
                            data-w-id="2b09b0d4-5489-dd98-c3c6-c9a69b154b38"
                            style={{
                              backgroundImage: `url("${
                                getImageUrl(
                                  service.bannerSection?.backgroundImage
                                    ?.desktop
                                ) ||
                                service.bannerSection?.backgroundImage
                                  ?.defaultUrl ||
                                "/placeholder.jpg"
                              }")`,
                            }}
                            className="background-portfolio-3"
                          >
                            <div
                              data-w-id="2b09b0d4-5489-dd98-c3c6-c9a69b154b39"
                              className="overlay-services-slider"
                            ></div>
                          </div>
                        </div>
                      </div>

                      {/* Title + Description */}
                      <Link
                        href={`/services/${service.slug}`}
                        className="project-3-card-bottom w-inline-block"
                      >
                        <div className="news-content-2">
                          <div className="blog-flex-wrapper">
                            <div className="hover-clip-wrapper">
                              <div className="clip-title">
                                <h5 className="services-hero-title">
                                  {service.bannerSection?.title}
                                </h5>
                              </div>
                              <div className="clip-title bottom">
                                <h5 className="services-hero-title hover-color">
                                  {service.bannerSection?.title}
                                </h5>
                              </div>
                            </div>
                          </div>
                          <p className="news-description">
                            {service.bannerSection?.description}
                          </p>
                        </div>
                        <p className="par-hidden">h</p>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination Placeholder */}
              <div
                role="navigation"
                aria-label="List"
                className="w-pagination-wrapper pagination"
              ></div>
            </div>
          </div>
        </div>

        {/* Gradient Bottom */}
        <div className="gradient-wrapper grad-wrapper-3">
          <div
            data-w-id="41536fe9-08cd-993f-2ff5-cb8926cec4be"
            className="red-grad-9"
          ></div>
          <div
            data-w-id="41536fe9-08cd-993f-2ff5-cb8926cec4bf"
            className="red-grad-7"
          ></div>
        </div>
      </div>
    </div>
  );
}