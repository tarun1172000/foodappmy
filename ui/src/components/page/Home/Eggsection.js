import React, { useState, useEffect } from "react";
import pndorg from "./100-organic-food-certified-label_1017-19669-removebg-preview.png";

function Eggsection() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const elementOffset = document.querySelector(".orignal-imgadd ").offsetTop;
    

      // Calculate when to trigger the animation
      if (scrollPosition > "1540") {
        setIsVisible(true);
      }
    }
    // Add event listener when component mounts
    window.addEventListener("scroll", handleScroll);
    
    // Clean up event listener when component unmounts
    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, []);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <div
            style={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className=""
          >
            <div className="egg-sec-img">
              <img
                src="https://img.freepik.com/premium-photo/omelet-with-fried-mushrooms-fresh-herbs-concrete-background-delicious-healthy-breakfast_114420-2693.jpg?w=360"
                alt=""
              />
              <img
              className={` orignal-imgadd ${isVisible ? 'orignal-img' : ''}`}
               
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "contain",
                }}
                src={pndorg}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="eggsectione-text">
            <h4>Eggs with Bacon and Salad</h4>

            <div className="nutrian-section">
              <p>
                Energy: <span>498 kkal</span>
              </p>
              <p>
                Protein: <span>26 g</span>
              </p>
              <p>
                Fat: <span>8 g</span>
              </p>
              <p>
                Carbohydrates: <span>49 g</span>
              </p>

              <h6>$7.99</h6>
              <div className="filter-card-text-button">
                <button type="button">order now</button>
                <button type="button">view menu</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eggsection;
