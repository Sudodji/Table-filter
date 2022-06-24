export enum EActionsTypes {
  LOADING_DATA = 'LOADING_DATA',
  SAVE_DATA = 'SAVE_DATA',
  ERROR_DATA = 'ERROR_DATA',
}

export const loadingDataAction = () => ({
  type: EActionsTypes.LOADING_DATA,
})

export const saveDataAction = () => ({
  type: EActionsTypes.SAVE_DATA,
})

export const errorDataAction = () => ({
  type: EActionsTypes.ERROR_DATA,
})
