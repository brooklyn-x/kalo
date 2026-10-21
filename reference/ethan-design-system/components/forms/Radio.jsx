import React from 'react';
export function Radio({ label, checked, onChange, name, value, disabled, ...rest }) {
  return React.createElement('label', { className: 'eth-control' + (disabled ? ' eth-control--disabled' : ''), style: { position: 'relative' } },
    React.createElement('input', { type: 'radio', name, value, checked, onChange, disabled, ...rest }),
    React.createElement('span', { className: 'eth-radio' }), label);
}
