// interface NewsItem {
//   id: string;
//   day: string;
//   date: string;
//   category: string;
//   categoryLink: string;
//   title: string;
//   description: string;
//   link: string;
//   backgroundImage: string;
// }

// const News = () => {
//   const newsItems: NewsItem[] = [
//     {
//       id: "news-1",
//       day: "Sun",
//       date: "14",
//       category: "Guides",
//       categoryLink: "/posts-categories/guides",
//       title: "Benefits of Regular Oil Changes: Why It's Essential",
//       description:
//         "Stay informed about new car releases! Trust Carsy for all your automotive news needs.",
//       link: "/blog-posts/benefits-of-regular-oil-changes-why-its-essential",
//       backgroundImage:
//         "https://cdn.prod.website-files.com/669e1212d181ce4bfbbea18b/66a0eb12acfdc13c06e12f85_Blog-1.jpg",
//     },
//     {
//       id: "news-2",
//       day: "Fri",
//       date: "19",
//       category: "Lifespan",
//       categoryLink: "/posts-categories/lifespan",
//       title: "DIY Car Care: Simple Fixes You Can Do at Home",
//       description:
//         "Stay informed about new car releases! Trust Carsy for all your automotive news needs.",
//       link: "/blog-posts/diy-car-care-simple-fixes-you-can-do-at-home",
//       backgroundImage:
//         "https://cdn.prod.website-files.com/669e1212d181ce4bfbbea18b/66a0eb3f3483d57d66c6770a_Blog-2.jpg",
//     },
//     {
//       id: "news-3",
//       day: "Wed",
//       date: "03",
//       category: "ProTips",
//       categoryLink: "/posts-categories/protips",
//       title: "How to Extend the Life of Your Vehicle: Expert Advice",
//       description:
//         "Stay informed about new car releases! Trust Carsy for all your automotive news needs.",
//       link: "/blog-posts/how-to-extend-the-life-of-your-vehicle-expert-advice",
//       backgroundImage:
//         "https://cdn.prod.website-files.com/669e1212d181ce4bfbbea18b/66a0eb8b9756c881e1e59eb9_Blog-3.jpg",
//     },
//     {
//       id: "news-4",
//       day: "Sat",
//       date: "20",
//       category: "Guides",
//       categoryLink: "/posts-categories/guides",
//       title: "The Role of Regular Tire Rotations in Car Safety",
//       description:
//         "Stay informed about new car releases! Trust Carsy for all your automotive news needs.",
//       link: "/blog-posts/the-role-of-regular-tire-rotations-in-car-safety",
//       backgroundImage:
//         "https://cdn.prod.website-files.com/669e1212d181ce4bfbbea18b/66a0eb9b92992feef95dab7b_Blog-4.jpg",
//     },
//     {
//       id: "news-5",
//       day: "Sun",
//       date: "28",
//       category: "Lifespan",
//       categoryLink: "/posts-categories/lifespan",
//       title: "Brake Repair 101: Signs Your Brakes Need Attention",
//       description:
//         "Stay informed about new car releases! Trust Carsy for all your automotive news needs.",
//       link: "/blog-posts/brake-repair-101-signs-your-brakes-need-attention",
//       backgroundImage:
//         "https://cdn.prod.website-files.com/669e1212d181ce4bfbbea18b/66a0ebc753245549cc4b843a_Blog-5.jpg",
//     },
//     {
//       id: "news-6",
//       day: "Sat",
//       date: "27",
//       category: "ProTips",
//       categoryLink: "/posts-categories/protips",
//       title: "How to Choose the Right Tires for Your Vehicle",
//       description:
//         "Stay informed about new car releases! Trust Carsy for all your automotive news needs.",
//       link: "/blog-posts/how-to-choose-the-right-tires-for-your-vehicle",
//       backgroundImage:
//         "https://cdn.prod.website-files.com/669e1212d181ce4bfbbea18b/66a0ebe73a70da4c94996d3e_Blog-6.jpg",
//     },
//   ];

//   return (
//     <div className="relative-page-wrapper">
//       <div className="inner-small-banner">
//         <div className="base-container">
//           <div
//             data-w-id="b64457ba-bf40-2ef5-bc50-4bcb3313eb6e"
            
//             className="inner-title-wrap"
//           >
//             <h1 className="inner-banner-title">Auto News</h1>
//           </div>
//         </div>
//         <div className="inner-clip-photo-banner">
//           <div
//             data-w-id="b64457ba-bf40-2ef5-bc50-4bcb3313eb72"
//             style={{
//               WebkitTransform:
//                 "translate3d(0, 0, 0) scale3d(1.15, 1.15, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
//               MozTransform:
//                 "translate3d(0, 0, 0) scale3d(1.15, 1.15, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
//               msTransform:
//                 "translate3d(0, 0, 0) scale3d(1.15, 1.15, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
//               transform:
//                 "translate3d(0, 0, 0) scale3d(1.15, 1.15, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
//             }}
//             className="inner-photo-banner news-banner"
//           ></div>
//           <div className="inner-banner-overlay with-bottom-light-gradient">
//             <div className="red-inner-grad-1"></div>
//           </div>
//         </div>
//       </div>
//       <div className="section-news">
//         <div className="base-container">
//           <div className="blog-grid-wrapper">
//             <div className="news-grid-collection w-dyn-list">
//               <div
//                 role="list"
//                 className="news-grid-collection-list w-dyn-items"
//               >
//                 {newsItems.map((item) => (
//                   <div
//                     key={item.id}
//                     role="listitem"
//                     className="news-grid-item w-dyn-item"
//                   >
//                     <div
//                       data-w-id="f7db5f61-50d5-e849-4bde-b284e74632ec"
                      
