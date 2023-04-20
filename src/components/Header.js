import React, { useEffect, useState } from "react";
import pizzaimg from "../assets/rectangle_400.png";
import company_icon from "../assets/company_icon.png";
import vector from "../assets/vector1.png";

function Header() {
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
  console.log(windowSize);

  return (
    <>
      {windowSize.innerWidth > 400 && (
        <div className="header_main">
          <div className="header_details">
            <div className="icon">
              <img src={company_icon} className="company_icon" alt="" />
            </div>
            <div>
              <h1>
                Discover the <span>Best</span> Food and Drinks
              </h1>
            </div>
            <div>
              <p>
                Naturally made Healthcare Products for the better care & support
                of your body
              </p>
            </div>
            <div>
              <button>Explore Now!</button>
            </div>
          </div>
          <div className="header_headline">
            <img src={pizzaimg} alt="" className="pizza_img" />
            <img src={vector} alt="" className="vector_img" />
            <button>Get in touch</button>
          </div>
        </div>
      )}
      {windowSize.innerWidth <= 400 && (
        <div className="header_main_mob">
          <div className="header_headline_mob">
            <div className="first">
              <img src={pizzaimg} className="pizza_img_mob" alt="" />
              <div className="second">
                <img src={vector} className="second" alt="" />
              </div>
            </div>
            <button>Get in touch</button>
          </div>

          <div className="header_details_mob">
            <div>
              <h1>
                Discover the <span>Best</span> Food and Drinks
              </h1>
            </div>
            <div>
              <p>
                Naturally made Healthcare Products for the better care & support
                of your body
              </p>
            </div>
            <div>
              <button>Explore Now!</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
