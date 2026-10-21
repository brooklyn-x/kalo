import React from 'react';
import { Icon } from '../icons/Icon.jsx';
export function IconButton({ icon, label, variant = 'outline', size = 40, iconSize, className = '', style, children, ...rest }) {
  return React.createElement('button', { type: 'button', 'aria-label': label, title: label, className: 'eth-iconbtn eth-iconbtn--' + variant + ' ' + className, style: { width: size, height: size, ...style }, ...rest },
    icon ? React.createElement(Icon, { name: icon, size: iconSize || Math.round(size * 0.45), strokeWidth: 2 }) : null, children);
}
