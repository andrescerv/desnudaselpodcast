import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav } from 'reactstrap'

// Styles
const NavbarStyle = {
  margin: '0px',
  padding: '10px'
}

const NavbarBrandStyle = {
  margin: '0px',
  padding: '0px',
  fontsize: '1em',
}

class desnudasNavbar extends Component {
  constructor (props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
  }
  toggle () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render () {
    return (
      <div id='navbar'>
        <Navbar light expand='md' style={NavbarStyle}>
          <NavbarBrand style={NavbarBrandStyle}>
            <Link to='/' className='mainButton'>desnudas</Link>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>

              <Link to='/blog' className='button'>blog</Link>

              <Link to='/spotlight' className='button'>spotlight</Link>

              <Link to='/nosotras' className='button'>nosotras </Link>

              <Link to='/dona' className='button'>dona</Link>

            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
//   render () {
//     return (
//       <div id='navbar'>
//         <Navbar expand='md'>
//           <NavbarBrand>
//             <Link to='/' className='button'>
//               <h1>Desnudas</h1>
//             </Link>
//           </NavbarBrand>
//           <NavbarToggler onClick={this.toggle} bg-color='#f14139' />
//           <Collapse isOpen={this.state.isOpen} navbar>
//             <Nav className='ml-auto' navbar>
//                 <button bg-color="black">Hola</button>
//               <NavItem>
//                 <Link to='/Blog' className='button'>
//                   <h2>Blog</h2>
//                 </Link>
//               </NavItem>
//               <NavItem>
//                 <Link to='/Spotlight' className='button'>
//                   <h2>Spotlight</h2>
//                 </Link>
//               </NavItem>
//               <Link to='/Nosotras' className='button'>
//                 <h2>Nosotras</h2>
//               </Link>
//               <Link to='/Dona' className='button'>
//                 <h2>Dona</h2>
//               </Link>
//             </Nav>
//           </Collapse>
//         </Navbar>
//       </div>
//     )
//   }
// }

export default desnudasNavbar
