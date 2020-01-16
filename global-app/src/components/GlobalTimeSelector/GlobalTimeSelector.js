import { observer } from 'mobx-react';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { Slider } from 'office-ui-fabric-react/lib/Slider';
import React, { Component } from 'react';

/** Component to allows you to set input global time */
@observer
class GlobalTimeSelector extends Component {
    constructor(props) {
        super(props);
        
        this.store = this.props.store;
        this.minMinutes = 1;
        this.maxMinutes = 120;
    }
    
    //#region Public methods
    changeSlideValue = function(value) {
        if (this.props.changeGlobalTime) {
            this.props.changeGlobalTime(value);
        }
    }
    
    render() {
        return (
            <div>
            <Label>Temps global : </Label> 
            <Slider 
                min={this.minMinutes} max={this.maxMinutes} 
                defaultValue={this.store.totalTime} 
                onChange={this.changeSlideValue.bind(this)}
                disabled={ this.store.countDownIsStarted }
                >
            </Slider>
            </div>
            );
        }
        //#endregion
    }
    
    export default GlobalTimeSelector;