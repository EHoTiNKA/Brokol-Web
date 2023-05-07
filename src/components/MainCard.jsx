import "./styles/MainCard.scss";

const MainCard = ({ poster, name, text1, text2 }) => {
  return (
    <div className="card">
      <img src={poster} className="cardPoster" />
      <div className="cardsText">
        <p className="cardName">{name}</p>
        <p className="cardText1">{text1}</p>
        <p className="cardText2">{text2}</p>
      </div>
    </div>
  );
};

export default MainCard;
