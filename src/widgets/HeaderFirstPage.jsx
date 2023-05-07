import "./styles/HeaderFirstPage.scss";
import { Routes, Route, Link } from "react-router-dom";
import NavBarFirstPage from "./NavBarFirstPage";
import ContentColumn from "../components/ContentColumn";
import BrandIcon from "../components/BrandIcon";
import NavBar from "./NavBar";

const HeaderFirstPage = () => {
  return (
    <div className="mainHeader">
      <ContentColumn>
        <div className="contentHeader">
          <Link to="/">
            <BrandIcon />
          </Link>
          <Routes>
            <Route path="/" element={<NavBarFirstPage />} />
            <Route path="/menu/:meal" element={<NavBar />} />
          </Routes>
        </div>
      </ContentColumn>
    </div>
  );
};

export default HeaderFirstPage;
