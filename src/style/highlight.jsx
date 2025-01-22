//#5e3984
import mediaChange from "./mediaChange";


const light = {
    desktop: {
        place: {
        //marginLeft: "50px",
        borderRadius: "10px",
        backgroundImage: 'linear-gradient(to right, #5e3984 , #db4c87)',
        boxShadow: '5px 5px 5px #bebe48',
      },
  },
  mobile: {
    place: {
       // marginLeft: "50px",
        borderRadius: "10px",
        backgroundImage: 'linear-gradient(to right, #5e3984 , #db4c87)',
        boxShadow: '5px 5px 5px #bebe48',
    },
  },
  place: {},
};

// Apply mediaChange to set the format property
light.place = mediaChange(light.mobile.place, light.desktop.place);
export default light;
