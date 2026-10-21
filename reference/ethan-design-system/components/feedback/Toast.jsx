import React from 'react';
import { Icon } from '../icons/Icon.jsx';
const ICON = { success: 'check', info: 'info', warning: 'alert-triangle', error: 'x' };
export function Toast({ tone = 'success', children, action, onClose, style }) {
  return React.createElement('div', { role: 'status', className: 'eth-toast eth-toast--' + tone, style },
    React.createElement('span', { className: 'eth-toast__icon' }, React.createElement(Icon, { name: ICON[tone], size: 14, strokeWidth: 2.5 })),
    React.createElement('span', { style: { flex: 1 } }, children),
    action || null,
    onClose ? React.createElement('button', { type: 'button', 'aria-label': 'dismiss', onClick: onClose, className: 'eth-iconbtn', style: { width: 32, height: 32, background: 'rgba(255,255,255,.12)', color: '#fff' } }, React.createElement(Icon, { name: 'x', size: 14, strokeWidth: 2 })) : null);
}
