import alertConstants from './alertConstants';

function success(msg) {
  return dispatch => {
    dispatch({ type: alertConstants.SUCCESS, msg });
    setTimeout(() => {
      dispatch({ type: alertConstants.CLEAR });
    }, 3000);
  };
}

function error(msg) {
  return dispatch => {
    dispatch({ type: alertConstants.ERROR, msg });
    setTimeout(() => {
      dispatch({ type: alertConstants.CLEAR });
    }, 3000);
  };
}

function clear() {
  return { type: alertConstants.CLEAR };
}

export const alertActions = {
  success,
  error,
  clear,
};