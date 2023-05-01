import { useState } from "react";
import "./styles/BaseDropDown.scss";

const HIDDEN_STATE = { display: "none" };
const VISIBLE_STATE = { display: "block" };

const BaseDropDown = ({ button, menu }) => {
  const [menuStyle, setMenuStyle] = useState(HIDDEN_STATE);
  const changeDropDownState = () => {
    if (menuStyle === HIDDEN_STATE) {
      setMenuStyle(VISIBLE_STATE);
    } else {
      setMenuStyle(HIDDEN_STATE);
    }
  };
  return (
    <div className="ddBase">
      <div onClick={changeDropDownState} className="ddBaseButton">
        {button}
      </div>
      <div style={menuStyle} className="ddBaseMenu">
        {menu}
      </div>
    </div>
  );
};

export default BaseDropDown;
