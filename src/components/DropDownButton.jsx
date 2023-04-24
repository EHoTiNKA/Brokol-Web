import "./styles/DropDownButton.css";
import BaseDropDown from "./BaseDropDown";
import NavButton from "./NavButton";
import DropDownMenu from "./DropDownMenu";

const DropDownButton = () => {
  return (
    <div className="mainDDbutton">
    <BaseDropDown
      button={<NavButton text={"Меню"} />}
      menu={<DropDownMenu />}
    />
    </div>
  );
};

export default DropDownButton;
