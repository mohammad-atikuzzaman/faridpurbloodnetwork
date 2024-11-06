// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Navigation, Pagination, Keyboard, Autoplay } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        cssMode={true}
        loop={true}
        navigation={true}
        pagination={true}
        keyboard={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Keyboard, Autoplay]}
        className="mySwiper text-gray-500"
      >
        <SwiperSlide>
          <img src="/fbnslide1.jpg" alt="" />
        </SwiperSlide>

        <SwiperSlide>
         <img src="/fbnslide2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
         <img src="/fbnslide3.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
