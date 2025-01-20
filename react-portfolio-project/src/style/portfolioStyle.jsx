import mediaChange from "./mediaChange";

  const portStyle = {
    desktop: {
    format: {
        //backgroundColor: "red",
    },
  },
  mobile: {
    format: {
        //backgroundColor: "green",
        width: "100%",
        display: "block",
        fontSize: "1.5em",
    },
  },
  format: {},
};

// Apply mediaChange to set the format property
portStyle.format = mediaChange(portStyle.mobile.format, portStyle.desktop.format);
export default portStyle;