import React, { useEffect } from "react";
import Layout from "../components/Layout";
import ReactPixel from "react-facebook-pixel";
const Whatsapp = ({ location }) => {
  useEffect(() => {
    const url = new URL(location.href);
    const message = url.searchParams.get("message") || "";
    const messageWhatsapp = message.replace(/ /gi, "%20");
    ReactPixel.track("Contact", {
      type: "whatsapp",
    });
    setTimeout(() => {
      if (typeof window !== "undefined") {
        window.location.href = `https://api.whatsapp.com/send?phone=59176079689&text=${messageWhatsapp}`;
      }
    }, 300);
  }, []);

  return (
    <Layout>
      <h1>Whatsapp</h1>
    </Layout>
  );
};
export default Whatsapp;
