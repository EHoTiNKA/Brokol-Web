import "./styles/NavBar.scss";
import BasketButton from "../components/BasketButton";
import DropDownButton from "../components/DropDownButton";
import BaseModal from "../components/BaseModal";
import SignInModal from "../components/SignInModal";
import FoodDesignerModal from "../components/FoodDesignerModal";

const NavBar = () => {
  return (
    <div className="mainNav">
      <DropDownButton />
      <BaseModal buttonText={'Конструктор блюд'}>
      <FoodDesignerModal/>
      </BaseModal>
      <div className="navSpacer"></div>
      <BaseModal buttonText={"Войти"}>
      <SignInModal /> 
      </BaseModal>
      <BasketButton />
    </div>
  );
};

export default NavBar;
