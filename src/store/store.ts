import { configureStore, combineReducers } from '@reduxjs/toolkit';
import loadingDataReducer from './reducers/loadingDataReducer'

const rootReducer = combineReducers({
  dataList: loadingDataReducer,
})

const store = configureStore({ reducer: rootReducer });

export default store;
