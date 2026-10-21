import React from 'react';
import { Icon } from '../icons/Icon.jsx';
export function QuantityStepper({ value = 1, min = 1, max = 99, onChange, style }) {
  const set = (n) => onChange && onChange(Math.max(min, Math.min(max, n)));
  const btn = (icon, n, dis, lbl) => React.createElement('button', { type: 'button', className: 'eth-iconbtn eth-iconbtn--ghost', 'aria-label': lbl, disabled: dis, onClick: () => set(n), style: { width: 36, height: 36 } }, React.createElement(Icon, { name: icon, size: 14, strokeWidth: 2 }));
  return React.createElement('div', { className: 'eth-stepper', style },
    btn('minus', value - 1, value <= min, 'decrease'),
    React.createElement('span', { 'aria-live': 'polite' }, value),
    btn('plus', value + 1, value >= max, 'increase'));
}
