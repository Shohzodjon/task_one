import CardComp from "../components/CardComp";
import cardImg1 from "../assets/images/card_img1.png";
import cardImg2 from "../assets/images/card_img2.png";
import cardImg3 from "../assets/images/card_img3.png";
import "./gather.css";
function GatherCard() {
  return (
    <section className="gather--card ">
      <div className="container">
        <div className="gather--card__wrapp">
          <CardComp img_url={cardImg1} cart_info="Доказанная  эффективность" />
          <CardComp
            img_url={cardImg2}
            cart_info="Новая дозировка 100 мг + 900 мг"
          />
          <CardComp
            img_url={cardImg3}
            cart_info="Удобный прием. Одна таблетка в сутки*"
          />
        </div>
      </div>
    </section>
  );
}
export default GatherCard;
