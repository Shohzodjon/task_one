import "./button.css";
function BaseBtn(props) {
  return (
    <button className="base--btn">
      <span>{props.context}</span>
    </button>
  );
}
export default BaseBtn;
