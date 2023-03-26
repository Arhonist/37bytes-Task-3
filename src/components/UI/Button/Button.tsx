import React, { FunctionComponent, PropsWithChildren } from 'react';
import styles from './Button.module.css';
import cn from 'classnames';

interface Props extends PropsWithChildren {
  oncLick?: () => void;
  className?: string;
}

const Button: FunctionComponent<Props> = ({ children, className }) => {
  return (
    <button className={cn(styles.standardButton, className)}>{children}</button>
  );
};

export default Button;
