import "./styles/FirstMainBody.scss";
import ContentColumn from "../components/ContentColumn";
import FirstSvgBody from "../assets/firstSvgBody.svg";
import MainCard from "../components/MainCard";
import PosterMak from "../assets/posterMak.svg";
import Eda1 from "../assets/eda1.svg";
import Eda2 from "../assets/eda2.svg";

const FirstMainBody = () => {
  return (
    <div className="FirstMainBody">
      <ContentColumn>
        <img src={FirstSvgBody} alt="FOTO_EDA" className="firstSvgBodyWidth" />
        <div className="firstMenuContent">
          <p>Закуски</p>
          <p>Салаты</p>
          <p>Супы</p>
          <p>Горячие блюда</p>
          <p>Гарниры</p>
          <p>Десерты</p>
        </div>
        <div className="pEdit">
        <p className="p1">Закуски</p>
        </div>
        <div className="cardsContent">
          <MainCard
            poster={PosterMak}
            name="Макдональдс - Газетный"
            text1="₽ • Бургеры"
            text2="25-35 мин"
          />

          <MainCard
            poster={Eda1}
            name="DimSum & Co — ЦДМ"
            text1="₽ • Японская • Китайская • Азиатская"
            text2="40 - 50 мин"
          />

          <MainCard
            poster={Eda2}
            name="Bar BQ Cafe — Манежная"
            text1="₽ • Европейская"
            text2="30 - 40 мин"
          />
          <MainCard
            poster={Eda2}
            name="Bar BQ Cafe — Манежная"
            text1="₽ • Европейская"
            text2="30 - 40 мин"
          />
          <MainCard
            poster={Eda2}
            name="Bar BQ Cafe — Манежная"
            text1="₽ • Европейская"
            text2="30 - 40 мин"
          />
          <MainCard
            poster={Eda2}
            name="Bar BQ Cafe — Манежная"
            text1="₽ • Европейская"
            text2="30 - 40 мин"
          />
        </div>
      </ContentColumn>
    </div>
  );
};

export default FirstMainBody;
