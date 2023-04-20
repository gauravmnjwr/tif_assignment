import React, { useEffect, useState } from "react";
import about_img from "../assets/about.png";

function About() {
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
        <div className="about_main">
          <div className="about_first">
            <img src={about_img} alt="" />
          </div>
          <div className="about_second">
            <h1>About Us</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries.
            </p>
            <button>Read More</button>
          </div>
        </div>
      )}
      {windowSize.innerWidth <= 400 && (
        <div className="about_main_mob">
          <h1>About Us</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </p>
          <button>Read More</button>
        </div>
      )}
    </>
  );
}

export default About;
