import "./styles/MainBody.scss";
import Search from "../components/Search";
import ContentColumn from "../components/ContentColumn";
import MainCard from "../components/MainCard";
import PosterMak from "../assets/posterMak.svg";
import Eda1 from "../assets/eda1.svg";
import Eda2 from "../assets/eda2.svg";
import BrakfastBody from "./BrakfastBody";
import SaladsBody from "./SaladsBody";

const MainBody = () => {
  return (
    <div className="body">
      <ContentColumn>
        <BrakfastBody/>
      </ContentColumn>
    </div>
  );
};

export default MainBody;
