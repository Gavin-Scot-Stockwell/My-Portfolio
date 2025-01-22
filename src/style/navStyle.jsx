import mediaChange from "./mediaChange";

const style = {
    desktop: {
    format: {
        display: 'inline-block',
        zindex: '1',
        postion: 'fixed',
        //justifyContent: 'center',
        paddingRight: '150px',
        //backgroundColor: "red",
        
    },
  },
  mobile: {
    format: {
      display: 'inline-block',
      zindex: '1',
      postion: 'fixed',
      
      //justifyContent: 'center',
      paddingRight: '5px',  
      //fontSize: '10px',
      //backgroundColor: "green",
    },
  },
  format: {},
};

// Apply mediaChange to set the format property
style.format = mediaChange(style.mobile.format, style.desktop.format);
export default style;