import React from 'react';
export function Tabs({ tabs = [], value, onChange, variant = 'pill', style }) {
  return React.createElement('div', { role: 'tablist', className: 'eth-tabs' + (variant === 'underline' ? ' eth-tabs--underline' : ''), style },
    tabs.map((t) => { const v = t.value ?? t; const l = t.label ?? t; const a = v === value;
      return React.createElement('button', { key: v, role: 'tab', type: 'button', 'aria-selected': a, className: 'eth-tab' + (a ? ' eth-tab--active' : ''), onClick: () => onChange && onChange(v) }, l); }));
}
