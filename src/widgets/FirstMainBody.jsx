import "./styles/FirstMainBody.scss";
import ContentColumn from "../components/ContentColumn";
import FirstSvgBody from "../assets/firstSvgBody.svg";
import FirstPageMainCard from "../components/FirstPageMainCard";
import Selda from "../assets/selda.png";
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

        <div className="cadrsGridFirstPage">
          <FirstPageMainCard
            poster={Selda}
            name="Сельдь на бородинском хлебе"
            description="С яйцом и огурцом"
            price="450 ₽"
          />
          <FirstPageMainCard
            poster={Selda}
            name="Сельдь на бородинском хлебе"
            description="С яйцом и огурцом"
            price="450 ₽"
          />
          <FirstPageMainCard
            poster={Selda}
            name="Сельдь на бородинском хлебе"
            description="С яйцом и огурцом"
            price="450 ₽"
          />
          <FirstPageMainCard
            poster={Selda}
            name="Сельдь на бородинском хлебе"
            description="С яйцом и огурцом"
            price="450 ₽"
          />
          <FirstPageMainCard
            poster={Selda}
            name="Сельдь на бородинском хлебе"
            description="С яйцом и огурцом"
            price="450 ₽"
          />
          <FirstPageMainCard
            poster={Selda}
            name="Сельдь на бородинском хлебе"
            description="С яйцом и огурцом"
            price="450 ₽"
          />
        </div>
      </ContentColumn>
    </div>
  );
};

export default FirstMainBody;
