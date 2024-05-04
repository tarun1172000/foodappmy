import React from "react";
import plate from "../../../images/plate.png";

function Platerotate() {
  return (
    <>
      <div className="plate container-fluid mt-5">
        <div className="plate-img">
          <img src={plate} alt="" />
        </div>
        <div className="plate-filter ">
          <div className="filter-area mt-5 container">
          <div className="filter-main-head">
            <h5>Nutrition plans</h5>
            <h4>Choose Your Nutrition</h4>
          </div>
            <ul className="nav filter-nav nav-pills mt-4 mb-5" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  Slimming Menu
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                 
Muscle Gain Menu
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-contact-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-contact"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                >
                  Office Menu
                </button>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <div className="menu-card-filter">
                  <div className="row">
                    <div className="col-6">
                      <div className="filter-card-image">
                        <img
                          src="https://img.freepik.com/free-photo/front-view-delicious-vegetable-salad-with-various-ingredients-dark-background_179666-47169.jpg?t=st=1712810015~exp=1712813615~hmac=6ff64797a7642d103ca55c4d631067a19b80901d07747f154e72786bf9e542e7&w=900"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="filter-card-text">
                        <h4>Slimming Menu</h4>
                        <h5>800-1000 kkal</h5>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Corrupti, velit beatae consectetur adipisci
                          quidem minus vero necessitatibus, dolores in sit illo
                          eaque dolor autem! Ratione, eos? Alias architecto
                          temporibus fuga.
                        </p>
                        <h6>
                          <span>45.99</span>/week
                        </h6>
                        <div className="filter-card-text-button">
                          <button type="button">order now</button>
                          <button type="button">view menu</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
               <div className="menu-card-filter">
                  <div className="row">
                    <div className="col-6">
                      <div className="filter-card-image">
                        <img
                          src="https://img.freepik.com/free-photo/high-angle-chicken-meal_23-2148825122.jpg?t=st=1712811891~exp=1712815491~hmac=011217464f683db73812ebdfead8d9d0aa58bd4dc4105b439ac5c998c3e6cf37&w=900"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="filter-card-text">
                        <h4>
Muscle Gain Menu</h4>
                        <h5>800-1000 kkal</h5>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Corrupti, velit beatae consectetur adipisci
                          quidem minus vero necessitatibus, dolores in sit illo
                          eaque dolor autem! Ratione, eos? Alias architecto
                          temporibus fuga.
                        </p>
                        <h6>
                          <span>45.99</span>/week
                        </h6>
                        <div className="filter-card-text-button">
                          <button type="button">order now</button>
                          <button type="button">view menu</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
              >
               <div className="menu-card-filter">
                  <div className="row">
                    <div className="col-6">
                      <div className="filter-card-image">
                        <img
                          src="https://img.freepik.com/free-photo/copy-space-plate-with-toast-avocado-breakfast_23-2148571041.jpg?t=st=1712812046~exp=1712815646~hmac=ca3a01d7f382ef27f436d0934be9489c558b5754110d6920f771773a9ad39ecb&w=900"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="filter-card-text">
                        <h4>
Office Menu</h4>
                        <h5>800-1000 kkal</h5>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Corrupti, velit beatae consectetur adipisci
                          quidem minus vero necessitatibus, dolores in sit illo
                          eaque dolor autem! Ratione, eos? Alias architecto
                          temporibus fuga.
                        </p>
                        <h6>
                          <span>45.99</span>/week
                        </h6>
                        <div className="filter-card-text-button">
                          <button type="button">order now</button>
                          <button type="button">view menu</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Platerotate;
