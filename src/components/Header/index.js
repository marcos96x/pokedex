import React from 'react';
import "./Header.css";
import pokeball from './../../images/pokeball.png';
import pokedexTitle from './../../images/pokedex-title.png';
export default function Header() {
  return (
    <div className="Header">
        <img src={pokeball} alt="pokeball" className="pokeballImage" />
        <img src={pokedexTitle} className="title" alt="pokedex" />
    </div>
  );
}
