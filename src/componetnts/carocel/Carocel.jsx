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
        className="mySwiper text-red-400"
      >
        <SwiperSlide>
          <div className='bg-[url("/image.jpg")] bg-cover bg-center space-y-28 flex flex-col items-center justify-center min-h-[500px]'>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold  md:w-[95%]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Architecto, sint.
            </h2>
            <p className="font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim in
              ab pariatur, fugit perspiciatis quia expedita dolorem sit
              perferendis soluta repellendus incidunt dolor ut eius, nam nemo!
              Porro est at possimus cupiditate molestiae animi vero aperiam
              tempora!
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='bg-[url("/image.jpg")] bg-cover bg-center space-y-28 flex flex-col items-center justify-center min-h-[500px]'>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold md:w-[95%]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Architecto, sint.
            </h2>
            <p className="font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim in
              ab pariatur, fugit perspiciatis quia expedita dolorem sit
              perferendis soluta repellendus incidunt dolor ut eius, nam nemo!
              Porro est at possimus cupiditate molestiae animi vero aperiam
              tempora!
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='bg-[url("/image.jpg")] bg-cover bg-center space-y-28 flex flex-col items-center justify-center min-h-[500px]'>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold md:w-[95%]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Architecto, sint.
            </h2>
            <p className="font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim in
              ab pariatur, fugit perspiciatis quia expedita dolorem sit
              perferendis soluta repellendus incidunt dolor ut eius, nam nemo!
              Porro est at possimus cupiditate molestiae animi vero aperiam
              tempora!
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='bg-[url("/image.jpg")] bg-cover bg-center space-y-28 flex flex-col items-center justify-center min-h-[500px]'>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold md:w-[95%]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Architecto, sint.
            </h2>
            <p className="font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim in
              ab pariatur, fugit perspiciatis quia expedita dolorem sit
              perferendis soluta repellendus incidunt dolor ut eius, nam nemo!
              Porro est at possimus cupiditate molestiae animi vero aperiam
              tempora!
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
