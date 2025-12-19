// // interface GalleryItem {
// //   _id: string;
// //   origFileName: string;
// //   fileName: string;
// //   fileSize: number;
// //   height: number;
// //   url: string;
// //   width: number;
// //   type: string;
// // }

// // interface GalleryData {
// //   items: GalleryItem[];
// //   group: string;
// // }

// // const GalleryPage = () => {
// //   const galleryItems: Array<{
// //     id: string;
// //     coverClass: string;
// //     data: GalleryData;
// //   }> = [
// //     {
// //       id: "w-node-_190c8118-6cd4-c034-a538-bdd4d9edebd2-fbbea224",
// //       coverClass: "image-cover",
// //       data: {
// //         items: [
// //           {
// //             _id: "66a9fb4f7a31ba43fdc56e88",
// //             origFileName: "Small Blog-3.jpg",
// //             fileName: "Small Blog-3.jpg",
// //             fileSize: 144921,
// //             height: 1100,
// //             url: "https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/66a9fb4f7a31ba43fdc56e88_Small%20Blog-3.jpg",
// //             width: 1000,
// //             type: "image",
// //           },
// //         ],
// //         group: "Carsy Gall",
// //       },
// //     },
// //     {
// //       id: "w-node-fd7f3597-086f-b2a4-002a-8b280d973d0b-fbbea224",
// //       coverClass: "image-cover image-cover-02",
// //       data: {
// //         items: [
// //           {
// //             _id: "66a21baca3cdc02bccd9d729",
// //             origFileName: "Small Blog-2.jpg",
// //             fileName: "Small Blog-2.jpg",
// //             fileSize: 130680,
// //             height: 1100,
// //             url: "https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/66a21baca3cdc02bccd9d729_Small%20Blog-2.jpg",
// //             width: 1000,
// //             type: "image",
// //           },
// //         ],
// //         group: "Carsy Gall",
// //       },
// //     },
// //     {
// //       id: "w-node-e30dc5ed-fa6a-038f-a392-fcdad0eb750a-fbbea224",
// //       coverClass: "image-cover image-cover-03",
// //       data: {
// //         items: [
// //           {
// //             _id: "66a21bb119a122338eb29c2f",
// //             origFileName: "Small Blog-5.jpg",
// //             fileName: "Small Blog-5.jpg",
// //             fileSize: 95177,
// //             height: 1100,
// //             url: "https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/66a21bb119a122338eb29c2f_Small%20Blog-5.jpg",
// //             width: 1000,
// //             type: "image",
// //           },
// //         ],
// //         group: "Carsy Gall",
// //       },
// //     },
// //     {
// //       id: "w-node-cd47f80c-14c9-b1d0-df67-7b811c328b63-fbbea224",
// //       coverClass: "image-cover image-cover-04",
// //       data: {
// //         items: [
// //           {
// //             _id: "66a259c9af2b9b493b20814d",
// //             origFileName: "Insta 1.jpg",
// //             fileName: "Insta 1.jpg",
// //             fileSize: 106796,
// //             height: 900,
// //             url: "https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/66a259c9af2b9b493b20814d_Insta%201.jpg",
// //             width: 900,
// //             type: "image",
// //           },
// //         ],
// //         group: "Carsy Gall",
// //       },
// //     },
// //     {
// //       id: "w-node-_3e387766-82f0-ab20-f1e0-277b16f86f75-fbbea224",
// //       coverClass: "image-cover image-cover-05",
// //       data: {
// //         items: [
// //           {
// //             _id: "669f8869064dfb07735699e3",
// //             origFileName: "Small Img-5.jpg",
// //             fileName: "Small Img-5.jpg",
// //             fileSize: 105764,
// //             height: 1200,
// //             url: "https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/669f8869064dfb07735699e3_Small%20Img-5.jpg",
// //             width: 900,
// //             type: "image",
// //           },
// //         ],
// //         group: "Carsy Gall",
// //       },
// //     },
// //     {
// //       id: "w-node-deafd5a5-24a0-5b2a-1a0f-3eae423eff83-fbbea224",
// //       coverClass: "image-cover image-cover-10",
// //       data: {
// //         items: [
// //           {
// //             _id: "66a9fb4f0fb5e35b732f65dc",
// //             origFileName: "Small Blog-4.jpg",
// //             fileName: "Small Blog-4.jpg",
// //             fileSize: 60860,
// //             height: 1100,
// //             url: "https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/66a9fb4f0fb5e35b732f65dc_Small%20Blog-4.jpg",
// //             width: 1000,
// //             type: "image",
// //           },
// //         ],
// //         group: "Carsy Gall",
// //       },
// //     },
// //     {
// //       id: "w-node-_16684519-95e3-96ad-c0f5-b964d8354c9b-fbbea224",
// //       coverClass: "image-cover image-cover-06",
// //       data: {
// //         items: [
// //           {
// //             _id: "66a9fb531695499d777d1db0",
// //             origFileName: "Small Img-2.jpg",
// //             fileName: "Small Img-2.jpg",
// //             fileSize: 133524,
// //             height: 1100,
// //             url: "https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/66a9fb531695499d777d1db0_Small%20Img-2.jpg",
// //             width: 1000,
// //             type: "image",
// //           },
// //         ],
// //         group: "Carsy Gall",
// //       },
// //     },
// //     {
// //       id: "w-node-_1eb88278-38d2-8bef-b9ee-bae956932474-fbbea224",
// //       coverClass: "image-cover image-cover-07",
// //       data: {
// //         items: [
// //           {
// //             _id: "669f88622f9e274e070b050e",
// //             origFileName: "Small Img-1.jpg",
// //             fileName: "Small Img-1.jpg",
// //             fileSize: 48284,
// //             height: 1200,
// //             url: "https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/669f88622f9e274e070b050e_Small%20Img-1.jpg",
// //             width: 900,
// //             type: "image",
// //           },
// //         ],
// //         group: "Carsy Gall",
// //       },
// //     },
// //     {
// //       id: "w-node-e650abd1-bd7c-10db-e883-d928238147b8-fbbea224",
// //       coverClass: "image-cover image-cover-08",
// //       data: {
// //         items: [
// //           {
// //             _id: "66a259cbded55ab00cc5a1db",
// //             origFileName: "Insta 3.jpg",
// //             fileName: "Insta 3.jpg",
// //             fileSize: 91435,
// //             height: 900,
// //             url: "https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/66a259cbded55ab00cc5a1db_Insta%203.jpg",
// //             width: 900,
// //             type: "image",
// //           },
// //         ],
// //         group: "Carsy Gall",
// //       },
// //     },
// //     {
// //       id: "w-node-_4ab7d2c8-9d26-b04c-0ceb-91382bd3ef28-fbbea224",
// //       coverClass: "image-cover image-cover-09",
// //       data: {
// //         items: [
// //           {
// //             _id: "66a9df47fe67f96ccc725ded",
// //             origFileName: "Team 1.jpg",
// //             fileName: "Team 1.jpg",
// //             fileSize: 84904,
// //             height: 1000,
// //             url: "https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/66a9df47fe67f96ccc725ded_Team%201.jpg",
// //             width: 900,
// //             type: "image",
// //           },
// //         ],
// //         group: "Carsy Gall",
// //       },
// //     },
// //   ];

