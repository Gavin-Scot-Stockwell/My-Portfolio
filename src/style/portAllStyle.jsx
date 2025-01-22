import mediaChange from "./mediaChange";

  const portAllStyle = {
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
portAllStyle.format = mediaChange(portAllStyle.mobile.format, portAllStyle.desktop.format);
export default portAllStyle;