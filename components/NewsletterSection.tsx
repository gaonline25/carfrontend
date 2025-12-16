// "use client";

// import { useState } from "react";

// function NewsletterSection() {
//   const [formState, setFormState] = useState({
//     phone: "",
//     submitted: false,
//     error: false,
//   });

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     try {
//       setFormState((prev) => ({
//         ...prev,
//         submitted: true,
//         error: false,
//       }));
//       setFormState((prev) => ({
//         ...prev,
//         phone: "",
//       }));
//       setTimeout(() => {
//         setFormState((prev) => ({
//           ...prev,
//           submitted: false,
//         }));
//       }, 3000);
//     } catch {
//       setFormState((prev) => ({
//         ...prev,
//         error: true,
//       }));
//     }
//   };

//   return (
//     <section className="newsetter-section">
//       <div className="cta-container">
//         <div className="cta-column-grid">
//           <div
//             id="w-node-_391444bd-5914-5014-3fb7-36849d21f728-ab3f40e0"
//             className="grid-column-left"
//           ></div>
//           <div
//             id="w-node-_391444bd-5914-5014-3fb7-36849d21f7b0-ab3f40e0"
//             className="grid-col-right"
//           >
//             <div className="form-right">
//               <div className="subscribe-form-2">
//                 <div className="form-text-wrapper">
//                   <div className="top-form-wrapper">
//                     <div
//                       data-w-id="b3209bde-cc24-bc03-f64c-c90895522097"
//                       
//                       className="subtitle-wrap"
//                     >
//                       <h6 className="black-subtitle">
//                         Book Your Appointment Today
//                       </h6>
//                     </div>
//                     <h3
//                       data-w-id="46562abb-9e09-8b58-4c21-a1ee2bf41ae9"
//                       
//                       className="form-large-top-title"
//                     >
//                       Upgrade Your Ride!
//                     </h3>
//                   </div>
//                   <p
//                     data-w-id="46562abb-9e09-8b58-4c21-a1ee2bf41aeb"
//                     
//                     className="form-description"
//                   >
//                     Schedule your service appointment today to ensure your
//                     vehicle receives top-notch care from our expert technicians.
//                     Don't wait – keep your car running smoothly with a quick and
//                     easy booking.
//                   </p>
//                 </div>
//                 <div
//                   data-w-id="46562abb-9e09-8b58-4c21-a1ee2bf41aed"
//                   
//                   className="large-contacts-form"
//                 >
//                   <div className="pop-up-form w-form">
//                     <form
//                       id="email-form-2"
//                       name="email-form-2"
//                       data-name="Email Form 2"
//                       method="get"
//                       className="contacts-form"
//                       data-wf-page-id="66a75a8fbb4041d0ab3f40e0"
//                       data-wf-element-id="46562abb-9e09-8b58-4c21-a1ee2bf41aef"
//                       onSubmit={handleSubmit}
//                     >
//                       <div className="contact-form-inputs">
//                         <input
//                           className="form-hero-input w-input"
//                           maxLength={256}
//                           name="email-3"
//                           data-name="Email 3"
//                           placeholder="Phone"
//                           type="tel"
//                           id="email-3"
//                           required
//                           value={formState.phone}
//                           onChange={(e) =>
//                             setFormState((prev) => ({
//                               ...prev,
//                               phone: e.target.value,
//                             }))
//                           }
//                         />
//                       </div>
//                       <div className="form-hero-btn">
//                         <input
//                           type="submit"
//                           data-wait="Please Wait"
//                           className="primary-button-form w-button"
//                           value="Let's Get Started!"
//                         />
//                       </div>
//                     </form>
//                     {formState.submitted && (
//                       <div className="succes-message-transparent w-form-done">
//                         <div className="success-circle-wrapper">
//                           <div className="success-text">
//                             <span className="thank-you-text">Thank you!</span>
//                             Your submission has been received!
//                           </div>
//                         </div>
//                       </div>
//                     )}
//                     {formState.error && (
//                       <div className="error-project-message w-form-fail">
//                         <div className="error-text">
//                           <span className="error-span">Ooooooops!</span>
//                           Something went wrong while submitting the form.
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//                 <div className="page-square-print form-top-left"></div>
//                 <div className="page-square-print form-top-right"></div>
//                 <div className="page-square-print form-bottom-left"></div>
//                 <div className="page-square-print form-bottom-right"></div>
//               </div>
//             </div>
//           </div>
//           <div className="top-cta-line"></div>
//           <div className="bottom-cta-line"></div>
//         </div>
//       </div>
//       <div className="cta-clip-wrapper">
//         <div
//           data-w-id="a669cfaf-30ff-e562-aba1-751d19fd9fcc"
//           style={{
//             WebkitTransform:
//               "translate3d(0, 0, 0) scale3d(1.15, 1.15, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
//             MozTransform:
//               "translate3d(0, 0, 0) scale3d(1.15, 1.15, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
//             msTransform:
//               "translate3d(0, 0, 0) scale3d(1.15, 1.15, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
//             transform:
//               "translate3d(0, 0, 0) scale3d(1.15, 1.15, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
//           }}
//           className="cta-hero-banner"
//         >
//           <div className="cta-overlay"></div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default NewsletterSection;



"use client";

import { useState, useEffect } from "react";
import {
  fetchNewsletterSectionComponentData,
  getImageUrl,
} from "@/lib/fetchNewsletterSectionComponentData";

export default function NewsletterSection() {
  const [data, setData] = useState<any>(null);

  const [formState, setFormState] = useState({
    phone: "",
    submitted: false,
    error: false,
  });

  useEffect(() => {
    fetchNewsletterSectionComponentData().then((fetchedData) => {
      setData(fetchedData); // Will be null if no active doc or error
    });
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setFormState({ phone: "", submitted: true, error: false });
      setTimeout(() => {
        setFormState((prev) => ({ ...prev, submitted: false }));
      }, data?.successMessageSettings?.successDuration || 3000);
    } catch {
      setFormState((prev) => ({ ...prev, error: true }));
    }
  };

  // If no data from Payload → do not render anything
  if (!data) {
    return null; // Or return <div>No active newsletter section found.</div> if you want feedback
  }

  

  const {
    mainSection = {},
    containerSettings = {},
    formContent = {},
    formInputSettings = {},
    submitButtonSettings = {},
    successMessageSettings = {},
    errorMessageSettings = {},
    decorativeElements = {},
    backgroundBannerSettings = {},
  } = data;

  return (
    <section className={mainSection.sectionClass}>
      <div className={containerSettings.ctaContainerClass}>
        <div className={containerSettings.gridClass}>
          <div
            id={containerSettings.leftColumnId}
            className={containerSettings.leftColumnClass}
          ></div>

          <div
            id={containerSettings.rightColumnId}
            className={containerSettings.rightColumnClass}
          >
            <div className="form-right">
              <div className="subscribe-form-2">
                <div className="form-text-wrapper">
                  <div className="top-form-wrapper">
                    {formContent.subtitleShow && formContent.subtitle && (
                      <div
                        data-w-id="b3209bde-cc24-bc03-f64c-c90895522097"
                        
                        className="subtitle-wrap"
                      >
                        <h6 className={formContent.subtitleClass}>
                          {formContent.subtitle}
                        </h6>
                      </div>
                    )}
                    {formContent.mainTitle && (
                      <h3
                        data-w-id="46562abb-9e09-8b58-4c21-a1ee2bf41ae9"
                        
                        className={formContent.mainTitleClass}
                      >
                        {formContent.mainTitle}
                      </h3>
                    )}
                  </div>
                  {formContent.descriptionShow && formContent.description && (
                    <p
                      data-w-id="46562abb-9e09-8b58-4c21-a1ee2bf41aeb"
                      
                      className={formContent.descriptionClass}
                    >
                      {formContent.description}
                    </p>
                  )}
                </div>

                <div
                  data-w-id="46562abb-9e09-8b58-4c21-a1ee2bf41aed"
                  
                  className="large-contacts-form"
                >
                  <div className="pop-up-form w-form">
                    <form
                      id={formInputSettings.formId}
                      name={formInputSettings.formName}
                      data-name="Email Form 2"
                      method="get"
                      className={formInputSettings.formClass}
                      onSubmit={handleSubmit}
                    >
                      <div className="contact-form-inputs">
                        <input
                          className={formInputSettings.inputClass}
                          maxLength={256}
                          name={formInputSettings.inputName}
                          data-name="Email 3"
                          placeholder={formInputSettings.inputPlaceholder}
                          type={formInputSettings.inputType}
                          id={formInputSettings.inputId}
                          required={formInputSettings.inputRequired}
                          value={formState.phone}
                          onChange={(e) =>
                            setFormState((prev) => ({
                              ...prev,
                              phone: e.target.value,
                            }))
                          }
                        />
                      </div>

                      {submitButtonSettings.buttonShow &&
                        submitButtonSettings.buttonText && (
                          <div className="form-hero-btn" style={{pointerEvents: 'none'}}>
                            <input
                              type="submit"
                              data-wait="Please Wait"
                              className={submitButtonSettings.buttonClass}
                              value={submitButtonSettings.buttonText}
                            />
                          </div>
                        )}
                    </form>

                    {formState.submitted &&
                      successMessageSettings.showSuccessMessage && (
                        <div
                          className={
                            successMessageSettings.successMessageClass ||
                            "succes-message-transparent w-form-done"
                          }
                        >
                          <div
                            className={
                              successMessageSettings.successCircleWrapperClass ||
                              "success-circle-wrapper"
                            }
                          >
                            <div className="success-text">
                              <span
                                className={
                                  successMessageSettings.successThankYouTextClass ||
                                  "thank-you-text"
                                }
                              >
                                {successMessageSettings.successThankYouText ||
                                  "Thank you!"}
                              </span>
                              {successMessageSettings.successMainText ||
                                "Your submission has been received!"}
                            </div>
                          </div>
                        </div>
                      )}

                    {formState.error &&
                      errorMessageSettings.showErrorMessage && (
                        <div
                          className={
                            errorMessageSettings.errorMessageClass ||
                            "error-project-message w-form-fail"
                          }
                        >
                          <div className="error-text">
                            <span
                              className={
                                errorMessageSettings.errorOopsTextClass ||
                                "error-span"
                              }
                            >
                              {errorMessageSettings.errorOopsText ||
                                "Ooooooops!"}
                            </span>
                            {errorMessageSettings.errorMainText ||
                              "Something went wrong while submitting the form."}
                          </div>
                        </div>
                      )}
                  </div>
                </div>

                {decorativeElements.showDecoratveSquares && (
                  <>
                    <div
                      className={`page-square-print ${decorativeElements.topLeftSquareClass}`}
                    ></div>
                    <div
                      className={`page-square-print ${decorativeElements.topRightSquareClass}`}
                    ></div>
                    <div
                      className={`page-square-print ${decorativeElements.bottomLeftSquareClass}`}
                    ></div>
                    <div
                      className={`page-square-print ${decorativeElements.bottomRightSquareClass}`}
                    ></div>
                  </>
                )}
              </div>
            </div>
          </div>

          {decorativeElements.showTopLine && (
            <div className={decorativeElements.topLineClass}></div>
          )}
          {decorativeElements.showBottomLine && (
            <div className={decorativeElements.bottomLineClass}></div>
          )}
        </div>
      </div>

      {backgroundBannerSettings.showBackgroundBanner && (
        <div className={backgroundBannerSettings.clipWrapperClass}>
          <div
            data-w-id="a669cfaf-30ff-e562-aba1-751d19fd9fcc"
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
            className={backgroundBannerSettings.bannerClass}
            style={{
              backgroundImage:
                getImageUrl(backgroundBannerSettings.bannerBackgroundImage) ||
                backgroundBannerSettings.bannerBackgroundImageUrl
                  ? `url('${
                      getImageUrl(
                        backgroundBannerSettings.bannerBackgroundImage
                      ) || backgroundBannerSettings.bannerBackgroundImageUrl
                    }')`
                  : undefined,
              backgroundSize: backgroundBannerSettings.bannerBackgroundSize,
              backgroundPosition:
                backgroundBannerSettings.bannerBackgroundPosition,
            }}
          >
            {backgroundBannerSettings.showOverlay && (
              <div className={backgroundBannerSettings.overlayClass}></div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}