// //   return (
// //     <div className="relative-page-wrapper">
// //       <div className="inner-banner">
// //         <div className="base-container">
// //           <div
// //             data-w-id="6d36c7d5-e819-f15a-600c-248180f6e8d4"
            
// //             className="inner-title-wrap"
// //           >
// //             <h1 className="inner-banner-title">Our Gallery</h1>
// //           </div>
// //         </div>
// //         <div className="inner-clip-photo-banner">
// //           <div
// //             data-w-id="6d36c7d5-e819-f15a-600c-248180f6e8d8"
// //             style={{
// //               WebkitTransform:
// //                 "translate3d(0, 0, 0) scale3d(1.15, 1.15, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
// //               MozTransform:
// //                 "translate3d(0, 0, 0) scale3d(1.15, 1.15, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
// //               msTransform:
// //                 "translate3d(0, 0, 0) scale3d(1.15, 1.15, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
// //               transform:
// //                 "translate3d(0, 0, 0) scale3d(1.15, 1.15, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
// //             }}
// //             className="inner-photo-banner our-gallery-banner"
// //           ></div>
// //           <div className="inner-banner-overlay our-clients-overlay">
// //             <div className="red-inner-grad-1"></div>
// //           </div>
// //         </div>
// //       </div>
// //       <div className="section-gray">
// //         <div className="soft-black-bg">
// //           <div className="base-container">
// //             <div className="our-gallery-grid">
// //               {galleryItems.map((item) => (
// //                 <a
// //                   key={item.id}
// //                   href="#"
// //                   id={item.id}
// //                   className="instagram-link w-inline-block w-lightbox"
// //                 >
// //                   <div className="hover-circle-wrapper">
// //                     <div className="hover-circle">
// //                       <div className="outline-hover-circle-2">
// //                         <div className="insragram-icon-2"></div>
// //                       </div>
// //                     </div>
// //                   </div>
// //                   <div className="lightbox-photo">
// //                     <div className={item.coverClass}>
// //                       <div className="gall-overlay"></div>
// //                     </div>
// //                   </div>
// //                   <script
// //                     type="application/json"
// //                     className="w-json"
// //                     dangerouslySetInnerHTML={{
// //                       __html: JSON.stringify(item.data),
// //                     }}
// //                   />
// //                 </a>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default GalleryPage;






