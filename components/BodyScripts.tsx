"use client";

import Script from "next/script";

interface BodyScriptsProps {
  jqueryUrl?: string;
  webflowUrl?: string;
}

export default function BodyScripts() {
  return (
    

    <>
      <script
        src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=669e1212d181ce4bfbbea175"
        type="text/javascript"
        // integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
        // crossorigin="anonymous"
      ></script>
      <script
        src="https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/js/webflow.1b753ae8bef74b3dee754e747c563cff.js"
        type="text/javascript"
      ></script>
    </>
  );
}
