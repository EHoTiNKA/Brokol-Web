import "./App.scss";
import Header from "./src/widgets/Header";
import MainBody from './src/widgets/MainBody'
import MainFooter from './src/widgets/MainFooter';

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
