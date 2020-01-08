import React, { Component } from 'react';
import GlobalTimeSelector from '../../../components/GlobalTimeSelector/GlobalTimeSelector';

/** Container to display time zone circle, time global input, ... */
class TimeTasks extends Component {
    //#region Public methods
    render() {
        return (
            <div className="time-selector">
                <GlobalTimeSelector></GlobalTimeSelector>
            </div>
        );
    }
    //#endregion
}

export default TimeTasks;