import React from 'react';
import Pokedex  from './../pokedex/Pokedex';
import './IndexPage.css';

function IndexPage(props) {
    return (
        <div className="container IndexPage">
            <Pokedex navigation={props.navigation} />
        </div>
    );
}

module.exports = IndexPage;