import React from 'react';
import { badgeVariants } from './Badge.css';

interface BadgeProps {
  variant?: 'success' | 'warning' | 'error';
  children: React.ReactNode;
}

export function Badge({ variant = 'success', children }: BadgeProps) {
  return <span className={badgeVariants[variant]}>{children}</span>;
}
