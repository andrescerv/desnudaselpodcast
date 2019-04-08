import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from './Components/Navbar/Navbar'
import Desnudas from './Components/Desnudas/Desnudas'
import Blog from './Components/Blog/Blog'
import Spotlight from './Components/Spotlight/Spotlight'
import Nosotras from './Components/Nosotras/Nosotras'
import Dona from './Components/Dona/Dona'
import Footer from './Components/Footer/Footer'
import Admin from './Components/Admin/Admin'

class App extends Component {
  render () {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Route exact path='/' component={Desnudas} />
          <Route path='/blog' component={Blog} />
          <Route path='/spotlight' component={Spotlight} />
          <Route path='/nosotras' component={Nosotras} />
          <Route path='/dona' component={Dona} />
          <Route path='/admin' component={Admin}/>
        </BrowserRouter>
        <Footer />
      </div>
    )
  }
}

export default App
