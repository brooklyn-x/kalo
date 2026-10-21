import React from 'react';
const TONES = { mint: 'var(--mint-200)', teal: 'var(--teal-500)', sun: 'var(--sun-500)', butter: 'var(--butter-300)', orange: 'var(--orange-500)', red: 'var(--red-500)', maroon: 'var(--maroon-700)', cocoa: 'var(--cocoa-900)', white: 'var(--white)', cream: 'var(--cream-50)' };
const INK = { cocoa: 'var(--white)', maroon: 'var(--white)', teal: 'var(--cocoa-900)' };
export function Badge({ tone = 'white', children, style }) {
  return React.createElement('span', { className: 'eth-badge', style: { background: TONES[tone], color: INK[tone] || 'var(--cocoa-900)', ...style } }, children);
}
export function Seal({ children, style }) {
  return React.createElement('span', { className: 'eth-seal', style }, children);
}
