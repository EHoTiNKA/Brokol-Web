import "./App.scss";
import Header from "./widgets/Header";
import MainBody from "./widgets/MainBody";
import MainFooter from "./widgets/MainFooter";

function App() {
  return (
    <div className="App">
      <Header />
      <MainBody />
      <MainFooter />
    </div>
  );
}

export default App;