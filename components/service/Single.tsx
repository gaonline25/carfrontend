// interface ServiceDetailsProps {
//   category: string;
//   categorySlug: string;
//   title: string;
//   description: string;
//   bannerImage: string;
//   phone: string;
//   email: string;
//   telegramUrl: string;
//   locationUrl: string;
// }

// function ServiceDetails({
//   category,
//   categorySlug,
//   title,
//   description,
//   bannerImage,
//   phone,
//   email,
//   telegramUrl,
//   locationUrl,
// }: ServiceDetailsProps) {
//   return (
//     <>
//       <div className="services-details-banner">
//         <div className="base-container">
//           <div className="services-banner-grid">
//             <div
//               id="w-node-_8aa83b56-8f9c-90e0-4735-87b10729262e-fbbea1dd"
//               data-w-id="8aa83b56-8f9c-90e0-4735-87b10729262e"
              
//               className="service-banner-left"
//             >
//               <div className="link-services-wrap">
//                 <a
//                   href="/services-categories/maintenance"
//                   className="carsy-service-category"
//                 >
//                   Maintenance
//                 </a>
//               </div>
//               <h1 className="serv-details-title">Engine Repair</h1>
//             </div>
//             <div
//               id="w-node-_8aa83b56-8f9c-90e0-4735-87b107292634-fbbea1dd"
//               data-w-id="8aa83b56-8f9c-90e0-4735-87b107292634"
              
//               className="service-banner-right"
//             >
//               <p className="service-banner-description">
//                 Choose Carsy for all your automotive needs and experience the
//                 difference of exceptional service, expert care, and
//                 customer-focused convenience. Our comprehensive range of
//                 services, from routine maintenance to specialized repairs, is
//                 designed to keep your vehicle in top condition and ensure a
//                 smooth, safe driving experience.
//               </p>
//               <div
//                 data-w-id="c6c557a6-2726-d39d-283a-4b9b91705fe0"
                
//                 className="quick-service-links-container"
//               >
//                 <div className="info-link-wrapper">
//                   <a
//                     href="tel:+1-800-123-4567"
//                     className="quick-intro-link w-inline-block"
//                   >
//                     <div className="quick-links-item">
//                       <div className="quick-links-icon">
//                         <img
//                           loading="lazy"
//                           src="https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/66a2390f09a1883d22986905_ride-hailing_16760271%201.svg"
//                           alt="Project photo"
//                           className="banner-icon"
//                         />
//                       </div>
//                       <div className="space-text-wrap">
//                         <div className="hover-clip-con">
//                           <div className="clip-title">
//                             <h6 className="quick-links-text">
//                               +1-800-123-4567
//                             </h6>
//                           </div>
//                           <div className="clip-title bottom">
//                             <h6 className="quick-links-text">
//                               +1-800-123-4567
//                             </h6>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="link-line-cover"></div>
//                   </a>
//                 </div>
//                 <div className="info-link-wrapper">
//                   <a
//                     href="mailto:carsy@gmail.com"
//                     className="quick-intro-link w-inline-block"
//                   >
//                     <div className="quick-links-item">
//                       <div className="quick-links-icon">
//                         <img
//                           loading="lazy"
//                           src="https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/66a2390e6aa74ba021b6884f_email_11344546%201.svg"
//                           alt="Project photo"
//                           className="banner-icon"
//                         />
//                       </div>
//                       <div className="space-text-wrap">
//                         <div className="hover-clip-con">
//                           <div className="clip-title">
//                             <h6 className="quick-links-text">
//                               carsy@gmail.com
//                             </h6>
//                           </div>
//                           <div className="clip-title bottom">
//                             <h6 className="quick-links-text">
//                               carsy@gmail.com
//                             </h6>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="link-line-cover"></div>
//                   </a>
//                 </div>
//                 <div className="info-link-wrapper">
//                   <a
//                     href="https://web.telegram.org/a/"
//                     className="quick-intro-link w-inline-block"
//                   >
//                     <div className="quick-links-item">
//                       <div className="quick-links-icon">
//                         <img
//                           loading="lazy"
//                           src="https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/66a239b6d347142d5307fd9b_2.svg"
//                           alt="Project photo"
//                           className="banner-icon"
//                         />
//                       </div>
//                       <div className="space-text-wrap">
//                         <div className="hover-clip-con">
//                           <div className="clip-title">
//                             <h6 className="quick-links-text">Telegram Chat</h6>
//                           </div>
//                           <div className="clip-title bottom">
//                             <h6 className="quick-links-text">Telegram Chat</h6>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="link-line-cover"></div>
//                   </a>
//                 </div>
//                 <div className="info-link-wrapper">
//                   <a
//                     href="https://www.google.com/maps/d/u/0/viewer?ie=UTF8&amp;hl=en&amp;msa=0&amp;z=18&amp;mid=14jEeIQ7yyKK7iih9Sl_AjR7jZf0&amp;ll=51.54480440635318%2C-0.07627265702787378"
//                     target="_blank"
//                     className="quick-intro-link w-inline-block"
//                   >
//                     <div className="quick-links-item">
//                       <div className="quick-links-icon">
//                         <img
//                           loading="lazy"
//                           src="https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/66a23910e9bce36ced9cc75e_location_4879312%201.svg"
//                           alt="Project photo"
//                           className="banner-icon"
//                         />
//                       </div>
//                       <div className="space-text-wrap">
//                         <div className="hover-clip-con">
//                           <div className="clip-title">
//                             <h6 className="quick-links-text">Our location</h6>
//                           </div>
//                           <div className="clip-title bottom">
//                             <h6 className="quick-links-text">Our location</h6>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="link-line-cover"></div>
//                   </a>
//                 </div>
//                 <a
//                   href="#Service-details"
//                   className="scroll-below w-inline-block"
//                 >
//                   <div className="scroll-below-link">
//                     <div className="hover-clip-icon">
//                       <div className="clip-link-icon top">
//                         <img
//                           loading="lazy"
//                           src="https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/669fcff281897ab23a323451_Arrow%20White.svg"
//                           alt="Project photo"
//                           className="scroll-below-icon"
//                         />
//                       </div>
//                       <div className="clip-link-icon">
//                         <img
//                           loading="lazy"
//                           src="https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/669fcff281897ab23a323451_Arrow%20White.svg"
//                           alt="Project photo"
//                           className="scroll-below-icon"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="inner-clip-photo-banner">
//           <div
//             data-w-id="8aa83b56-8f9c-90e0-4735-87b10729263d"
//             style={{
//               backgroundImage:
//                 'url("https://cdn.prod.website-files.com/669e1212d181ce4bfbbea18b/66a0ac90b5a47945ab458f1b_Services-3.jpg")',
//               WebkitTransform:
//                 "translate3d(0, 0, 0) scale3d(1.15, 1.15, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
//               MozTransform:
//                 "translate3d(0, 0, 0) scale3d(1.15, 1.15, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
//               msTransform:
//                 "translate3d(0, 0, 0) scale3d(1.15, 1.15, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
//               transform:
//                 "translate3d(0, 0, 0) scale3d(1.15, 1.15, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
//             }}
//             className="inner-photo-banner services-details-banner"
//           ></div>
//           <div className="about-us-overlay">
//             <div className="red-grad-1"></div>
//           </div>
//         </div>
//       </div>
//       <div className="section-gray padding-bottom">
//         <div className="soft-black-bg">
//           <div className="base-container">
//             <div id="Service-details" className="services-template-wrap">
//               <div className="subtitle-wrap">
//                 <h6
//                   data-w-id="52984b45-d372-aec2-961d-412fbbd79e97"
                  
