import "./styles/NavBar.css";
import NavButton from "../components/NavButton";
import BasketButton from "../components/BasketButton";
import DropDownButton from "../components/DropDownButton";
import BaseModal from "../components/BaseModal";
import SignIn from "./SignIn";

const NavBar = () => {
  return (
    <div className="mainNav">
      <DropDownButton />
      <div className="navSpacer"></div>
      <BaseModal buttonText={"Войти"}> 
      <SignIn /> 
      </BaseModal>
      <BasketButton />
    </div>
  );
};

export default NavBar;
