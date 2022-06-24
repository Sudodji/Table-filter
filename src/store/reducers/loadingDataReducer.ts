import { AnyAction } from 'redux';
import { EActionsTypes } from '../actions/actionLoadingData';
import { IList } from '../initialState';

const userActions = [ 'logged_in', 'logged_out', 'button_sign_in_tapped',
  'button_log_out_tapped', 'button_info_tapped' ];

const initialState:IList = {
  main: [],
  loading: false,
  error: false,
};

const fillArray = () => {
  const data = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= 1000; i++) {
    data.push({
      username: `user-${i}`,
      action: userActions[i % 5],
      action_createad_at: new Date().getMilliseconds() * Math.random(),
    })
  }
  return data;
}

// eslint-disable-next-line default-param-last
const loadingDataReducer = (state = initialState, action:AnyAction) => {
  switch (action.type) {
    case EActionsTypes.LOADING_DATA:
      return { ...state, loading: true, error: false }
    case EActionsTypes.SAVE_DATA:
      return {
        ...state, main: fillArray(), loading: false, error: false,
      }
    case EActionsTypes.ERROR_DATA:
      return {
        ...state, loading: false, error: true,
      }
    default:
      return state;
  }
}

export default loadingDataReducer;
