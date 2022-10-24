import "./card-comp.css";
function CardComp(props) {
  return (
    <div className="card--wrapp">
      <div>
        <img src={props.img_url} alt="img-card" />
      </div>
      <h3>{props.cart_info}</h3>
    </div>
  );
}
export default CardComp;
