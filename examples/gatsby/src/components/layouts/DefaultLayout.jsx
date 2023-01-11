import React from 'react';
import WindowSizeProviderContext from '../../context/WindowSizeProvider.context';
// import { Script } from 'gatsby';
// import {Helmet} from 'react-helmet-async';

export default function DefaultLayout({ children }) {
  // React.useEffect(() => {
  //     const timer = setTimeout(() =>
  //        setHeader(
  //             <script async={true} defer={true}  type="text/javascript">
  //                 {`
  //                   (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
  //                 var f=d.getElementsByTagName(s)[0],
  //                     j=d.createElement(s),
  //                     dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  //               'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  //             })(window,document,'script','dataLayer','${process.env.GATSBY_GTAG}');
  //                 `}
  //             </script>
  //       )

  //     , 1000);
  //     return () => clearTimeout(timer);
  // }, [])

  return (
    <React.Fragment>
      {/* <Script
        id="first-unique-id"
        strategy="idle"
        dangerouslySetInnerHTML={{
          __html: `(function (w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
            var f = d.getElementsByTagName(s)[0],
              j = d.createElement(s),
              dl = l != "dataLayer" ? "&l=" + l : "";
            j.async = true;
            j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
            f.parentNode.insertBefore(j, f);
          })(window, document, "script", "dataLayer", "${process.env.GATSBY_GTAG}");
          `,
        }}
      /> */}

      {/* <Script
            id="first-unique-id"
            src={`https://www.googletagmanager.com/gtm.js?id=${process.env.GATSBY_GTAG}`}
            strategy="off-main-thread"
            forward={[`dataLayer.push`]}
          />
          <Script id="gtm-init" strategy="off-main-thread">
            {`
              window.dataLayer = window.dataLayer || []
              window.dataLayer.push({ 'gtm.start': new Date().getTime(), 'event': 'gtm.js' })
            `}
          </Script> */}
      {/* <WindowSizeProviderContext> */}
      {children}
      {/* </WindowSizeProviderContext> */}
    </React.Fragment>
  );
};
