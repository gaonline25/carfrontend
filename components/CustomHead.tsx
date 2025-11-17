"use client";

import Script from "next/script";

interface CustomHeadProps {
  title?: string;
  description?: string;
  ogTitle?: string;
  twitterTitle?: string;
  faviconUrl?: string;
  webclipUrl?: string;
  gtmId?: string;
}

export default function CustomHead({
  title = "Carsy - Webflow Ecommerce website template",
  description = "Carsy - Webflow Ecommerce website template",
  ogTitle = "Carsy - Webflow Ecommerce website template",
  twitterTitle = "Carsy - Webflow Ecommerce website template",
  faviconUrl = "https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/669fd55feefabc97ff3dcc11_Favicon.png",
  webclipUrl = "https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/669fd563cdebbdf5ce6fcf1f_Webclip.png",
  gtmId = "G-6PCKDCJBV9",
}: CustomHeadProps) {
  return (
    <>
      {/* Basic Meta */}
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="generator" content="Webflow" />

      {/* Open Graph */}
      <meta property="og:title" content={ogTitle} />
      <meta property="twitter:title" content={twitterTitle} />

      {/* Stylesheets */}
      <link
        href="https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/css/carsy-wcopilot.webflow.597ec35ec.css"
        rel="stylesheet"
        type="text/css"
      />

      {/* Inline Styles for Webflow Interactions */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @media (min-width: 992px) {
            html.w-mod-js:not(.w-mod-ix) [data-w-id="19279448-3ae3-932d-9512-12987e4dad76"] {
              background-color: rgba(0, 0, 0, 0.05);
            }
            html.w-mod-js:not(.w-mod-ix) [data-w-id="19279448-3ae3-932d-9512-12987e4dad75"] {
              -webkit-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
              -moz-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
              -ms-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
              transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
            }
            html.w-mod-js:not(.w-mod-ix) [data-w-id="716558f8-7300-eb94-40c3-0d31e85dee28"] {
              background-color: rgba(0, 0, 0, 0.05);
            }
            html.w-mod-js:not(.w-mod-ix) [data-w-id="716558f8-7300-eb94-40c3-0d31e85dee27"] {
              -webkit-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
              -moz-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
              -ms-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
              transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
            }
            html.w-mod-js:not(.w-mod-ix) [data-w-id="da69c9db-1bd9-31bc-35df-7d7e20d0f7b1"] {
              background-color: rgba(0, 0, 0, 0.05);
            }
            html.w-mod-js:not(.w-mod-ix) [data-w-id="da69c9db-1bd9-31bc-35df-7d7e20d0f7b0"] {
              -webkit-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
              -moz-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
              -ms-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
              transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
            }
            html.w-mod-js:not(.w-mod-ix) [data-w-id="67f39d80-1b6d-3325-00ae-65cb56e8cb61"] {
              background-color: rgba(0, 0, 0, 0.05);
            }
            html.w-mod-js:not(.w-mod-ix) [data-w-id="67f39d80-1b6d-3325-00ae-65cb56e8cb60"] {
              -webkit-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
              -moz-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
              -ms-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
              transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
            }
            html.w-mod-js:not(.w-mod-ix) [data-w-id="41113322-f66c-f9b6-a5e1-b46b044846a1"] {
              background-color: rgba(0, 0, 0, 0.05);
            }
            html.w-mod-js:not(.w-mod-ix) [data-w-id="41113322-f66c-f9b6-a5e1-b46b044846a0"] {
              -webkit-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
              -moz-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
              -ms-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
              transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
            }
            html.w-mod-js:not(.w-mod-ix) [data-w-id="49cb6b48-ef46-74d4-cbed-b0d1e323532b"] {
              background-color: rgba(0, 0, 0, 0.05);
            }
            html.w-mod-js:not(.w-mod-ix) [data-w-id="49cb6b48-ef46-74d4-cbed-b0d1e323532a"] {
              -webkit-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
              -moz-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
              -ms-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
              transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
            }
            html.w-mod-js:not(.w-mod-ix) [data-w-id="26d42217-aed1-8a61-5bcd-1d8a4f8742a5"] {
              background-color: rgba(0, 0, 0, 0.05);
            }
            html.w-mod-js:not(.w-mod-ix) [data-w-id="26d42217-aed1-8a61-5bcd-1d8a4f8742a4"] {
              -webkit-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
              -moz-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
              -ms-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
              transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
            }
            html.w-mod-js:not(.w-mod-ix) [data-w-id="6d00bb2f-be4c-3f05-c8fe-5f5ad3b06d1b"] {
              background-color: rgba(0, 0, 0, 0.05);
            }
            html.w-mod-js:not(.w-mod-ix) [data-w-id="6d00bb2f-be4c-3f05-c8fe-5f5ad3b06d1a"] {
              -webkit-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
              -moz-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
              -ms-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
              transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
            }
            html.w-mod-js:not(.w-mod-ix) [data-w-id="49086a16-5c4d-73d5-13ee-0f6af0ee5a67"] {
              width: 1px;
              height: 0%;
            }
          }
          @media (max-width: 991px) and (min-width: 768px) {
            html.w-mod-js:not(.w-mod-ix) [data-w-id="49086a16-5c4d-73d5-13ee-0f6af0ee5a67"] {
              width: 1px;
              height: 0%;
            }
          }
        `,
        }}
      />

      {/* DNS Prefetch */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />

      {/* WebFont Loader */}
      <Script
        src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"
        strategy="beforeInteractive"
      />
      <Script id="webfont-loader" strategy="beforeInteractive">
        {`
          WebFont.load({
            google: {
              families: [
                "Lato:100,100italic,300,300italic,400,400italic,700,700italic,900,900italic",
                "Open Sans:300,300italic,400,400italic,600,600italic,700,700italic,800,800italic",
                "Oxanium:200,300,regular,500,600,700,800",
                "Chakra Petch:300,regular,500,600,700",
                "Mulish:200,300,regular,500,600,700,800,900",
                "Sarabun:100,200,300,regular,500,600,700,800",
              ],
            },
          });
        `}
      </Script>

      {/* Modernizr Touch Detection */}
      <Script id="modernizr-touch" strategy="beforeInteractive">
        {`
          !(function (o, c) {
            var n = c.documentElement,
              t = " w-mod-";
            (n.className += t + "js"),
              ("ontouchstart" in o ||
                (o.DocumentTouch && c instanceof DocumentTouch)) &&
                (n.className += t + "touch");
          })(window, document);
        `}
      </Script>

      {/* Favicon */}
      <link rel="shortcut icon" href={faviconUrl} type="image/x-icon" />
      <link rel="apple-touch-icon" href={webclipUrl} />

      {/* Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gtmId}`}
        strategy="afterInteractive"
        async
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag("js", new Date());
          gtag("set", "developer_id.dZGVlNj", true);
          gtag("config", "${gtmId}");
        `}
      </Script>

      {/* Webflow Currency Settings */}
      <Script id="webflow-currency" strategy="beforeInteractive">
        {`
          window.__WEBFLOW_CURRENCY_SETTINGS = {
            currencyCode: "USD",
            symbol: "$",
            decimal: ".",
            fractionDigits: 2,
            group: ",",
            template: '{{wf {"path":"symbol","type":"PlainText"} }} {{wf {"path":"amount","type":"CommercePrice"} }} {{wf {"path":"currencyCode","type":"PlainText"} }}',
            hideDecimalForWholeNumbers: false,
          };
        `}
      </Script>
    </>
  );
}
