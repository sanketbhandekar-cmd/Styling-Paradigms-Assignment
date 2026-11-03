import React from 'react';
import { buttonVariants, buttonSizes } from './Button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'large';
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'small',
  disabled,
  children,
  ...props
}: ButtonProps) {
  const className = `${buttonVariants[variant]} ${buttonSizes[size]}`;

  return (
    <button className={className} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
