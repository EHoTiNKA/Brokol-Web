import "./styles/MainCard.scss";

const MainCard = ({ poster, name, description, price }) => {
  return (
    <div className="card">
      <img src={poster} className="cardPoster" />
      <div className="cardsText">
        <p className="cardName">{name}</p>
        <p className="cardText1">{description}</p>
        <p className="cardText2">{price}</p>
      </div>
    </div>
  );
};

export default MainCard;
