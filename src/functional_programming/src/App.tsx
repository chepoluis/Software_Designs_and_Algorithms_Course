import { useState, useEffect, useMemo } from 'react';
import { StyledEngineProvider } from '@mui/material/styles';

import { Table, Filters, Sort, Search } from './components';
import { getImages, getUsers, getAccounts } from './mocks/api';

import { dataConverter } from './selectors/dataConverter';

import type { Row } from './components';
import type { Image, User, Account } from '../types';

import styles from './App.module.scss';
import { filteredData, options } from './selectors/filteredData';

function App() {
  const [data, setData] = useState<Row[]>(undefined);
  const [options, setOptions] = useState<options>({
    without_posts: false,
    more_than_100_posts: false,
    sort_desc: false,
    sort_asc: false,
    search_by: ''
  })

  const memoizedData = useMemo(() => filteredData(data, options), [data, options]);

  useEffect(() => {
    // Fetching data from API
    Promise.all([getImages(), getUsers(), getAccounts()]).then(
      ([images, users, accounts]: [Image[], User[], Account[]]) => {

        setData( dataConverter(users, accounts, images) );
      });

  }, []);

  const sortAscAndDesc = (val: string): void => {
    if (val === 'asc') {
      setOptions({
        ...options,
        sort_asc: true,
        sort_desc: false
      });
    } else if (val === 'desc') {
      setOptions({
        ...options,
        sort_asc: false,
        sort_desc: true
      });
    }
  }

  const filtersUpdateSelected = ( val: [string?, string?] ): void => {

    if (val.includes('More than 100 posts') && val.includes('Without posts') ) {
      setOptions({
        ...options,
        more_than_100_posts: true,
        without_posts: true
      })
    } else if ( val.includes('More than 100 posts') ) {
      setOptions({
        ...options,
        more_than_100_posts: true,
        without_posts: false
      })
    } else if ( val.includes('Without posts') ) {
      setOptions({
        ...options,
        without_posts: true,
        more_than_100_posts: false
      })
    } else {
      setOptions({
        ...options,
        more_than_100_posts: false,
        without_posts: false
      })
    }
  }

  const searchByCountryNameUsername = ( val: string ) => {
    setOptions({
      ...options,
      search_by: val
    })
  }

  return (
    <StyledEngineProvider injectFirst>
      <div className="App">
        <div className={styles.container}>
          <div className={styles.sortFilterContainer}>
            <Filters updateSelected={ filtersUpdateSelected }/>
            <Sort updateSelected={ sortAscAndDesc } />
          </div>
          <Search updateSelected={ searchByCountryNameUsername } />
        </div>
        <Table rows={ memoizedData || [] } />
        {/* <Table rows={ data || [] } /> */}
      </div>
    </StyledEngineProvider>
  );
}

export default App;
