import "./styles/NavBar.scss";
import NavButton from "../components/NavButton";
import BasketButton from "../components/BasketButton";
import DropDownButton from "../components/DropDownButton";
import BaseModal from "../components/BaseModal";
import SignInModal from "../components/SignInModal";

const NavBar = () => {
  return (
    <div className="mainNav">
      <DropDownButton />
      <div className="navSpacer"></div>
      <BaseModal buttonText={"Войти"}> 
      <SignInModal /> 
      </BaseModal>
      <BasketButton />
    </div>
  );
};

export default NavBar;
