import React, { useEffect } from "react";
import Menu from "./Menu";
import Helmet from "react-helmet";
import ReactPixel from "react-facebook-pixel";
const Layout = ({ children }) => {
  useEffect(() => {
    ReactPixel.init("416933675933313");
    ReactPixel.pageView();
  }, []);
  return (
    <div>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat|Righteous|Ubuntu+Mono&display=swap"
          rel="stylesheet"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no"
        />
        <meta name="mobile-web-app-capable" content="yes"></meta>
      </Helmet>
      <Menu />
      {children}
      <div id="modal"></div>
    </div>
  );
};

export default Layout;
