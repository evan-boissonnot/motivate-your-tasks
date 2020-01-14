import { observable } from 'mobx';

/** 
 * State to store and change changing time 
 * Note: it's an observer (mobx)
*/
class TimeState {
    //#region Fields
    @observable timer = 0;
    //#endregion
}

export default TimeState;