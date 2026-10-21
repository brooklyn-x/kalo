import React from 'react';
export function Tooltip({ content, placement = 'top', open, children }) {
  return React.createElement('span', { className: 'eth-tooltip' + (placement === 'bottom' ? ' eth-tooltip--bottom' : '') + (open ? ' eth-tooltip--open' : '') },
    children, React.createElement('span', { role: 'tooltip', className: 'eth-tooltip__bubble' }, content));
}
