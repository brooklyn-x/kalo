import React from 'react';
export function Button({ variant = 'primary', size = 'md', block = false, iconLeft, iconRight, children, className = '', ...rest }) {
  const cls = ['eth-btn', 'eth-btn--' + variant, size !== 'md' ? 'eth-btn--' + size : '', block ? 'eth-btn--block' : '', className].filter(Boolean).join(' ');
  return React.createElement('button', { type: 'button', className: cls, ...rest }, iconLeft, children, iconRight);
}
