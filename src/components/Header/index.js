import React from 'react';
import "./Header.css";
import pokedexTitle from './../../images/pokedex-title.png';
export default function Header() {
  return (
    <div className="Header">
        <img src={pokedexTitle} className="title" alt="pokedex" />
    </div>
  );
}
