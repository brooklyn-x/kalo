import React from 'react';
export function AnnouncementBar({ messages = [], repeat = 4, style }) {
  const list = [];
  for (let r = 0; r < repeat * 2; r++) messages.forEach((m, i) => list.push(React.createElement('span', { key: r + '-' + i, className: 'eth-announce__item' }, m)));
  return React.createElement('div', { className: 'eth-announce', role: 'region', 'aria-label': 'announcements', style },
    React.createElement('div', { className: 'eth-announce__track' }, list));
}
