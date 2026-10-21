import React from 'react';
const TONES = { mint: 'var(--mint-200)', teal: 'var(--teal-500)', sun: 'var(--sun-500)', butter: 'var(--butter-300)', orange: 'var(--orange-500)', red: 'var(--red-500)', maroon: 'var(--maroon-700)', cocoa: 'var(--cocoa-900)', white: 'var(--white)', cream: 'var(--cream-50)' };
const PADS = { none: 0, sm: 'var(--space-6)', md: 'var(--space-8)', lg: 'var(--panel-pad)' };
export function Card({ tone = 'mint', radius = 'xl', padding = 'lg', children, style, ...rest }) {
  return React.createElement('div', { className: 'eth-card', style: { background: TONES[tone], borderRadius: 'var(--radius-' + radius + ')', padding: PADS[padding], ...style }, ...rest }, children);
}
