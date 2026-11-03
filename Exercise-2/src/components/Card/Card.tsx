import React from 'react';
import { card } from './Card.css';

interface CardProps {
  children: React.ReactNode;
}

export function Card({ children }: CardProps) {
  return <div className={card}>{children}</div>;
}
