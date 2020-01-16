import { observable, action, computed } from 'mobx';

/** 
 * State to store and change changing time 
 * Note: it's an observer (mobx)
*/
class TimeStore {
    //#region Fields
    @observable timer = 60;
    @observable totalTime = 60;
    @observable countDownIsStarted = false;
    intervalTime = 1000;
    //#endregion

    //#region Public methods
    /**
     * Starts the countdown
     */
    start(options) {
        this.timer = this.totalTime;
        this.countDownIsStarted = true;

        this._intervalId = setInterval(() => {
            this.countdown();
        }, this.intervalTime);
    }

    /**
     * Reset the countdown
     */
    @action.bound
    reset() {
        this.totalTime = 60;
        this.timer = this.totalTime;
        this.countDownIsStarted = false;

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

    //#region Properties
    @computed
    get pourcent() {
        return this.countDownIsStarted ? (this.timer / this.totalTime) * 100 : 100;
    }
    //#endregion
}

export default TimeStore;