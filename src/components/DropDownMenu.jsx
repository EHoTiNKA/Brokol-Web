import "./styles/DropDownMenu.scss";
import { Link } from "react-router-dom";

const DropDownMenu = () => {
  return (
    <div className="ddMenu">
      <ul>
        <Link to="/menu/brakfast">
          <li>Закуски</li>
        </Link>
        <Link to="/menu/salads">
          <li>Салаты</li>
        </Link>
        <Link to="/menu/soups">
          <li>Супы</li>
        </Link>
        <Link to="/menu/hot dishes">
          <li>Горячие блюда</li>
        </Link>
        <Link to="/menu/side dishes">
          <li>Гарниры</li>
        </Link>
        <Link to="/menu/desserts">
          <li>Десерты</li>
        </Link>
      </ul>
    </div>
  );
};

export default DropDownMenu;
