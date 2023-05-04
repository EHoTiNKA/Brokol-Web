import "./styles/NavBarFirstPage.scss";
import BasketButton from "../components/BasketButton";
import BaseModal from "../components/BaseModal";
import SignInModal from "../components/SignInModal";
import FoodDesignerModal from "../components/FoodDesignerModal";

const NavBarFirstPage = () => {
  return (
    <div className="mainNav">
      <BaseModal buttonText={"Конструктор блюд"}>
        <FoodDesignerModal />
      </BaseModal>
      <div className="navSpacer"></div>
      <BaseModal buttonText={"Войти"}>
        <SignInModal />
      </BaseModal>
      <BasketButton />
    </div>
  );
};

export default NavBarFirstPage;
