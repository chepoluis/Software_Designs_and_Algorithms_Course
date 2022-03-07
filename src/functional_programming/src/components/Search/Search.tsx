import { useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

import styles from './Search.module.scss';

// interface SearchProps {
//   store?: {};
//   updateStore?: (val) => void;
// }

// OR

interface SearchProps {
  selected?: {};
  updateSelected?: (val: string) => void;
}

export function Search(props: SearchProps) {
  const { updateSelected } = props;

  const [searchedValue, setSearchedValue] = useState<string>('');

  const onChange = (value) => {
    setSearchedValue(value);

    updateSelected(value);
  }

  return (
    <OutlinedInput
      className={styles.input}
      placeholder="Search by country/name/username"
      value={searchedValue}
      type="search"
      onChange={(e) => onChange(e.target.value)}
      startAdornment={
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      }
    />
  );
}
