import React, { Component } from 'react';
import { observer } from "mobx-react"

import GlobalTimeSelector from '../../../components/GlobalTimeSelector/GlobalTimeSelector';
import GlobalTimeCircle from '../../../components/GlobalTimeCircle/GlobalTimeCircle';
import { Button } from 'office-ui-fabric-react/lib/Button';

/** Container to display time zone circle, time global input, ... */
@observer
class TimeTasks extends Component {
    //#region Fields
    state = {
        defaultValue: 60,
        globalTime: 60,
        timeoutValue: 1000,
        currentTime: 0,
        intervalId: 0
    }
    //#endregion

    constructor(props) {
        super(props);

        this.startTimer = this.startTimer.bind(this);
        this._timer = 0;
        this.isStartCountDown = false;
    }

    //#region Public methods
    startTimer = () => {
        console.log('startTimer::this.state.globalTime', this.state.globalTime);

        if (this._timer === 0 && this.state.globalTime > 0) {
            this.isStartCountDown = true;
            this.currentTime = this.state.globalTime;

            console.log('startTimer::this.currentTime', this.currentTime);
            this.intervalId = setInterval(this.countDown.bind(this), this.state.timeoutValue);
        }
    }

    /**
     * Change global time, so it will change the dedicated component too
     */
    changeGlobalTime = function(value) {
        console.log('changeGlobalTime::value', value);
        this.globalTime = value;
        console.log('changeGlobalTime::globalTime', this.globalTime);
    }

    render() {
        const self = this;

        return (
            <div className="time-selector">
                <GlobalTimeSelector defaultValue={ this.state.defaultValue } changeGlobalTime={this.changeGlobalTime.bind(this) }></GlobalTimeSelector>
                <Button key="startCountDown" onClick={ self.startTimer } disabled={ self.isStartCountDown }>Démarrer le compte à rebours !</Button>
                <GlobalTimeCircle timeValue={ this.state.globalTime }></GlobalTimeCircle>
            </div>
        );
    }
    //#endregion

    //#region Internal methods
    countDown() {
        this.currentTime --;

        this.isStartCountDown = (this.currentTime > 0);

        if (! this.isStartCountDown) {
            const id = this.intervalId;
            this.intervalId = 0;
            clearInterval(id);    

        }
    }

    //#endregion

    //#region Properties
    get globalTime() {
        return this.state.globalTime;
    }

    set globalTime(value) {
        console.log('set globalTime(value) :', value);

        this.setState({
            globalTime: value
        });

        console.log('set globalTime(value)>> this.state.globalTime', this.state.globalTime);
    }

    // https://www.freecodecamp.org/news/get-pro-with-react-setstate-in-10-minutes-d38251d1c781/
    // https://stackoverflow.com/questions/30782948/why-calling-react-setstate-method-doesnt-mutate-the-state-immediately

    get currentTime() {
        return this.state.currentTime;
    }

    // https://blog.cloudboost.io/3-reasons-why-i-stopped-using-react-setstate-ab73fc67a42e
    set currentTime(value) {
        this.setState({
            currentTime: value
        });
    }

    get intervalId() {
        return this.state.intervalId;
    }

    set intervalId(value) {
        this.setState({
            intervalId: value
        });
    }
    //#endregion
}

export default TimeTasks;