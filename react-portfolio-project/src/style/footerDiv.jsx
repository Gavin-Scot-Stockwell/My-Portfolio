import mediaChange from "./mediaChange";
import portStyle from "./portfolioStyle";


//this allows me to change the style based on the what is on screen
//let size = 0;
//if(portStyle.format === portStyle.mobile.format ){ 
 // size = -4000;
//}

const forDiv = {
    desktop: {
        place: {
        marginLeft: "50px",
        borderRadius: "10px",
        backgroundImage: 'linear-gradient(to right, #0c059a ,#db4c87)',
        boxShadow: '5px 10px 5px #15869d',
      },
  },
  mobile: {
    place: {
        height: "200px",
        borderRadius: "20px",
        backgroundImage: 'linear-gradient(to right, #0c059a ,#db4c87)',
        boxShadow: '10px 10px 10px #15869d',
    },
  },
  place: {},
};

// Apply mediaChange to set the format property
forDiv.place = mediaChange(forDiv.mobile.place, forDiv.desktop.place);
export default forDiv;