// // "use client";

// // import { useState, useEffect } from "react";
// // import { fetchGalleryPageComponentData, getImageUrl } from "@/lib/fetchGalleryPageComponentData";

// // export default function GalleryPage() {
// //   const [data, setData] = useState<any>(null);

// //   useEffect(() => {
// //     fetchGalleryPageComponentData().then((fetchedData) => {
// //       setData(fetchedData);

// //       // Re-initialize Webflow lightbox & interactions
// //       if (
// //         fetchedData &&
// //         typeof window !== "undefined" &&
// //         (window as any).Webflow
// //       ) {
// //         setTimeout(() => {
// //           (window as any).Webflow.destroy();
// //           (window as any).Webflow.ready();
// //           (window as any).Webflow.require("lightbox")?.init();
// //           (window as any).Webflow.require("ix2")?.init();
// //         }, 100);
// //       }
// //     });
// //   }, []);

// //   if (!data) {
// //     return null;
// //   }

// //   const {
// //     innerBannerSection = {},
// //     galleryGridSection = {},
// //     galleryItems = [],
// //   } = data;

// //   return (
// //     <div className="relative-page-wrapper">
// //       {/* Inner Banner */}
// //       {innerBannerSection.show && (
// //         <div className={innerBannerSection.className || "inner-banner"}>
// //           <div
// //             className={
// //               innerBannerSection.containerClassName || "base-container"
// //             }
// //           >
// //             <div
// //               data-w-id={
// //                 innerBannerSection.animationId ||
// //                 "6d36c7d5-e819-f15a-600c-248180f6e8d4"
// //               }
// //               className={
// //                 innerBannerSection.titleWrapperClassName || "inner-title-wrap"
// //               }
// //             >
// //               <h1
// //                 className={
// //                   innerBannerSection.titleClassName || "inner-banner-title"
// //                 }
// //               >
// //                 {innerBannerSection.title}
// //               </h1>
// //             </div>
// //           </div>

// //           <div
// //             className={
// //               innerBannerSection.clipPhotoClassName || "inner-clip-photo-banner"
// //             }
// //           >
// //             <div
// //               data-w-id="6d36c7d5-e819-f15a-600c-248180f6e8d8"
// //               style={{
// //                 WebkitTransform: `translate3d(0, 0, 0) scale3d(${
// //                   innerBannerSection.bannerImage?.initialScale || "1.15"
// //                 }, ${
// //                   innerBannerSection.bannerImage?.initialScale || "1.15"
// //                 }, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)`,
// //                 transform: `translate3d(0, 0, 0) scale3d(${
// //                   innerBannerSection.bannerImage?.initialScale || "1.15"
// //                 }, ${
// //                   innerBannerSection.bannerImage?.initialScale || "1.15"
// //                 }, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)`,
// //               }}
// //               className={
// //                 innerBannerSection.bannerImage?.className ||
// //                 "inner-photo-banner our-gallery-banner"
// //               }
// //               style={{
// //                 backgroundImage: `url("${
// //                   getImageUrl(innerBannerSection.bannerImage?.desktop) ||
// //                   innerBannerSection.bannerImage?.mobile?.url ||
// //                   ""
// //                 }")`,
// //                 backgroundSize: "cover",
// //                 backgroundPosition: "center",
// //               }}
// //             ></div>

// //             {innerBannerSection.overlay?.show && (
// //               <div
// //                 className={
// //                   innerBannerSection.overlay.className ||
// //                   "inner-banner-overlay our-clients-overlay"
// //                 }
// //               >
// //                 {innerBannerSection.overlay.showGradient && (
// //                   <div
// //                     className={
// //                       innerBannerSection.overlay.gradientClassName ||
// //                       "red-inner-grad-1"
// //                     }
// //                   ></div>
// //                 )}
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       )}

