// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import CustomHead from "@/components/CustomHead";
// import BodyScripts from "@/components/BodyScripts";
// import Navigation from "@/components/Navbar";



// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html
//       data-wf-domain="carsy-wcopilot.webflow.io"
//       data-wf-page="66a75a8fbb4041d0ab3f40e0"
//       data-wf-site="669e1212d181ce4bfbbea175"
//       lang="en"
//     >
//       <body>
//         <Navigation />
//         {children}
//       </body>
//     </html>
//   );
// }




import Footer from "@/components/Footer";
import "./globals.css";
import Navigation from "@/components/Navbar";
import Script from "next/script";

import { fetchFooterPageData, getImageUrl } from "@/lib/fetchFooterPageComponent";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
  }) {
    const footerData = await fetchFooterPageData();
  return (
    <html
      lang="en"
      data-wf-domain="carsy-wcopilot.webflow.io"
      data-wf-page="66a75a8fbb4041d0ab3f40e0"
      data-wf-site="669e1212d181ce4bfbbea175"
    >
      <head>
        {/* Basic Meta */}
        <meta charSet="utf-8" />
        <title>Carsy - Webflow Ecommerce website template</title>
        <meta
          property="og:title"
          content="Carsy - Webflow Ecommerce website template"
        />
        <meta
          property="twitter:title"
          content="Carsy - Webflow Ecommerce website template"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="generator" content="Webflow" />

        {/* Webflow CSS */}
        <link
          href="https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/css/carsy-wcopilot.webflow.597ec35ec.css"
          rel="stylesheet"
        />

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Favicon */}
        <link
          rel="shortcut icon"
          href="https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/669fd55feefabc97ff3dcc11_Favicon.png"
        />
        <link
          rel="apple-touch-icon"
          href="https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/669fd563cdebbdf5ce6fcf1f_Webclip.png"
        />

        {/* Currency Settings */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
              window.__WEBFLOW_CURRENCY_SETTINGS = {
                currencyCode: "USD",
                symbol: "$",
                decimal: ".",
                fractionDigits: 2,
                group: ",",
                template:
                  '{{wf {"path":"symbol","type":"PlainText"} }} {{wf {"path":"amount","type":"CommercePrice"} }} {{wf {"path":"currencyCode","type":"PlainText"} }}',
                hideDecimalForWholeNumbers: false,
              };
            `,
          }}
        /> */}

        {/* Your big Webflow media query CSS */}
        <style>{`
          /* Paste your full <style> block here */
        `}</style>
      </head>

      <body>
        <Navigation />
        {children}
        <Footer data={footerData} />

        {/* WebFont Loader */}
        <Script
          src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"
          strategy="beforeInteractive"
        />

        <Script id="webflow-googlefonts">
          {`
          WebFont.load({
            google: {
              families: [
                "Lato:100,100italic,300,300italic,400,400italic,700,700italic,900,900italic",
                "Open Sans:300,300italic,400,400italic,600,600italic,700,700italic,800,800italic",
                "Oxanium:200,300,regular,500,600,700,800",
                "Chakra Petch:300,regular,500,600,700",
                "Mulish:200,300,regular,500,600,700,800,900",
                "Sarabun:100,200,300,regular,500,600,700,800"
              ]
            }
          });
        `}
        </Script>

        {/* jQuery (required for Webflow) */}
        <Script
          src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js"
          strategy="beforeInteractive"
        />

        {/* Webflow JS */}
        <Script
          src="https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/js/webflow.1b753ae8bef74b3dee754e747c563cff.js"
          strategy="afterInteractive"
        />

        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-6PCKDCJBV9"
        />

        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag("js", new Date());
            gtag("set", "developer_id.dZGVlNj", true);
            gtag("config", "G-6PCKDCJBV9");
          `}
        </Script>
      </body>
    </html>
  );
}
