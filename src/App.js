import './App.css';
import About from './Components/About';
import Movies from './Components/Movies';
import Food from './Components/Food';
import Books from './Components/Books';
import Weather from "./Components/Weather";
import Songs from './Components/Songs';
import Tourism from "./Components/Tourism";
import NavigationBar from './Components/NavigationBar';
import CarouselsSlides from "./Components/CarouselsSlides";
import Cardview from './Components/Cardview';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { Footer } from "./Components/Footer";

function App(props) {
  return (
    <BrowserRouter>
      <Switch>
        <div className="App">
          <NavigationBar />                                                 
          <Route path="/" exact component={CarouselsSlides} />
          <Route path="/" exact component={Cardview} />
          <Route path="/" exact component={About} />
          <Route path="/movies" exact component={Movies} />
          <Route path="/food" exact component={Food} />
          <Route path="/tourism" exact component={Tourism} />
          <Route path="/weather" exact component={Weather} />
          <Route path="/books" exact component={Books} />
          <Route path="/songs" exact component={Songs} />
          <Footer />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
