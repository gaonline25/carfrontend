// function ServiceProcess() {
//   const serviceCards = [
//     {
//       id: "w-node-_1b9f19e0-0985-4284-29cd-76d2f9451e54-ab3f40e0",
//       number: "01",
//       title: "Book an Appointment",
//       description:
//         "At Carsy, we streamline the car service process to ensure a hassle-free experience. The journey begins with booking an appointment, where you select a convenient time and date.",
//       bgClass: "bg-one",
//       lineId: "w-node-_1b9f19e0-0985-4284-29cd-76d2f9451e5d-ab3f40e0",
//       descId: "w-node-_1b9f19e0-0985-4284-29cd-76d2f9451e61-ab3f40e0",
//     },
//     {
//       id: "w-node-d26b1600-e924-c3ef-4bae-ec769adedb62-ab3f40e0",
//       number: "02",
//       title: "Choose Your Service",
//       description:
//         "At Carsy, we streamline the car service process to ensure a hassle-free experience. The journey begins with booking an appointment, where you select a convenient time and date.",
//       bgClass: "bg-two",
//       lineId: "w-node-d26b1600-e924-c3ef-4bae-ec769adedb6b-ab3f40e0",
//       descId: "w-node-d26b1600-e924-c3ef-4bae-ec769adedb6f-ab3f40e0",
//     },
//     {
//       id: "w-node-ea001642-1984-4054-ca59-3a847adba4a2-ab3f40e0",
//       number: "03",
//       title: "Confirm Your Request",
//       description:
//         "At Carsy, we streamline the car service process to ensure a hassle-free experience. The journey begins with booking an appointment, where you select a convenient time and date.",
//       bgClass: "bg-three",
//       lineId: "w-node-ea001642-1984-4054-ca59-3a847adba4ab-ab3f40e0",
//       descId: "w-node-ea001642-1984-4054-ca59-3a847adba4af-ab3f40e0",
//     },
//     {
//       id: "w-node-_111618d9-231a-65f1-92a6-11831608f4cc-ab3f40e0",
//       number: "04",
//       title: "Drop Off Your Vehicle",
//       description:
//         "At Carsy, we streamline the car service process to ensure a hassle-free experience. The journey begins with booking an appointment, where you select a convenient time and date.",
//       bgClass: "bg-four",
//       lineId: "w-node-_111618d9-231a-65f1-92a6-11831608f4d5-ab3f40e0",
//       descId: "w-node-_111618d9-231a-65f1-92a6-11831608f4d9-ab3f40e0",
//     },
//     {
//       id: "w-node-_622ba6a9-57f4-3713-6c54-3b006c965017-ab3f40e0",
//       number: "05",
//       title: "Service and Repair",
//       description:
//         "At Carsy, we streamline the car service process to ensure a hassle-free experience. The journey begins with booking an appointment, where you select a convenient time and date.",
//       bgClass: "bg-five",
//       lineId: "w-node-_622ba6a9-57f4-3713-6c54-3b006c965020-ab3f40e0",
//       descId: "w-node-_622ba6a9-57f4-3713-6c54-3b006c965024-ab3f40e0",
//     },
//     {
//       id: "w-node-_6e3e2e3a-8e50-aee0-39a3-052c5da0e3a7-ab3f40e0",
//       number: "06",
//       title: "Review and Pick Up",
//       description:
//         "At Carsy, we streamline the car service process to ensure a hassle-free experience. The journey begins with booking an appointment, where you select a convenient time and date.",
//       bgClass: "bg-six",
//       lineId: "w-node-_6e3e2e3a-8e50-aee0-39a3-052c5da0e3b0-ab3f40e0",
//       descId: "w-node-_6e3e2e3a-8e50-aee0-39a3-052c5da0e3b4-ab3f40e0",
//     },
//   ];

