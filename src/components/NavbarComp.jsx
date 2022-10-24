import { useState } from "react";
import logo from "../assets/images/logo.png";
import "./nav.css";
function NavbarComp() {
  const [show, setShow] = useState(false);
  const toggle = (e) => {
    setShow(!show);
    if (show) {
      document.getElementsByName("body").style.overflow = "hidden";
    } else {
      document.getElementsByName("body").style.overflowX = "hidden";
    }
  };
  return (
    <nav>
      <div className="container ">
        <div className="nav--flex">
          <div className="nav--logo">
            <a href="#">
              <img src={logo} alt="nav-logo" />
            </a>
          </div>
          <ul className="nav--list">
            <li>
              <a href="#">
                <span>
                  <svg
                    className="nav--icon"
                    width="48"
                    height="50"
                    viewBox="0 0 48 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="20.5"
                      cy="20.5"
                      r="19"
                      stroke="#47093E"
                      stroke-width="3"
                    />
                    <line
                      x1="46.9393"
                      y1="48.0607"
                      x2="33.9393"
                      y2="35.0607"
                      stroke="#47093E"
                      stroke-width="3"
                    />
                  </svg>
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>
                  <svg
                    className="nav--icon"
                    width="42"
                    height="49"
                    viewBox="0 0 42 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M40.4076 20.7226C40.4076 23.1725 39.281 26.0841 37.3889 29.1885C35.5166 32.2604 32.9972 35.3569 30.4418 38.1382C27.8918 40.9138 25.3368 43.3423 23.4169 45.0785C22.5041 45.904 21.737 46.571 21.1851 47.0423C20.6331 46.571 19.8661 45.904 18.9533 45.0785C17.0333 43.3423 14.4784 40.9138 11.9284 38.1382C9.37301 35.3569 6.85357 32.2604 4.98127 29.1885C3.08915 26.0841 1.96252 23.1725 1.96252 20.7226C1.96252 10.1062 10.5688 1.5 21.1851 1.5C31.8014 1.5 40.4076 10.1062 40.4076 20.7226Z"
                      stroke="#47093E"
                      stroke-width="3"
                    />
                    <path
                      d="M15.7653 28.6349L21.5618 13.564L27.3583 28.6349"
                      stroke="#47093E"
                      stroke-width="3"
                      stroke-linejoin="bevel"
                    />
                    <path
                      d="M17.4739 23.6926H25.6494"
                      stroke="#47093E"
                      stroke-width="3"
                      stroke-linejoin="bevel"
                    />
                  </svg>
                </span>
              </a>
            </li>
            <li onClick={toggle}>
              <span>
                <svg
                  className="nav--icon"
                  width="68"
                  height="45"
                  viewBox="0 0 68 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 4.4837C6.3473 2.88065 14.9897 1.17301 21.32 2.8695C30.8501 5.4235 38.9139 13.6762 52.957 11.1048C58.5783 10.0755 63.3366 8.24065 67 6.36585"
                    stroke="#47093E"
                    stroke-width="3"
                  />
                  <path
                    d="M1 20.1028C6.3473 18.4998 14.9897 16.7922 21.32 18.4886C30.8501 21.0426 38.9139 29.2954 52.957 26.724C58.5783 25.6947 63.3366 23.8598 67 21.985"
                    stroke="#47093E"
                    stroke-width="3"
                  />
                  <path
                    d="M1 35.7217C6.3473 34.1187 14.9897 32.411 21.32 34.1075C30.8501 36.6615 38.9139 44.9143 52.957 42.3429C58.5783 41.3136 63.3366 39.4787 67 37.6039"
                    stroke="#47093E"
                    stroke-width="3"
                  />
                </svg>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div
        className="responsive--wrapp"
        className={show ? "active--nav" : "unactive--nav"}
      >
        <div className="responsive--nav">
          <div className="container">
            <div className="responsive--flex">
              <a href="#">
                <img src={logo} alt="img" className="nav--logo" />
              </a>

              <span className="responsive--menu" onClick={toggle}>
                <svg
                  width="68"
                  height="13"
                  viewBox="0 0 68 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 4.31695C6.3473 2.7139 14.9897 1.00626 21.32 2.70275C30.8501 5.25675 38.9139 13.5095 52.957 10.9381C58.5783 9.9088 63.3366 8.0739 67 6.19911"
                    stroke="#47093E"
                    stroke-width="3"
                  />
                </svg>
              </span>
            </div>
            <ul>
              <li>
                <a href="#sale" className="res--link" onClick={toggle}>
                  Где купить
                </a>
              </li>
              <li>
                <a href="#" className="res--link" onClick={toggle}>
                  О препарате
                </a>
              </li>
              <li>
                <a href="#" className="res--link" onClick={toggle}>
                  О варикозе
                </a>
              </li>
              <li>
                <a href="#solve" className="res--link" onClick={toggle}>
                  Решение
                </a>
              </li>
              <li>
                <a href="#pro" className="res--link" onClick={toggle}>
                  Специалистам
                </a>
              </li>
              <li>
                <a href="#" className="res--link" onClick={toggle}>
                  Геморрой
                </a>
              </li>
              <span className="res--line1">
                <svg
                  width="1440"
                  height="233"
                  viewBox="0 0 1440 233"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 175.235C116.668 214.509 305.231 256.347 443.346 214.783C651.274 152.21 827.213 -49.9822 1133.61 13.0165C1256.25 38.2344 1360.07 83.1894 1440 129.122"
                    stroke="#590D56"
                  />
                </svg>
              </span>
              <span className="res--line2">
                <svg
                  width="1440"
                  height="47"
                  viewBox="0 0 1440 47"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 12.0582C116.668 4.40727 305.231 -3.74284 443.346 4.35402C651.274 16.5436 827.213 55.9316 1133.61 43.6591C1256.25 38.7465 1360.07 29.9891 1440 21.0412"
                    stroke="#590D56"
                  />
                </svg>
              </span>
              <span className="res--line3">
                <svg
                  width="1440"
                  height="126"
                  viewBox="0 0 1440 126"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 94.5286C116.668 115.611 305.231 138.069 443.346 115.758C651.274 82.1688 827.213 -26.3671 1133.61 7.45043C1256.25 20.9873 1360.07 45.119 1440 69.7754"
                    stroke="#590D56"
                  />
                </svg>
              </span>
              <span className="res--line4">
                <svg
                  width="1440"
                  height="158"
                  viewBox="0 0 1440 158"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 39.335C116.668 12.8119 305.231 -15.4418 443.346 12.6273C651.274 54.8844 827.213 191.43 1133.61 148.885C1256.25 131.855 1360.07 101.495 1440 70.4761"
                    stroke="#590D56"
                  />
                </svg>
              </span>
              <span className="res--line5">
                <svg
                  width="1440"
                  height="70"
                  viewBox="0 0 1440 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 52.2899C116.668 63.8512 305.231 76.167 443.346 63.9317C651.274 45.5119 827.213 -14.0077 1133.61 4.53733C1256.25 11.9608 1360.07 25.1943 1440 38.7155"
                    stroke="#590D56"
                  />
                </svg>
              </span>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavbarComp;
