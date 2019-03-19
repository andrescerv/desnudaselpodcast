import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Desnudas from './Components/Desnudas/Desnudas';
import Navbar from './Components/Navbar/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar/>
        <header className="App-header">
          <p>
            Desnudas, el podcast.
          </p>
        </header>
        <Desnudas/>
      </div>
    );
  }
}

export default App;
