import React from 'react';
import { observer } from "mobx-react";

import './timeInfoWithText.css';
import timeRuleService from '../../services/TimeRule.Service/TimeRule.Service';

const TimeInfoWithText = observer((props) => {
    const store = props.store;
    let text = '';

    timeRuleService(store, () => text = 'Super ! Tu es dans les temps !', 
                           () => text = 'Organise-toi bien, et tu vas y arriver !', 
                           () => text = 'Va à l\'essentiel maintenant :)');


    return (
        <div className='info-text'>
            { text }
        </div>
    );
});

export default TimeInfoWithText; 