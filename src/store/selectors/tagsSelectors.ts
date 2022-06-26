import { IState } from '../initialState'

const getDataListState = (state: IState) => state.dataList.main;
// eslint-disable-next-line max-len
const getFilteredData = (value: string) => (state:IState) => state.dataList.main.filter(item => item.action.includes(value));

export { getDataListState, getFilteredData };
