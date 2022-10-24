import footerLogo from "../assets/images/footer_logo.svg";
import "./footer.css";
function Footer() {
  return (
    <footer>
      <div className="container">
        <h3>БИОЛОГИЧЕСКИ АКТИВНАЯ ДОБАВКА. НЕ ЯВЛЯЕТСЯ ЛЕКАРСТВОМ</h3>
        <div className="footer--flex">
          <p className="footer--left">Сообщить о нежелательном явлении</p>
          <div className="footer--main">
            <p className="footer--main__par">
              Условия пользования сайтом и файлами Cookies
            </p>
            <div>
              <p className="footer--main__par2">
                г. Москва, ул. Шаболовка, д. 31, стр. 11, 4 этаж
              </p>
              <a href="tel:+7 (495) 555-55-55">Телефон: +7 (495) 555-55-55</a>
            </div>
          </div>
          <div className="footer--right">
            <ul>
              <li>
                <a href="#">
                  <svg
                    width="33"
                    height="20"
                    viewBox="0 0 33 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M31.3689 1.66406C31.5447 0.960938 31.3689 0.375 30.3142 0.375H26.8572C25.9783 0.375 25.5681 0.84375 25.3337 1.37109C25.3337 1.37109 23.5759 5.64844 21.115 8.46094C20.2947 9.22266 19.9431 9.51562 19.4744 9.51562C19.2986 9.51562 18.947 9.22266 18.947 8.51953V1.66406C18.947 0.785156 18.7126 0.375 17.9509 0.375H12.5603C11.9744 0.375 11.6814 0.785156 11.6814 1.19531C11.6814 2.01562 12.9119 2.19141 13.0291 4.53516V9.63281C13.0291 10.7461 12.8533 10.9805 12.3845 10.9805C11.2126 10.9805 8.40015 6.64453 6.70093 1.72266C6.34937 0.785156 5.9978 0.375 5.1189 0.375H1.66187C0.724365 0.375 0.48999 0.84375 0.48999 1.37109C0.48999 2.30859 1.66187 6.82031 5.93921 12.8555C8.8103 16.957 12.8533 19.125 16.4861 19.125C18.6541 19.125 18.947 18.6562 18.947 17.8359C18.947 13.9102 18.7712 13.5 19.8259 13.5C20.3533 13.5 21.2322 13.793 23.283 15.7852C25.6267 18.1289 26.0369 19.125 27.3259 19.125H30.783C31.7791 19.125 32.2478 18.6562 31.9548 17.6602C31.3103 15.668 26.9158 11.4492 26.6814 11.1562C26.1541 10.5117 26.3298 10.2188 26.6814 9.63281C26.6814 9.63281 30.9001 3.65625 31.3689 1.66406Z"
                      fill="#7A7A7A"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg
                    width="28"
                    height="27"
                    viewBox="0 0 28 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.4087 0.625H3.78369C2.20166 0.625 0.971191 1.91406 0.971191 3.4375V24.0625C0.971191 25.6445 2.20166 26.875 3.78369 26.875H11.811V17.9688H8.11963V13.75H11.811V10.5859C11.811 6.95312 13.979 4.90234 17.2603 4.90234C18.9009 4.90234 20.5415 5.19531 20.5415 5.19531V8.76953H18.7251C16.9087 8.76953 16.3228 9.88281 16.3228 11.0547V13.75H20.3657L19.7212 17.9688H16.3228V26.875H24.4087C25.9321 26.875 27.2212 25.6445 27.2212 24.0625V3.4375C27.2212 1.91406 25.9321 0.625 24.4087 0.625Z"
                      fill="#7A7A7A"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg
                    width="31"
                    height="25"
                    viewBox="0 0 31 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.8076 6.65625C28.9795 5.77734 30.0342 4.72266 30.8545 3.49219C29.7998 3.96094 28.5693 4.3125 27.3389 4.42969C28.6279 3.66797 29.5654 2.49609 30.0342 1.03125C28.8623 1.73438 27.5146 2.26172 26.167 2.55469C24.9951 1.32422 23.4131 0.621094 21.6553 0.621094C18.2568 0.621094 15.5029 3.375 15.5029 6.77344C15.5029 7.24219 15.5615 7.71094 15.6787 8.17969C10.5811 7.88672 6.01074 5.42578 2.96387 1.73438C2.43652 2.61328 2.14355 3.66797 2.14355 4.83984C2.14355 6.94922 3.19824 8.82422 4.89746 9.9375C3.90137 9.87891 2.90527 9.64453 2.08496 9.17578V9.23438C2.08496 12.2227 4.19434 14.6836 7.00684 15.2695C6.53809 15.3867 5.95215 15.5039 5.4248 15.5039C5.01465 15.5039 4.66309 15.4453 4.25293 15.3867C5.01465 17.8477 7.2998 19.6055 9.99512 19.6641C7.88574 21.3047 5.24902 22.3008 2.37793 22.3008C1.85059 22.3008 1.38184 22.2422 0.913086 22.1836C3.6084 23.9414 6.83105 24.9375 10.3467 24.9375C21.6553 24.9375 27.8076 15.6211 27.8076 7.47656C27.8076 7.18359 27.8076 6.94922 27.8076 6.65625Z"
                      fill="#7A7A7A"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg
                    width="27"
                    height="27"
                    viewBox="0 0 27 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.4625 9.17969C11.4625 10.4102 12.5172 11.4648 13.8063 11.4648C15.0367 11.4648 16.0914 10.4688 16.0914 9.17969C16.0914 7.83203 15.0367 6.83594 13.8063 6.83594C12.5172 6.83594 11.4625 7.83203 11.4625 9.17969ZM26.9313 3.4375C26.9313 1.91406 25.6422 0.625 24.1188 0.625H3.49377C1.91174 0.625 0.681274 1.91406 0.681274 3.4375V24.0625C0.681274 25.6445 1.91174 26.875 3.49377 26.875H24.1188C25.6422 26.875 26.9313 25.6445 26.9313 24.0625V3.4375ZM9.00159 9.17969C9.00159 6.54297 11.1696 4.375 13.8063 4.375C16.3844 4.375 18.5524 6.54297 18.5524 9.17969C18.5524 11.7578 16.3844 13.8672 13.8063 13.8672C11.1696 13.8672 9.00159 11.7578 9.00159 9.17969ZM19.2555 14.4531C19.7242 15.3906 19.1969 15.8594 17.9664 16.6211C16.9703 17.2656 15.6227 17.5 14.6852 17.6172L15.4469 18.3789L18.2594 21.1914C19.2555 22.2461 17.6149 23.8281 16.5602 22.832C15.8571 22.1289 14.861 21.1328 13.8063 20.0195L10.9938 22.832C9.93909 23.8281 8.29846 22.1875 9.35315 21.1914C10.0563 20.4297 11.0524 19.4336 12.1071 18.3789L12.8688 17.6172C11.9899 17.5 10.5836 17.2656 9.58752 16.6211C8.35706 15.8594 7.82971 15.3906 8.29846 14.4531C8.59143 13.9258 9.29456 13.457 10.2906 14.2773C10.2906 14.2773 11.6383 15.332 13.8063 15.332C15.9156 15.332 17.2633 14.2773 17.2633 14.2773C18.2594 13.457 18.9625 13.9258 19.2555 14.4531Z"
                      fill="#7A7A7A"
                    />
                  </svg>
                </a>
              </li>
            </ul>

            <div className="footer--right__flex">
              <img src={footerLogo} alt="footer logo" />

              <p>
                Создание сайтов
                <br />
                Фарм-студия №1 в Рунете
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;