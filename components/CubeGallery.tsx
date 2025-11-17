function CubeGallery() {
  const cubeFaces = [
    {
      id: "cube-face-1",
      className: "cube-face-1",
      sizes:
        "(max-width: 479px) 60vw, (max-width: 767px) 80vw, (max-width: 991px) 8vw, 30vw",
      srcSet:
        "https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/669f88692f9e274e070b0bc5_Small%20Img-4-p-500.avif 500w, https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/669f88692f9e274e070b0bc5_Small%20Img-4.avif 900w",
      src: "https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/669f88692f9e274e070b0bc5_Small%20Img-4.avif",
      alt: "Project photo",
      lightboxData: {
        items: [
          {
            _id: "66a259c9af2b9b493b20814d",
            origFileName: "Insta 1.jpg",
            fileName: "Insta 1.jpg",
            fileSize: 106796,
            height: 900,
            url: "https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/66a259c9af2b9b493b20814d_Insta%201.jpg",
            width: 900,
            type: "image",
          },
        ],
        group: "Cube Gallery",
      },
    },
    {
      id: "cube-face-2",
      className: "cube-face-2",
      sizes:
        "(max-width: 479px) 60vw, (max-width: 767px) 80vw, (max-width: 991px) 8vw, 30vw",
      srcSet:
        "https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/669f885d8d213d48208ec0ee_Banner-9-p-500.avif 500w, https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/669f885d8d213d48208ec0ee_Banner-9-p-800.avif 800w, https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/669f885d8d213d48208ec0ee_Banner-9-p-1080.avif 1080w, https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/669f885d8d213d48208ec0ee_Banner-9.avif 1920w",
      src: "https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/669f885d8d213d48208ec0ee_Banner-9.avif",
      alt: "Project photo",
      lightboxData: {
        items: [
          {
            _id: "66a259cacffda7d59976fb9f",
            origFileName: "Insta 2.jpg",
            fileName: "Insta 2.jpg",
            fileSize: 139872,
            height: 900,
            url: "https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/66a259cacffda7d59976fb9f_Insta%202.jpg",
            width: 900,
            type: "image",
          },
        ],
        group: "Cube Gallery",
      },
    },
    {
      id: "cube-face-3",
      className: "cube-face-3",
      sizes:
        "(max-width: 479px) 60vw, (max-width: 767px) 80vw, (max-width: 991px) 8vw, 30vw",
      srcSet:
        "https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/669f8857b796214b5020f372_Banner-4-p-500.avif 500w, https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/669f8857b796214b5020f372_Banner-4-p-800.avif 800w, https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/669f8857b796214b5020f372_Banner-4.avif 1920w",
      src: "https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/669f8857b796214b5020f372_Banner-4.avif",
      alt: "Project photo",
      lightboxData: {
        items: [
          {
            _id: "66a259ca0318b12f67ab7203",
            origFileName: "Insta 4.jpg",
            fileName: "Insta 4.jpg",
            fileSize: 121018,
            height: 900,
            url: "https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/66a259ca0318b12f67ab7203_Insta%204.jpg",
            width: 900,
            type: "image",
          },
        ],
        group: "Cube Gallery",
      },
    },
    {
      id: "cube-face-4",
      className: "cube-face-4",
      sizes:
        "(max-width: 479px) 60vw, (max-width: 767px) 80vw, (max-width: 991px) 8vw, 30vw",
      srcSet:
        "https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/669f8856d748777a8fee133a_Banner-10-p-500.avif 500w, https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/669f8856d748777a8fee133a_Banner-10-p-800.avif 800w, https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/669f8856d748777a8fee133a_Banner-10.avif 1920w",
      src: "https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/669f8856d748777a8fee133a_Banner-10.avif",
      alt: "Project photo",
      lightboxData: {
        items: [
          {
            _id: "66a259cbded55ab00cc5a1db",
            origFileName: "Insta 3.jpg",
            fileName: "Insta 3.jpg",
            fileSize: 91435,
            height: 900,
            url: "https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/66a259cbded55ab00cc5a1db_Insta%203.jpg",
            width: 900,
            type: "image",
          },
        ],
        group: "Cube Gallery",
      },
    },
  ];

  return (
    <div
      data-w-id="d4f7ae61-ea69-bfe6-eb6b-3395c014e551"
      style={{ opacity: 0 }}
      className="relative-page-wrapper"
    >
      <div className="main-wrapper">
        <div className="cube-section">
          <div
            id="w-node-c54a0890-70d9-86e9-634d-1428583b96a4-ab3f40e0"
            className="text-content left"
          >
            <div
              data-w-id="b8fead14-6ce2-753b-30a0-90191b5c6310"
              style={{ opacity: 0 }}
              className="cube-text-con left"
            >
              <h3 className="feature-title">Speed Stories</h3>
              <p className="feature-description">
                We offer competitive pricing, transparent quotes, and a seamless
                service process, making your experience with us stress-free and
                satisfying.
              </p>
              <div className="btn-wrapper">
                <a href="/about-us" className="primary-white-button w-button">
                  About us
                </a>
              </div>
            </div>
          </div>
          <div
            id="w-node-c54a0890-70d9-86e9-634d-1428583b96a9-ab3f40e0"
            data-w-id="c54a0890-70d9-86e9-634d-1428583b96a9"
            className="cube-wrapper"
          >
            {cubeFaces.map((face) => (
              <div key={face.id} className={face.className}>
                <img
                  sizes={face.sizes}
                  srcSet={face.srcSet}
                  alt={face.alt}
                  src={face.src}
                  loading="lazy"
                  className="full-image"
                />
                <div className="overlay-gradient"></div>
                <a href="#" className="cube-lightbox w-inline-block w-lightbox">
                  <div className="lightbox-circle">
                    <p className="lightbox-icon"></p>
                  </div>
                  <script type="application/json" className="w-json">
                    {JSON.stringify(face.lightboxData)}
                  </script>
                </a>
              </div>
            ))}
          </div>
          <div
            id="w-node-c54a0890-70d9-86e9-634d-1428583b96b2-ab3f40e0"
            className="text-content right"
          >
            <div
              data-w-id="c621d4ce-8f5e-ca2f-28b9-1eb32f30d128"
              style={{ opacity: 0 }}
              className="cube-text-con"
            >
              <h3 className="feature-title">Car Showcase</h3>
              <p className="feature-description">
                We offer competitive pricing, transparent quotes, and a seamless
                service process, making your experience with us stress-free and
                satisfying.
              </p>
              <div className="btn-wrapper">
                <a href="/gallery" className="primary-button w-button">
                  Our Gallery
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CubeGallery;
