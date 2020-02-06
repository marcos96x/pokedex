import React, { useState } from 'react';
import VisorInferior from '../../containers/visor/Visor';
import { Link } from 'react-router-dom';
import TelaInferior from './../telaInferior/TelaInferior';

import './PokedexInferior.css';

function PokedexInferior(props) {

    const [cursorHorizontal, setCursorHorizontal] = useState(0);
    const [cursorVertical, setCursorVertical] = useState(0);
    const [power, setPower] = useState(true);
    const url = power ? "/on" : "/off";

    function handleCursor(direcao) {
        switch (direcao) {
            case "cima":
                if (cursorVertical === 2)
                    setCursorVertical(0);
                else
                    setCursorVertical(cursorVertical + 1);
                break;
            case "baixo":
                if (cursorVertical === 0)
                    setCursorVertical(2);
                else
                    setCursorVertical(cursorVertical - 1);
                break;
            case "direita":
                if (cursorHorizontal === 2)
                    setCursorHorizontal(0);
                else
                    setCursorHorizontal(cursorHorizontal + 1);
                break;
            case "esquerda":
                if (cursorHorizontal === 0)
                    setCursorHorizontal(2);
                else
                    setCursorHorizontal(cursorHorizontal - 1);
                break;
            default: 
                setCursorVertical(0);
                setCursorHorizontal(0);
                break;
        }
    }

    return (
        <div className="Pokedexinferior">
            <div className="row">
                <div className="col s3 center">
                    <div className="row">
                        <br />
                        <Link to={url}>
                            <button class="btn  btn-large btn-floating black white-text" onClick={() => setPower(!power)}>
                                <i className="material-icons large">settings_power</i>
                            </button>
                        </Link>
                    </div>
                    <br />
                    <button class="btn btn-floating black white-text" onClick={() => handleCursor("cima")}>
                        <i className="material-icons large">keyboard_arrow_up</i>
                    </button>
                    <br />
                    <button class="btn btn-floating black white-text" onClick={() => handleCursor("esquerda")}>
                        <i className="material-icons large">navigate_before</i>
                    </button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button class="btn btn-floating black white-text" onClick={() => handleCursor("direita")}>
                        <i className="material-icons large">navigate_next</i>
                    </button>
                    <br />
                    <button class="btn btn-floating black white-text" onClick={() => handleCursor("baixo")}>
                        <i className="material-icons large">keyboard_arrow_down</i>
                    </button>
                </div>
                <div className="col s6">
                    <VisorInferior>
                        <TelaInferior power={power} horizontal={cursorHorizontal} vertical={cursorVertical} />
                    </VisorInferior>
                </div>

                <div className="col s3 botoesAcao center">
                    <button className="btn btn-floating black white-text">A</button> <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button className="btn btn-floating black white-text">B</button>
                </div>
            </div>
        </div>
    );
}

module.exports = PokedexInferior;