//                   className="black-subtitle"
//                 >
//                   Commitment to Quality and Innovation in Every Service
//                 </h6>
//               </div>
//               <div
//                 data-w-id="f94c7c90-b612-1679-ce04-1f042fbaeec3"
                
//                 className="hero-rich-text-style w-richtext"
//               >
//                 <h2>Quality Service, Unmatched Expertise</h2>
//                 <p>
//                   At Carsy, we understand that your vehicle is more than just a
//                   mode of transportation; it's an essential part of your daily
//                   life. That's why we are committed to providing top-notch
//                   automotive services that ensure your car remains reliable,
//                   safe, and efficient. Our team of certified technicians is
//                   equipped with the latest tools and technology to handle all
//                   your car maintenance and repair needs. Whether you're in for
//                   routine maintenance or need a complex repair, we offer a wide
//                   range of services tailored to meet the highest standards of
//                   quality and customer satisfaction.
//                 </p>
//                 <p>
//                   Regular maintenance is crucial for the longevity and
//                   performance of your vehicle. Our routine maintenance services
//                   include:
//                 </p>
//                 <ul role="list">
//                   <li>
//                     <strong>Oil Changes</strong>: We offer conventional,
//                     synthetic, and high-mileage oil changes to keep your engine
//                     running smoothly.
//                   </li>
//                   <li>
//                     <strong>Filter Replacements</strong>: Air, fuel, and cabin
//                     filters are replaced to ensure clean air and efficient fuel
//                     flow.
//                   </li>
//                   <li>
//                     <strong>Fluid Checks and Top-Ups</strong>: Includes brake
//                     fluid, transmission fluid, power steering fluid, and
//                     coolant.
//                   </li>
//                   <li>
//                     <strong>Tire Services</strong>: From rotations and balancing
//                     to pressure checks and alignments, we ensure your tires are
//                     road-ready.
//                   </li>
//                   <li>
//                     <strong>Battery Testing and Replacement</strong>: We test
//                     your battery's health and replace it if necessary to prevent
//                     unexpected breakdowns.
//                   </li>
//                 </ul>
//                 <p>
//                   In the age of advanced automotive technology, accurate
//                   diagnostics are essential for identifying and addressing
//                   vehicle issues promptly. At Carsy, we utilize state-of-the-art
//                   diagnostic tools to perform thorough inspections and pinpoint
//                   problems with precision. When your check engine light
//                   illuminates, our technicians decode the trouble codes and
//                   explain the necessary repairs in detail, ensuring you
//                   understand the issues and solutions. Our electrical system
//                   testing ensures that all electronic components, from sensors
//                   to lighting systems, are functioning correctly. We also
//                   conduct comprehensive computer diagnostics to detect any
//                   malfunctions within your vehicle's electronic control units,
//                   ensuring every aspect of your car's operation is in top
//                   condition.
//                 </p>
//                 <h3>Routine Maintenance</h3>
//                 <p>
//                   Regular maintenance is the cornerstone of vehicle longevity
//                   and performance. At Carsy, we offer a comprehensive
//                   maintenance program designed to keep your car running smoothly
//                   and efficiently. This includes timely oil changes, which are
//                   crucial for maintaining engine health by reducing wear and
//                   tear. We also focus on replacing filters, such as air, fuel,
//                   and cabin filters, to ensure clean air intake and optimal fuel
//                   flow. Regular fluid checks and top-ups are performed to
//                   maintain proper levels of brake fluid, transmission fluid,
//                   power steering fluid, and coolant, preventing any potential
//                   issues that could arise from low or contaminated fluids. Our
//                   tire services are aimed at ensuring your tires have the proper
//                   pressure, alignment, and balance, which are critical for
//                   safety and performance. Additionally, we provide battery
//                   testing and replacement to avoid any unexpected failures,
//                   ensuring your vehicle starts reliably every time.
//                 </p>
//                 <p>
//                   Modern vehicles are equipped with complex systems that require
//                   precise diagnostics. Our state-of-the-art diagnostic tools
//                   allow us to quickly and accurately identify any issues. Our
//                   diagnostic services include:
//                 </p>
//                 <ul role="list">
//                   <li>
//                     <strong>Check Engine Light</strong>: We decode the trouble
//                     codes and provide a thorough explanation of any necessary
//                     repairs.
//                   </li>
//                   <li>
//                     <strong>Electrical System Testing</strong>: Ensuring all
//                     electronic components, from lights to sensors, are
//                     functioning properly.
//                   </li>
//                   <li>
//                     <strong>Computer Diagnostics</strong>: Advanced software
//                     helps diagnose issues within your vehicle's computer
//                     systems.
//                   </li>
//                 </ul>
//                 <p>
//                   When it comes to repairs, Carsy offers a full spectrum of
//                   services to address any issue your vehicle may encounter. Our
//                   engine repair services range from minor adjustments to
//                   complete overhauls, ensuring that your engine performs at its
//                   best. Transmission services include repairs and rebuilds,
//                   aimed at restoring smooth gear shifting and overall
//                   performance. Brake services are a critical aspect of vehicle
//                   safety, and we offer detailed inspections, pad replacements,
//                   rotor resurfacing, and fluid changes to maintain optimal
//                   braking performance. Our suspension and steering services
//                   ensure that your vehicle handles well and provides a
//                   comfortable ride, addressing any issues with shocks, struts,
//                   and steering components. For exhaust system repairs, we fix
//                   leaks, replace mufflers, and ensure your vehicle meets
//                   emissions standards, contributing to both performance and
//                   environmental responsibility.
//                 </p>
//                 <h3>Customer Convenience</h3>
//                 <p>
//                   In addition to standard maintenance and repairs, Carsy
//                   provides a range of specialty services to cater to specific
//                   automotive needs. Our performance upgrades are designed to
//                   enhance your vehicle's power and efficiency, whether you're
//                   looking for more horsepower or better fuel economy. A/C and
//                   heating services ensure that your climate control system
//                   operates effectively, providing comfort in all weather
//                   conditions. We also offer professional detailing services to
//                   keep your car looking pristine, both inside and out. Our glass
//                   repair and replacement services address chips, cracks, and
//                   full windshield replacements, ensuring clear visibility and
//                   safety on the road.
//                 </p>
//                 <figure
//                   style={{ maxWidth: "1920pxpx" }}
//                   className="w-richtext-align-fullwidth w-richtext-figure-type-image"
//                 >
//                   <div>
//                     <img
//                       src="https://cdn.prod.website-files.com/669e1212d181ce4bfbbea18b/66ac86cca33630d075de6445_66aba316f0a6b839e8c5930e_Banner-12.jpeg"
//                       loading="lazy"
//                       alt=""
//                     />
//                   </div>
//                 </figure>
//                 <p>
//                   At Carsy, we value your time and convenience. Our online
//                   booking system allows you to schedule service appointments
//                   easily, fitting maintenance and repairs into your busy
//                   schedule. For customers who need transportation while their
//                   vehicle is being serviced, we offer a complimentary shuttle
//                   service. In cases of extensive repairs, we provide loaner
//                   vehicles to ensure you're never without transportation. Our
//                   comfortable waiting area is equipped with free Wi-Fi,
//                   refreshments, and a relaxing environment, making your wait as
//                   pleasant as possible.
//                 </p>
//                 <h3>Commitment to Quality</h3>
//                 <p>
//                   Our unwavering commitment to quality is reflected in
//                   everything we do at Carsy. We use only the highest quality
//                   parts and products, ensuring that every repair and maintenance
//                   service meets our stringent standards. Our technicians undergo
//                   continuous training to stay updated with the latest industry
//                   advancements and best practices. Transparency and integrity
//                   are at the core of our customer service philosophy. We provide
//                   detailed explanations and estimates before any work begins,
//                   ensuring you are fully informed and comfortable with the
//                   services being performed on your vehicle.
//                 </p>
//                 <figure
//                   style={{ paddingBottom: "75%" }}
//                   className="w-richtext-align-fullwidth w-richtext-figure-type-video"
//                 >
//                   <div>
//                     <iframe
//                       allowFullScreen={true}
//                       frameBorder="0"
//                       scrolling="no"
//                       src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.google.com%2Fmaps%2Fembed%2Fv1%2Fplace%3Fcenter%3D33.2482626%252C170.1160621%26key%3DAIzaSyD9HrlRuI1Ani0-MTZ7pvzxwxi4pgW0BCY%26zoom%3D3%26q%3DChristian%2BBrothers%2BAutomotive%2BOcotillo&amp;display_name=Google+Maps&amp;url=https%3A%2F%2Fwww.google.com%2Fmaps%2Fplace%2FChristian%2BBrothers%2BAutomotive%2BOcotillo%2F%4033.2482626%2C170.1160621%2C3z%2Fdata%3D%214m10%211m2%212m1%211sauto%2Bservices%213m6%211s0x872baabf2acc5d93%3A0x215eea569127f089%218m2%213d33.2482626%214d-111.8370629%2115sCg1hdXRvIHNlcnZpY2VzkgEQYXV0b19yZXBhaXJfc2hvcOABAA%2116s%252Fg%252F11bysjn9qk%3Fhl%3Den-US%26entry%3Dttu&amp;image=http%3A%2F%2Fmaps-api-ssl.google.com%2Fmaps%2Fapi%2Fstaticmap%3Fcenter%3D33.2482626%2C170.1160621%26zoom%3D15%26size%3D250x250%26sensor%3Dfalse&amp;key=96f1f04c5f4143bcb0f2e68c87d65feb&amp;type=text%2Fhtml&amp;schema=google"
//                       title="Christian Brothers Automotive Ocotillo"
//                     ></iframe>
//                   </div>
//                 </figure>
//                 <p>
//                   Choose Carsy for all your automotive needs and experience the
//                   difference of exceptional service, expert care, and
//                   customer-focused convenience. Our comprehensive range of
//                   services, from routine maintenance to specialized repairs, is
//                   designed to keep your vehicle in top condition and ensure a
//                   smooth, safe driving experience. Trust Carsy to be your
//                   partner in automotive care, providing reliable solutions and
//                   unparalleled customer service every step of the way. Book your
//                   appointment today and discover why Carsy is the trusted name
//                   in automotive service.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="gradient-wrapper grad-wrapper-3">
//           <div
//             data-w-id="c210ae86-0c28-9feb-91e8-3084aa0f1c8c"
            
