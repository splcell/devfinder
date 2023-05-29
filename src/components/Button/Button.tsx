import styles from './Button.module.scss';

interface ButtonProps { //типизируем пропсы для кнопки
  children: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const Button = ({children, onClick}: ButtonProps) => (
  <button className={styles.button} onClick={onClick}>
    {children}
  </button>
);
