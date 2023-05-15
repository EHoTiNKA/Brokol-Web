import { useState } from "react";
import useOutsideClick from "../hooks/useOutsideClick";
import "./styles/BaseDropDown.scss";

const HIDDEN_STATE = { display: "none" };
const VISIBLE_STATE = { display: "block" };

const BaseDropDown = ({ button, menu }) => {
  const [menuStyle, setMenuStyle] = useState(HIDDEN_STATE);


  const openDropDown = () => {
    setMenuStyle(VISIBLE_STATE);
    console.log("openDropDown")
  }

  const closeDropDown = () => {
    setMenuStyle(HIDDEN_STATE);
  }

  const ref = useOutsideClick(closeDropDown);
  return (
    <div className="ddBase">
      <div onClick={openDropDown} className="ddBaseButton">
        {button}
      </div>
      <div ref={ref} style={menuStyle} className="ddBaseMenu">
        {menu}
      </div>
    </div>
  );
};

export default BaseDropDown;