//   return (
//     <section className="section special-bottom-space">
//       <div className="base-container">
//         <div className="service-grid-steps">
//           <div
//             id="w-node-_999a9c0c-d5a5-63e2-34a8-e028c0ebd62b-ab3f40e0"
//             className="service-left-info"
//           >
//             <div className="title-wrap">
//               <div
//                 data-w-id="45a0a0e8-e2c2-d09e-89c5-06da62ea48e0"
//                 style={{ opacity: 0 }}
//                 className="subtitle-wrap"
//               >
//                 <h6 className="black-subtitle">
//                   Your Vehicle's Service Adventure
//                 </h6>
//               </div>
//               <h2 className="main-title-h2">
//                 Drive Through Our Service Process
//               </h2>
//               <div
//                 data-w-id="d6ad84eb-8d6c-578b-8317-37528f06ab85"
//                 style={{ opacity: 0 }}
//                 className="flex-btn-group"
//               >
//                 <a href="/services" className="primary-button w-button">
//                   Best services
//                 </a>
//                 <a
//                   href="/our-clients"
//                   className="secondary-red-button w-button"
//                 >
//                   Our customers
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div
//             id="w-node-_2c512893-809d-abf7-55c0-cf8d0c4f6e92-ab3f40e0"
//             className="service-right-info"
//           >
//             <div className="services-card">
//               {serviceCards.map((card) => (
//                 <div key={card.id} id={card.id} className="about-us-card">
//                   <div className="background-wrapper-3">
//                     <div className="background-cover"></div>
//                     <div className={`background-advantages ${card.bgClass}`}>
//                       <div className="overlay-advantages"></div>
//                     </div>
//                   </div>
//                   <div className="about-card-top">
//                     <div className="card-circle">
//                       <h6 className="benefit-numbers">{card.number}</h6>
//                     </div>
//                     <div id={card.lineId} className="horizontal-line"></div>
//                   </div>
//                   <div className="about-description">
//                     <h4 className="benefit-title">{card.title}</h4>
//                     <p id={card.descId} className="benefits-description">
//                       {card.description}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="gradient-wrapper grad-wrapper-2">
//         <div
//           data-w-id="4f22b339-15ae-0816-c9bd-c9bdc1f2d9a8"
//           style={{ opacity: 0 }}
//           className="red-grad-6"
//         ></div>
//         <div
//           data-w-id="4f22b339-15ae-0816-c9bd-c9bdc1f2d9a9"
//           style={{ opacity: 0 }}
//           className="red-grad-5"
//         ></div>
//         <div className="print-wrapper-1 print-2">
//           <img
//             src="https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/66a0ff2e6a489b9fa090eed0_Group.svg"
//             loading="lazy"
//             alt="Project photo"
//             className="print-img-1 img-2"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ServiceProcess;






// components/ServiceProcess.tsx or app/service-process/page.tsx

import { fetchServiceProcessComponentData, getImageUrl } from "@/lib/fetchServiceProcessComponentData";

type ServiceProcessData = Awaited<ReturnType<typeof fetchServiceProcessComponentData>>;