//                       className="news-item"
//                     >
//                       <div className="news-cover-publication-2">
//                         <div className="publication-day">{item.day}</div>
//                         <div className="publication-date">{item.date}</div>
//                       </div>
//                       <div className="news-card-top-2">
//                         <div
//                           id="w-node-f7db5f61-50d5-e849-4bde-b284e74632f3-fbbea1bb"
//                           className="top-news-wrap"
//                         >
//                           <div
//                             id="w-node-f7db5f61-50d5-e849-4bde-b284e74632f4-fbbea1bb"
//                             className="link-wrap"
//                           >
//                             <a
//                               href={item.categoryLink}
//                               className="carsy-blog-category"
//                             >
//                               {item.category}
//                             </a>
//                           </div>
//                         </div>
//                       </div>
//                       <div
//                         id="w-node-f7db5f61-50d5-e849-4bde-b284e74632f7-fbbea1bb"
//                         data-w-id="f7db5f61-50d5-e849-4bde-b284e74632f7"
//                         className="blog-photo-content"
//                       >
//                         <a
//                           data-w-id="f7db5f61-50d5-e849-4bde-b284e74632f8"
//                           href={item.link}
//                           className="bg-blog-link-2 w-inline-block"
//                         >
//                           <p className="par-hidden">H</p>
//                           <div className="news-overlay"></div>
//                         </a>
//                         <div className="background-wrapper-4 big-size">
//                           <div
//                             data-w-id="f7db5f61-50d5-e849-4bde-b284e7463302"
//                             style={{
//                               backgroundImage: `url("${item.backgroundImage}")`,
//                             }}
//                             className="background-portfolio-3"
//                           >
//                             <div
//                               data-w-id="f7db5f61-50d5-e849-4bde-b284e7463303"
//                               className="overlay-portfolio-3"
//                             ></div>
//                           </div>
//                         </div>
//                       </div>
//                       <a
//                         href={item.link}
//                         className="project-3-card-bottom w-inline-block"
//                       >
//                         <div className="news-content">
//                           <div className="blog-flex-wrapper-2">
//                             <h6 className="project-title">{item.title}</h6>
//                           </div>
//                           <p className="news-description-2">
//                             {item.description}
//                           </p>
//                         </div>
//                         <p className="par-hidden">h</p>
//                       </a>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <div
//                 role="navigation"
//                 aria-label="List"
//                 className="w-pagination-wrapper"
//               ></div>
//             </div>
//           </div>
//         </div>
//         <div className="gradient-wrapper grad-wrapper-3">
//           <div
//             data-w-id="b64457ba-bf40-2ef5-bc50-4bcb3313ec5b"
            
//             className="red-grad-9"
//           ></div>
//           <div
//             data-w-id="b64457ba-bf40-2ef5-bc50-4bcb3313ec5c"
            
//             className="red-grad-7"
//           ></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default News;







"use client";

import { useState, useEffect } from "react";
import { fetchAllBlogPosts, getImageUrl } from "@/lib/fetchBlogPosts";

interface BlogPost {
  id: string;
  slug: string;
  heroSection?: {
    title?: string;
    categoryTag?: {
      label?: string;
      url?: string;
    };
    dateDisplay?: {
      date?: string;
    };
    introText?: string;
  };
  backgroundImageSection?: {
    backgroundImage?: {
      imageUrl?: string;
      desktop?: any;
      tablet?: any;
      mobile?: any;
    };
  };
  createdAt?: string;
  updatedAt?: string;
}