//             className="red-grad-9"
//           ></div>
//           <div
//             data-w-id="c210ae86-0c28-9feb-91e8-3084aa0f1c8d"
            
//             className="red-grad-7"
//           ></div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default ServiceDetails;










// "use client";

// import { useState, useEffect } from "react";
// import { fetchServiceDetailsBySlug, getImageUrl } from "@/lib/fetchServiceDetailsBySlug";

// export default function ServiceDetails({
//   params,
// }: {
//   params: { slug: string };
// }) {
//   const [data, setData] = useState<any>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchServiceDetailsBySlug(params.slug).then((fetchedData) => {
//       setData(fetchedData);
//       setLoading(false);
//     });
//   }, [params.slug]);

//   if (loading) {
//     return <div className="base-container">Loading service details...</div>;
//   }

//   if (!data) {
//     return <div className="base-container">Service not found.</div>;
//   }

//   const {
//     bannerSection = {},
//     quickLinksSection = {},
//     contentSection = {},
//     gradientSection = {},
//     sectionOrder = [],
//   } = data;

//   // Helper to pick responsive background image
//   const getBackgroundImage = () => {
//     const bg = bannerSection.backgroundImage;
//     if (!bg) return bannerSection.backgroundImage?.defaultUrl || "";

//     const width = typeof window !== "undefined" ? window.innerWidth : 1920;
//     if (width <= 420 && bg.mobile?.url) return getImageUrl(bg.mobile);
//     if (width <= 800 && bg.tablet?.url) return getImageUrl(bg.tablet);
//     if (width <= 1400 && bg.desktop?.url) return getImageUrl(bg.desktop);
//     return (
//       getImageUrl(bg.large) || getImageUrl(bg.desktop) || bg.defaultUrl || ""
//     );
//   };

//   // Render sections in order
//   const renderSections = () => {
//     return sectionOrder.map((item: { section: string }, i: number) => {
//       switch (item.section) {
//         case "banner":
//           return (
//             bannerSection.show && (
//               <div key="banner" className={bannerSection.className}>
//                 <div className="base-container">
//                   <div className="services-banner-grid">
//                     {/* Left Side */}
//                     <div
//                       id="w-node-_8aa83b56-8f9c-90e0-4735-87b10729262e-fbbea1dd"
//                       data-w-id="8aa83b56-8f9c-90e0-4735-87b10729262e"
//                       className="service-banner-left"
//                     >
//                       {bannerSection.category?.show && (
//                         <div className="link-services-wrap">
//                           <a
//                             href={`${bannerSection.category.baseUrl}/${bannerSection.category.slug}`}
//                             className="carsy-service-category"
//                           >
//                             {bannerSection.category.label}
//                           </a>
//                         </div>
//                       )}
//                       <h1 className="serv-details-title">
//                         {bannerSection.title}
//                       </h1>
//                     </div>

