const SET_UPLOAD_MODE = 'scratch-gui/progran-mode/SET_UPLOAD_MODE';
const SET_REALTIME_MODE = 'scratch-gui/progran-mode/SET_REALTIME_MODE';
const SET_SUPPORT_SWITCH_MODE = 'scratch-gui/progran-mode/SET_SUPPORT_SWITCH_MODE';
const SET_IS_FIRMWARE_UPDATE_REQUIRED = 'scratch-gui/progran-mode/SET_IS_FIRMWARE_UPDATE_REQUIRED';

const initialState = {
    isRealtimeMode: true,
    isSupportSwitchMode: false,
    isFirmwareUpdateRequired: false
};

const reducer = function (state, action) {
    if (typeof state === 'undefined') state = initialState;
    switch (action.type) {
    case SET_UPLOAD_MODE:
        return Object.assign({}, state, {
            isRealtimeMode: false
        });
    case SET_REALTIME_MODE:
        return Object.assign({}, state, {
            isRealtimeMode: true
        });
    case SET_SUPPORT_SWITCH_MODE:
        return Object.assign({}, state, {
            isSupportSwitchMode: action.state
        });
    case SET_IS_FIRMWARE_UPDATE_REQUIRED:
        return Object.assign({}, state, {
            isFirmwareUpdateRequired: true
        });
    default:
        return state;
    }
};

const setUploadMode = () => ({
    type: SET_UPLOAD_MODE
});

const setRealtimeMode = () => ({
    type: SET_REALTIME_MODE
});

const setSupportSwitchMode = state => ({
    type: SET_SUPPORT_SWITCH_MODE,
    state: state
});
const setIsFirmwareUpdateRequired = value => ({
    type: SET_IS_FIRMWARE_UPDATE_REQUIRED,
    value: value
});

export {
    reducer as default,
    initialState as programModeInitialState,
    setUploadMode,
    setRealtimeMode,
    setSupportSwitchMode,
    setIsFirmwareUpdateRequired
};
