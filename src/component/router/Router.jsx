import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SliderFacebook from '../wiews/SliderFacebook';
import SliderInstagram from '../wiews/SliderInstagram';
import SliderTwitter from '../wiews/SliderTwitter';
import Navbar from '../Burger_Menu/NavBar';
// import Connexion from '../Connexion';

export default function Routter() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' />
          <Route path='/facebook' component={SliderFacebook} />
          <Route path='/instagram' component={SliderInstagram} />
          <Route path='/twitter' component={SliderTwitter} />
        </Switch>
      </Router>
    </div>
  );
}
