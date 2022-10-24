import "./action.css";

function Action() {
  return (
    <section className="action--section">
      <div className="container">
        <div className="action--flex">
          <div className="action--left">
            <h3 className="main--header">Комплексное действие</h3>
            <p className="main--par">
              Венарус показан для терапии симптомов хронических заболеваний вен
              (устранения и облегчения симптомов).
            </p>
          </div>
          {/* end of action left */}
          <div className="action--right">
            <div className="border--top ">
              <div className="action--circle circle1">
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 124 123"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M73.3316 7.85018L73.49 7.9515L73.6759 7.92336L86.9762 5.90999L94.3797 17.1413L94.4832 17.2983L94.6645 17.3482L107.634 20.9186L109.829 34.1902L109.86 34.3757L110.005 34.495L120.401 43.0319L117.008 56.049L116.961 56.2309L117.045 56.399L123.07 68.4263L114.676 78.9381L114.559 79.085L114.567 79.2728L115.18 92.7108L103.236 98.8997L103.069 98.9862L103 99.1613L98.0938 111.686L84.6655 112.482L84.4778 112.493L84.3439 112.626L74.7671 122.072L62.176 117.337L62 117.271L61.824 117.337L49.2329 122.072L39.6561 112.626L39.5222 112.493L39.3345 112.482L25.9062 111.686L20.9996 99.1613L20.9311 98.9862L20.7641 98.8997L8.82046 92.7108L9.43253 79.2728L9.44108 79.085L9.32377 78.9381L0.929948 68.4263L6.95482 56.399L7.03903 56.2309L6.99161 56.049L3.599 43.0319L13.9949 34.495L14.1402 34.3757L14.1709 34.1902L16.3661 20.9186L29.3355 17.3482L29.5168 17.2983L29.6203 17.1413L37.0237 5.90999L50.3241 7.92336L50.51 7.9515L50.6684 7.85018L62 0.601126L73.3316 7.85018Z"
                    stroke="white"
                  />
                </svg>
              </div>
              <a href="#" className="action--btn">
                Подробнее >
              </a>
              <div className="action--card">
                <h3>Помогает предотвратить судороги</h3>
              </div>
            </div>
            <div className="border--top ">
              <a href="#" className="action--btn">
                Подробнее >
              </a>
              <div className="action--card">
                <h3>Способствует снижению тяжести в ногах</h3>
                <div className="action--circle circle2">
                  <div className="pattern--wrapp">
                    <svg
                      className="pattern1"
                      width="140"
                      height="91"
                      viewBox="0 0 140 91"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.37262 90.7227C3.83215 82.3259 14.7349 62.438 38.6698 50.0604C68.5883 34.5885 113.669 33.0851 138.848 0.385646"
                        stroke="white"
                      />
                    </svg>
                    <svg
                      className="pattern2"
                      width="94"
                      height="138"
                      viewBox="0 0 94 138"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.415049 137.492C18.9482 132.21 59.9407 110.566 75.6458 66.2468C91.3509 21.9274 93.7113 4.02745 92.9284 0.617391"
                        stroke="white"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="border--top ">
              <a href="#" className="action--btn">
                Подробнее >
              </a>

              <div className="action--circle circle3">
                <div className="circle--parent">
                  <div className="circle--child"></div>
                </div>
              </div>
              <div className="action--card">
                <h3>Способствует снижению болевых ощущений</h3>
              </div>
            </div>
            <div className="border--top  ">
              <a href="#" className="action--btn">
                Подробнее >
              </a>

              <div className="action--card">
                <h3>Помогает уменьшить отеки</h3>
                <div className="action--circle circle4">
                  <div>
                    <svg
                      className="ellips--right"
                      width="68"
                      height="124"
                      viewBox="0 0 68 124"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M68 1.00757C30.9969 1.00757 1 31.0045 1 68.0076C1 90.9002 12.4814 111.111 30 123.197"
                        stroke="white"
                      />
                    </svg>

                    <svg
                      className="ellips--left"
                      width="68"
                      height="136"
                      viewBox="0 0 68 136"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 135.008C37.0031 135.008 67 105.011 67 68.0076C67 31.0045 37.0031 1.00757 0 1.00757"
                        stroke="white"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="border--top last--line">
              <a href="#" className="action--btn">
                Подробнее >
              </a>
              <div className="action--circle circle5">
                <div>
                  <svg
                    className="arrow--left"
                    width="59"
                    height="69"
                    viewBox="0 0 59 69"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="1"
                      y1="36.0076"
                      x2="59"
                      y2="36.0076"
                      stroke="white"
                    />
                    <path
                      d="M34.5 1.00757L0.999998 36.0076L34.5 68.0076"
                      stroke="white"
                    />
                  </svg>
                  <svg
                    className="arrow--right"
                    width="79"
                    height="69"
                    viewBox="0 0 79 69"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M78 33.0076L0 33.0076" stroke="white" />
                    <path
                      d="M44.5 68.0076L78 33.0076L44.5 1.00757"
                      stroke="white"
                    />
                  </svg>
                </div>
              </div>
              <div className="action--card">
                <h3>Оказывает ангиопротекторное и венотонизурующее действие</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Action;
