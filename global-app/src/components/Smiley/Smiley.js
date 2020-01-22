import React  from 'react';
import './smiley.css';
import { observer } from "mobx-react";

import timeRuleService from '../../services/TimeRule.Service/TimeRule.Service';

const Smiley = observer((props) => {
    const store = props.store;
    let currentSmileyClassName = 'smiley-';
    let smileyColor = '';

    timeRuleService(store, () => smileyColor = 'green', 
                           () => smileyColor = 'yellow', 
                           () => smileyColor = 'red');
    
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