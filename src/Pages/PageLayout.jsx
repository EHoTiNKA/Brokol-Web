import { Route, Routes } from "react-router-dom";
import HeaderFirstPage from "../widgets/HeaderFirstPage";
import FirstMainBody from "../widgets/FirstMainBody";
import MainFooter from "../widgets/MainFooter";
import MainBody from "../widgets/MainBody";
import "./PageLayout.scss";

const PageLayout = () => {
  return (
    <div className="pageLayout">
      <HeaderFirstPage />
      <Routes>
        <Route path="/" element={<FirstMainBody/>} />
        <Route path="/menu/:mealName" element={<MainBody/>} />
      </Routes>
      <div className="spacer"></div>
      <MainFooter />
    </div>
  );
};
 
export default PageLayout;
