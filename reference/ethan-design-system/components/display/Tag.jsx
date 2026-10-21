import React from 'react';
const TONES = { mint: 'var(--mint-200)', teal: 'var(--teal-500)', sun: 'var(--sun-500)', butter: 'var(--butter-300)', orange: 'var(--orange-500)', red: 'var(--red-500)', maroon: 'var(--maroon-700)', cocoa: 'var(--cocoa-900)', white: 'var(--white)', cream: 'var(--cream-50)' };
const INK = { cocoa: 'var(--white)', maroon: 'var(--white)', red: 'var(--cocoa-900)' };
export function Tag({ tone = 'mint', swatch, onClick, children, style }) {
  return React.createElement(onClick ? 'button' : 'span', { type: onClick ? 'button' : undefined, onClick, className: 'eth-tag' + (onClick ? ' eth-tag--interactive' : ''), style: { background: TONES[tone], color: INK[tone] || 'var(--cocoa-900)', ...style } },
    swatch ? React.createElement('span', { className: 'eth-swatch', style: { background: swatch, width: 10, height: 10 } }) : null, children);
}