// //       {/* Gallery Grid */}
// //       {galleryGridSection.show && (
// //         <div className={galleryGridSection.className || "section-gray"}>
// //           <div
// //             className={
// //               galleryGridSection.innerBackgroundClassName || "soft-black-bg"
// //             }
// //           >
// //             <div
// //               className={
// //                 galleryGridSection.containerClassName || "base-container"
// //               }
// //             >
// //               <div
// //                 className={
// //                   galleryGridSection.gridClassName || "our-gallery-grid"
// //                 }
// //               >
// //                 {galleryItems.map((item: any) => (
// //                   <a
// //                     key={item.id}
// //                     href="#"
// //                     id={item.nodeId}
// //                     className={
// //                       item.className ||
// //                       "instagram-link w-inline-block w-lightbox"
// //                     }
// //                   >
// //                     {/* Hover Circle */}
// //                     {item.hoverCircle?.show && (
// //                       <div
// //                         className={
// //                           item.hoverCircle.wrapperClassName ||
// //                           "hover-circle-wrapper"
// //                         }
// //                       >
// //                         <div
// //                           className={
// //                             item.hoverCircle.circleClassName || "hover-circle"
// //                           }
// //                         >
// //                           <div
// //                             className={
// //                               item.hoverCircle.outlineClassName ||
// //                               "outline-hover-circle-2"
// //                             }
// //                           >
// //                             <div
// //                               className={
// //                                 item.hoverCircle.iconClassName ||
// //                                 "insragram-icon-2"
// //                               }
// //                             ></div>
// //                           </div>
// //                         </div>
// //                       </div>
// //                     )}

// //                     {/* Image + Overlay */}
// //                     <div className={item.lightboxClassName || "lightbox-photo"}>
// //                       <div className={item.coverClassName || "image-cover"}>
// //                         {item.overlay?.show && (
// //                           <div
// //                             className={item.overlay.className || "gall-overlay"}
// //                           ></div>
// //                         )}
// //                       </div>
// //                     </div>

// //                     {/* Lightbox JSON */}
// //                     <script
// //                       type="application/json"
// //                       className="w-json"
// //                       dangerouslySetInnerHTML={{
// //                         __html: JSON.stringify({
// //                           items: item.image?.upload
// //                             ? [
// //                                 {
// //                                   url: getImageUrl(item.image.upload),
// //                                   type: "image",
// //                                   width: item.image.width,
// //                                   height: item.image.height,
// //                                   fileName: item.image.origFileName,
// //                                 },
// //                               ]
// //                             : item.image?.url
// //                             ? [
// //                                 {
// //                                   url: item.image.url,
// //                                   type: "image",
// //                                   width: item.image.width || 1000,
// //                                   height: item.image.height || 1000,
// //                                 },
// //                               ]
// //                             : [],
// //                           group: item.lightboxData?.group || "Carsy Gall",
// //                         }),
// //                       }}
// //                     />
// //                   </a>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // } 





// "use client";

// import { useState, useEffect } from "react";
// import { fetchGalleryPageComponentData, getImageUrl } from "@/lib/fetchGalleryPageComponentData";

// export default function GalleryPage() {
//   const [data, setData] = useState<any>(null);

//   useEffect(() => {
//     fetchGalleryPageComponentData().then((fetchedData) => {
//       setData(fetchedData);

//       if (
//         fetchedData &&
//         typeof window !== "undefined" &&
//         (window as any).Webflow
//       ) {
//         setTimeout(() => {
//           (window as any).Webflow.destroy();
//           (window as any).Webflow.ready();
//           (window as any).Webflow.require("lightbox")?.init();
//           (window as any).Webflow.require("ix2")?.init();
//         }, 100);
//       }
//     });
//   }, []);

//   if (!data) {
//     return null;
//   }

//   const {
//     innerBannerSection = {},
//     galleryGridSection = {},
//     galleryItems = [],
//   } = data;

//   const getBannerBackground = () => {
//     const img = innerBannerSection.bannerImage;
//     if (!img) return "";

//     const width = typeof window !== "undefined" ? window.innerWidth : 1920;
//     if (width <= 420 && img.mobile) return getImageUrl(img.mobile);
//     if (width <= 800 && img.tablet) return getImageUrl(img.tablet);
//     if (width <= 1400 && img.desktop) return getImageUrl(img.desktop);
//     return getImageUrl(img.large) || getImageUrl(img.desktop) || "";
//   };

