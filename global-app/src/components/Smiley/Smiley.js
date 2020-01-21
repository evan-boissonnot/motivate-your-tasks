import React  from 'react';
import './smiley.css';
import { observer } from "mobx-react";

const Smiley = observer((props) => {
    const store = props.store;
    let currentSmileyClassName = 'smiley-';
    let smileyColor = 'green';

    if (store.pourcent >= 30 && store.pourcent < 65) {
        smileyColor = 'yellow';
    } else if (store.pourcent < 30) {
        smileyColor = 'red';
    }
    currentSmileyClassName = currentSmileyClassName + smileyColor;

    return (
        <div className={ currentSmileyClassName }>
            <div className="left-eye"></div>
            <div className="right-eye"></div>
            <div className="smile"></div>
        </div>
    );
});
    
export default Smiley;