import React, {Component} from 'react';
import './Desnudas.css'
import homeLogo from "../../material_AV/equipoDesnudas.jpg"
import BasicSCWidget from '../Soundcloud/BasicSCWidget';

const resolveUrl = 'https://soundcloud.com/desnudas/cortorreo-4-alejandra-cartagena-el-metoo-y-nuestros-derechos'
const clientId = 'xIa292zocJP1G1huxplgJKVnK0V3Ni9D'


class Desnudas extends Component {
    state = {  }
    render() { 
        return (
            <div className='wrapper'>
                <div className="homeGIF">
                    <img src={homeLogo} alt="El equipo de las desnudas"/>
                </div>
                <BasicSCWidget 
                    resolveUrl={resolveUrl}
                    clientId={clientId}/>
                <div className="spotify">
                    <iframe title="spotify-play-button" src="https://open.spotify.com/embed/show/6E8XEbQ0abhCQsTbFD2t5i" bg-color="green" width="80%" height="380" frameborder="0" allowtransparency="false" allow="encrypted-media"></iframe>
                </div>
            </div>
        )
    }
}
 
export default Desnudas;