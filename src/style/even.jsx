import mediaChange from "./mediaChange";

const Even = {
    desktop: {
    format: {
        display: "inline-block",
        justifyContent: "center",
        marginRight: "100px",
        marginLeft: "100px",
        //backgroundColor: "red",
    },
  },
  mobile: {
    format: {
        //display: "table-row",
        justifyContent: "center",
        marginBottom: "20px",
        marginTop: "40px",
        //backgroundColor: "green",
    },
  },
  format: {},
};

// Apply mediaChange to set the format property
Even.format = mediaChange(Even.mobile.format, Even.desktop.format);

console.log(Even.format);

export default Even;


/*
import mediaChange from "./mediaChange";

const Even = {
    desktop: {
    format: {

      backgroundColor: "blue",
    },
  },
  mobile: {
    format: {


      //marginRight: "150px",
      backgroundColor: "red",
    },
  },
  format: {},
};
*/