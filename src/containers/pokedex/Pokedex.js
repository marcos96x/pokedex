import React from 'react';
import PokedexSuperior from './../../components/pokedex-superior/PokedexSuperior';
import PokedexInferior from './../../components/pokedex-inferior/PokedexInferior';
import './Pokedex.css';


function Pokedex(props) {
    return (
        <div className="Pokedex">
            <div className="container">
                <div className="row  z-depth-4">
                    <PokedexSuperior navigation={props.navigation} />

                    <div className="divisoria">
                        <div className="col s1">
                            &nbsp;
                        </div>
                        <div className="col s10">
                        &nbsp;
                        </div>
                        <div className="col s1">
                        &nbsp;
                        </div>
                    </div>
                    
                    <PokedexInferior navigation={props.navigation} />
                </div>
            </div>

        </div>
    );
}

module.exports = Pokedex;