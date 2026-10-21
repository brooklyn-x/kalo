import React from 'react';
export function PurchaseOption({ label, price, compareAt, selected, onSelect, name = 'purchase', value, children }) {
  return React.createElement('div', { className: 'eth-option' + (selected ? ' eth-option--selected' : '') },
    React.createElement('label', { className: 'eth-option__row', style: { position: 'relative' } },
      React.createElement('input', { type: 'radio', name, value, checked: !!selected, onChange: () => onSelect && onSelect(value) }),
      React.createElement('span', { className: 'eth-radio' }),
      React.createElement('span', null, label),
      React.createElement('span', { className: 'eth-option__price' },
        compareAt ? React.createElement('span', { className: 'eth-option__compare' }, compareAt) : null,
        React.createElement('span', null, price))),
    selected && children ? React.createElement('div', { className: 'eth-option__body' }, children) : null);
}
