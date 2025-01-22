import aboutStyle from "../style/aboutStyle";


export default function aboutMe() {
    return (
      <div style={aboutStyle.format}>
        <h1>About Me</h1>
        <img src="./assets/Gavin boot.jpg" alt="A picture of me" width="50%" height="50%" style={{ justifyContent:'center', }}/>
        <p>
      Hello!
      I am Gavin Scot Stockwell. I am a full stack web developer with a passion for game design.
      I have a Bachelor's degree in biology and is currently working through the University of Oregon's coding bootcamp.
      My goal is one day break into the games industry create and lead game development.
        </p>
      </div>
    );
  }
  