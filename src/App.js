import {Switch, Route} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './router/Home';
import Maintenance from './router/Maintenance';
import Work from './router/Work';
import Client from './router/Client';
import Process from './router/Process';
import Contact from './router/Contact';

import './style.scss';

const App = () => {
  return (
    <div className="main">
      <Switch>
        <Route exact path="/" component={Maintenance} />
        <Route path="/work" component={Work} />
        <Route path="/client" component={Client} />
        <Route path="/process" component={Process} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;