import "./styles/FirstMainBody.scss";
import { Link } from "react-router-dom";
import ContentColumn from "../components/ContentColumn";
import FirstSvgBody from "../assets/firstSvgBody.svg";
import FirstPageMainCard from "../components/FirstPageMainCard";
import Selda from "../assets/selda.png";

const FirstMainBody = () => {
  return (
    <div className="FirstMainBody">
      <ContentColumn>
        <img src={FirstSvgBody} alt="FOTO_EDA" className="firstSvgBodyWidth" />
        <div className="firstMenuContent">
          <Link to="/menu/brakfast">
            <p id="Закуски"> Закуски </p>
          </Link>
          <Link to="/menu/salads">
          <p id="Салаты">Салаты</p>
          </Link>
          <Link to="/menu/soups">
          <p id="Супы">Супы</p>
          </Link>
          <Link to="/menu/hot dishes">
          <p id="Горячие блюда">Горячие блюда</p>
          </Link>
          <Link to="/menu/side dishes">
          <p id="Гарниры">Гарниры</p>
          </Link>
          <Link to="/menu/desserts">
          <p id="Десерты">Десерты</p>
          </Link>
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
