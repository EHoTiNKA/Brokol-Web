import "./styles/FirstMainBody.scss";
import ContentColumn from "../components/ContentColumn";
import FirstSvgBody from "../assets/firstSvgBody.svg";
import FirstPageMainCard from "../components/FirstPageMainCard";
import NavButton from '../components/NavButton';
import Selda from "../assets/selda.png";
import Eda1 from "../assets/eda1.svg";
import Eda2 from "../assets/eda2.svg";

const FirstMainBody = () => {
  return (
    <div className="FirstMainBody">
      <ContentColumn>
        <img src={FirstSvgBody} alt="FOTO_EDA" className="firstSvgBodyWidth" />
        <div className="firstMenuContent">
          <p id='Закуски'> Закуски</p>
          <p id='Салаты'>Салаты</p>
          <p id='Супы'>Супы</p>
          <p id='Горячие блюда'>Горячие блюда</p>
          <p id='Гарниры'>Гарниры</p>
          <p id='Десерты'>Десерты</p>
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
