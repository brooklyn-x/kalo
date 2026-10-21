import React, { useEffect } from 'react';
import { IconButton } from '../actions/IconButton.jsx';
export function Dialog({ open = true, title, children, actions, onClose, inline = false, style }) {
  useEffect(() => { if (!open || inline || !onClose) return; const k = (e) => e.key === 'Escape' && onClose(); window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k); }, [open, inline, onClose]);
  if (!open) return null;
  const panel = React.createElement('div', { role: 'dialog', 'aria-modal': !inline, className: 'eth-dialog' + (inline ? ' eth-dialog--inline' : ''), style, onClick: (e) => e.stopPropagation() },
    onClose ? React.createElement(IconButton, { icon: 'x', label: 'close', variant: 'ghost', size: 36, className: 'eth-dialog__close', onClick: onClose }) : null,
    title ? React.createElement('h2', { className: 'eth-display', style: { fontSize: 'var(--display-s)', paddingRight: 40 } }, title) : null,
    React.createElement('div', { className: 'eth-dialog__body' }, children),
    actions ? React.createElement('div', { className: 'eth-dialog__actions' }, actions) : null);
  if (inline) return panel;
  return React.createElement('div', { className: 'eth-dialog__scrim', onClick: onClose }, panel);
}
