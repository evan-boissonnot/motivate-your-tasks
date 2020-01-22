import React  from 'react';
import { observer } from "mobx-react";

import './resting-time-info.css';
import Smiley from '../../components/Smiley/Smiley';
import TimeInfoWithText from '../../components/TimeInfoWithText/TimeInfoWithText';

const RestingTimeInfo = observer((props) => {
    const store = props.store;

    return (
        <div className="resting-time-info">
            <Smiley store={ store }></Smiley>
            <TimeInfoWithText store={ store } ></TimeInfoWithText>
        </div>
    )
});

export default RestingTimeInfo;