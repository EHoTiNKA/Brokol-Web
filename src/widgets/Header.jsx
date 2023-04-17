import "./styles/Header.css";
import NavBar from "./NavBar";
import ContentColumn from "../components/ContentColumn";
import Search from "../components/Search";
import BrandIcon from "../components/BrandIcon";

const Header = () => {
  return (
    <div className="mainHeader">
      <ContentColumn>
        <div className="contentHeader">
          <BrandIcon />
          <NavBar />
        </div>
      </ContentColumn>
    </div>
  );
};

export default Header;
