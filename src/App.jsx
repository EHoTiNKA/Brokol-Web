import "./App.scss";
import Header from "./widgets/Header";
import MainBody from "./widgets/MainBody";
import MainFooter from "./widgets/MainFooter";
import FirstPage from "./widgets/FirstPage";
import SecondPage from "./widgets/SecondPage";

function App() {
  return (
    <div className="App">
      <FirstPage/>
      {/* <SecondPage/> */}
    </div>
  );
}

export default App;