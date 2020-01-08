import React, { Component } from 'react';
import GlobalTimeSelector from '../../../components/GlobalTimeSelector/GlobalTimeSelector';
import GlobalTimeCircle from '../../../components/GlobalTimeCircle/GlobalTimeCircle';

/** Container to display time zone circle, time global input, ... */
class TimeTasks extends Component {
    //#region Fields
    state = {
        defaultValue: 60,
        globalTime: 60
    }
    //#endregion

    //#region Public methods
    /**
     * Change global time, so it will change the dedicated component too
     */
    changeGlobalTime = function(value) {
        const newState = {...this.state};

        newState.globalTime = value;
        this.setState(newState);
    }

    render() {
        return (
            <div className="time-selector">
                <GlobalTimeSelector defaultValue={ this.state.defaultValue } changeGlobalTime={this.changeGlobalTime.bind(this) }></GlobalTimeSelector>
                <GlobalTimeCircle timeValue={ this.state.globalTime }></GlobalTimeCircle>
            </div>
        );
    }
    //#endregion
}

export default TimeTasks;