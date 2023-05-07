import { Route, Routes } from "react-router-dom";
import HeaderFirstPage from "../widgets/HeaderFirstPage";
import FirstMainBody from "../widgets/FirstMainBody";
import MainFooter from "../widgets/MainFooter";
import MainBody from "../widgets/MainBody";

const PageLayout = () => {
  return (
    <div>
      <HeaderFirstPage />
      <Routes>
        <Route path="/" element={<FirstMainBody/>} />
        <Route path="/menu/:meal" element={<MainBody/>} />
      </Routes>
      <MainFooter />
    </div>
  );
};

export default PageLayout;