//   return (
//     <div className="relative-page-wrapper">
//       {/* Inner Banner */}
//       {innerBannerSection.show && (
//         <div className={innerBannerSection.className}>
//           <div
//             className={
//               innerBannerSection.containerClassName || "base-container"
//             }
//           >
//             <div
//               data-w-id={innerBannerSection.animationId}
//               className={innerBannerSection.titleWrapperClassName}
//             >
//               <h1 className={innerBannerSection.titleClassName}>
//                 {innerBannerSection.title}
//               </h1>
//             </div>
//           </div>

//           <div className={innerBannerSection.clipPhotoClassName}>
//             <div
//               data-w-id="6d36c7d5-e819-f15a-600c-248180f6e8d8"
//               style={{
//                 backgroundImage: getBannerBackground()
//                   ? `url("${getBannerBackground()}")`
//                   : "none",
//                 WebkitTransform: `translate3d(0, 0, 0) scale3d(${
//                   innerBannerSection.bannerImage?.initialScale || 1.15
//                 }, ${
//                   innerBannerSection.bannerImage?.initialScale || 1.15
//                 }, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)`,
//                 transform: `translate3d(0, 0, 0) scale3d(${
//                   innerBannerSection.bannerImage?.initialScale || 1.15
//                 }, ${
//                   innerBannerSection.bannerImage?.initialScale || 1.15
//                 }, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)`,
//               }}
//               className={innerBannerSection.bannerImage?.className}
//             ></div>

//             {innerBannerSection.overlay?.show && (
//               <div className={innerBannerSection.overlay.className}>
//                 {innerBannerSection.overlay.showGradient && (
//                   <div
//                     className={innerBannerSection.overlay.gradientClassName}
//                   ></div>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       )}

//       {/* Gallery Grid - NOW USING <img> TAG FOR THUMBNAILS */}
//       {galleryGridSection.show && (
//         <div className={galleryGridSection.className}>
//           <div className={galleryGridSection.innerBackgroundClassName}>
//             <div
//               className={
//                 galleryGridSection.containerClassName || "base-container"
//               }
//             >
//               <div className={galleryGridSection.gridClassName}>
//                 {galleryItems.map((item: any) => {
//                   const imageUrl =
//                     getImageUrl(item.image?.upload) || item.image?.url || "";
//                   const hasImage = !!imageUrl;

//                   return (
//                     <a
//                       key={item.id}
//                       href="#"
//                       id={item.nodeId}
//                       className={item.className}
//                     >
//                       {/* Hover Circle */}
//                       {item.hoverCircle?.show && (
//                         <div className={item.hoverCircle.wrapperClassName}>
//                           <div className={item.hoverCircle.circleClassName}>
//                             <div className={item.hoverCircle.outlineClassName}>
//                               <div
//                                 className={item.hoverCircle.iconClassName}
//                               ></div>
//                             </div>
//                           </div>
//                         </div>
//                       )}

//                       {/* Thumbnail using real <img> tag */}
//                       <div className={item.lightboxClassName}>
//                         <div className={item.coverClassName}>
//                           {/* Overlay */}
//                           {item.overlay?.show && (
//                             <div className={item.overlay.className}></div>
//                           )}

//                           {/* Real image from Payload */}
//                           {hasImage && (
//                             <img
//                               src={imageUrl}
//                               alt={item.image?.alt || "Gallery image"}
//                               loading="lazy"
//                               className="gallery-thumbnail-img"
//                             />
//                           )}
//                         </div>
//                       </div>

//                       {/* Lightbox JSON */}
//                       <script
//                         type="application/json"
//                         className="w-json"
//                         dangerouslySetInnerHTML={{
//                           __html: JSON.stringify({
//                             items: hasImage
//                               ? [
//                                   {
//                                     url: imageUrl,
//                                     type: "image",
//                                     width: item.image?.width || 1000,
//                                     height: item.image?.height || 1000,
//                                   },
//                                 ]
//                               : [],
//                             group: item.lightboxData?.group || "Carsy Gall",
//                           }),
//                         }}
//                       />
//                     </a>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }



"use client";

import { useState, useEffect } from "react";
import {
  fetchGalleryPageComponentData,
  getImageUrl,
} from "@/lib/fetchGalleryPageComponentData";