export default async function ServiceProcess() {
  const data: ServiceProcessData = await fetchServiceProcessComponentData();

  if (!data) {
    return <div>Service Process component not found or inactive.</div>;
  }

  const {
    mainSection = {},
    containerSettings = {},
    gridSettings = {},
    leftInfoSection = {},
    rightInfoSection = {},
    gradientWrapper = {},
  } = data;

  return (
    <section className={mainSection.className || "section special-bottom-space"}>
      {/* Main Container */}
      <div className={containerSettings.className || "base-container"}>
        {/* Grid */}
        <div className={gridSettings.className || "service-grid-steps"}>
          {/* Left Info Section */}
          {leftInfoSection.show && (
            <div
              id={leftInfoSection.id || "w-node-_999a9c0c-d5a5-63e2-34a8-e028c0ebd62b-ab3f40e0"}
              className={leftInfoSection.className || "service-left-info"}
            >
              <div className="title-wrap">
                {/* Subtitle */}
                {leftInfoSection.subtitle?.show && (
                  <div
                    data-w-id={leftInfoSection.subtitle.animationId || "45a0a0e8-e2c2-d09e-89c5-06da62ea48e0"}
                    style={{ opacity: 0 }}
                    className={leftInfoSection.subtitle.wrapperClassName || "subtitle-wrap"}
                  >
                    <h6 className={leftInfoSection.subtitle.className || "black-subtitle"}>
                      {leftInfoSection.subtitle.text}
                    </h6>
                  </div>
                )}

                {/* Main Title */}
                {leftInfoSection.mainTitle?.show && (
                  <h2 className={leftInfoSection.mainTitle.className || "main-title-h2"}>
                    {leftInfoSection.mainTitle.text}
                  </h2>
                )}

                {/* CTA Buttons */}
                {leftInfoSection.ctaButtons && leftInfoSection.ctaButtons.length > 0 && (
                  <div
                    data-w-id={leftInfoSection.buttonWrapperAnimationId || "d6ad84eb-8d6c-578b-8317-37528f06ab85"}
                    style={{ opacity: 0 }}
                    className={leftInfoSection.buttonWrapperClassName || "flex-btn-group"}
                  >
                    {leftInfoSection.ctaButtons.map((btn: any, i: number) => (
                      <a
                        key={i}
                        href={btn.url}
                        target={btn.openInNewTab ? "_blank" : undefined}
                        rel={btn.openInNewTab ? "noopener noreferrer" : undefined}
                        className={btn.className || "primary-button w-button"}
                      >
                        {btn.text}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Right Info Section (Cards) */}
          {rightInfoSection.show && (
            <div
              id={rightInfoSection.id || "w-node-_2c512893-809d-abf7-55c0-cf8d0c4f6e92-ab3f40e0"}
              className={rightInfoSection.className || "service-right-info"}
            >
              <div className={rightInfoSection.cardsContainerClassName || "services-card"}>
                {rightInfoSection.serviceCards?.map((card: any) => (
                  <div
                    key={card.id}
                    id={card.id}
                    className={card.cardClassName || "about-us-card"}
                  >
                    <div className="background-wrapper-3">
                      <div className="background-cover"></div>
                      <div className={`background-advantages ${card.bgClass || ""}`}>
                        <div className="overlay-advantages"></div>
                      </div>
                    </div>

                    <div className="about-card-top">
                      <div className="card-circle">
                        <h6 className="benefit-numbers">{card.number}</h6>
                      </div>
                      <div id={card.lineId} className="horizontal-line"></div>
                    </div>

                    <div className="about-description">
                      <h4 className="benefit-title">{card.title}</h4>
                      <p id={card.descId} className="benefits-description">
                        {card.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Gradient Wrapper */}
      {gradientWrapper.show && (
        <div className={gradientWrapper.className || "gradient-wrapper grad-wrapper-2"}>
          {/* Red Gradient 6 */}
          {gradientWrapper.redGrad6?.show && (
            <div
              data-w-id={gradientWrapper.redGrad6.animationId || "4f22b339-15ae-0816-c9bd-c9bdc1f2d9a8"}
              style={{ opacity: 0 }}
              className={gradientWrapper.redGrad6.className || "red-grad-6"}
            ></div>
          )}

          {/* Red Gradient 5 */}
          {gradientWrapper.redGrad5?.show && (
            <div
              data-w-id={gradientWrapper.redGrad5.animationId || "4f22b339-15ae-0816-c9bd-c9bdc1f2d9a9"}
              style={{ opacity: 0 }}
              className={gradientWrapper.redGrad5.className || "red-grad-5"}
            ></div>
          )}

          {/* Print/Decorative Image */}
          {gradientWrapper.printWrapper?.show && (
            <div className={gradientWrapper.printWrapper.wrapperClassName || "print-wrapper-1 print-2"}>
              <img
                src={
                  getImageUrl(gradientWrapper.printWrapper.imageUrl) ||
                  gradientWrapper.printWrapper.imageUrlFallback ||
                  "https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/66a0ff2e6a489b9fa090eed0_Group.svg"
                }
                loading={gradientWrapper.printWrapper.loadingStrategy || "lazy"}
                alt={gradientWrapper.printWrapper.imageAlt || "Project photo"}
                className={gradientWrapper.printWrapper.imageClassName || "print-img-1 img-2"}
              />
            </div>
          )}
        </div>
      )}
    </section>
  );
}