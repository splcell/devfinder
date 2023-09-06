import {ReactComponent as SearchIcon} from 'assets/icon-search.svg'
import { Button } from 'components/Button';
import styles from './Search.module.scss';
// import { useRef } from 'react';

interface SearchProps { //типизация поиска
  hasError: boolean;
  onSubmit: (text: string) => void
}

type FormFields = {
  username: HTMLInputElement
}

export const Search = ({hasError, onSubmit}: SearchProps) => {

  // const searchRef = useRef<HTMLInputElement | null>(null)

  function handleSubmit(e: React.FormEvent<HTMLFormElement & FormFields>){
    e.preventDefault()
    const text = e.currentTarget.username.value

    if(text.trim()){
      onSubmit(text)
      e.currentTarget.reset()
    }
 
  }

  return(
  <form onSubmit={handleSubmit} autoComplete='off'>
    <div className={styles.search}>
      <label htmlFor="search" className={styles.label}>
        <SearchIcon />
      </label>
      <input 
      type='text'
      className={styles.textField}
      id='search'
      name='username'
      placeholder='Search Github username'
      // ref={searchRef}
      />
      {hasError && (
        <div className={styles.error}>No results</div>
      )}
      <Button data-testid='btn'>Search</Button>
    </div>
  </form>
);
}