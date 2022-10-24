import slider_img from "../assets/images/venarus.png";
import play from "../assets/images/play_icon.svg";
import download from "../assets/images/download.svg";
import location from "../assets/images/location.svg";
import BaseBtn from "./BaseBtn";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import "./slider.css";

function SliderCard() {
  return (
    <div className="slider--comp">
      <div className="slider--left">
        <h1>НАДЕЖНЫЙ ПОМОЩНИК В ЛЕЧЕНИИ ВАРИКОЗА</h1>

        <div className="left--flex">
          <a href="#">
            <span>
              <img src={play} alt="img" />
            </span>
            <span>Схема приема</span>
          </a>
          <a href="#">
            <span>
              <img src={download} alt="img" />
            </span>
            <span>Инструкция</span>
          </a>
          <a href="#">
            <span>
              <img src={location} alt="img" />
            </span>
            <span>Где купить</span>
          </a>
        </div>
      </div>
      {/* end of lef side */}
      <div className="slider--right">
        <Swiper
          slidesPerView={1}
          modules={[Navigation, Autoplay, A11y]}
          navigation
          autoplay={true}
          loop={true}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className="right--img__wrap">
              <img src={slider_img} alt="img" className="slider--img1 " />
              <img src={slider_img} alt="img" className="slider--img2" />
              <img src={slider_img} alt="img" className="slider--img3" />
            </div>
            <div className="slider--btn__wrapp">
              <BaseBtn context="Где купить >" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="">
            <div className="right--img__wrap">
              <img src={slider_img} alt="img" className="slider--img1 " />
              <img src={slider_img} alt="img" className="slider--img2" />
              <img src={slider_img} alt="img" className="slider--img3" />
            </div>
            <div className="slider--btn__wrapp">
              <BaseBtn context="Где купить >" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="right--img__wrap">
              <img src={slider_img} alt="img" className="slider--img1 " />
              <img src={slider_img} alt="img" className="slider--img2" />
              <img src={slider_img} alt="img" className="slider--img3" />
            </div>
            <div className="slider--btn__wrapp">
              <BaseBtn context="Где купить >" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="right--img__wrap">
              <img src={slider_img} alt="img" className="slider--img1 " />
              <img src={slider_img} alt="img" className="slider--img2" />
              <img src={slider_img} alt="img" className="slider--img3" />
            </div>
            <div className="slider--btn__wrapp">
              <BaseBtn context="Где купить >" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
export default SliderCard;
