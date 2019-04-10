import React, {Component} from 'react';
import './Desnudas.css'
import homeLogo from "../../material_AV/equipoDesnudas.jpg"

class Desnudas extends Component {
    state = {  }
    render() { 
        return (
            <div className='wrapper'>
                <div className="homeGIF">
                    <img src={homeLogo} alt="El equipo de las desnudas"/>
                </div>
                <div className="spotify">
                    <iframe title="spotify-play-button" src="https://open.spotify.com/embed/show/6E8XEbQ0abhCQsTbFD2t5i" bg-color="green" width="80%" height="380" frameborder="0" allowtransparency="false" allow="encrypted-media"></iframe>
                </div>
            </div>
        )
    }
}
 
export default Desnudas;