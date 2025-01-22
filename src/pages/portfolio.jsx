import portStyle from "../style/portfolioStyle";
import portAllStyle from "../style/portAllStyle";

export default function Portfolio() {
  return (
      <div style={portAllStyle.format}>
        <h1>Portfolio</h1>
        <p>
Here is some stuff I have worked on in the past.
        </p>
      <ul style={portStyle.format}>
          <h2>The Daily Drip</h2>
          <img src="src\assets\dailyDripImg.PNG" alt="Image of the front page of the daily drip website"  width="200" height="150"/>
        <li> This project is about keeping track of your water intake out a long span of time.</li>
        <li>Github: <a href='https://github.com/Gavin-Scot-Stockwell/The-Daily-Drip?tab=readme-ov-file'>The Daily Drip Github</a></li>
        <li>Website: <a href="https://gavin-scot-stockwell.github.io/The-Daily-Drip/">The Daily Drip Website</a></li>
      </ul>

      <ul style={portStyle.format}>
          <h2>Company</h2>
          <img src="src\assets\companyImg.PNG" alt="Image of company program in action"  width="254" height="291"/>
        <li> This project named Company, is a very basic form for updating employees, departments, roles and more.</li>
        <li>Github: <a href='https://github.com/Gavin-Scot-Stockwell/Company'> Github</a></li>
        <li>Video: <a href="https://www.youtube.com/watch?v=XmuNgnl5d2k"> Company Video</a></li>
      </ul>

      <ul style={portStyle.format}>
          <h2>Professional README Generator</h2>
          <img src="src\assets\prgImg.PNG" alt="Image of the front page of generator in action"  width="217" height="159"/>
        <li> This project is made to make a readme for a number of projects.</li>
        <li>Github: <a href='https://github.com/Gavin-Scot-Stockwell/Professional-README-Generator'>Professional README Generator Github</a></li>
        <li>Video: <a href="https://www.youtube.com/watch?v=ZniXqRTkx50"> PRG Video</a></li>
      </ul>

      <ul style={portStyle.format}>
          <h2>Vehicles</h2>
          <img src="src\assets\carsImg.PNG" alt="Image of the front page of Vehicles app in action"  width="217" height="159"/>
        <li> This project is just a fun way to build a car and some other vehicles.</li>
        <li>Github: <a href='https://github.com/Gavin-Scot-Stockwell/Vehicles'> Github</a></li>
        <li>Video: <a href="https://www.youtube.com/watch?v=f-OX7oOCc3I"> Vehicles Video</a></li>
      </ul>

      </div>
    );
  }
  