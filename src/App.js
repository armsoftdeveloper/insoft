import "./App.css"
/***** Bootstrap *****/
import 'bootstrap/dist/css/bootstrap.min.css';
/***** Components *****/
import Header from './Components/Header/Header';
import Article from "./Components/Article/Article";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Header/>
      <Article/>
      <Footer/>
    </div>
  );
}

export default App;
