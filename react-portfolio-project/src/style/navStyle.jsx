import mediaChange from "./mediaChange";

const style = {
    desktop: {
    format: {
        display: 'inline-block',
        justifyContent: 'center',
        paddingRight: '150px',
        //backgroundColor: "red",
    },
  },
  mobile: {
    format: {
        //backgroundColor: "green",
    },
  },
  format: {},
};

// Apply mediaChange to set the format property
style.format = mediaChange(style.mobile.format, style.desktop.format);
export default style;