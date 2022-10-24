import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "./video.css";
import img1 from "../assets/images/slide_img.png";
import img2 from "../assets/images/slide_img2.png";
import BaseBtn from "../components/BaseBtn";
function VideoSlider() {
  const settings = {
    breakpoints: {
      370: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      575: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      991: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  };

  return (
    <section className="video--section">
      <div className="container">
        <div className="video--slider__flex">
          <div className="video--left">
            <h3>О производстве Венарус</h3>
          </div>
          <div className="video--right">
            <Swiper
              className="parent--swiper"
              modules={[Navigation, Autoplay, A11y]}
              navigation
              autoplay={true}
              loop={true}
              breakpoints={settings}
            >
              <SwiperSlide className="video--slider__card">
                <div className="video--slider__inside">
                  <img src={img1} alt="sdasdas" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="video--slider__inside">
                  <img src={img2} alt="img" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="video--slider__inside">
                  <img src={img1} alt="img" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="video--slider__inside">
                  <img src={img2} alt="img" />
                </div>
              </SwiperSlide>
            </Swiper>

            <Swiper
              className="parent--swiper2"
              modules={[Navigation, Autoplay, A11y]}
              navigation
              autoplay={true}
              slidesPerView={2}
              spaceBetween={30}
              loop={true}
              breakpoints={settings}
            >
              <SwiperSlide className="video--slider__card">
                <div className="video--slider__inside">
                  <img src={img1} alt="sdasdas" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="video--slider__inside">
                  <img src={img2} alt="img" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="video--slider__inside">
                  <img src={img1} alt="img" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="video--slider__inside">
                  <img src={img2} alt="img" />
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="btn--wrapp">
              <BaseBtn context="Подробнее >" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default VideoSlider;
