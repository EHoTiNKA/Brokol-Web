import "./styles/NavBarFirstPage.scss";
import BasketButton from "../components/BasketButton";
import BaseModal from "../components/BaseModal";
import SignInModal from "../components/SignInModal";

const NavBarFirstPage = () => {
  return (
    <div className="mainNav">
      <div className="navSpacer"></div>
      <BaseModal buttonText={"Войти"}> 
      <SignInModal /> 
      </BaseModal>
      <BasketButton />
    </div>
  );
};

export default NavBarFirstPage;
