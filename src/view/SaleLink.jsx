import "./sale.css";
import drug from "../assets/images/drug_img.png";
import drug2 from "../assets/images/venarus.png";
function SaleLink() {
  return (
    <section className="sale--section" id="sale">
      <div className="container">
        <div className="sale--flex">
          <div className="sale--left">
            <h3 className="main--header">Где купить</h3>
            <p className="main--par">
              Ветонизирующее средство ВЕНАРУС вы можете приобрести в аптеках
              вашего города
            </p>
          </div>
          <div className="sale--right">
            <div className="drug--imges">
              <img src={drug} alt="drug1" className="drug__img1" />
              <img src={drug2} alt="drug2" className="drug__img2" />
            </div>
            <ul>
              <li>
                <a href="#" className="sale--btn">
                  apteka.ru
                </a>
              </li>
              <li>
                <a href="#" className="sale--btn">
                  366.ru
                </a>
              </li>
              <li>
                <a href="#" className="sale--btn">
                  stolichki.ru
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
export default SaleLink;
