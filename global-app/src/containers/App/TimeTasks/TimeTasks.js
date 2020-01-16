import React, { Component } from 'react';
import { observer } from "mobx-react";

import GlobalTimeSelector from '../../../components/GlobalTimeSelector/GlobalTimeSelector';
import GlobalTimeCircle from '../../../components/GlobalTimeCircle/GlobalTimeCircle';
import { Button } from 'office-ui-fabric-react/lib/Button';

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
        this.store.start({
            
        });
    }

    /**
     * Change global time, so it will change the dedicated component too
     */
    changeGlobalTime = function (value) {
        this.store.timer = value;
    }

    render() {
        const self = this;

        return (
            <div className="time-selector">
                <b>{this.store.timer}</b>
                <GlobalTimeSelector store={ this.store } changeGlobalTime={this.changeGlobalTime.bind(this)}></GlobalTimeSelector>
                <Button key="startCountDown" onClick={self.startTimer} disabled={self.isStartCountDown}>Démarrer le compte à rebours !</Button>
                <GlobalTimeCircle store={ this.store }></GlobalTimeCircle>
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