//                     {/* Right Side */}
//                     <div
//                       id="w-node-_8aa83b56-8f9c-90e0-4735-87b107292634-fbbea1dd"
//                       data-w-id="8aa83b56-8f9c-90e0-4735-87b107292634"
//                       className="service-banner-right"
//                     >
//                       <p className="service-banner-description">
//                         {bannerSection.description}
//                       </p>

//                       {/* Quick Links */}
//                       {quickLinksSection.show && (
//                         <div
//                           data-w-id="c6c557a6-2726-d39d-283a-4b9b91705fe0"
//                           className={quickLinksSection.className}
//                         >
//                           {quickLinksSection.quickLinks
//                             ?.filter((link: any) => link.show)
//                             .map((link: any, i: number) => (
//                               <div key={i} className="info-link-wrapper">
//                                 <a
//                                   href={
//                                     link.type === "phone"
//                                       ? `tel:${link.value}`
//                                       : link.type === "email"
//                                       ? `mailto:${link.value}`
//                                       : link.value
//                                   }
//                                   className="quick-intro-link w-inline-block"
//                                   target={
//                                     link.openInNewTab ? "_blank" : undefined
//                                   }
//                                   rel={
//                                     link.openInNewTab
//                                       ? "noopener noreferrer"
//                                       : undefined
//                                   }
//                                 >
//                                   <div className="quick-links-item">
//                                     <div className="quick-links-icon">
//                                       <img
//                                         loading="lazy"
//                                         src={
//                                           getImageUrl(link.icon) || link.iconUrl
//                                         }
//                                         alt={link.iconAlt || "Contact icon"}
//                                         className="banner-icon"
//                                       />
//                                     </div>
//                                     <div className="space-text-wrap">
//                                       <div className="hover-clip-con">
//                                         <div className="clip-title">
//                                           <h6 className="quick-links-text">
//                                             {link.label}
//                                           </h6>
//                                         </div>
//                                         <div className="clip-title bottom">
//                                           <h6 className="quick-links-text">
//                                             {link.label}
//                                           </h6>
//                                         </div>
//                                       </div>
//                                     </div>
//                                   </div>
//                                   <div className="link-line-cover"></div>
//                                 </a>
//                               </div>
//                             ))}

//                           {/* Scroll Button */}
//                           {quickLinksSection.scrollButton?.show && (
//                             <a
//                               href={quickLinksSection.scrollButton.targetId}
//                               className="scroll-below w-inline-block"
//                             >
//                               <div className="scroll-below-link">
//                                 <div className="hover-clip-icon">
//                                   <div className="clip-link-icon top">
//                                     <img
//                                       loading="lazy"
//                                       src={
//                                         getImageUrl(
//                                           quickLinksSection.scrollButton.icon
//                                         ) ||
//                                         quickLinksSection.scrollButton.iconUrl
//                                       }
//                                       alt={
//                                         quickLinksSection.scrollButton.iconAlt
//                                       }
//                                       className="scroll-below-icon"
//                                     />
//                                   </div>
//                                   <div className="clip-link-icon">
//                                     <img
//                                       loading="lazy"
//                                       src={
//                                         getImageUrl(
//                                           quickLinksSection.scrollButton.icon
//                                         ) ||
//                                         quickLinksSection.scrollButton.iconUrl
//                                       }
//                                       alt={
//                                         quickLinksSection.scrollButton.iconAlt
//                                       }
//                                       className="scroll-below-icon"
//                                     />
//                                   </div>
//                                 </div>
//                               </div>
//                             </a>
//                           )}
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Banner Background */}
//                 <div className="inner-clip-photo-banner">
//                   <div
//                     data-w-id="8aa83b56-8f9c-90e0-4735-87b10729263d"
//                     style={{
//                       backgroundImage: `url("${getBackgroundImage()}")`,
//                       WebkitTransform:
//                         "translate3d(0, 0, 0) scale3d(1.15, 1.15, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
//                       transform:
//                         "translate3d(0, 0, 0) scale3d(1.15, 1.15, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
//                     }}
//                     className="inner-photo-banner services-details-banner"
//                   ></div>
//                   <div className="about-us-overlay">
//                     <div
//                       className="red-grad-1"
//                       style={{ opacity: bannerSection.overlayOpacity }}
//                     ></div>
//                   </div>
//                 </div>
//               </div>
//             )
//           );

//         case "content":
//           return (
//             contentSection.show && (
//               <div
//                 key="content"
//                 id={contentSection.id}
//                 className={contentSection.className}
//               >
//                 <div className="soft-black-bg">
//                   <div className="base-container">
//                     <div className="services-template-wrap">
//                       {contentSection.subtitle?.show && (
//                         <div className="subtitle-wrap">
//                           <h6
//                             data-w-id="52984b45-d372-aec2-961d-412fbbd79e97"
//                             className="black-subtitle"
//                           >
//                             {contentSection.subtitle.text}
//                           </h6>
//                         </div>
//                       )}
//                       <div
//                         data-w-id="f94c7c90-b612-1679-ce04-1f042fbaeec3"
//                         className="hero-rich-text-style w-richtext"
//                         dangerouslySetInnerHTML={{
//                           __html: contentSection.content,
//                         }}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )
//           );

//         case "gradient":
//           return (
//             gradientSection.show && (
//               <div key="gradient" className={gradientSection.className}>
//                 {gradientSection.gradients?.map((grad: any, i: number) => (
//                   <div
//                     key={i}
//                     data-w-id={`c210ae86-0c28-9feb-91e8-3084aa0f1c8${
//                       i === 0 ? "c" : "d"
//                     }`}
//                     className={grad.className}
//                   ></div>
//                 ))}
//               </div>
//             )
//           );

//         default:
//           return null;
//       }
//     });
//   };

//   return <>{renderSections()}</>;
// }





// // "use client";

// // import { useState, useEffect } from "react";
// // import { fetchServiceDetailsBySlug, getImageUrl } from "@/lib/fetchServiceDetailsBySlug";

// // interface ServiceDetailsProps {
// //   params: { slug: string };
// // }

// // export default function ServiceDetails({ params }: ServiceDetailsProps) {
// //   const [data, setData] = useState<any>(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(false);

// //   useEffect(() => {
// //     // Safety check - if params or slug is missing
// //     if (!params || !params.slug) {
// //       setError(true);
// //       setLoading(false);
// //       return;
// //     }

// //     fetchServiceDetailsBySlug(params.slug)
// //       .then((fetchedData) => {
// //         if (fetchedData) {
// //           setData(fetchedData);
// //         } else {
// //           setError(true);
// //         }
// //         setLoading(false);
// //       })
// //       .catch(() => {
// //         setError(true);
// //         setLoading(false);
// //       });
// //   }, [params?.slug]); // Safe access

