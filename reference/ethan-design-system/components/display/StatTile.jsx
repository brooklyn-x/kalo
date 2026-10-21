import React from 'react';
export function StatTile({ value, label, footnote, style }) {
  return React.createElement('div', { className: 'eth-stat', style },
    React.createElement('span', { className: 'eth-stat__value' }, value),
    React.createElement('span', { className: 'eth-stat__label' }, label),
    footnote ? React.createElement('span', { style: { fontSize: 9, color: 'var(--cocoa-700)', fontWeight: 600 } }, footnote) : null);
}
