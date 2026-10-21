import React from 'react';
export function Switch({ label, checked, onChange, disabled, ...rest }) {
  return React.createElement('label', { className: 'eth-control' + (disabled ? ' eth-control--disabled' : ''), style: { position: 'relative' } },
    React.createElement('input', { type: 'checkbox', role: 'switch', checked, onChange, disabled, ...rest }),
    React.createElement('span', { className: 'eth-switch' }), label);
}