// //   if (loading) {
// //     return (
// //       <div className="base-container py-20 text-center">
// //         Loading service details...
// //       </div>
// //     );
// //   }

// //   if (error || !data) {
// //     return (
// //       <div className="base-container py-20 text-center">
// //         <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
// //         <p>The requested service could not be found.</p>
// //       </div>
// //     );
// //   }

// //   const {
// //     bannerSection = {},
// //     quickLinksSection = {},
// //     contentSection = {},
// //     gradientSection = {},
// //     sectionOrder = [],
// //   } = data;

// //   const getBackgroundImage = () => {
// //     const bg = bannerSection.backgroundImage;
// //     if (!bg) return bg?.defaultUrl || "";

// //     const width = typeof window !== "undefined" ? window.innerWidth : 1920;
// //     if (width <= 420 && bg.mobile?.url) return getImageUrl(bg.mobile);
// //     if (width <= 800 && bg.tablet?.url) return getImageUrl(bg.tablet);
// //     if (width <= 1400 && bg.desktop?.url) return getImageUrl(bg.desktop);
// //     return (
// //       getImageUrl(bg.large) || getImageUrl(bg.desktop) || bg.defaultUrl || ""
// //     );
// //   };

// //   const renderSections = () => {
// //     return sectionOrder.map((item: { section: string }, i: number) => {
// //       switch (item.section) {
// //         case "banner":
// //           return bannerSection.show ? (
// //             <div
// //               key="banner"
// //               className={bannerSection.className || "services-details-banner"}
// //             >
// //               <div className="base-container">
// //                 <div className="services-banner-grid">
// //                   <div
// //                     id="w-node-_8aa83b56-8f9c-90e0-4735-87b10729262e-fbbea1dd"
// //                     data-w-id="8aa83b56-8f9c-90e0-4735-87b10729262e"
// //                     className="service-banner-left"
// //                   >
// //                     {bannerSection.category?.show && (
// //                       <div className="link-services-wrap">
// //                         <a
// //                           href={`${bannerSection.category.baseUrl}/${bannerSection.category.slug}`}
// //                           className="carsy-service-category"
// //                         >
// //                           {bannerSection.category.label}
// //                         </a>
// //                       </div>
// //                     )}
// //                     <h1 className="serv-details-title">
// //                       {bannerSection.title}
// //                     </h1>
// //                   </div>

// //                   <div
// //                     id="w-node-_8aa83b56-8f9c-90e0-4735-87b107292634-fbbea1dd"
// //                     data-w-id="8aa83b56-8f9c-90e0-4735-87b107292634"
// //                     className="service-banner-right"
// //                   >
// //                     <p className="service-banner-description">
// //                       {bannerSection.description}
// //                     </p>

// //                     {quickLinksSection.show && (
// //                       <div
// //                         data-w-id="c6c557a6-2726-d39d-283a-4b9b91705fe0"
// //                         className={
// //                           quickLinksSection.className ||
// //                           "quick-service-links-container"
// //                         }
// //                       >
// //                         {quickLinksSection.quickLinks
// //                           ?.filter((link: any) => link.show)
// //                           .map((link: any, i: number) => (
// //                             <div key={i} className="info-link-wrapper">
// //                               <a
// //                                 href={
// //                                   link.type === "phone"
// //                                     ? `tel:${link.value}`
// //                                     : link.type === "email"
// //                                     ? `mailto:${link.value}`
// //                                     : link.value
// //                                 }
// //                                 className="quick-intro-link w-inline-block"
// //                                 target={
// //                                   link.openInNewTab ? "_blank" : undefined
// //                                 }
// //                                 rel={
// //                                   link.openInNewTab
// //                                     ? "noopener noreferrer"
// //                                     : undefined
// //                                 }
// //                               >
// //                                 <div className="quick-links-item">
// //                                   <div className="quick-links-icon">
// //                                     <img
// //                                       loading="lazy"
// //                                       src={
// //                                         getImageUrl(link.icon) || link.iconUrl
// //                                       }
// //                                       alt={link.iconAlt || "Contact icon"}
// //                                       className="banner-icon"
// //                                     />
// //                                   </div>
// //                                   <div className="space-text-wrap">
// //                                     <div className="hover-clip-con">
// //                                       <div className="clip-title">
// //                                         <h6 className="quick-links-text">
// //                                           {link.label}
// //                                         </h6>
// //                                       </div>
// //                                       <div className="clip-title bottom">
// //                                         <h6 className="quick-links-text">
// //                                           {link.label}
// //                                         </h6>
// //                                       </div>
// //                                     </div>
// //                                   </div>
// //                                 </div>
// //                                 <div className="link-line-cover"></div>
// //                               </a>
// //                             </div>
// //                           ))}

// //                         {quickLinksSection.scrollButton?.show && (
// //                           <a
// //                             href={quickLinksSection.scrollButton.targetId}
// //                             className="scroll-below w-inline-block"
// //                           >
// //                             <div className="scroll-below-link">
// //                               <div className="hover-clip-icon">
// //                                 <div className="clip-link-icon top">
// //                                   <img
// //                                     loading="lazy"
// //                                     src={
// //                                       getImageUrl(
// //                                         quickLinksSection.scrollButton.icon
// //                                       ) ||
// //                                       quickLinksSection.scrollButton.iconUrl
// //                                     }
// //                                     alt={quickLinksSection.scrollButton.iconAlt}
// //                                     className="scroll-below-icon"
// //                                   />
// //                                 </div>
// //                                 <div className="clip-link-icon">
// //                                   <img
// //                                     loading="lazy"
// //                                     src={
// //                                       getImageUrl(
// //                                         quickLinksSection.scrollButton.icon
// //                                       ) ||
// //                                       quickLinksSection.scrollButton.iconUrl
// //                                     }
// //                                     alt={quickLinksSection.scrollButton.iconAlt}
// //                                     className="scroll-below-icon"
// //                                   />
// //                                 </div>
// //                               </div>
// //                             </div>
// //                           </a>
// //                         )}
// //                       </div>
// //                     )}
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="inner-clip-photo-banner">
// //                 <div
// //                   data-w-id="8aa83b56-8f9c-90e0-4735-87b10729263d"
// //                   style={{
// //                     backgroundImage: `url("${getBackgroundImage()}")`,
// //                     WebkitTransform:
// //                       "translate3d(0, 0, 0) scale3d(1.15, 1.15, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
// //                     transform:
// //                       "translate3d(0, 0, 0) scale3d(1.15, 1.15, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
// //                   }}
// //                   className="inner-photo-banner services-details-banner"
// //                 ></div>
// //                 <div className="about-us-overlay">
// //                   <div
// //                     className="red-grad-1"
// //                     style={{ opacity: bannerSection.overlayOpacity || 0.6 }}
// //                   ></div>
// //                 </div>
// //               </div>
// //             </div>
// //           ) : null;

