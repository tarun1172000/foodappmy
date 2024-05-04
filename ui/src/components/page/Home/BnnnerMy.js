import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import bannervideo from '../../../images/bannervideo.mp4';
import { Navigation } from 'swiper/modules';
import logo from "../../../images/boyde.png"
import Fade from "react-reveal/Fade";
function BnnnerMy() {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide>
      <div className='banner'>
           <img src="https://img.freepik.com/free-photo/top-view-nachos-guacamole_23-2147812126.jpg?w=900&t=st=1712639030~exp=1712639630~hmac=4479e87afb86cd9238d291829bc751cfdd5043ba9194e984f941c28da5016c7e" alt="" />
        {/* <video autoPlay loop muted>
          <source src={bannervideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        
        <div className='ovelybanner'>

           <img src={logo} alt="" />
        </div>
        
      </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default BnnnerMy;
