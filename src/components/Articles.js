import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import article1img from "../assets/grilled_tomatoes.png";
import left from "../assets/leftarrow.svg";
import right from "../assets/rightarrow.svg";
import crunchwrap from "../assets/crunchwrap.png";
import postworkout from "../assets/postworkout.png";
import howtogrill from "../assets/howtogrill.png";
import soup from "../assets/soup.png";
import travel from "../assets/travel.png";

function Articles() {
  const [currPage, setCurrPage] = useState(1);
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
  const handlePageIndex = (curr) => {
    console.log(curr);
    if (curr === currPage) {
      return;
    }
    setCurrPage(curr);
  };

  return (
    <>
      {windowSize.innerWidth > 400 && (
        <div className="article">
          <h1>Latest Articles</h1>

          {currPage === 1 && (
            <>
              <div className="article_display">
                <div>
                  <img src={article1img} alt="" />
                  <h3>Grilled Tomatoes at Home</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard...
                  </p>
                  <button>Read More</button>
                </div>
                <div>
                  <img src={travel} alt="" />
                  <h3>Snacks for Travel</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard...
                  </p>
                  <button>Read More</button>
                </div>
                <div>
                  <img src={postworkout} alt="" />
                  <h3>Post-workout Recipes</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard...
                  </p>
                  <button>Read More</button>
                </div>
              </div>
            </>
          )}
          {currPage === 2 && (
            <>
              <div className="article_display">
                <div>
                  <img src={howtogrill} alt="" />
                  <h3>How To Grill Corn</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard...
                  </p>
                  <button>Read More</button>
                </div>
                <div>
                  <img src={crunchwrap} alt="" />
                  <h3>Crunchwrap Supreme</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard...
                  </p>
                  <button>Read More</button>
                </div>
                <div>
                  <img src={soup} alt="" />
                  <h3>Broccoli Cheese Soup</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard...
                  </p>
                  <button>Read More</button>
                </div>
              </div>
            </>
          )}
          <div className="page_index">
            <img src={left} alt="" onClick={() => handlePageIndex(1)} />
            {currPage}/2
            <img src={right} alt="" onClick={() => handlePageIndex(2)} />
          </div>
        </div>
      )}
      {windowSize.innerWidth <= 400 && (
        <div>
          <div className="article_mob">
            <h1>Latest Articles</h1>

            {currPage === 1 && (
              <>
                <div className="article_display_mob">
                  <div>
                    <img src={article1img} alt="" />
                    <h3>Grilled Tomatoes at Home</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry
                      standard...
                    </p>
                    <button>Read More</button>
                  </div>
                  <div>
                    <img src={travel} alt="" />
                    <h3>Snacks for Travel</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry
                      standard...
                    </p>
                    <button>Read More</button>
                  </div>
                  <div>
                    <img src={postworkout} alt="" />
                    <h3>Post-workout Recipes</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry
                      standard...
                    </p>
                    <button>Read More</button>
                  </div>
                </div>
              </>
            )}
            {currPage === 2 && (
              <>
                <div className="article_display_mob">
                  <div>
                    <img src={howtogrill} alt="" />
                    <h3>How To Grill Corn</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry
                      standard...
                    </p>
                    <button>Read More</button>
                  </div>
                  <div>
                    <img src={crunchwrap} alt="" />
                    <h3>Crunchwrap Supreme</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry
                      standard...
                    </p>
                    <button>Read More</button>
                  </div>
                  <div>
                    <img src={soup} alt="" />
                    <h3>Broccoli Cheese Soup</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry
                      standard...
                    </p>
                    <button>Read More</button>
                  </div>
                </div>
              </>
            )}
            <div className="page_index">
              <img src={left} alt="" onClick={() => handlePageIndex(1)} />
              {currPage}/2
              <img src={right} alt="" onClick={() => handlePageIndex(2)} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Articles;
