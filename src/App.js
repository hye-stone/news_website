import './App.css';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import SecondHeader from './components/Header/SecondHeader';
import Data from './components/Sections/Data'
import './components/Style.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SecondHeader />
      <Data />
      {/* <Banner /> */}
      <Footer />
    </div>
  );
}

export default App;
