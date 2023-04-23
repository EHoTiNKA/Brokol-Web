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
                <p>Об UberEats</p>
                <p>Станьте партнёром по доставке</p>
                <p>Станьте парнёром-рестораном</p>
              </div>
              <div className="thirdGridCollumn">
                <p>Все города</p>
                <p>Цены</p>
                <p>Помощь</p>
                <p>FAQs</p>
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
