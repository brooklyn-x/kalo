import React from 'react';
import { Icon } from '../icons/Icon.jsx';
export function Checkbox({ label, checked, onChange, disabled, ...rest }) {
  return React.createElement('label', { className: 'eth-control' + (disabled ? ' eth-control--disabled' : ''), style: { position: 'relative' } },
    React.createElement('input', { type: 'checkbox', checked, onChange, disabled, ...rest }),
    React.createElement('span', { className: 'eth-check' }, React.createElement(Icon, { name: 'check', size: 12, strokeWidth: 3 })), label);
}
