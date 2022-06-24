export interface IState {
  dataList: IList,
}

export interface IList extends ICommonReducer{
  main:{
  username: string,
  action: string,
  action_createad_at: number,
  }[]

}

interface ICommonReducer{
  loading: boolean,
  error: boolean
}
