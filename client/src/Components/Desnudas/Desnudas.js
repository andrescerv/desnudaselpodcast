import React, {Component} from 'react';
import './Desnudas.css'

class Desnudas extends Component {
    state = {  }
    render() { 
        return (
            <div class='wrapper'>
                <div class="homeGIF">
                    <img src="/home/andres/Documents/devlife/BEDU/desnudaselpodcast/material_AV/equipoDesnudas.jpeg" alt="El equipo de las desnudas"/>
                </div>
                <div class="spotify">
                    <iframe title="spotify-play-button" src="https://open.spotify.com/embed/show/6E8XEbQ0abhCQsTbFD2t5i" bg-color="green" width="80%" height="380" frameborder="0" allowtransparency="false" allow="encrypted-media"></iframe>
                </div>
            </div>
        )
    }
}
 
export default Desnudas;