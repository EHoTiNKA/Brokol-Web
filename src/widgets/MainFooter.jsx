import "./styles/MainFooter.css";
import ContentColumn from "../components/ContentColumn";
import BrandIconWhite from "../components/BrandIconWhite";
import FooterBlock from "./FooterBlock";
import LanguageDropDown from "../components/LanguageDropDown";
import BrocolHechTeg from "../components/BrocolHechTeg";
import FooterSocialIcon from "../components/FooterSocialIcon";



const MainFooter = () => {
  return (
    <div className="footer">
      <ContentColumn>
        <div className="footerContent">
            <FooterBlock>
                <BrandIconWhite />
            </FooterBlock>
            <FooterBlock>
              <div className="footerGrid2">
              <div className="firstGridCollumn">
              <LanguageDropDown />
              <BrocolHechTeg />
              <FooterSocialIcon />
              </div>
              <div className="secondGridCollumn">
                <p className="gridSecondp">Об MegaBrocols</p>
                <p className="gridSecondp">Станьте партнёром по доставке</p>
                <p className="gridSecondp">Станьте парнёром-рестораном</p>
              </div>
              <div className="thirdGridCollumn">
                <p className="gridThirdp">Все города</p>
                <p className="gridThirdp">Цены</p>
                <p className="gridThirdp">Помощь</p>
                <p className="gridThirdp">FAQs</p>
              </div>
              </div>
            </FooterBlock>
            <FooterBlock>
              <div className="footerGrid3">
              <p>© 2017 Uber Technologies Inc.</p>
              <p>Обработка персональных данных</p>
              <p>Пользовательское соглашение</p>
              </div>
            </FooterBlock>
        </div>
      </ContentColumn>
    </div>
  );
};

export default MainFooter;
