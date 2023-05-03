import "./styles/FirstPageMainCard.scss";

const FirstPageMainCard = ({ poster, name, description, price }) => {
  return (
    <div className="cardFirstPage">
      <div className="cardInfo">
        <h3 className="cardNameFirstPage">{name}</h3>
        <span className="cardDescriptionFirstPage">{description}</span>
        <div className="cardSpacer"></div>
        <span className="cardPriceFirstPage">{price}</span>
      </div>
      <img src={poster} className="cardPosterFirstPage" />
    </div>
  );
};

export default FirstPageMainCard;
