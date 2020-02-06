import React from 'react';

import './Visor.css';

function Visor(props) {
    return (
        <div className="Visor z-depth-2">
            {props.children}
        </div>
    );
}

module.exports = Visor;