// //         case "content":
// //           return contentSection.show ? (
// //             <div
// //               key="content"
// //               id={contentSection.id}
// //               className={contentSection.className}
// //             >
// //               <div className="soft-black-bg">
// //                 <div className="base-container">
// //                   <div className="services-template-wrap">
// //                     {contentSection.subtitle?.show && (
// //                       <div className="subtitle-wrap">
// //                         <h6
// //                           data-w-id="52984b45-d372-aec2-961d-412fbbd79e97"
// //                           className="black-subtitle"
// //                         >
// //                           {contentSection.subtitle.text}
// //                         </h6>
// //                       </div>
// //                     )}
// //                     <div
// //                       data-w-id="f94c7c90-b612-1679-ce04-1f042fbaeec3"
// //                       className="hero-rich-text-style w-richtext"
// //                       dangerouslySetInnerHTML={{
// //                         __html: contentSection.content || "",
// //                       }}
// //                     />
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           ) : null;

// //         case "gradient":
// //           return gradientSection.show ? (
// //             <div key="gradient" className={gradientSection.className}>
// //               {gradientSection.gradients?.map((grad: any, i: number) => (
// //                 <div
// //                   key={i}
// //                   data-w-id={`c210ae86-0c28-9feb-91e8-3084aa0f1c8${
// //                     i === 0 ? "c" : "d"
// //                   }`}
// //                   className={grad.className}
// //                 ></div>
// //               ))}
// //             </div>
// //           ) : null;

// //         default:
// //           return null;
// //       }
// //     });
// //   };

// //   return <>{renderSections()}</>;
// // }







// "use client";

// import { useState, useEffect } from "react";
// import {
//   fetchServiceDetailsBySlug,
//   getImageUrl,
// } from "@/lib/fetchServiceDetailsBySlug";

// interface ServiceDetailsProps {
//   params: { slug: string };
// }

// export default function ServiceDetails({ params }: ServiceDetailsProps) {
//   const [data, setData] = useState<any>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     console.log("=== COMPONENT DEBUG ===");
//     console.log("Full params object:", params);
//     console.log("Slug from params:", params?.slug);

//     // Safety check - if params or slug is missing
//     if (!params || !params.slug) {
//       console.error("Missing params or slug");
//       setError("Invalid URL - no slug provided");
//       setLoading(false);
//       return;
//     }

//     const slug = params.slug;
//     console.log("Attempting to fetch service with slug:", slug);

//     fetchServiceDetailsBySlug(slug)
//       .then((fetchedData) => {
//         console.log("Fetched data:", fetchedData);

//         if (fetchedData) {
//           console.log("Service data loaded successfully");
//           setData(fetchedData);
//           setError(null);
//         } else {
//           console.warn("No data returned for slug:", slug);
//           setError(`Service with slug "${slug}" not found`);
//         }
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching service:", err);
//         setError("Failed to load service data");
//         setLoading(false);
//       });
//   }, [params?.slug]);

//   if (loading) {
//     return (
//       <div className="base-container py-20 text-center">
//         <div className="animate-pulse">
//           <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
//           <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
//         </div>
//         <p className="mt-4 text-gray-600">Loading service details...</p>
//       </div>
//     );
//   }

//   if (error || !data) {
//     return (
//       <div className="base-container py-20 text-center">
//         <h1 className="text-4xl font-bold mb-4 text-red-600">
//           Service Not Found
//         </h1>
//         <p className="text-gray-600 mb-4">
//           {error || "The requested service could not be found."}
//         </p>
//         <p className="text-sm text-gray-500">
//           Requested slug:{" "}
//           <code className="bg-gray-100 px-2 py-1 rounded">{params?.slug}</code>
//         </p>
//         <p className="text-sm text-gray-500 mt-2">
//           Check the browser console for detailed debugging information.
//         </p>
//         <a
//           href="/services"
//           className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
//         >
//           Back to Services
//         </a>
//       </div>
//     );
//   }

//   const {
//     bannerSection = {},
//     quickLinksSection = {},
//     contentSection = {},
//     gradientSection = {},
//     sectionOrder = [],
//   } = data;

//   const getBackgroundImage = () => {
//     const bg = bannerSection.backgroundImage;
//     if (!bg) return bg?.defaultUrl || "";

//     const width = typeof window !== "undefined" ? window.innerWidth : 1920;
//     if (width <= 420 && bg.mobile?.url) return getImageUrl(bg.mobile);
//     if (width <= 800 && bg.tablet?.url) return getImageUrl(bg.tablet);
//     if (width <= 1400 && bg.desktop?.url) return getImageUrl(bg.desktop);
//     return (
//       getImageUrl(bg.large) || getImageUrl(bg.desktop) || bg.defaultUrl || ""
//     );
//   };

//   const renderSections = () => {
//     if (!sectionOrder || sectionOrder.length === 0) {
//       console.warn("No section order defined, rendering default sections");
//       // Fallback to default order if sectionOrder is not defined
//       return (
//         <>
//           {renderBanner()}
//           {renderContent()}
//           {renderGradient()}
//         </>
//       );
//     }

//     return sectionOrder.map((item: { section: string }, i: number) => {
//       switch (item.section) {
//         case "banner":
//           return renderBanner();
//         case "content":
//           return renderContent();
//         case "gradient":
//           return renderGradient();
//         default:
//           return null;
//       }
//     });
//   };

//   const renderBanner = () => {
//     if (!bannerSection.show) return null;

//     return (
//       <div
//         key="banner"
//         className={bannerSection.className || "services-details-banner"}
//       >
//         <div className="base-container">
//           <div className="services-banner-grid">
//             <div
//               id="w-node-_8aa83b56-8f9c-90e0-4735-87b10729262e-fbbea1dd"
//               data-w-id="8aa83b56-8f9c-90e0-4735-87b10729262e"
//               className="service-banner-left"
//             >
//               {bannerSection.category?.show && (
//                 <div className="link-services-wrap">
//                   <a
//                     href={`${bannerSection.category.baseUrl}/${bannerSection.category.slug}`}
//                     className="carsy-service-category"
//                   >
//                     {bannerSection.category.label}
//                   </a>
//                 </div>
//               )}
//               <h1 className="serv-details-title">{bannerSection.title}</h1>
//             </div>

//             <div
//               id="w-node-_8aa83b56-8f9c-90e0-4735-87b107292634-fbbea1dd"
//               data-w-id="8aa83b56-8f9c-90e0-4735-87b107292634"
//               className="service-banner-right"
//             >
//               <p className="service-banner-description">
//                 {bannerSection.description}
//               </p>

