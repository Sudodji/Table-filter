import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HotkeysProvider } from '@blueprintjs/core';
import {
  Cell, Column, Table2,
} from '@blueprintjs/table';
import InputField from '../InputField';
import { loadingDataAction, saveDataAction } from '../../store/actions/actionLoadingData';
import { getFilteredData } from '../../store/selectors/tagsSelectors';
import styles from './style.module.scss'

const Main = () => {
  const dispatch = useDispatch();
  const [ filteredValue, setFilteredValue ] = useState('');
  const filteredData = useSelector(getFilteredData(filteredValue));
  const onChangeFilter = (value: string) => {
    setFilteredValue(value);
  }
  const actionCellRenderer = (numRows:number) => (
    <Cell>{filteredData[numRows].action}</Cell>
  );
  const userNameCellRenderer = (numRows:number) => (
    <Cell>{filteredData[numRows].username}</Cell>
  );

  const actionTimeCellRenderer = (numRows: number) => (
    <Cell>{filteredData[numRows].action_createad_at}</Cell>
  );
  useEffect(() => {
    dispatch(loadingDataAction());
    dispatch(saveDataAction());
  }, [])

  return (
    <main className={ styles.main }>
      <InputField value={ filteredValue } onChange={ onChangeFilter } />
      <HotkeysProvider>
        <div className={ styles.tableContainer }>
          {filteredData.length ? (
            <Table2 numRows={ filteredData.length }>
              <Column name="Username" cellRenderer={ userNameCellRenderer } />
              <Column name="Action" cellRenderer={ actionCellRenderer } />
              <Column name="Time" cellRenderer={ actionTimeCellRenderer } />
            </Table2>
          ) : <p className={ styles.notFound }>Action not found</p>}
        </div>
      </HotkeysProvider>
    </main>
  )
};

export default Main
