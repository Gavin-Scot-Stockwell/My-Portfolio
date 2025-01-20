import { Link, useLocation } from "react-router-dom";
import style from "../style/navStyle";
const moreStyle = {
  placement: {
position: "absolute",
    top: "0",
    zIndex: "1",
    backgroundColor: "#bfbf48",
    borderRadius: '5px',
  },
};

function NavTabs() {
  const currentPages = useLocation().pathname;

  return (
    <header style={moreStyle.placement} className="nav nav-tabs">
      <nav className="nav-item" style={style.format}>
        <Link
          to="/"
          className={currentPages === "/" ? "nav-link active" : "nav-link"}
        >
          Home
        </Link>
      </nav>
      <nav className="nav-item" style={style.format}>
        <Link
          to="/aboutMe"
          className={
            currentPages === "/aboutMe" ? "nav-link active" : "nav-link"
          }
        >
          About
        </Link>
      </nav>
      <nav className="nav-item" style={style.format}>
        <Link
          to="/portfolio"
          className={
            currentPages === "/portfolio" ? "nav-link active" : "nav-link"
          }
        >
          Portfolio
        </Link>
      </nav>
      <nav className="nav-item" style={style.format}>
        <Link
          to="/contact"
          className={
            currentPages === "/contact" ? "nav-link active" : "nav-link"
          }
        >
          Contact
        </Link>
      </nav>
      <nav className="nav-item" style={style.format}>
        <Link
          to="/resume"
          className={
            currentPages === "/resume" ? "nav-link active" : "nav-link"
          }
        >
          Resume
        </Link>
      </nav>
    </header>
  );
}

export default NavTabs;
