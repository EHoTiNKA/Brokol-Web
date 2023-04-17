import "./styles/NavBar.css";
import NavButton from "../components/NavButton";
import BasketButton from "../components/BasketButton";

const NavBar = () => {
  return (
    <div className="mainNav">
      <NavButton text="Войти" />
      <BasketButton />
    </div>
  );
};

export default NavBar;
