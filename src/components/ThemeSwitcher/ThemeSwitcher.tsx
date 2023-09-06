import { useEffect, useState } from 'react';
import styles from './ThemeSwitcher.module.scss';
import {ReactComponent as MoonIcon} from 'assets/icon-moon.svg'
import {ReactComponent as SunIcon} from 'assets/icon-sun.svg'



export const ThemeSwitcher = () => {
  const [isDark, setIsDark] = useState(false) // проверяем активна ли темная тема
  const themeText = isDark ? 'Light' : 'Dark' // в зависимости от того активна ли темная тема, выводим на какую тему можно переключиться
  const ThemeIcon = isDark ? SunIcon : MoonIcon // в зависимости от того какая тема активна выводим нужную иконку
  

  useEffect(() => {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light')
  }, [isDark]) //меняем стилизацию темы через useEffect

  return(
    <div className={styles.switcher} onClick={() => setIsDark(!isDark)} data-testid='switch'>
    <span data-testid={document.body.getAttribute('data-theme') === 'light' ? 'light' : 'dark'}>{themeText}</span>
    <ThemeIcon className={styles.icon}/>
  </div>
  )
}

