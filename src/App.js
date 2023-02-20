import './App.css';
import Bible from './FetchBible';
import Navbar from './Navbar';
import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header';
import Cards from './Components/Cards';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
    <Header/>
    <Bible/>
  <Cards/>
   <Footer/>
   </BrowserRouter>
    </div>
  );
}

export default App;
