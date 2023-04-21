import "./styles/MainFooter.css";
import ContentColumn from "../components/ContentColumn";
import BrandIconWhite from "../components/BrandIconWhite";
import FooterBlock1 from "./FooterBlock1";

const MainFooter = () => {
  return (
    <div className="footer">
      <ContentColumn>
        <div className="footerContent">
            <FooterBlock1>
                <div className="block1Content">fdsfsf</div>
            </FooterBlock1>
        </div>
      </ContentColumn>
    </div>
  );
};

export default MainFooter;
