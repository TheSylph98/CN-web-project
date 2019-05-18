import { alertConstants } from '../constants';

export const alertActions = {
    success,
    error,
    clear,
    init
};

function success(message) {
    return { type: alertConstants.SUCCESS, message };
}

function error(message) {
    return { type: alertConstants.ERROR, message };
}

function clear() {
    return { type: alertConstants.CLEAR };
}

function init(history) {
    return { type: alertConstants.INIT, history };
}

