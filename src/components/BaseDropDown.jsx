import { useState } from "react";
import useOutsideClick from "../hooks/useOutsideClick";
import "./styles/BaseDropDown.scss";

const BaseDropDown = ({ button, menu }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openDropDown = () => {
    setIsOpen(true);
    console.log("openDropDown");
  };

  const closeDropDown = () => {
    setIsOpen(false);
  };

  const ref = useOutsideClick(closeDropDown);
  return (
    <div className="ddBase">
      <div onClick={openDropDown} className="ddBaseButton">
        {button}
      </div>

      {isOpen ? (
        <div ref={ref} className="ddBaseMenu">
          {menu}
        </div>
      ) : null}
    </div>
  );
};

export default BaseDropDown;
