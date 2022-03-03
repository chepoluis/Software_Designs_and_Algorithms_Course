import { useState, useEffect } from 'react';
import { StyledEngineProvider } from '@mui/material/styles';

import { Table, Filters, Sort, Search } from './components';
import { getImages, getUsers, getAccounts } from './mocks/api';

import { dataConverter } from './selectors/dataConverter';

import type { Row } from './components';
import type { Image, User, Account } from '../types';

import styles from './App.module.scss';

function App() {
  const [data, setData] = useState<Row[]>(undefined);

  useEffect(() => {
    // Fetching data from API
    Promise.all([getImages(), getUsers(), getAccounts()]).then(
      ([images, users, accounts]: [Image[], User[], Account[]]) => {

        setData( dataConverter(users, accounts, images) );
      });

  }, [])

  return (
    <StyledEngineProvider injectFirst>
      <div className="App">
        <div className={styles.container}>
          <div className={styles.sortFilterContainer}>
            <Filters />
            <Sort />
          </div>
          <Search />
        </div>
        <Table rows={ data || [] } />
      </div>
    </StyledEngineProvider>
  );
}

export default App;
