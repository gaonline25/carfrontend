"use client";

import { useState, useEffect } from "react";
import {
  fetchWhatWeOfferComponent,
  getImageUrl,
} from "@/lib/fetchWhatWeOfferComponent";

export default function WhatWeOfferBanner() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWhatWeOfferComponent().then((fetchedData) => {
      setData(fetchedData);
      setLoading(false);
    });
  }, []);

  if (loading || !data) {
    return null;
  }

  const {
    bannerSection = {},
    titleWrap = {},
    backgroundImageSection = {},
    imageTransform = {},
    overlaySection = {},
  } = data;

  // Get background image URL
  const backgroundImageUrl = getImageUrl(
    backgroundImageSection.backgroundImages?.desktop
  );

  // Build transform style
  const buildTransformStyle = () => {
    if (!imageTransform.enableTransform) return {};

    const scale = imageTransform.scale || "1.15";
    const translateX = imageTransform.translateX || "0";
    const translateY = imageTransform.translateY || "0";
    const rotateX = imageTransform.rotateX || "0";
    const rotateY = imageTransform.rotateY || "0";
    const rotateZ = imageTransform.rotateZ || "0";
    const skewX = imageTransform.skewX || "0";
    const skewY = imageTransform.skewY || "0";

    const transformValue = `translate3d(${translateX}, ${translateY}, 0) scale3d(${scale}, ${scale}, 1) rotateX(${rotateX}) rotateY(${rotateY}) rotateZ(${rotateZ}) skew(${skewX}, ${skewY})`;

    return {
      WebkitTransform: transformValue,
      MozTransform: transformValue,
      msTransform: transformValue,
      transform: transformValue,
    };
  };

  // Build background image styles
  const backgroundStyles: React.CSSProperties = backgroundImageUrl
    ? {
        backgroundImage: `url("${backgroundImageUrl}")`,
        backgroundSize: backgroundImageSection.backgroundSize || "cover",
        backgroundPosition:
          backgroundImageSection.backgroundPosition || "center",
        backgroundRepeat:
          backgroundImageSection.backgroundRepeat || "no-repeat",
        backgroundAttachment:
          backgroundImageSection.backgroundAttachment || "scroll",
      }
    : {};

  const TitleTag = titleWrap.titleTag || "h1";

  return (
    <div className={bannerSection.className || "inner-small-banner"}>
      {/* Title Section */}
      {titleWrap.show && (
        <div className={titleWrap.containerClassName || "base-container"}>
          <div className={titleWrap.className || "inner-title-wrap"}>
            <TitleTag
              className={titleWrap.titleClassName || "inner-banner-title"}
            //   style={{
            //     color: titleWrap.titleColor || undefined,
            //     fontSize: titleWrap.titleFontSize || undefined,
            //     fontWeight: titleWrap.titleFontWeight || undefined,
            //     lineHeight: titleWrap.titleLineHeight || undefined,
            //     textAlign: (titleWrap.titleTextAlign as any) || undefined,
            //     margin: titleWrap.titleMargin || undefined,
            //     padding: titleWrap.titlePadding || undefined,
            //     letterSpacing: titleWrap.titleLetterSpacing || undefined,
            //     textTransform:
            //       (titleWrap.titleTextTransform as any) || undefined,
            //   }}
            >
              {titleWrap.title}
            </TitleTag>
          </div>
        </div>
      )}

      {/* Background Image Section */}
      {backgroundImageSection.show && (
        <div
          className={
            backgroundImageSection.wrapperClassName || "inner-clip-photo-banner"
          }
        >
          <div
            style={{
              ...buildTransformStyle(),
              ...backgroundStyles,
            }}
            className={
              backgroundImageSection.imageContainerClassName ||
              "inner-photo-banner services-banner"
            }
          ></div>

          {/* Overlay Section */}
          {overlaySection.show && (
            <div
              className={
                overlaySection.wrapperClassName ||
                "inner-banner-overlay with-bottom-light-gradient"
              }
              style={{
                backgroundColor: overlaySection.backgroundColor || undefined,
                opacity: overlaySection.opacity || undefined,
                mixBlendMode: (overlaySection.blendMode as any) || undefined,
              }}
            >
              {/* Multiple Gradients */}
              {overlaySection.overlayType === "multiple" &&
                overlaySection.gradients?.map(
                  (gradient: any, index: number) => {
                    if (!gradient.show) return null;

                    return (
                      <div
                        key={index}
                        className={gradient.className}
                        style={{
                          backgroundColor:
                            gradient.backgroundColor || undefined,
                          backgroundImage:
                            gradient.backgroundGradient || undefined,
                          opacity: gradient.opacity || undefined,
                          top: gradient.position?.top || undefined,
                          bottom: gradient.position?.bottom || undefined,
                          left: gradient.position?.left || undefined,
                          right: gradient.position?.right || undefined,
                          width: gradient.size?.width || undefined,
                          height: gradient.size?.height || undefined,
                        }}
                      ></div>
                    );
                  }
                )}

              {/* Single Gradient */}
              {overlaySection.overlayType === "gradient" && (
                <div
                  style={{
                    backgroundImage:
                      overlaySection.backgroundGradient || undefined,
                    width: "100%",
                    height: "100%",
                  }}
                ></div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
