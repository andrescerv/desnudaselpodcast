import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
// import {

// } from 'react-social-buttons';
import './Footer.css'

class Footer extends Component {
    
     state = {
        data: ' '
      }

    render() { 
        console.log(this.state)
        console.log(this)
        return ( 
            <div id="Footer">
                <SocialIcon url="https://www.instagram.com/desnudaselpodcast/?hl=es-la" bgColor="f5ded9" fgColor="#f14139"/>
                <SocialIcon url="https://soundcloud.com/desnudas" bgColor="f5ded9" fgColor="#f14139"/>
                <SocialIcon url="https://facebook.com/" bgColor="f5ded9" fgColor="#f14139"/>
            </div>
         )
    }
}
 
export default Footer;