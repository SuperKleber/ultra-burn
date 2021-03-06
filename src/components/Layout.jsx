import React, { useEffect } from "react";
import Menu from "./Menu";
import Helmet from "react-helmet";
import ReactPixel from "react-facebook-pixel";
import Footer from "./Footer";
const Layout = ({ children }) => {
  useEffect(() => {
    ReactPixel.init("416933675933313");
    ReactPixel.pageView();
  }, []);
  return (
    <div className="layout">
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
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
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <hr />
      <Footer />
      <div id="modal"></div>
    </div>
  );
};

export default Layout;