export default function BlogListing() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllBlogPosts().then((posts) => {
      setBlogPosts(posts);
      setLoading(false);
    });
  }, []);

  const getBackgroundImage = (post: BlogPost) => {
    const bg = post.backgroundImageSection?.backgroundImage;
    if (!bg) return bg?.imageUrl || "";

    return (
      getImageUrl(bg.desktop) ||
      getImageUrl(bg.tablet) ||
      getImageUrl(bg.mobile) ||
      bg.imageUrl ||
      ""
    );
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return {
      day: date.toLocaleDateString("en-US", { weekday: "short" }),
      date: date.getDate().toString(),
      full: date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    };
  };

  if (loading) {
    return (
      <div className="relative-page-wrapper">
        <div className="inner-small-banner">
          <div className="base-container">
            <div className="inner-title-wrap">
              <h1 className="inner-banner-title">Auto News</h1>
            </div>
          </div>
          <div className="inner-clip-photo-banner">
            <div className="inner-photo-banner news-banner"></div>
            <div className="inner-banner-overlay with-bottom-light-gradient">
              <div className="red-inner-grad-1"></div>
            </div>
          </div>
        </div>
        <div className="section-news">
          <div className="base-container">
            <div className="text-center py-20">Loading blog posts...</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative-page-wrapper">
      <div className="inner-small-banner">
        <div className="base-container">
          <div
            data-w-id="b64457ba-bf40-2ef5-bc50-4bcb3313eb6e"
            className="inner-title-wrap"
          >
            <h1 className="inner-banner-title">Auto News</h1>
          </div>
        </div>
        <div className="inner-clip-photo-banner">
          <div
            data-w-id="b64457ba-bf40-2ef5-bc50-4bcb3313eb72"
            style={{
              WebkitTransform:
                "translate3d(0, 0, 0) scale3d(1.15, 1.15, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              transform:
                "translate3d(0, 0, 0) scale3d(1.15, 1.15, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            }}
            className="inner-photo-banner news-banner"
          ></div>
          <div className="inner-banner-overlay with-bottom-light-gradient">
            <div className="red-inner-grad-1"></div>
          </div>
        </div>
      </div>

      <div className="section-news">
        <div className="base-container">
          <div className="blog-grid-wrapper">
            <div className="news-grid-collection w-dyn-list">
              <div
                role="list"
                className="news-grid-collection-list w-dyn-items"
              >
                {blogPosts.length === 0 ? (
                  <div className="text-center py-20">
                    <p>No blog posts found.</p>
                  </div>
                ) : (
                  blogPosts.map((post) => {
                    const dateInfo = formatDate(
                      post.heroSection?.dateDisplay?.date || post.createdAt
                    );
                    const category = post.heroSection?.categoryTag;
                    const backgroundImage = getBackgroundImage(post);

                    return (
                      <div
                        key={post.id}
                        role="listitem"
                        className="news-grid-item w-dyn-item"
                      >
                        <div
                          data-w-id="f7db5f61-50d5-e849-4bde-b284e74632ec"
                          className="news-item"
                        >
                          <div className="news-cover-publication-2">
                            <div className="publication-day">
                              {dateInfo.day}
                            </div>
                            <div className="publication-date">
                              {dateInfo.date}
                            </div>
                          </div>
                          <div className="news-card-top-2">
                            <div
                              id="w-node-f7db5f61-50d5-e849-4bde-b284e74632f3-fbbea1bb"
                              className="top-news-wrap"
                            >
                              <div
                                id="w-node-f7db5f61-50d5-e849-4bde-b284e74632f4-fbbea1bb"
                                className="link-wrap"
                              >
                                {category?.label && (
                                  <a
                                    href={category.url || "#"}
                                    className="carsy-blog-category"
                                  >
                                    {category.label}
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>
                          <div
                            id="w-node-f7db5f61-50d5-e849-4bde-b284e74632f7-fbbea1bb"
                            data-w-id="f7db5f61-50d5-e849-4bde-b284e74632f7"
                            className="blog-photo-content"
                          >
                            <a
                              data-w-id="f7db5f61-50d5-e849-4bde-b284e74632f8"
                              href={`/blog/${post.slug}`}
                              className="bg-blog-link-2 w-inline-block"
                            >
                              <p className="par-hidden">H</p>
                              <div className="news-overlay"></div>
                            </a>
                            <div className="background-wrapper-4 big-size">
                              <div
                                data-w-id="f7db5f61-50d5-e849-4bde-b284e7463302"
                                style={{
                                  backgroundImage: `url("${backgroundImage}")`,
                                }}
                                className="background-portfolio-3"
                              >
                                <div
                                  data-w-id="f7db5f61-50d5-e849-4bde-b284e7463303"
                                  className="overlay-portfolio-3"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <a
                            href={`/blog-posts/${post.slug}`}
                            className="project-3-card-bottom w-inline-block"
                          >
                            <div className="news-content">
                              <div className="blog-flex-wrapper-2">
                                <h6 className="project-title">
                                  {post.heroSection?.title || "Untitled Post"}
                                </h6>
                              </div>
                              <p className="news-description-2">
                                {post.heroSection?.introText ||
                                  "Read this blog post to learn more."}
                              </p>
                            </div>
                            <p className="par-hidden">h</p>
                          </a>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
              <div
                role="navigation"
                aria-label="List"
                className="w-pagination-wrapper"
              ></div>
            </div>
          </div>
        </div>
        <div className="gradient-wrapper grad-wrapper-3">
          <div
            data-w-id="b64457ba-bf40-2ef5-bc50-4bcb3313ec5b"
            className="red-grad-9"
          ></div>
          <div
            data-w-id="b64457ba-bf40-2ef5-bc50-4bcb3313ec5c"
            className="red-grad-7"
          ></div>
        </div>
      </div>
    </div>
  );
}