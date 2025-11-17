"use client";

import { useState } from "react";

function NewsletterSection() {
  const [formState, setFormState] = useState({
    phone: "",
    submitted: false,
    error: false,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setFormState((prev) => ({
        ...prev,
        submitted: true,
        error: false,
      }));
      setFormState((prev) => ({
        ...prev,
        phone: "",
      }));
      setTimeout(() => {
        setFormState((prev) => ({
          ...prev,
          submitted: false,
        }));
      }, 3000);
    } catch {
      setFormState((prev) => ({
        ...prev,
        error: true,
      }));
    }
  };

  return (
    <section className="newsetter-section">
      <div className="cta-container">
        <div className="cta-column-grid">
          <div
            id="w-node-_391444bd-5914-5014-3fb7-36849d21f728-ab3f40e0"
            className="grid-column-left"
          ></div>
          <div
            id="w-node-_391444bd-5914-5014-3fb7-36849d21f7b0-ab3f40e0"
            className="grid-col-right"
          >
            <div className="form-right">
              <div className="subscribe-form-2">
                <div className="form-text-wrapper">
                  <div className="top-form-wrapper">
                    <div
                      data-w-id="b3209bde-cc24-bc03-f64c-c90895522097"
                      style={{ opacity: 0 }}
                      className="subtitle-wrap"
                    >
                      <h6 className="black-subtitle">
                        Book Your Appointment Today
                      </h6>
                    </div>
                    <h3
                      data-w-id="46562abb-9e09-8b58-4c21-a1ee2bf41ae9"
                      style={{ opacity: 0 }}
                      className="form-large-top-title"
                    >
                      Upgrade Your Ride!
                    </h3>
                  </div>
                  <p
                    data-w-id="46562abb-9e09-8b58-4c21-a1ee2bf41aeb"
                    style={{ opacity: 0 }}
                    className="form-description"
                  >
                    Schedule your service appointment today to ensure your
                    vehicle receives top-notch care from our expert technicians.
                    Don't wait – keep your car running smoothly with a quick and
                    easy booking.
                  </p>
                </div>
                <div
                  data-w-id="46562abb-9e09-8b58-4c21-a1ee2bf41aed"
                  style={{ opacity: 0 }}
                  className="large-contacts-form"
                >
                  <div className="pop-up-form w-form">
                    <form
                      id="email-form-2"
                      name="email-form-2"
                      data-name="Email Form 2"
                      method="get"
                      className="contacts-form"
                      data-wf-page-id="66a75a8fbb4041d0ab3f40e0"
                      data-wf-element-id="46562abb-9e09-8b58-4c21-a1ee2bf41aef"
                      onSubmit={handleSubmit}
                    >
                      <div className="contact-form-inputs">
                        <input
                          className="form-hero-input w-input"
                          maxLength={256}
                          name="email-3"
                          data-name="Email 3"
                          placeholder="Phone"
                          type="tel"
                          id="email-3"
                          required
                          value={formState.phone}
                          onChange={(e) =>
                            setFormState((prev) => ({
                              ...prev,
                              phone: e.target.value,
                            }))
                          }
                        />
                      </div>
                      <div className="form-hero-btn">
                        <input
                          type="submit"
                          data-wait="Please Wait"
                          className="primary-button-form w-button"
                          value="Let's Get Started!"
                        />
                      </div>
                    </form>
                    {formState.submitted && (
                      <div className="succes-message-transparent w-form-done">
                        <div className="success-circle-wrapper">
                          <div className="success-text">
                            <span className="thank-you-text">Thank you!</span>
                            Your submission has been received!
                          </div>
                        </div>
                      </div>
                    )}
                    {formState.error && (
                      <div className="error-project-message w-form-fail">
                        <div className="error-text">
                          <span className="error-span">Ooooooops!</span>
                          Something went wrong while submitting the form.
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="page-square-print form-top-left"></div>
                <div className="page-square-print form-top-right"></div>
                <div className="page-square-print form-bottom-left"></div>
                <div className="page-square-print form-bottom-right"></div>
              </div>
            </div>
          </div>
          <div className="top-cta-line"></div>
          <div className="bottom-cta-line"></div>
        </div>
      </div>
      <div className="cta-clip-wrapper">
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
          className="cta-hero-banner"
        >
          <div className="cta-overlay"></div>
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;
