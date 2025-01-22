import mediaChange from "./mediaChange";

  const portStyle = {
    desktop: {
    format: {
    
        //backgroundColor: "red",
        width: "100%",
    },
  },
  mobile: {
    format: {
        //backgroundColor: "green",
        width: "50%",
    },
  },
  format: {},
};

// Apply mediaChange to set the format property
portStyle.format = mediaChange(portStyle.mobile.format, portStyle.desktop.format);
export default portStyle;