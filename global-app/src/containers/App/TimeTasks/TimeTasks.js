import React, { Component } from 'react';
import GlobalTimeSelector from '../../../components/GlobalTimeSelector/GlobalTimeSelector';

/** Container to display time zone circle, time global input, ... */
class TimeTasks extends Component {
    //#region Fields
    state = {
        defaultValue: 60,
        globalTime: 60
    }
    //#endregion

    //#region Public methods
    changeGlobalTime = function(value) {
        const newState = {...this.state};

        newState.globalTime = value;
        this.setState(newState);

        console.log('TimeTasks::state', this.state);
    }

    render() {
        return (
            <div className="time-selector">
                <GlobalTimeSelector defaultValue={ this.state.defaultValue } changeGlobalTime={this.changeGlobalTime.bind(this) }></GlobalTimeSelector>
            </div>
        );
    }
    //#endregion
}

export default TimeTasks;