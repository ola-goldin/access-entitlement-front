import React from 'react';
import styles from './card.module.css';

export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className={`max-w-[80rem] h-[56.125rem] rounded-[3px] p-8 gap-[1.5rem] mx-auto ${styles.card}`}>
      {children}
    </div>
  );
}
