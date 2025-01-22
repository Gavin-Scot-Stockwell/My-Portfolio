import mediaChange from "./mediaChange";

  const aboutStyle = {
    desktop: {
    format: {
        //backgroundColor: "red",
    
    },
  },
  mobile: {
    format: {
        width: "100%",
        height: "100%",
        //display: "flex",
        justifyContent: "center",
        //backgroundColor: "green",
    },
  },
  format: {},
};

// Apply mediaChange to set the format property
aboutStyle.format = mediaChange(aboutStyle.mobile.format, aboutStyle.desktop.format);
export default aboutStyle;