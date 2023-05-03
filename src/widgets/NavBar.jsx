import "./styles/NavBar.scss";
import NavButton from "../components/NavButton";
import BasketButton from "../components/BasketButton";
import DropDownButton from "../components/DropDownButton";
import BaseModal from "../components/BaseModal";
import SignInModal from "../components/SignInModal";
import FoodDesigner from "../components/FoodDesignerButton";

const NavBar = () => {
  return (
    <div className="mainNav">
      <DropDownButton />
      <FoodDesigner text={'Конструктор блюд'} />
      <div className="navSpacer"></div>
      <BaseModal buttonText={"Войти"}> 
      <SignInModal /> 
      </BaseModal>
      <BasketButton />
    </div>
  );
};

export default NavBar;
