import React, { Component } from 'react';
import { Slider } from 'office-ui-fabric-react/lib/Slider';
import { Label } from 'office-ui-fabric-react/lib/Label';

/** Component to allows you to set input global time */
class GlobalTimeSelector extends Component {
    //#region Fields
    state = {
        minMinutes: 1,
        maxMinutes: 120
    };
    //#endregion

    //#region Public methods
    changeSlideValue = function(value) {
        if (this.props.changeGlobalTime) {
            this.props.changeGlobalTime(value);
        }
    }

    render() {
        return (
            <div>
                <Label>Temps global : </Label> <Slider min={this.state.minMinutes} max={this.state.maxMinutes} defaultValue={this.props.defaultValue} onChange={this.changeSlideValue.bind(this)}></Slider>
            </div>
        );
    }
    //#endregion
}

export default GlobalTimeSelector;