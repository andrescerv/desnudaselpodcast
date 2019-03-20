import React, {Component} from 'react';
import './Desnudas.css'
import DesnudasNavbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

class Desnudas extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div id="Navbar">
                    <DesnudasNavbar/>
                </div>
                <div class="Contenido">
                    Contenido
                </div>
                <div id="Footer">
                    <Footer/>
                </div>
            </div>
         )
    }
}
 
export default Desnudas;