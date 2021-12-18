//import logo from './logo.svg';
import './App.css';
import Header from './component/header';
import Footer from './component/footer';
import Home from './component/home';
import Navbar from './component/navbar';

function App() {
  return (
        <div className="App">
              <Header/>
              <Navbar/>
              <Home/>
              <Footer/>
        </div>
                 
  );
}
export default App;