const whatsappApi = (phone, message) => {
  let subDomain = "api";
  try {
    if (typeof window !== "undefined") {
      if (window.innerWidth > 500) {
        subDomain = "web";
      }
    }
  } catch (error) {
    console.log(
      "no se detectó 'window' para detectar si estamos en computadora o celular."
    );
  }

  return `https://${subDomain}.whatsapp.com/send?phone=${phone}&text=${
    message
      ? message.replace(/&/g, "y").replace(/ /g, "%20").replace(/_/g, "%0A")
      : ""
  }`;
};
export default whatsappApi;
