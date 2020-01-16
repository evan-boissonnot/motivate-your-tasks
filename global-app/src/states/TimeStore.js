import { observable, action } from 'mobx';

/** 
 * State to store and change changing time 
 * Note: it's an observer (mobx)
*/
class TimeStore {
    //#region Fields
    @observable timer = 0;
    @observable totalTime = 60;
    intervalTime = 1000;
    //#endregion

    //#region Public methods
    /**
     * Starts the countdown
     */
    start(options) {
        this._intervalId = setInterval(() => {
            this.countdown();
        }, this.intervalTime);
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
        this.timer --;

        if (this.timer <= 0) {
            this.reset();
        }
    }
    //#endregion
}

export default TimeStore;