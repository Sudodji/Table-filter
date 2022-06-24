import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HotkeysProvider } from '@blueprintjs/core';
import {
  Cell, Column, Table2,
} from '@blueprintjs/table';
import InputField from '../InputField/InputField';
import { loadingDataAction, saveDataAction } from '../../store/actions/actionLoadingData';
import getDataListState from '../../store/selectors/tags.Selectors';
import styles from './main.module.scss'

const Main = () => {
  const dataList = useSelector(getDataListState);
  const dispatch = useDispatch();
  const [ filter, setFilter ] = useState('');
  const onChangeFilter = (value: string) => {
    setFilter(value);
  }
  const renderList = useCallback(() => {
    let updatedList = [];
    if (filter.length > 0) {
      updatedList = dataList.filter(item => (item.action.includes(filter)));
      return updatedList;
    } return dataList;
  }, [ filter, dataList ])
  const actionCellRenderer = (numRows:number) => (
    <Cell>{renderList()[numRows].action}</Cell>
  );
  const userNameCellRenderer = (numRows:number) => (
    <Cell>{renderList()[numRows].username}</Cell>
  );

  const actionTimeCellRenderer = (numRows: number) => (
    <Cell>{renderList()[numRows].action_createad_at}</Cell>
  );
  useEffect(() => {
    dispatch(loadingDataAction());
    dispatch(saveDataAction());
  }, [])
  const renderData = renderList().length;

  return (
    <main className={ styles.main }>
      <InputField value={ filter } onChange={ onChangeFilter } />
      <HotkeysProvider>
        <div className={ styles['table-container'] }>
          {renderData ? (
            <Table2 numRows={ renderData }>
              <Column name="Username" cellRenderer={ userNameCellRenderer } />
              <Column name="Action" cellRenderer={ actionCellRenderer } />
              <Column name="Time" cellRenderer={ actionTimeCellRenderer } />
            </Table2>
          ) : <p className={ styles['not-found'] }>Action not found</p>}
        </div>
      </HotkeysProvider>
    </main>
  )
};

export default Main