//               {quickLinksSection.show && (
//                 <div
//                   data-w-id="c6c557a6-2726-d39d-283a-4b9b91705fe0"
//                   className={
//                     quickLinksSection.className ||
//                     "quick-service-links-container"
//                   }
//                 >
//                   {quickLinksSection.quickLinks
//                     ?.filter((link: any) => link.show)
//                     .map((link: any, i: number) => (
//                       <div key={i} className="info-link-wrapper">
//                         <a
//                           href={
//                             link.type === "phone"
//                               ? `tel:${link.value}`
//                               : link.type === "email"
//                               ? `mailto:${link.value}`
//                               : link.value
//                           }
//                           className="quick-intro-link w-inline-block"
//                           target={link.openInNewTab ? "_blank" : undefined}
//                           rel={
//                             link.openInNewTab
//                               ? "noopener noreferrer"
//                               : undefined
//                           }
//                         >
//                           <div className="quick-links-item">
//                             <div className="quick-links-icon">
//                               <img
//                                 loading="lazy"
//                                 src={getImageUrl(link.icon) || link.iconUrl}
//                                 alt={link.iconAlt || "Contact icon"}
//                                 className="banner-icon"
//                               />
//                             </div>
//                             <div className="space-text-wrap">
//                               <div className="hover-clip-con">
//                                 <div className="clip-title">
//                                   <h6 className="quick-links-text">
//                                     {link.label}
//                                   </h6>
//                                 </div>
//                                 <div className="clip-title bottom">
//                                   <h6 className="quick-links-text">
//                                     {link.label}
//                                   </h6>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="link-line-cover"></div>
//                         </a>
//                       </div>
//                     ))}

//                   {quickLinksSection.scrollButton?.show && (
//                     <a
//                       href={quickLinksSection.scrollButton.targetId}
//                       className="scroll-below w-inline-block"
//                     >
//                       <div className="scroll-below-link">
//                         <div className="hover-clip-icon">
//                           <div className="clip-link-icon top">
//                             <img
//                               loading="lazy"
//                               src={
//                                 getImageUrl(
//                                   quickLinksSection.scrollButton.icon
//                                 ) || quickLinksSection.scrollButton.iconUrl
//                               }
//                               alt={quickLinksSection.scrollButton.iconAlt}
//                               className="scroll-below-icon"
//                             />
//                           </div>
//                           <div className="clip-link-icon">
//                             <img
//                               loading="lazy"
//                               src={
//                                 getImageUrl(
//                                   quickLinksSection.scrollButton.icon
//                                 ) || quickLinksSection.scrollButton.iconUrl
//                               }
//                               alt={quickLinksSection.scrollButton.iconAlt}
//                               className="scroll-below-icon"
//                             />
//                           </div>
//                         </div>
//                       </div>
//                     </a>
//                   )}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         <div className="inner-clip-photo-banner">
//           <div
//             data-w-id="8aa83b56-8f9c-90e0-4735-87b10729263d"
//             style={{
//               backgroundImage: `url("${getBackgroundImage()}")`,
//               WebkitTransform:
//                 "translate3d(0, 0, 0) scale3d(1.15, 1.15, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
//               transform:
//                 "translate3d(0, 0, 0) scale3d(1.15, 1.15, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
//             }}
//             className="inner-photo-banner services-details-banner"
//           ></div>
//           <div className="about-us-overlay">
//             <div
//               className="red-grad-1"
//               style={{ opacity: bannerSection.overlayOpacity || 0.6 }}
//             ></div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const renderContent = () => {
//     if (!contentSection.show) return null;

//     return (
//       <div
//         key="content"
//         id={contentSection.id}
//         className={contentSection.className}
//       >
//         <div className="soft-black-bg">
//           <div className="base-container">
//             <div className="services-template-wrap">
//               {contentSection.subtitle?.show && (
//                 <div className="subtitle-wrap">
//                   <h6
//                     data-w-id="52984b45-d372-aec2-961d-412fbbd79e97"
//                     className="black-subtitle"
//                   >
//                     {contentSection.subtitle.text}
//                   </h6>
//                 </div>
//               )}
//               <div
//                 data-w-id="f94c7c90-b612-1679-ce04-1f042fbaeec3"
//                 className="hero-rich-text-style w-richtext"
//                 dangerouslySetInnerHTML={{
//                   __html: contentSection.content || "",
//                 }}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const renderGradient = () => {
//     if (!gradientSection.show) return null;

//     return (
//       <div key="gradient" className={gradientSection.className}>
//         {gradientSection.gradients?.map((grad: any, i: number) => (
//           <div
//             key={i}
//             data-w-id={`c210ae86-0c28-9feb-91e8-3084aa0f1c8${
//               i === 0 ? "c" : "d"
//             }`}
//             className={grad.className}
//           ></div>
//         ))}
//       </div>
//     );
//   };

//   return <div className="service-details-page">{renderSections()}</div>;
// }







"use client";

import { useState, useEffect } from "react";
import {
  fetchServiceDetailsBySlug,
  getImageUrl,
} from "@/lib/fetchServiceDetailsBySlug";

interface ServiceDetailsProps {
  params: { slug: string } | Promise<{ slug: string }>;
}

