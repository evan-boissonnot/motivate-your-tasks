
/** Rules to define if time is ok, warning or bad */
const TimeRuleService = (store, timeOkCallBack, timeWarningCallBack, timeBadCallBack) => {
    if (store.pourcent >= 65) {
        timeOkCallBack();
    }
    
    if (store.pourcent >= 30 && store.pourcent < 65) {
        timeWarningCallBack();
    } 
    
    if (store.pourcent < 30) {
        timeBadCallBack();
    }
};

export default TimeRuleService;