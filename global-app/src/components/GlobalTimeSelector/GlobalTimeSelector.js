import React, { Component } from 'react';
import { Slider } from 'office-ui-fabric-react/lib/Slider';
import { Label } from 'office-ui-fabric-react/lib/Label';

/** Component to allows you to set input global time */
class GlobalTimeSelector extends Component {
    //#region Fields
    state = {
        minMinutes: 1,
        maxMinutes: 120,
        currentValue:  60
    };
    //#endregion

    //#region Public methods
    changeSlideValue = function(value) {
        console.log('value :', value);
        const newState = {...this.state};

        newState.currentValue = value;

        this.setState(newState);
    }

    render() {
        return (
            <div>
                <Label>Temps global : </Label> <Slider min={this.state.minMinutes} max={this.state.maxMinutes} defaultValue={this.state.currentValue} onChange={this.changeSlideValue.bind(this)}></Slider>
            </div>
        );
    }
    //#endregion
}

export default GlobalTimeSelector;