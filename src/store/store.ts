import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import loadingDataReducer from './reducers/loadingDataReducer'

const rootReducer = combineReducers({
  dataList: loadingDataReducer,
})

const store = configureStore({ reducer: rootReducer });

export default store;
