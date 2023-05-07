import "./styles/Header.scss";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import ContentColumn from "../components/ContentColumn";
import BrandIcon from "../components/BrandIcon";

const Header = () => {
  return (
    <div className="mainHeader">
      <ContentColumn>
        <div className="contentHeader">
          <BrandIcon />
          <Routes>
            <Route path="/menu/:meal" element={<NavBar />} />
          </Routes>
          
        </div>
      </ContentColumn>
    </div>
  );
};

export default Header;
