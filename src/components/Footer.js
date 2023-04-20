import React, { useEffect, useState } from "react";
import icon from "../assets/company_icon.png";
import fb from "../assets/Path 1.png";
import twitter from "../assets/Path 2.png";
import insta from "../assets/Path 3.png";

function Footer() {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  return (
    <>
      {windowSize.innerWidth > 400 && (
        <div className="footer_main">
          <div className="footer_icon">
            <img src={icon} alt="" />
          </div>
          <div className="contact">
            <h3>Contact Us</h3>
            <p>
              Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM
              Market, XYZ-343434
            </p>
            <p>example2020@gmail.com</p>
            <p>(904) 443-0343</p>
          </div>
          <div className="more">
            <h3>More</h3>
            <p>About Us</p>
            <p>Products</p>
            <p>Career</p>
            <p>Contact Us</p>
          </div>
          <div className="social">
            <h3>Social Links</h3>
            <div>
              <img src={insta} alt="" />
              <img src={twitter} alt="" />
              <img src={fb} alt="" />
            </div>
          </div>
        </div>
      )}
      {windowSize.innerWidth <= 400 && (
        <div className="footer_main_mob">
          <div className="footer_icon_mob">
            <img src={icon} alt="" />
          </div>
          <div className="contact_mob">
            <h3>Contact Us</h3>
            <p>
              Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM
              Market, XYZ-343434
            </p>
            <p>example2020@gmail.com</p>
            <p>(904) 443-0343</p>
          </div>
          <div className="more_mob">
            <h3>More</h3>
            <p>About Us</p>
            <p>Products</p>
            <p>Career</p>
            <p>Contact Us</p>
          </div>
          <div className="social">
            <h3>Social Links</h3>
            <div>
              <img src={insta} alt="" />
              <img src={twitter} alt="" />
              <img src={fb} alt="" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Footer;
