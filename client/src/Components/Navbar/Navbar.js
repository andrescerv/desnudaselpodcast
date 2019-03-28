import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
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
                        <Link to="/">Desnudas</Link>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                                <Link to="/Blog">Blog</Link>
            
                        </NavItem>
                        <NavItem>
                            Spotlight">
                                <Link to="/Spotlight">
                                    Spotlight
                                </Link>
            
                        </NavItem>
                        <NavItem>
                            Nosotras">
                                <Link to="/Nosotras">
                                    Nosotras
                                </Link>
            
                        </NavItem>
                        <NavItem>
                            Dona">
                                <Link to="/Dona">
                                    Dona
                                </Link>
            
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
         )
    }
}
 
export default DesnudasNavbar;