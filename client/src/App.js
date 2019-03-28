import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './Components/Navbar/Navbar'
import Desnudas from './Components/Desnudas/Desnudas';
import Blog from './Components/Blog/Blog';
import Spotlight from './Components/Spotlight/Spotlight';
import Nosotras from './Components/Nosotras/Nosotras';
import Dona from './Components/Dona/Dona';
import Footer from './Components/Footer/Footer'


class App extends Component {
  render() {
    return ( 
      <div>
        <BrowserRouter>
          <Navbar/>
          <Route exact path = "/" component={ Desnudas }/>
          <Route path = "/Blog" component={ Blog }/>
          <Route path = "/Spotlight" component={ Spotlight }/>
          <Route path = "/Nosotras" component={ Nosotras }/>
          <Route path = "/Dona" component={ Dona }/>
        </BrowserRouter>
        <Footer/>
      </div>
    );
  }
}

export default App;
