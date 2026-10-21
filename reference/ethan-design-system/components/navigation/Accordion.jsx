import React, { useState } from 'react';
import { Icon } from '../icons/Icon.jsx';
export function Accordion({ items = [], defaultOpen = -1, multiple = false, style }) {
  const [open, setOpen] = useState(defaultOpen >= 0 ? [defaultOpen] : []);
  const toggle = (i) => setOpen((o) => o.includes(i) ? o.filter((x) => x !== i) : (multiple ? [...o, i] : [i]));
  return React.createElement('div', { className: 'eth-accordion', style }, items.map((it, i) => {
    const isOpen = open.includes(i);
    return React.createElement('div', { key: i, className: 'eth-accordion__item' + (isOpen ? ' eth-accordion__item--open' : '') },
      React.createElement('button', { type: 'button', className: 'eth-accordion__head', 'aria-expanded': isOpen, onClick: () => toggle(i) }, it.title,
        React.createElement('span', { className: 'eth-accordion__toggle' }, React.createElement(Icon, { name: 'chevron-down', size: 12, strokeWidth: 2.25 }))),
      React.createElement('div', { className: 'eth-accordion__body' }, React.createElement('div', { className: 'eth-accordion__inner' }, React.createElement('div', null, it.content))));
  }));
}