export default function GalleryPage() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetchGalleryPageComponentData().then((fetchedData) => {
      setData(fetchedData);

      if (
        fetchedData &&
        typeof window !== "undefined" &&
        (window as any).Webflow
      ) {
        setTimeout(() => {
          (window as any).Webflow.destroy();
          (window as any).Webflow.ready();
          (window as any).Webflow.require("lightbox")?.init();
          (window as any).Webflow.require("ix2")?.init();
        }, 100);
      }
    });
  }, []);

  if (!data) {
    return null;
  }

  const {
    innerBannerSection = {},
    galleryGridSection = {},
    galleryItems = [],
  } = data;

  const getBannerBackground = () => {
    const img = innerBannerSection.bannerImage;
    if (!img) return "";

    const width = typeof window !== "undefined" ? window.innerWidth : 1920;
    if (width <= 420 && img.mobile) return getImageUrl(img.mobile);
    if (width <= 800 && img.tablet) return getImageUrl(img.tablet);
    if (width <= 1400 && img.desktop) return getImageUrl(img.desktop);
    return getImageUrl(img.large) || getImageUrl(img.desktop) || "";
  };

  return (
    <div className="relative-page-wrapper">
      <div className="inner-banner">
        <div className="base-container">
          <div
            data-w-id="6d36c7d5-e819-f15a-600c-248180f6e8d4"
            className="inner-title-wrap"
          >
            <h1 className="inner-banner-title">
              {innerBannerSection.title || "Our Gallery"}
            </h1>
          </div>
        </div>
        <div className="inner-clip-photo-banner">
          <div
            data-w-id="6d36c7d5-e819-f15a-600c-248180f6e8d8"
            style={{
              backgroundImage: getBannerBackground()
                ? `url("${getBannerBackground()}")`
                : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              WebkitTransform: `translate3d(0, 0, 0) scale3d(${
                innerBannerSection.bannerImage?.initialScale || 1.15
              }, ${
                innerBannerSection.bannerImage?.initialScale || 1.15
              }, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)`,
              MozTransform: `translate3d(0, 0, 0) scale3d(${
                innerBannerSection.bannerImage?.initialScale || 1.15
              }, ${
                innerBannerSection.bannerImage?.initialScale || 1.15
              }, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)`,
              msTransform: `translate3d(0, 0, 0) scale3d(${
                innerBannerSection.bannerImage?.initialScale || 1.15
              }, ${
                innerBannerSection.bannerImage?.initialScale || 1.15
              }, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)`,
              transform: `translate3d(0, 0, 0) scale3d(${
                innerBannerSection.bannerImage?.initialScale || 1.15
              }, ${
                innerBannerSection.bannerImage?.initialScale || 1.15
              }, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)`,
            }}
            className="inner-photo-banner our-gallery-banner"
          ></div>
          <div className="inner-banner-overlay our-clients-overlay">
            {innerBannerSection.overlay?.showGradient ? (
              <div
                className={
                  innerBannerSection.overlay.gradientClassName ||
                  "red-inner-grad-1"
                }
              ></div>
            ) : (
              <div className="red-inner-grad-1"></div>
            )}
          </div>
        </div>
      </div>
      <div className="section-gray">
        <div className="soft-black-bg">
          <div className="base-container">
            <div className="our-gallery-grid">
              {galleryItems.map((item: any) => {
                const imageUrl =
                  getImageUrl(item.image?.upload) || item.image?.url || "";
                const hasImage = !!imageUrl;
                const width = item.image?.width || 1000;
                const height = item.image?.height || 1000;

                return (
                  <a
                    key={item.id}
                    href="#"
                    id={item.nodeId}
                    className="instagram-link w-inline-block w-lightbox"
                  >
                    {item.hoverCircle?.show && (
                      <div className="hover-circle-wrapper">
                        <div className="hover-circle">
                          <div className="outline-hover-circle-2">
                            <div className="insragram-icon-2"></div>
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="lightbox-photo">
                      <div
                        className={item.coverClassName || "image-cover"}
                        style={{
                          backgroundImage: hasImage
                            ? `url(${imageUrl})`
                            : "none",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                        }}
                      >
                        {item.overlay?.show && (
                          <div className="gall-overlay"></div>
                        )}
                      </div>
                    </div>
                    <script
                      type="application/json"
                      className="w-json"
                      dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                          items: hasImage
                            ? [
                                {
                                  url: imageUrl,
                                  type: "image",
                                  width,
                                  height,
                                },
                              ]
                            : [],
                          group: item.lightboxData?.group || "Carsy Gall",
                        }),
                      }}
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}