export default function mediaChange(desktop,mobile) {
   

  
    if (window.innerWidth < 600) {
        
        return desktop;
     
    } else {

       return mobile;
      
    }
    
}
//refresh page on resize
window.addEventListener('resize', () => {window.location.reload()});

  /*
        ****Template for the object****
import mediaChange from "./mediaChange";

  const objName = {
    desktop: {
    styleName: {
        backgroundColor: "red",
    },
  },
  mobile: {
    styleName: {
        backgroundColor: "green",
    },
  },
  styleName: {},
};

// Apply mediaChange to set the format property
objName.styleName = mediaChange(objName.mobile.styleName, objName.desktop.styleName);
export default objName;
  */