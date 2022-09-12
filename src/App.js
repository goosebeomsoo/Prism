import {Switch, Route} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './router/Home';
import Work from './router/Work';
import Process from './router/Process';
import Contact from './router/Contact';

import Maintenance from './router/Maintenance';
// import Client from './router/Client';

import footer_logo from './assets/icon/footer-logo.svg';
import header_logo from './assets/icon/header-logo.svg';

import './style.scss';

const App = () => {
  /*
  <Header header_logo={header_logo}/>
  <Route exact path="/" component={Home} />
  <Route path="/work" component={Work} />
  <Route path="/process" component={Process} />
  <Route path="/contact" component={Contact} /> 
  <Footer footer_logo={footer_logo}/>
  */
  return (
    <div className="main">
        <Switch>
          <Maintenance/>
        </Switch>
    </div>
  );
}

export default App;