import "./styles/NavBarFirstPage.scss";
import BasketButton from "../components/BasketButton";
import BaseModal from "../components/BaseModal";
import SignInModal from "../components/SignInModal";
import FoodDesigner from "../components/FoodDesigner";

const NavBarFirstPage = () => {
  return (
    <div className="mainNav">
      <FoodDesigner text={'Конструктор блюд'} />
      <div className="navSpacer"></div>
      <BaseModal buttonText={"Войти"}> 
      <SignInModal /> 
      </BaseModal>
      <BasketButton />
    </div>
  );
};

export default NavBarFirstPage;
