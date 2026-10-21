import React from 'react';
import { Icon } from '../icons/Icon.jsx';
export function Select({ label, options = [], value, onChange, variant = 'filled', style, ...rest }) {
  const cur = options.find((o) => o.value === value) || options[0] || {};
  return React.createElement('label', { className: 'eth-field eth-select eth-field--' + variant, style },
    label ? React.createElement('span', { className: 'eth-select__label' }, label) : null,
    React.createElement('span', { className: 'eth-select__value' }, cur.swatch ? React.createElement('span', { className: 'eth-swatch', style: { background: cur.swatch } }) : null, cur.label),
    React.createElement(Icon, { name: 'chevron-down', size: 14, strokeWidth: 2 }),
    React.createElement('select', { value: cur.value, onChange: (e) => onChange && onChange(e.target.value), 'aria-label': label, ...rest },
      options.map((o) => React.createElement('option', { key: o.value, value: o.value }, o.label))));
}
