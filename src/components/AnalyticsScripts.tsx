"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const GA_MEASUREMENT_ID = "G-VYQMQB4QM7";
const CLARITY_ID = "wbdxvnhepc";
const UMAMI_WEBSITE_ID = "cca226f5-e22f-48e2-b3bb-b4b93e78a23f";

export default function AnalyticsScripts() {
  const [enabled] = useState(() => {
    if (typeof window === "undefined") return false;
    const params = new URLSearchParams(window.location.search);
    if (params.has("notrack")) return false;
    if (params.has("track")) return true;
    return !localStorage.getItem("notrack");
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    let modified = false;

    if (params.has("notrack")) {
      localStorage.setItem("notrack", "true");
      params.delete("notrack");
      modified = true;
    }
    if (params.has("track")) {
      localStorage.removeItem("notrack");
      params.delete("track");
      modified = true;
    }

    if (modified) {
      const clean = params.toString()
        ? `${window.location.pathname}?${params}`
        : window.location.pathname;
      window.history.replaceState({}, "", clean);
    }
  }, []);

  if (!enabled) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="lazyOnload"
      />
      <Script id="ga4-init" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
      <Script id="ms-clarity" strategy="lazyOnload">
        {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${CLARITY_ID}");
        `}
      </Script>
      <Script
        defer
        src="https://cloud.umami.is/script.js"
        data-website-id={UMAMI_WEBSITE_ID}
        strategy="lazyOnload"
      />
    </>
  );
}
