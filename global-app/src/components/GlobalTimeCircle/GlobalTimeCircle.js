import React from 'react';
import styles from './global-time-circle.module.css';
import { observer } from 'mobx-react';

const GlobalTimeCircle = observer((props) => {
    let store = props.store;

    console.log('GlobalTimeCircle::timer', store.timer);

    let currentGaugeColor = '#a0c884';
    let currentGaugePourcent = 10;
    let currentGaugeBackground = `linear-gradient(${currentGaugeColor} ${currentGaugePourcent}%, #426e1f ${currentGaugePourcent}%)`;
    let currentGaugeWidth = 500;
    let currentGaugeHeight = 500;
    let defaultTime = 50;

    currentGaugeWidth = (currentGaugeWidth * store.timer) / defaultTime;
    currentGaugeHeight = (currentGaugeHeight * store.timer) / defaultTime;

    const style = {
        border: '6px solid yellow',
        background: currentGaugeBackground,
        width: currentGaugeWidth + 'px',
        height: currentGaugeHeight + 'px'
    };

    return (
        <div className={styles.parentCircle} style={ style }></div>
    );
});

export default GlobalTimeCircle;