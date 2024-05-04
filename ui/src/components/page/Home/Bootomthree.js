import React from "react";

function Bootomthree() {
  return (
    <div className="container Bootomthree--start">
      <div className="row">
        <div className="col-5">
          <div className="Bootomthree-img">
            <img
              src="https://img.freepik.com/free-photo/young-woman-eating-salad-cafe_1303-25276.jpg?t=st=1712722469~exp=1712726069~hmac=cf9015f6d3caeabf668a346a3e7095472a2a7d1139ba8e8ac035130c42fc353f&w=360"
              alt=""
            />
          </div>
        </div>
        <div className="col-7">
          <div className="Bootomthree-text">
            <h5>
              Healthy and tasty foods with <span>natural ingredients</span>
            </h5>
            <p>
              Quisque pretium dolor turpis, quis blandit turpis semper ut. Nam
              malesuada eros nec luctus laoreet. Fusce sodales consequat velit
              eget dictum. Integer ornare magna vitae ex eleifend congue. Morbi
              sit amet nisi iaculis, fringilla orci nec.
            </p>
            <div className=" Bootomthree-text-icon">
              <span>
                <i class="fa-regular fa-clock"></i> Every day from 8:00 to 12:00
              </span>
              <span>
              <i class="fa-solid fa-phone-volume"></i> +91 9205712291
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bootomthree;
