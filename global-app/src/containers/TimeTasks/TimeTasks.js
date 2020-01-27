import { observer } from "mobx-react";
import { Button } from 'office-ui-fabric-react/lib/Button';
import React, { Component } from 'react';

import GlobalTimeCircle from '../../components/GlobalTimeCircle/GlobalTimeCircle';
import GlobalTimeSelector from '../../components/GlobalTimeSelector/GlobalTimeSelector';
import RestingTimeInfo from '../RestingTimeInfo/RestingTimeInfo';
import './time-tasks.css';



//#region Helps
// https://www.freecodecamp.org/news/get-pro-with-react-setstate-in-10-minutes-d38251d1c781/
// https://stackoverflow.com/questions/30782948/why-calling-react-setstate-method-doesnt-mutate-the-state-immediately
// https://blog.cloudboost.io/3-reasons-why-i-stopped-using-react-setstate-ab73fc67a42e
//#endregion

/** Container to display time zone circle, time global input, ... */
@observer
class TimeTasks extends Component {
    //#region Fields
    //#endregion

    constructor(props) {
        super(props);

        this.store = props.store;

        this.startTimer = this.startTimer.bind(this);
        this.isStartCountDown = false;
    }

    //#region Public methods
    startTimer = () => {
        this.store.start({});
    }

    reset = () => {
        this.store.reset();
    }

    /**
     * Change global time, so it will change the dedicated component too
     */
    changeGlobalTime = function (value) {
        this.store.setTotalTime(value);
    }

    render() {
        const self = this;

        return (
            
            <div className="time-selector">
                <h1>Temps global</h1>
                <GlobalTimeSelector store={ this.store } changeGlobalTime={this.changeGlobalTime.bind(this)}></GlobalTimeSelector>
                <Button key="startCountDown" onClick={self.startTimer} disabled={self.store.countDownIsStarted}>Démarrer le compte à rebours !</Button>
                <Button key="resetCountDown" onClick={self.reset} disabled={! self.store.countDownIsStarted}>Annuler le compte à rebours !</Button>
                <div className="activity flex">
                    <GlobalTimeCircle store={ this.store }></GlobalTimeCircle>
                    <RestingTimeInfo store={ this.store }></RestingTimeInfo>
                </div>
            </div>
        );
    }
    //#endregion

    //#region Internal methods
    //#endregion

    //#region Properties
    //#endregion
}

export default TimeTasks;