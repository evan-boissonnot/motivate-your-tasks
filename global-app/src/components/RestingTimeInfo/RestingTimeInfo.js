import React  from 'react';
import { observer } from "mobx-react";

import './resting-time-info.css';

const RestingTimeInfo = observer((props) => {
    const store = props.store;

    return (
        <div className="resting-time-info">
            To be continued ....
        </div>
    )
});

export default RestingTimeInfo;