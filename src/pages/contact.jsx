import Email from '../components/email';
import Even from "../style/even";

export default function Contact() {
return (
      <div style={Even.format}>
        <h1>Contact</h1>
        <img src="./assets/Gavin boot.jpg" alt="A picture of me" width="50%" height="50%" style={{ justifyContent:'center', }}/>
        <p>
      <Email/>
        </p>
      </div>

    );
  }
