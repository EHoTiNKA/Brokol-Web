import "./styles/MainFooter.scss";
import ContentColumn from "../components/ContentColumn";
import BrandIconWhite from "../components/BrandIconWhite";
import FooterBlock from "./FooterBlock";
import LanguageDropDown from "../components/LanguageDropDown";
import BrocolHechTeg from "../components/BrocolHechTeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

const MainFooter = () => {
  const icons = [faTwitter, faInstagram, faTelegram];

  const [hovered, setHovered] = useState(new Array(icons.length).fill(false));
  const toggleHover = (i) => {
    const newHovered = [...hovered];
    newHovered[i] = !newHovered[i];
    setHovered(newHovered);
  };

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
                <div className="socialIcons">
                  {icons.map((icon, index) => (
                    <FontAwesomeIcon
                      icon={icon}
                      className={hovered[index] ? "fa-shake fa-3x " : "fa-3x"}
                      onMouseEnter={() => toggleHover(index)}
                      onMouseLeave={() => toggleHover(index)}
                    />
                  ))}
                </div>
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
