import { ThemeSwitcher } from 'components/ThemeSwitcher';
import styles from './Header.module.scss';


export const Header = () => (
  <div className={styles.header} data-testid='header'>
    <div className={styles.logo}>devfinder</div>
    <ThemeSwitcher/>
  </div>
);
