import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SliderFacebook from '../wiews/SliderFacebook';
import SliderFbBg from '../wiews/SliderFbBg';
import SliderTwitter from '../wiews/SliderTwitter';
import SliderTwitterBg from '../wiews/SliderTwitterBg';
import Navbar from '../Burger_Menu/NavBar';
// import Connexion from '../Connexion';

export default function Routter() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" />
          <Route path="/twitter" component={SliderTwitter} />
          <Route path="/twitter-no-img" component={SliderTwitterBg} />
          <Route path="/facebook" component={SliderFacebook} />
          <Route path="/facebook-no-img" component={SliderFbBg} />
        </Switch>
      </Router>
    </div>
  );
}
