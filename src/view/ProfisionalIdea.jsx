import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, A11y } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import slide_img from "../assets/images/pro_img.png";
import "./profisional.css";
function Profisional() {
  return (
    <section className="professional" id="pro">
      <div className="container">
        <div className="profesional--flex">
          <div className="profesional--left">
            <h3 className="main--header">Мнение специалистов</h3>
            <p className="main--par">
              Фармакотерапия — неотъемлемый компонент современного лечения
              хронического заболевания вен.
            </p>
          </div>
          <div className="profesional--right">
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              modules={[Autoplay, Pagination, A11y]}
              pagination={{ clickable: true }}
              autoplay={true}
              loop={true}
            >
              <SwiperSlide>
                <div className="slider--img__wrap">
                  <img src={slide_img} alt="img" />
                  <span className="play--video">
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 67 67"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="33.5"
                        cy="33.5"
                        r="33"
                        fill="white"
                        fill-opacity="0.3"
                        stroke="#47093E"
                      />
                      <path
                        d="M25.9601 20.4404L48.5801 33.5L25.9601 46.5597L25.9601 20.4404Z"
                        stroke="#47093E"
                      />
                    </svg>
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img src={slide_img} alt="img" />
                  <span className="play--video">
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 67 67"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="33.5"
                        cy="33.5"
                        r="33"
                        fill="white"
                        fill-opacity="0.3"
                        stroke="#47093E"
                      />
                      <path
                        d="M25.9601 20.4404L48.5801 33.5L25.9601 46.5597L25.9601 20.4404Z"
                        stroke="#47093E"
                      />
                    </svg>
                  </span>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Profisional;
