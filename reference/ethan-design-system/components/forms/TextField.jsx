import React from 'react';
import { Icon } from '../icons/Icon.jsx';
export function TextField({ variant = 'filled', placeholder, value, defaultValue, onChange, onSubmit, submitLabel = 'submit', type = 'text', error, style, ...rest }) {
  const cls = 'eth-field eth-field--' + variant + (error ? ' eth-field--error' : '');
  const submitBtn = onSubmit ? React.createElement('button', { type: 'submit', 'aria-label': submitLabel, className: 'eth-iconbtn eth-iconbtn--white', style: { width: 36, height: 36 } }, React.createElement(Icon, { name: 'arrow-right', size: 16, strokeWidth: 2 })) : null;
  const field = React.createElement('label', { className: cls, style: { paddingRight: onSubmit ? 6 : 22, ...style } },
    React.createElement('input', { type, placeholder, value, defaultValue, onChange, ...rest }), submitBtn);
  const wrapped = onSubmit ? React.createElement('form', { onSubmit: (e) => { e.preventDefault(); onSubmit(e); }, style: { margin: 0 } }, field) : field;
  if (!error) return wrapped;
  return React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 6 } }, wrapped,
    React.createElement('span', { style: { fontFamily: 'var(--font-body)', fontSize: 'var(--text-s)', fontWeight: 700, color: 'var(--status-danger)', paddingLeft: 22 } }, error));
}
