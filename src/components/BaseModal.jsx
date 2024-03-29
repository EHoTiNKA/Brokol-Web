import "./styles/BaseModal.scss";
import NavButton from "./NavButton";
import { useState } from "react";

const HIDDEN_STATE = { display: "none" };
const VISIBLE_STATE = { display: "flex" };

const BaseModal = ({ buttonText, children }) => {
  const [modalStyle, setModalStyle] = useState(HIDDEN_STATE);
  const changeModalState = () => {
    if (modalStyle === HIDDEN_STATE) {
      setModalStyle(VISIBLE_STATE);
    } else {
      setModalStyle(HIDDEN_STATE); 
    }
  };

  return (
    <div className="baseModal">
      <NavButton text={buttonText} onClick={changeModalState} />
      <div
        className="modalBackGround"
        onClick={changeModalState}
        style={modalStyle}
      >
        <div className="modalContent" onClick={(e) => e.stopPropagation()} >{children}</div>
      </div>
    </div>
  );
};

export default BaseModal;
