import { observable, action } from 'mobx';

/** 
 * State to store and change changing time 
 * Note: it's an observer (mobx)
*/
class TimeState {
    //#region Fields
    @observable timer = 0;
    @observable totalTime = 0;
    //#endregion

    //#region Public methods
    /**
     * Starts the countdown
     */
    start(options) {
        this._intervalId = setInterval(() => {
            this.countdown();
        }, options.intervalTime);
    }

    /**
     * Reset the countdown
     */
    @action.bound
    reset() {
        this.timer = 0;

        if (this._intervalId && this._intervalId > 0) {
            clearInterval(this._intervalId );
        }
    }
    //#endregion

    //#region Internal methods
    @action
    countdown() {
        this.timer ++;
    }
    //#endregion
}

export default TimeState;