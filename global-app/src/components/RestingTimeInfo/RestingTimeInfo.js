import React  from 'react';
import { observer } from "mobx-react";

import './resting-time-info.css';
import Smiley from '../Smiley/Smiley';

const RestingTimeInfo = observer((props) => {
    const store = props.store;

    return (
        <div className="resting-time-info">
            <Smiley></Smiley>
        </div>
    )
});

export default RestingTimeInfo;