import React from 'react';
import VisorSuperior from '../../containers/visor/Visor';
import TelaSuperior from './../telaSuperior/TelaSuperior';

import './PokedexSuperior.css';

function PokedexSuperior(props) {
    return (
        <div className="PokedexSuperior">
            <div className="row">
                <div className="col s3">

                </div>

                <div className="col s6">
                    <VisorSuperior>
                        <TelaSuperior ligado={props.navigation} />
                    </VisorSuperior>
                    <br />

                </div>

                <div className="col s3">

                </div>
            </div>
        </div>
    );
}

module.exports = PokedexSuperior;