import React, { useState } from 'react';
import pokedex from './../../images/pokedex-title.png';
import picachu from './../../images/picachu.png';
import bulbasaur from './../../images/bulbasaur.png';
import caterpie from './../../images/caterpie.png';
import './TelaSuperior.css';

function TelaSuperior(props) {
    const { ligado } = props;

    if (ligado === "on")
        return (
            <div className="TelaSuperior ligado center" id="ligado">
                <div className="row">
                    <img src={pokedex} alt="pokedex" className="pokedex-title" />
                </div>
                <div className="row center">
                    <div class="col s4">
                        <img src={picachu} alt="pokedex" className="pokedex-pokemons-title1" />
                    </div>
                    <div class="col s4">
                        <img src={bulbasaur} alt="pokedex" className="pokedex-pokemons-title2" />
                    </div>
                    <div class="col s4">
                        <img src={caterpie} alt="pokedex" className="pokedex-pokemons-title3" />
                    </div>
                </div>
            </div>
        );
    else
        return (
            <div className="TelaSuperior desligado center ">
                <div className="row">
                    
                </div>
            </div>
        );
}

module.exports = TelaSuperior;