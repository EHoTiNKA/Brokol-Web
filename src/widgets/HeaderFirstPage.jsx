import "./styles/HeaderFirstPage.scss";
import NavBarFirstPage from "./NavBarFirstPage";
import ContentColumn from "../components/ContentColumn";
import BrandIcon from "../components/BrandIcon";


const HeaderFirstPage = () => {
  return (
    <div className="mainHeader">
      <ContentColumn>
        <div className="contentHeader">
          <BrandIcon />
          <NavBarFirstPage />
        </div>
      </ContentColumn> 
    </div>
  );
};

export default HeaderFirstPage;
