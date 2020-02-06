import React, { useState } from 'react';
import './TelaInferior.css';

function TelaInferior(props) {
    const { power } = props;

    if (power === false)
        return (
            <div className="TelaInferior center ligado">
                <div className="row">
                    <div class="col s6 pesquisar">
                        <button className="big-buttons white-text">
                            <i className="material-icons medium white-text">search</i>Pesquisar
                        </button>
                    </div>
                    <div class="col s6 sistema">
                        <button className="big-buttons white-text">
                            <i className="material-icons medium white-text">settings</i>Sistema
                        </button>
                    </div>
                </div>
            </div>
        );
    else
        return (
            <div className="TelaInferior center">
                <div className="row">
                </div>
            </div>
        );
}

module.exports = TelaInferior;