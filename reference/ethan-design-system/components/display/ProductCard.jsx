import React from 'react';
import { Badge } from './Badge.jsx';
const TONES = { mint: 'var(--mint-200)', teal: 'var(--teal-500)', sun: 'var(--sun-500)', butter: 'var(--butter-300)', orange: 'var(--orange-500)', red: 'var(--red-500)', maroon: 'var(--maroon-700)', cocoa: 'var(--cocoa-900)', white: 'var(--white)', cream: 'var(--cream-50)' };
const ACCENT = { orange: 'var(--orange-500)', red: 'var(--red-500)', maroon: 'var(--maroon-700)', teal: 'var(--teal-500)', sun: 'var(--orange-500)', butter: 'var(--orange-500)', mint: 'var(--teal-500)', cocoa: 'var(--cocoa-700)' };
export function ProductCard({ tone = 'orange', badge, seal, image, name, variant, price, size, onClick, style }) {
  const img = image || React.createElement('div', { className: 'eth-placeholder', style: { background: 'rgba(255,255,255,.22)' } }, 'product image');
  return React.createElement('div', { className: 'eth-pcard', onClick, role: onClick ? 'button' : undefined, tabIndex: onClick ? 0 : undefined, style },
    React.createElement('div', { className: 'eth-pcard__media', style: { background: TONES[tone] } },
      badge ? React.createElement(Badge, { style: { position: 'absolute', top: 14, left: 14 } }, badge) : null,
      seal ? React.createElement('div', { style: { position: 'absolute', top: 10, right: 10 } }, seal) : null,
      React.createElement('div', { className: 'eth-pcard__img' }, img)),
    React.createElement('div', { className: 'eth-pcard__meta' },
      React.createElement('span', null, name), React.createElement('span', null, price),
      React.createElement('span', { className: 'eth-pcard__sub', style: { color: ACCENT[tone] || 'var(--cocoa-700)' } }, variant),
      React.createElement('span', { className: 'eth-pcard__sub' }, size)));
}
