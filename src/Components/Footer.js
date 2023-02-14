import React from "react";
import "../css/Footer.css";

function Footer() {
  function backToTopFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div className="footer">
      <div className="backToTop">
        <span onClick={backToTopFunction} className="backToTopText">
          Back to top
        </span>
      </div>

      <div className="footerVerticalRow">
        <div className="footerLinkCol">
          <div className="footerColHead">Get to know Us</div>
          <ul>
            <li>Careers</li>
            <li>Blog</li>
            <li>About Amazon</li>
            <li>Investor Relations</li>
            <li>Amazon Devices</li>
            <li>Amazon Science </li>
          </ul>
        </div>
        <div className="footerColSpace"></div>

        <div className="footerLinkCol">
          <div className="footerColHead">Make Money with Us</div>
          <ul>
            <li>Careers</li>
            <li>Blog</li>
            <li>About Amazon</li>
            <li>Investor Relations</li>
            <li>Amazon Devices</li>
            <li>Amazon Science </li>
          </ul>
        </div>
        <div className="footerColSpace"></div>

        <div className="footerLinkCol">
          <div className="footerColHead">Amazon Payment Products</div>
          <ul>
            <li>Careers</li>
            <li>Blog</li>
            <li>About Amazon</li>
            <li>Investor Relations</li>
            <li>Amazon Devices</li>
            <li>Amazon Science </li>
          </ul>
        </div>
        <div className="footerColSpace"></div>

        <div className="footerLinkCol">
          <div className="footerColHead">Let Us Help You</div>
          <ul>
            <li>Careers</li>
            <li>Blog</li>
            <li>About Amazon</li>
            <li>Investor Relations</li>
            <li>Amazon Devices</li>
            <li>Amazon Science </li>
          </ul>
        </div>
        <div className="footerColSpace"></div>
      </div>
    </div>
  );
}

export default Footer;
