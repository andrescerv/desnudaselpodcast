import React, {Component} from 'react';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Navbar,
    Nav,
    NavItem,} from 'reactstrap';

class DesnudasNavbar extends Component {
    state = {  }
    render() { 
        return ( 
            <div id="Navbar">
                <Navbar expand="md">
                    <button href="/">
                        <h1>Desnudas</h1>
                    </button>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <button href="/">
                                <h3>Blog</h3>
                            </button>
                        </NavItem>
                        <NavItem>
                            <button href="/">
                                <h3>Spotlight</h3>
                            </button>
                        </NavItem>
                        <NavItem>
                            <button href="/">
                                <h3>Nosotras</h3>
                            </button>
                        </NavItem>
                        <NavItem>
                            <button href="/">
                                <h3>Dona</h3>
                            </button>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
         )
    }
}
 
export default DesnudasNavbar;