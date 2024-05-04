import React from "react";
import Navbar from "../components/Navbar";
import BnnnerMy from "../components/page/Home/BnnnerMy";
import Bootomthree from "../components/page/Home/Bootomthree";
import Platerotate from "../components/page/Home/Platerotate";
import Eggsection from "../components/page/Home/Eggsection";
import Footer from "../components/Footer";
import Shop from "../components/page/Home/Shop";

function Home() {
  return (
    <>
      <Navbar />
      <div className="header-sec ">

      <BnnnerMy />
      <div className="three-box container ">
        <div className="row">
          <div className="col-4 three-box-1">
            <div className="row">
              <div className="col-5">
                <div className="three-box-icon-img">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/7541/7541708.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-7">
                <div className="three-box-text">
                  <h6>Free delivery service</h6>
                  <p>
                    Nam malesuada eros nec luctus laoreet. Fusce sodales
                    consequat
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 three-box-2">
            <div className="row">
              <div className="col-5">
                <div className="three-box-icon-img">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/3080/3080729.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-7">
                <div className="three-box-text">
                  <h6>Easy payments</h6>
                  <p>
                  Class aptent taciti sociosqu ad litora torquent per conubia nostra
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 three-box-3">
            <div className="row">
              <div className="col-5">
                <div className="three-box-icon-img">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/2058/2058065.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-7">
                <div className="three-box-text">
                  <h6>Exact calories</h6>
                  <p>
                  Nam malesuada eros nec luctus laoreet. Fusce sodales consequat
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Bootomthree/>
      <Platerotate/> 
      <br />
      <div>

      <Eggsection/>
      </div>
      <Shop/>
      <Footer/>
    </>
  );
}

export default Home;
