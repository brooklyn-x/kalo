import React from 'react';
import { IconButton } from '../actions/IconButton.jsx';
export function SliderNav({ progress = 0, span = 0.4, onPrev, onNext, canPrev = true, canNext = true, style }) {
  const left = Math.max(0, Math.min(1 - span, progress * (1 - span)));
  return React.createElement('div', { className: 'eth-slidernav', style },
    React.createElement('div', { className: 'eth-slidernav__track' }, React.createElement('div', { className: 'eth-slidernav__fill', style: { left: left * 100 + '%', width: span * 100 + '%' } })),
    React.createElement('div', { className: 'eth-slidernav__btns' },
      React.createElement(IconButton, { icon: 'chevron-left', label: 'previous', onClick: onPrev, disabled: !canPrev, size: 32 }),
      React.createElement(IconButton, { icon: 'chevron-right', label: 'next', onClick: onNext, disabled: !canNext, size: 32 })));
}