export default function ServiceDetails({ params }: ServiceDetailsProps) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [slug, setSlug] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        // console.log("=== COMPONENT DEBUG ===");
        // console.log("Raw params:", params);
        // console.log("Is params a Promise?", params instanceof Promise);

        // Handle both Promise and direct object
        let resolvedParams: { slug: string };

        if (params instanceof Promise) {
          // console.log("Params is a Promise, awaiting...");
          resolvedParams = await params;
        } else {
          // console.log("Params is a direct object");
          resolvedParams = params;
        }

        // console.log("Resolved params:", resolvedParams);
        // console.log("Slug from params:", resolvedParams?.slug);

        if (!resolvedParams || !resolvedParams.slug) {
          console.error("Missing params or slug");
          setError("Invalid URL - no slug provided");
          setLoading(false);
          return;
        }

        const slugValue = resolvedParams.slug;
        setSlug(slugValue);
        // console.log("Attempting to fetch service with slug:", slugValue);

        const fetchedData = await fetchServiceDetailsBySlug(slugValue);
        // console.log("Fetched data:", fetchedData);

        if (fetchedData) {
          // console.log("Service data loaded successfully");
          setData(fetchedData);
          setError(null);
        } else {
          console.warn("No data returned for slug:", slugValue);
          setError(`Service with slug "${slugValue}" not found`);
        }
      } catch (err) {
        console.error("Error loading service:", err);
        setError("Failed to load service data");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [params]);

  if (loading) {
    return (
      <div className="base-container py-20 text-center">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
        </div>
        <p className="mt-4 text-gray-600">Loading service details...</p>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="base-container py-20 text-center">
        <h1 className="text-4xl font-bold mb-4 text-red-600">
          Service Not Found
        </h1>
        <p className="text-gray-600 mb-4">
          {error || "The requested service could not be found."}
        </p>
        <p className="text-sm text-gray-500">
          Requested slug:{" "}
          <code className="bg-gray-100 px-2 py-1 rounded">
            {slug || "unknown"}
          </code>
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Check the browser console for detailed debugging information.
        </p>
        <a
          href="/services"
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
        >
          Back to Services
        </a>
      </div>
    );
  }

  const {
    bannerSection = {},
    quickLinksSection = {},
    contentSection = {},
    gradientSection = {},
    sectionOrder = [],
  } = data;

  const getBackgroundImage = () => {
    const bg = bannerSection.backgroundImage;
    if (!bg) return bg?.defaultUrl || "";

    const width = typeof window !== "undefined" ? window.innerWidth : 1920;
    if (width <= 420 && bg.mobile?.url) return getImageUrl(bg.mobile);
    if (width <= 800 && bg.tablet?.url) return getImageUrl(bg.tablet);
    if (width <= 1400 && bg.desktop?.url) return getImageUrl(bg.desktop);
    return (
      getImageUrl(bg.large) || getImageUrl(bg.desktop) || bg.defaultUrl || ""
    );
  };

  const renderSections = () => {
    if (!sectionOrder || sectionOrder.length === 0) {
      console.warn("No section order defined, rendering default sections");
      return (
        <>
          {renderBanner()}
          {renderContent()}
          {renderGradient()}
        </>
      );
    }

    return sectionOrder.map((item: { section: string }, i: number) => {
      switch (item.section) {
        case "banner":
          return renderBanner();
        case "content":
          return renderContent();
        case "gradient":
          return renderGradient();
        default:
          return null;
      }
    });
  };

  const renderBanner = () => {
    if (!bannerSection.show) return null;

    return (
      <div
        key="banner"
        className={bannerSection.className || "services-details-banner"}
      >
        <div className="base-container">
          <div className="services-banner-grid">
            <div
              id="w-node-_8aa83b56-8f9c-90e0-4735-87b10729262e-fbbea1dd"
              data-w-id="8aa83b56-8f9c-90e0-4735-87b10729262e"
              className="service-banner-left"
            >
              {bannerSection.category?.show && (
                <div className="link-services-wrap">
                  <a
                    href={`${bannerSection.category.baseUrl}/${bannerSection.category.slug}`}
                    className="carsy-service-category"
                  >
                    {bannerSection.category.label}
                  </a>
                </div>
              )}
              <h1 className="serv-details-title">{bannerSection.title}</h1>
            </div>

            <div
              id="w-node-_8aa83b56-8f9c-90e0-4735-87b107292634-fbbea1dd"
              data-w-id="8aa83b56-8f9c-90e0-4735-87b107292634"
              className="service-banner-right"
            >
              <p className="service-banner-description">
                {bannerSection.description}
              </p>

              {quickLinksSection.show && (
                <div
                  data-w-id="c6c557a6-2726-d39d-283a-4b9b91705fe0"
                  className={
                    quickLinksSection.className ||
                    "quick-service-links-container"
                  }
                >
                  {quickLinksSection.quickLinks
                    ?.filter((link: any) => link.show)
                    .map((link: any, i: number) => (
                      <div key={i} className="info-link-wrapper">
                        <a
                          href={
                            link.type === "phone"
                              ? `tel:${link.value}`
                              : link.type === "email"
                              ? `mailto:${link.value}`
                              : link.value
                          }
                          className="quick-intro-link w-inline-block"
                          target={link.openInNewTab ? "_blank" : undefined}
                          rel={
                            link.openInNewTab
                              ? "noopener noreferrer"
                              : undefined
                          }
                        >
                          <div className="quick-links-item">
                            <div className="quick-links-icon">
                              <img
                                loading="lazy"
                                src={getImageUrl(link.icon) || link.iconUrl}
                                alt={link.iconAlt || "Contact icon"}
                                className="banner-icon"
                              />
                            </div>
                            <div className="space-text-wrap">
                              <div className="hover-clip-con">
                                <div className="clip-title">
                                  <h6 className="quick-links-text">
                                    {link.label}
                                  </h6>
                                </div>
                                <div className="clip-title bottom">
                                  <h6 className="quick-links-text">
                                    {link.label}
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="link-line-cover"></div>
                        </a>
                      </div>
                    ))}

                  {quickLinksSection.scrollButton?.show && (
                    <a
                      href={quickLinksSection.scrollButton.targetId}
                      className="scroll-below w-inline-block"
                    >
                      <div className="scroll-below-link">
                        <div className="hover-clip-icon">
                          <div className="clip-link-icon top">
                            <img
                              loading="lazy"
                              src={
                                getImageUrl(
                                  quickLinksSection.scrollButton.icon
                                ) || quickLinksSection.scrollButton.iconUrl
                              }
                              alt={quickLinksSection.scrollButton.iconAlt}
                              className="scroll-below-icon"
                            />
                          </div>
                          <div className="clip-link-icon">
                            <img
                              loading="lazy"
                              src={
                                getImageUrl(
                                  quickLinksSection.scrollButton.icon
                                ) || quickLinksSection.scrollButton.iconUrl
                              }
                              alt={quickLinksSection.scrollButton.iconAlt}
                              className="scroll-below-icon"
                            />
                          </div>
                        </div>
                      </div>
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="inner-clip-photo-banner">
          <div
            data-w-id="8aa83b56-8f9c-90e0-4735-87b10729263d"
            style={{
              backgroundImage: `url("${getBackgroundImage()}")`,
              WebkitTransform:
                "translate3d(0, 0, 0) scale3d(1.15, 1.15, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              transform:
                "translate3d(0, 0, 0) scale3d(1.15, 1.15, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            }}
            className="inner-photo-banner services-details-banner"
          ></div>
          <div className="about-us-overlay">
            <div
              className="red-grad-1"
              style={{ opacity: bannerSection.overlayOpacity || 0.6 }}
            ></div>
          </div>
        </div>
      </div>
    );
  };

  const renderContent = () => {
    if (!contentSection.show) return null;

    return (
      <div
        key="content"
        id={contentSection.id}
        className={contentSection.className}
      >
        <div className="soft-black-bg">
          <div className="base-container">
            <div className="services-template-wrap">
              {contentSection.subtitle?.show && (
                <div className="subtitle-wrap">
                  <h6
                    data-w-id="52984b45-d372-aec2-961d-412fbbd79e97"
                    className="black-subtitle"
                  >
                    {contentSection.subtitle.text}
                  </h6>
                </div>
              )}
              <div
                data-w-id="f94c7c90-b612-1679-ce04-1f042fbaeec3"
                className="hero-rich-text-style w-richtext"
                dangerouslySetInnerHTML={{
                  __html: contentSection.content || "",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderGradient = () => {
    if (!gradientSection.show) return null;

    return (
      <div key="gradient" className={gradientSection.className}>
        {gradientSection.gradients?.map((grad: any, i: number) => (
          <div
            key={i}
            data-w-id={`c210ae86-0c28-9feb-91e8-3084aa0f1c8${
              i === 0 ? "c" : "d"
            }`}
            className={grad.className}
          ></div>
        ))}
      </div>
    );
  };

  return <div className="service-details-page">{renderSections()}</div>;
}