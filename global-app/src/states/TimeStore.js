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
    _unity = 1;
    //#endregion

    
    //#region Public methods
    @action
    setTotalTime(value) {
        this.totalTime = value;
        this.timer = this.totalTime * this._unity;
    }

    /**
     * Starts the countdown
     */
    @action
    start(options) {
        this.timer = this.totalTime * this._unity;
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
        console.log('reset');

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
        const value = this.countDownIsStarted ? (this.timer / (this.totalTime * this._unity)) * 100 : 100;

        return value.toFixed(2);
    }

    @computed
    get timerAsMinutes() {
        const value = (this.timer / this._unity); 
        return Math.floor(value);
    }
    //#endregion
}

export default TimeStore;