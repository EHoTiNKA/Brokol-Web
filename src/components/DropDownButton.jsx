import "./styles/DropDownButton.css";
import BaseDropDown from "./BaseDropDown";
import NavButton from "./NavButton";
import DropDownMenu from "./DropDownMenu";

const DropDownButton = () => {
  return (
    <BaseDropDown
      button={<NavButton text={"Меню"} />}
      menu={<DropDownMenu />}
    />
  );
};

export default DropDownButton;
