import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, MemoryRouter, BrowserRouter } from 'react-router-dom';
//import { browserHistory } from 'react-router';
import HomePage from './BodyComponent/HomePage';
import NavBar from './HeaderComponent/NavBar';
import Footer from './FooterComponent/Footer';
import PlayVideo from './BodyComponent/PlayVideo';
import Korean_1 from './BodyComponent/Korean/Korean_1';
import Korean_2 from './BodyComponent/Korean/Korean_2';
class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Route name="home"  exact path="/" component={HomePage} />
          <Route name="korean"  path="/Korean_1" component={Korean_1} />
          <Route name="korean"  path="/Korean_2" component={Korean_2} />
          <Route name="video"  path="/PlayVideo" component={PlayVideo} />
          <Footer />
        </div>
        </BrowserRouter>
    )
  }
}
export default App;
