import React from "react";
import "./About.css";
import me from "../../images/me.jpg";
import { Link } from "react-router-dom";
import AOS from 'aos';
import resume from "../../images/resume.pdf"
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function Favourite() {
  return (
    <div className="aboutContainer" id="nostalgia">
      <h2  >About me</h2>
      <div className="aboutContent">
        <div className="textContent" >
          <p>
            A front-end developer who enjoys creating innovative websites and
            applications that helps create positive impact and makes life
            simpler. A dedicated worker with a love for web development and
            knowledge of web design. I've developed multiple websites and
            applications using HTML, CSS, JavaScript, React.
          </p>
        </div>
       <div className="img_wrapper"> <img className="aboutImg" src={me}></img></div>
      </div>
    <div className="btnCont">
 
       <div className="btn_wrapper"><a style={{textDecoration:"none", borderRadius:"7px"}} href={resume} target="_blank" className="aboutBtn"> Resume </a></div> 
       <Link to="/fun" style={{textDecoration: "none"}}> <div className="ghost_fun">🖥️</div></Link>
        </div>
    </div>
  );
}

export default Favourite;
