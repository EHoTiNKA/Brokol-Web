import "./styles/MainFooter.css";
import ContentColumn from "../components/ContentColumn";
import BrandIconWhite from "../components/BrandIconWhite";
import FooterBlock from "./FooterBlock";
import LanguageDropDown from "../components/LanguageDropDown";
const MainFooter = () => {
  return (
    <div className="footer">
      <ContentColumn>
        <div className="footerContent">
            <FooterBlock>
                <BrandIconWhite />
            </FooterBlock>
            <FooterBlock>
              <LanguageDropDown />
            </FooterBlock>
        </div>
      </ContentColumn>
    </div>
  );
};

export default MainFooter;
