//import logo from './logo.svg';
import './App.css';
import Header from './component/header';
import Footer from './component/footer';
import Home from './component/home';
import Navbar from './component/navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
        <div className="App">
              <Header />
              <Navbar />
              <Router>
                    <Switch>
                          <Route path="/profile"><div><p>This is Profile page</p></div></Route>
                          <Route path="/contact"><div><p>This is Contact page</p></div></Route>
                          <Route path="/application"><div><p>This is Application page</p></div></Route>
                          <Route path="/"><Home /></Route>
                    </Switch>
              </Router>
              <Footer />
        </div>
  );
}
export default App;