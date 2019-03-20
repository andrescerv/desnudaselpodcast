import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Desnudas from './Components/Desnudas/Desnudas';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Desnudas/>
        {/* <header className="App-header">
          <p>
            Desnudas, el podcast.
          </p>
        </header> */}
      </div>
    );
  }
}

export default App;
