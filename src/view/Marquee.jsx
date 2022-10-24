import Marquee from "react-fast-marquee";
import "./marquee.css";
function MarqueePage() {
  return (
    <section className="section">
      <Marquee speed={40} gradient={false} className="marquee--section">
        <p className="marquee--text">получить скидку 10% >>></p>
        <p className="marquee--text">получить скидку 10% >>></p>
        <p className="marquee--text">получить скидку 10% >>></p>
        <p className="marquee--text"> получить скидку 10% >>></p>
        <p className="marquee--text">получить скидку 10% >>></p>
        <p className="marquee--text">получить скидку 10% >>></p>
        <p className="marquee--text">получить скидку 10% >>></p>
        <p className="marquee--text"> получить скидку 10% >>></p>
        <p className="marquee--text"> получить скидку 10% >>></p>
        <p className="marquee--text">получить скидку 10% >>></p>
        <p className="marquee--text"> получить скидку 10% >>></p>
        <p className="marquee--text">получить скидку 10% >>></p>
      </Marquee>
    </section>
  );
}
export default MarqueePage;
