import alertConstants from './alertConstants';

function alertReducer (state = {}, action) {
  switch (action.type) {
    case alertConstants.SUCCESS:
      return {
        type: 'success',
        msg: action.msg,
      };
    case alertConstants.ERROR:
      return {
        type: 'danger',
        msg: action.msg,
      };
    case alertConstants.CLEAR:
      return {};
    default:
      return state;
  }
}

export default alertReducer;