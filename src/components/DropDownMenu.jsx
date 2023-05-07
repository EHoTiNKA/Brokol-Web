import "./styles/DropDownMenu.scss";
import { Link } from "react-router-dom";

const DropDownMenu = () => {
  return (
    <div className="ddMenu">
      <ul>
        <Link to="/menu/brakfast">
          <li>
            <a id="Завтрак">Завтрак</a>
          </li>
        </Link>
        <Link to="/menu/brakfast">
          <li>
            <a id="Обед">Обед</a>
          </li>
        </Link>
        <Link to="/menu/brakfast">
          <li>
            <a id="Ужин">Ужин</a>
          </li>
        </Link>
        <Link to="/menu/brakfast">
          <li>
            <a id="Десерт">Десерт</a>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default DropDownMenu;
