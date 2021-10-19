import "../css/homeCard.css";
export default function () {
  return (
    <div className="homeCardContainer">
      <div className="Card">
        <div className="part1-alert">
          <img
            width="100%"
            height="70px"
            src="https://www.spliiit.com/img/subscription/netflix.png"
          />
          <div className="round-white-svg little-round"></div>
        </div>
        <div className="part-alert-container">
          <div className="imageCircle"></div>
        </div>
      </div>
    </div>
  );
}
