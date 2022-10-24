import "./diagnost.css";
import doctor_img from "../assets/images/doctor.png";
import info from "../assets/images/info_img.png";
import info2 from "../assets/images/info_img2.png";
import BaseBtn from "../components/BaseBtn";
function Diagnost() {
  return (
    <section className="diagnost--section" id="solve">
      <div className="container">
        <div className="diagnost--flex">
          <div className="diagnost--left">
            <h3 className="main--header">Полезная информация</h3>
            <p className="main--par">
              ВЕНАРУС — надежный помощник в лечении варикоза, хранителъ женских
              ног на пути к ее мечте!
            </p>
          </div>
          <div className="diagnost--right">
            <div className="grid--item1 item">
              <div className="grid--info layer1">
                <p className="text">Профилак- тические упражнения</p>
              </div>
              <img src={info2} alt="img" />
            </div>
            <div className="grid--item2 item">
              <div className="grid--info layer2">
                <p className="text">Диагностика и способы лечения</p>
              </div>
              <img src={doctor_img} alt="img3" />
            </div>
            <div className="grid--item3 item">
              <div className="grid--info layer2">
                <p className="text">Рекомен- дации по питанию </p>
              </div>
              <img src={info} alt="img2" />
            </div>
            <div className="grid--item4">
              <p>Рекомен- дации по питанию </p>
            </div>
          </div>
        </div>
        <div className="diagnost--btn__wrapp">
          <BaseBtn context="Подробнее >" />
        </div>
      </div>
    </section>
  );
}
export default Diagnost;
