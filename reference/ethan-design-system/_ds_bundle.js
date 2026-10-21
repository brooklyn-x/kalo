/* @ds-bundle: {"format":4,"namespace":"ETHANDesignSystem_b7e92e","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Seal","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"ProductCard","sourcePath":"components/display/ProductCard.jsx"},{"name":"StatTile","sourcePath":"components/display/StatTile.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"PurchaseOption","sourcePath":"components/forms/PurchaseOption.jsx"},{"name":"QuantityStepper","sourcePath":"components/forms/QuantityStepper.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"TextField","sourcePath":"components/forms/TextField.jsx"},{"name":"ICON_NAMES","sourcePath":"components/icons/Icon.jsx"},{"name":"Icon","sourcePath":"components/icons/Icon.jsx"},{"name":"Accordion","sourcePath":"components/navigation/Accordion.jsx"},{"name":"AnnouncementBar","sourcePath":"components/navigation/AnnouncementBar.jsx"},{"name":"SliderNav","sourcePath":"components/navigation/SliderNav.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"5d55406f984e","components/actions/IconButton.jsx":"5d16f3e505ae","components/display/Badge.jsx":"de7b135be71a","components/display/Card.jsx":"46c12e393282","components/display/ProductCard.jsx":"d7dfa5d92ca4","components/display/StatTile.jsx":"6c4c5820b406","components/display/Tag.jsx":"b0366db8adad","components/feedback/Dialog.jsx":"f45921d7dc52","components/feedback/Toast.jsx":"16b62cb81c02","components/feedback/Tooltip.jsx":"bac87a275eb3","components/forms/Checkbox.jsx":"e335d08ad286","components/forms/PurchaseOption.jsx":"8a76e1c59510","components/forms/QuantityStepper.jsx":"7f61b633030b","components/forms/Radio.jsx":"57ddab337b2d","components/forms/Select.jsx":"1e1937b8b990","components/forms/Switch.jsx":"267c1ff1b05d","components/forms/TextField.jsx":"6bcd7da4d793","components/icons/Icon.jsx":"cb3cb952288f","components/navigation/Accordion.jsx":"c282c8eaeced","components/navigation/AnnouncementBar.jsx":"42359a28716a","components/navigation/SliderNav.jsx":"a15e9102af81","components/navigation/Tabs.jsx":"942cfbf16880","ui_kits/nutrition/AddFood.jsx":"0246ac5faf91","ui_kits/nutrition/Diary.jsx":"fcb9dcdeca7a","ui_kits/nutrition/Home.jsx":"53731d7bfd48","ui_kits/nutrition/Onboarding.jsx":"42c531e7853c","ui_kits/nutrition/Profile.jsx":"a5b873d7cf79","ui_kits/nutrition/Progress.jsx":"e8b165d0f2f0","ui_kits/nutrition/Shared.jsx":"8228ff859d02","ui_kits/nutrition/data.js":"2d1cc60545c6","ui_kits/storefront/AlsoLike.jsx":"06603e9778e0","ui_kits/storefront/InsideSection.jsx":"ef8a01a92764","ui_kits/storefront/ProductHero.jsx":"a07ed31dadc2","ui_kits/storefront/SiteFooter.jsx":"57d00b8eb1a3","ui_kits/storefront/SiteHeader.jsx":"353ce632feb5","ui_kits/storefront/ValueProps.jsx":"d0a8f3c3477f","ui_kits/storefront/data.js":"cfdae6dd2a27"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ETHANDesignSystem_b7e92e = window.ETHANDesignSystem_b7e92e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function Button({
  variant = 'primary',
  size = 'md',
  block = false,
  iconLeft,
  iconRight,
  children,
  className = '',
  ...rest
}) {
  const cls = ['eth-btn', 'eth-btn--' + variant, size !== 'md' ? 'eth-btn--' + size : '', block ? 'eth-btn--block' : '', className].filter(Boolean).join(' ');
  return React.createElement('button', {
    type: 'button',
    className: cls,
    ...rest
  }, iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
const TONES = {
  mint: 'var(--mint-200)',
  teal: 'var(--teal-500)',
  sun: 'var(--sun-500)',
  butter: 'var(--butter-300)',
  orange: 'var(--orange-500)',
  red: 'var(--red-500)',
  maroon: 'var(--maroon-700)',
  cocoa: 'var(--cocoa-900)',
  white: 'var(--white)',
  cream: 'var(--cream-50)'
};
const INK = {
  cocoa: 'var(--white)',
  maroon: 'var(--white)',
  teal: 'var(--cocoa-900)'
};
function Badge({
  tone = 'white',
  children,
  style
}) {
  return React.createElement('span', {
    className: 'eth-badge',
    style: {
      background: TONES[tone],
      color: INK[tone] || 'var(--cocoa-900)',
      ...style
    }
  }, children);
}
function Seal({
  children,
  style
}) {
  return React.createElement('span', {
    className: 'eth-seal',
    style
  }, children);
}
Object.assign(__ds_scope, { Badge, Seal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
const TONES = {
  mint: 'var(--mint-200)',
  teal: 'var(--teal-500)',
  sun: 'var(--sun-500)',
  butter: 'var(--butter-300)',
  orange: 'var(--orange-500)',
  red: 'var(--red-500)',
  maroon: 'var(--maroon-700)',
  cocoa: 'var(--cocoa-900)',
  white: 'var(--white)',
  cream: 'var(--cream-50)'
};
const PADS = {
  none: 0,
  sm: 'var(--space-6)',
  md: 'var(--space-8)',
  lg: 'var(--panel-pad)'
};
function Card({
  tone = 'mint',
  radius = 'xl',
  padding = 'lg',
  children,
  style,
  ...rest
}) {
  return React.createElement('div', {
    className: 'eth-card',
    style: {
      background: TONES[tone],
      borderRadius: 'var(--radius-' + radius + ')',
      padding: PADS[padding],
      ...style
    },
    ...rest
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/ProductCard.jsx
try { (() => {
const TONES = {
  mint: 'var(--mint-200)',
  teal: 'var(--teal-500)',
  sun: 'var(--sun-500)',
  butter: 'var(--butter-300)',
  orange: 'var(--orange-500)',
  red: 'var(--red-500)',
  maroon: 'var(--maroon-700)',
  cocoa: 'var(--cocoa-900)',
  white: 'var(--white)',
  cream: 'var(--cream-50)'
};
const ACCENT = {
  orange: 'var(--orange-500)',
  red: 'var(--red-500)',
  maroon: 'var(--maroon-700)',
  teal: 'var(--teal-500)',
  sun: 'var(--orange-500)',
  butter: 'var(--orange-500)',
  mint: 'var(--teal-500)',
  cocoa: 'var(--cocoa-700)'
};
function ProductCard({
  tone = 'orange',
  badge,
  seal,
  image,
  name,
  variant,
  price,
  size,
  onClick,
  style
}) {
  const img = image || React.createElement('div', {
    className: 'eth-placeholder',
    style: {
      background: 'rgba(255,255,255,.22)'
    }
  }, 'product image');
  return React.createElement('div', {
    className: 'eth-pcard',
    onClick,
    role: onClick ? 'button' : undefined,
    tabIndex: onClick ? 0 : undefined,
    style
  }, React.createElement('div', {
    className: 'eth-pcard__media',
    style: {
      background: TONES[tone]
    }
  }, badge ? React.createElement(__ds_scope.Badge, {
    style: {
      position: 'absolute',
      top: 14,
      left: 14
    }
  }, badge) : null, seal ? React.createElement('div', {
    style: {
      position: 'absolute',
      top: 10,
      right: 10
    }
  }, seal) : null, React.createElement('div', {
    className: 'eth-pcard__img'
  }, img)), React.createElement('div', {
    className: 'eth-pcard__meta'
  }, React.createElement('span', null, name), React.createElement('span', null, price), React.createElement('span', {
    className: 'eth-pcard__sub',
    style: {
      color: ACCENT[tone] || 'var(--cocoa-700)'
    }
  }, variant), React.createElement('span', {
    className: 'eth-pcard__sub'
  }, size)));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/display/StatTile.jsx
try { (() => {
function StatTile({
  value,
  label,
  footnote,
  style
}) {
  return React.createElement('div', {
    className: 'eth-stat',
    style
  }, React.createElement('span', {
    className: 'eth-stat__value'
  }, value), React.createElement('span', {
    className: 'eth-stat__label'
  }, label), footnote ? React.createElement('span', {
    style: {
      fontSize: 9,
      color: 'var(--cocoa-700)',
      fontWeight: 600
    }
  }, footnote) : null);
}
Object.assign(__ds_scope, { StatTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/StatTile.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
const TONES = {
  mint: 'var(--mint-200)',
  teal: 'var(--teal-500)',
  sun: 'var(--sun-500)',
  butter: 'var(--butter-300)',
  orange: 'var(--orange-500)',
  red: 'var(--red-500)',
  maroon: 'var(--maroon-700)',
  cocoa: 'var(--cocoa-900)',
  white: 'var(--white)',
  cream: 'var(--cream-50)'
};
const INK = {
  cocoa: 'var(--white)',
  maroon: 'var(--white)',
  red: 'var(--cocoa-900)'
};
function Tag({
  tone = 'mint',
  swatch,
  onClick,
  children,
  style
}) {
  return React.createElement(onClick ? 'button' : 'span', {
    type: onClick ? 'button' : undefined,
    onClick,
    className: 'eth-tag' + (onClick ? ' eth-tag--interactive' : ''),
    style: {
      background: TONES[tone],
      color: INK[tone] || 'var(--cocoa-900)',
      ...style
    }
  }, swatch ? React.createElement('span', {
    className: 'eth-swatch',
    style: {
      background: swatch,
      width: 10,
      height: 10
    }
  }) : null, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  content,
  placement = 'top',
  open,
  children
}) {
  return React.createElement('span', {
    className: 'eth-tooltip' + (placement === 'bottom' ? ' eth-tooltip--bottom' : '') + (open ? ' eth-tooltip--open' : '')
  }, children, React.createElement('span', {
    role: 'tooltip',
    className: 'eth-tooltip__bubble'
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/PurchaseOption.jsx
try { (() => {
function PurchaseOption({
  label,
  price,
  compareAt,
  selected,
  onSelect,
  name = 'purchase',
  value,
  children
}) {
  return React.createElement('div', {
    className: 'eth-option' + (selected ? ' eth-option--selected' : '')
  }, React.createElement('label', {
    className: 'eth-option__row',
    style: {
      position: 'relative'
    }
  }, React.createElement('input', {
    type: 'radio',
    name,
    value,
    checked: !!selected,
    onChange: () => onSelect && onSelect(value)
  }), React.createElement('span', {
    className: 'eth-radio'
  }), React.createElement('span', null, label), React.createElement('span', {
    className: 'eth-option__price'
  }, compareAt ? React.createElement('span', {
    className: 'eth-option__compare'
  }, compareAt) : null, React.createElement('span', null, price))), selected && children ? React.createElement('div', {
    className: 'eth-option__body'
  }, children) : null);
}
Object.assign(__ds_scope, { PurchaseOption });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/PurchaseOption.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  checked,
  onChange,
  name,
  value,
  disabled,
  ...rest
}) {
  return React.createElement('label', {
    className: 'eth-control' + (disabled ? ' eth-control--disabled' : ''),
    style: {
      position: 'relative'
    }
  }, React.createElement('input', {
    type: 'radio',
    name,
    value,
    checked,
    onChange,
    disabled,
    ...rest
  }), React.createElement('span', {
    className: 'eth-radio'
  }), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  label,
  checked,
  onChange,
  disabled,
  ...rest
}) {
  return React.createElement('label', {
    className: 'eth-control' + (disabled ? ' eth-control--disabled' : ''),
    style: {
      position: 'relative'
    }
  }, React.createElement('input', {
    type: 'checkbox',
    role: 'switch',
    checked,
    onChange,
    disabled,
    ...rest
  }), React.createElement('span', {
    className: 'eth-switch'
  }), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/icons/Icon.jsx
try { (() => {
// Path data copied from Lucide (lucide.dev, ISC). Substitute for the reference's thin line icons.
const P = {
  'chevron-down': [['path', {
    d: 'm6 9 6 6 6-6'
  }]],
  'chevron-up': [['path', {
    d: 'm18 15-6-6-6 6'
  }]],
  'chevron-left': [['path', {
    d: 'm15 18-6-6 6-6'
  }]],
  'chevron-right': [['path', {
    d: 'm9 18 6-6-6-6'
  }]],
  'arrow-right': [['path', {
    d: 'M5 12h14'
  }], ['path', {
    d: 'm12 5 7 7-7 7'
  }]],
  'arrow-left': [['path', {
    d: 'm12 19-7-7 7-7'
  }], ['path', {
    d: 'M19 12H5'
  }]],
  plus: [['path', {
    d: 'M5 12h14'
  }], ['path', {
    d: 'M12 5v14'
  }]],
  minus: [['path', {
    d: 'M5 12h14'
  }]],
  x: [['path', {
    d: 'M18 6 6 18'
  }], ['path', {
    d: 'm6 6 12 12'
  }]],
  check: [['path', {
    d: 'M20 6 9 17l-5-5'
  }]],
  'shopping-bag': [['path', {
    d: 'M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z'
  }], ['path', {
    d: 'M3 6h18'
  }], ['path', {
    d: 'M16 10a4 4 0 0 1-8 0'
  }]],
  user: [['path', {
    d: 'M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2'
  }], ['circle', {
    cx: 12,
    cy: 7,
    r: 4
  }]],
  search: [['circle', {
    cx: 11,
    cy: 11,
    r: 8
  }], ['path', {
    d: 'm21 21-4.3-4.3'
  }]],
  'map-pin': [['path', {
    d: 'M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z'
  }], ['circle', {
    cx: 12,
    cy: 10,
    r: 3
  }]],
  info: [['circle', {
    cx: 12,
    cy: 12,
    r: 10
  }], ['path', {
    d: 'M12 16v-4'
  }], ['path', {
    d: 'M12 8h.01'
  }]],
  'alert-triangle': [['path', {
    d: 'm21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z'
  }], ['path', {
    d: 'M12 9v4'
  }], ['path', {
    d: 'M12 17h.01'
  }]],
  leaf: [['path', {
    d: 'M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z'
  }], ['path', {
    d: 'M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12'
  }]],
  wheat: [['path', {
    d: 'M2 22 16 8'
  }], ['path', {
    d: 'M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z'
  }], ['path', {
    d: 'M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z'
  }], ['path', {
    d: 'M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z'
  }], ['path', {
    d: 'M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z'
  }]],
  ban: [['circle', {
    cx: 12,
    cy: 12,
    r: 10
  }], ['path', {
    d: 'm4.9 4.9 14.2 14.2'
  }]],
  sprout: [['path', {
    d: 'M7 20h10'
  }], ['path', {
    d: 'M10 20c5.5-2.5.8-6.4 3-10'
  }], ['path', {
    d: 'M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z'
  }], ['path', {
    d: 'M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z'
  }]],
  instagram: [['rect', {
    x: 2,
    y: 2,
    width: 20,
    height: 20,
    rx: 5,
    ry: 5
  }], ['path', {
    d: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z'
  }], ['path', {
    d: 'M17.5 6.5h.01'
  }]],
  facebook: [['path', {
    d: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z'
  }]],
  twitter: [['path', {
    d: 'M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z'
  }]],
  home: [['path', {
    d: 'M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8'
  }], ['path', {
    d: 'M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'
  }]],
  'book-open': [['path', {
    d: 'M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z'
  }], ['path', {
    d: 'M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z'
  }]],
  'trending-up': [['path', {
    d: 'M22 7 13.5 15.5 8.5 10.5 2 17'
  }], ['path', {
    d: 'M16 7h6v6'
  }]],
  'trending-down': [['path', {
    d: 'M22 17 13.5 8.5 8.5 13.5 2 7'
  }], ['path', {
    d: 'M16 17h6v-6'
  }]],
  droplet: [['path', {
    d: 'M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z'
  }]],
  flame: [['path', {
    d: 'M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z'
  }]],
  'scan-barcode': [['path', {
    d: 'M3 7V5a2 2 0 0 1 2-2h2'
  }], ['path', {
    d: 'M17 3h2a2 2 0 0 1 2 2v2'
  }], ['path', {
    d: 'M21 17v2a2 2 0 0 1-2 2h-2'
  }], ['path', {
    d: 'M7 21H5a2 2 0 0 1-2-2v-2'
  }], ['path', {
    d: 'M8 7v10'
  }], ['path', {
    d: 'M12 7v10'
  }], ['path', {
    d: 'M17 7v10'
  }]],
  heart: [['path', {
    d: 'M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z'
  }]],
  pencil: [['path', {
    d: 'M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z'
  }], ['path', {
    d: 'm15 5 4 4'
  }]],
  trash: [['path', {
    d: 'M3 6h18'
  }], ['path', {
    d: 'M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6'
  }], ['path', {
    d: 'M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2'
  }]],
  calendar: [['rect', {
    x: 3,
    y: 4,
    width: 18,
    height: 18,
    rx: 2
  }], ['path', {
    d: 'M16 2v4'
  }], ['path', {
    d: 'M8 2v4'
  }], ['path', {
    d: 'M3 10h18'
  }]],
  bell: [['path', {
    d: 'M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9'
  }], ['path', {
    d: 'M10.3 21a1.94 1.94 0 0 0 3.4 0'
  }]],
  moon: [['path', {
    d: 'M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z'
  }]],
  sun: [['circle', {
    cx: 12,
    cy: 12,
    r: 4
  }], ['path', {
    d: 'M12 2v2'
  }], ['path', {
    d: 'M12 20v2'
  }], ['path', {
    d: 'm4.93 4.93 1.41 1.41'
  }], ['path', {
    d: 'm17.66 17.66 1.41 1.41'
  }], ['path', {
    d: 'M2 12h2'
  }], ['path', {
    d: 'M20 12h2'
  }], ['path', {
    d: 'm6.34 17.66-1.41 1.41'
  }], ['path', {
    d: 'm19.07 4.93-1.41 1.41'
  }]],
  clock: [['circle', {
    cx: 12,
    cy: 12,
    r: 10
  }], ['path', {
    d: 'M12 6v6l4 2'
  }]],
  star: [['path', {
    d: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'
  }]],
  target: [['circle', {
    cx: 12,
    cy: 12,
    r: 10
  }], ['circle', {
    cx: 12,
    cy: 12,
    r: 6
  }], ['circle', {
    cx: 12,
    cy: 12,
    r: 2
  }]],
  scale: [['circle', {
    cx: 12,
    cy: 5,
    r: 3
  }], ['path', {
    d: 'M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z'
  }]],
  activity: [['path', {
    d: 'M22 12h-4l-3 9L9 3l-3 9H2'
  }]],
  zap: [['path', {
    d: 'M13 2 3 14h9l-1 8 10-12h-9l1-8z'
  }]],
  apple: [['path', {
    d: 'M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z'
  }], ['path', {
    d: 'M10 2c1 .5 2 2 2 5'
  }]],
  carrot: [['path', {
    d: 'M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46'
  }], ['path', {
    d: 'M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z'
  }], ['path', {
    d: 'M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z'
  }]],
  egg: [['path', {
    d: 'M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z'
  }]],
  milk: [['path', {
    d: 'M8 2h8'
  }], ['path', {
    d: 'M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2'
  }], ['path', {
    d: 'M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0'
  }]],
  drumstick: [['path', {
    d: 'M15.4 15.63a7.875 6 135 1 1 6.23-6.23 4.5 3.43 135 0 0-6.23 6.23'
  }], ['path', {
    d: 'm8.29 12.71-2.6 2.6a2.5 2.5 0 1 0-1.65 4.65A2.5 2.5 0 1 0 8.7 18.3l2.59-2.59'
  }]],
  cookie: [['path', {
    d: 'M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5'
  }], ['path', {
    d: 'M8.5 8.5v.01'
  }], ['path', {
    d: 'M16 15.5v.01'
  }], ['path', {
    d: 'M12 12v.01'
  }], ['path', {
    d: 'M11 17v.01'
  }], ['path', {
    d: 'M7 14v.01'
  }]],
  coffee: [['path', {
    d: 'M10 2v2'
  }], ['path', {
    d: 'M14 2v2'
  }], ['path', {
    d: 'M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1'
  }], ['path', {
    d: 'M6 2v2'
  }]],
  'log-out': [['path', {
    d: 'M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4'
  }], ['path', {
    d: 'm16 17 5-5-5-5'
  }], ['path', {
    d: 'M21 12H9'
  }]],
  'rotate-ccw': [['path', {
    d: 'M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8'
  }], ['path', {
    d: 'M3 3v5h5'
  }]],
  menu: [['path', {
    d: 'M4 6h16'
  }], ['path', {
    d: 'M4 12h16'
  }], ['path', {
    d: 'M4 18h16'
  }]]
};
const ICON_NAMES = Object.keys(P);
function Icon({
  name,
  size = 20,
  strokeWidth = 1.75,
  color = 'currentColor',
  style,
  title
}) {
  const nodes = P[name];
  if (!nodes) return null;
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    style: {
      flex: 'none',
      display: 'block',
      ...style
    },
    'aria-hidden': title ? undefined : true,
    role: title ? 'img' : undefined
  }, title ? React.createElement('title', null, title) : null, nodes.map(([tag, attrs], i) => React.createElement(tag, {
    key: i,
    ...attrs
  })));
}
Object.assign(__ds_scope, { ICON_NAMES, Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icons/Icon.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function IconButton({
  icon,
  label,
  variant = 'outline',
  size = 40,
  iconSize,
  className = '',
  style,
  children,
  ...rest
}) {
  return React.createElement('button', {
    type: 'button',
    'aria-label': label,
    title: label,
    className: 'eth-iconbtn eth-iconbtn--' + variant + ' ' + className,
    style: {
      width: size,
      height: size,
      ...style
    },
    ...rest
  }, icon ? React.createElement(__ds_scope.Icon, {
    name: icon,
    size: iconSize || Math.round(size * 0.45),
    strokeWidth: 2
  }) : null, children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
const {
  useEffect
} = React;
function Dialog({
  open = true,
  title,
  children,
  actions,
  onClose,
  inline = false,
  style
}) {
  useEffect(() => {
    if (!open || inline || !onClose) return;
    const k = e => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [open, inline, onClose]);
  if (!open) return null;
  const panel = React.createElement('div', {
    role: 'dialog',
    'aria-modal': !inline,
    className: 'eth-dialog' + (inline ? ' eth-dialog--inline' : ''),
    style,
    onClick: e => e.stopPropagation()
  }, onClose ? React.createElement(__ds_scope.IconButton, {
    icon: 'x',
    label: 'close',
    variant: 'ghost',
    size: 36,
    className: 'eth-dialog__close',
    onClick: onClose
  }) : null, title ? React.createElement('h2', {
    className: 'eth-display',
    style: {
      fontSize: 'var(--display-s)',
      paddingRight: 40
    }
  }, title) : null, React.createElement('div', {
    className: 'eth-dialog__body'
  }, children), actions ? React.createElement('div', {
    className: 'eth-dialog__actions'
  }, actions) : null);
  if (inline) return panel;
  return React.createElement('div', {
    className: 'eth-dialog__scrim',
    onClick: onClose
  }, panel);
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const ICON = {
  success: 'check',
  info: 'info',
  warning: 'alert-triangle',
  error: 'x'
};
function Toast({
  tone = 'success',
  children,
  action,
  onClose,
  style
}) {
  return React.createElement('div', {
    role: 'status',
    className: 'eth-toast eth-toast--' + tone,
    style
  }, React.createElement('span', {
    className: 'eth-toast__icon'
  }, React.createElement(__ds_scope.Icon, {
    name: ICON[tone],
    size: 14,
    strokeWidth: 2.5
  })), React.createElement('span', {
    style: {
      flex: 1
    }
  }, children), action || null, onClose ? React.createElement('button', {
    type: 'button',
    'aria-label': 'dismiss',
    onClick: onClose,
    className: 'eth-iconbtn',
    style: {
      width: 32,
      height: 32,
      background: 'rgba(255,255,255,.12)',
      color: '#fff'
    }
  }, React.createElement(__ds_scope.Icon, {
    name: 'x',
    size: 14,
    strokeWidth: 2
  })) : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  onChange,
  disabled,
  ...rest
}) {
  return React.createElement('label', {
    className: 'eth-control' + (disabled ? ' eth-control--disabled' : ''),
    style: {
      position: 'relative'
    }
  }, React.createElement('input', {
    type: 'checkbox',
    checked,
    onChange,
    disabled,
    ...rest
  }), React.createElement('span', {
    className: 'eth-check'
  }, React.createElement(__ds_scope.Icon, {
    name: 'check',
    size: 12,
    strokeWidth: 3
  })), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/QuantityStepper.jsx
try { (() => {
function QuantityStepper({
  value = 1,
  min = 1,
  max = 99,
  onChange,
  style
}) {
  const set = n => onChange && onChange(Math.max(min, Math.min(max, n)));
  const btn = (icon, n, dis, lbl) => React.createElement('button', {
    type: 'button',
    className: 'eth-iconbtn eth-iconbtn--ghost',
    'aria-label': lbl,
    disabled: dis,
    onClick: () => set(n),
    style: {
      width: 36,
      height: 36
    }
  }, React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 14,
    strokeWidth: 2
  }));
  return React.createElement('div', {
    className: 'eth-stepper',
    style
  }, btn('minus', value - 1, value <= min, 'decrease'), React.createElement('span', {
    'aria-live': 'polite'
  }, value), btn('plus', value + 1, value >= max, 'increase'));
}
Object.assign(__ds_scope, { QuantityStepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/QuantityStepper.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  onChange,
  variant = 'filled',
  style,
  ...rest
}) {
  const cur = options.find(o => o.value === value) || options[0] || {};
  return React.createElement('label', {
    className: 'eth-field eth-select eth-field--' + variant,
    style
  }, label ? React.createElement('span', {
    className: 'eth-select__label'
  }, label) : null, React.createElement('span', {
    className: 'eth-select__value'
  }, cur.swatch ? React.createElement('span', {
    className: 'eth-swatch',
    style: {
      background: cur.swatch
    }
  }) : null, cur.label), React.createElement(__ds_scope.Icon, {
    name: 'chevron-down',
    size: 14,
    strokeWidth: 2
  }), React.createElement('select', {
    value: cur.value,
    onChange: e => onChange && onChange(e.target.value),
    'aria-label': label,
    ...rest
  }, options.map(o => React.createElement('option', {
    key: o.value,
    value: o.value
  }, o.label))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextField.jsx
try { (() => {
function TextField({
  variant = 'filled',
  placeholder,
  value,
  defaultValue,
  onChange,
  onSubmit,
  submitLabel = 'submit',
  type = 'text',
  error,
  style,
  ...rest
}) {
  const cls = 'eth-field eth-field--' + variant + (error ? ' eth-field--error' : '');
  const submitBtn = onSubmit ? React.createElement('button', {
    type: 'submit',
    'aria-label': submitLabel,
    className: 'eth-iconbtn eth-iconbtn--white',
    style: {
      width: 36,
      height: 36
    }
  }, React.createElement(__ds_scope.Icon, {
    name: 'arrow-right',
    size: 16,
    strokeWidth: 2
  })) : null;
  const field = React.createElement('label', {
    className: cls,
    style: {
      paddingRight: onSubmit ? 6 : 22,
      ...style
    }
  }, React.createElement('input', {
    type,
    placeholder,
    value,
    defaultValue,
    onChange,
    ...rest
  }), submitBtn);
  const wrapped = onSubmit ? React.createElement('form', {
    onSubmit: e => {
      e.preventDefault();
      onSubmit(e);
    },
    style: {
      margin: 0
    }
  }, field) : field;
  if (!error) return wrapped;
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, wrapped, React.createElement('span', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-s)',
      fontWeight: 700,
      color: 'var(--status-danger)',
      paddingLeft: 22
    }
  }, error));
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextField.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Accordion.jsx
try { (() => {
const {
  useState
} = React;
function Accordion({
  items = [],
  defaultOpen = -1,
  multiple = false,
  style
}) {
  const [open, setOpen] = useState(defaultOpen >= 0 ? [defaultOpen] : []);
  const toggle = i => setOpen(o => o.includes(i) ? o.filter(x => x !== i) : multiple ? [...o, i] : [i]);
  return React.createElement('div', {
    className: 'eth-accordion',
    style
  }, items.map((it, i) => {
    const isOpen = open.includes(i);
    return React.createElement('div', {
      key: i,
      className: 'eth-accordion__item' + (isOpen ? ' eth-accordion__item--open' : '')
    }, React.createElement('button', {
      type: 'button',
      className: 'eth-accordion__head',
      'aria-expanded': isOpen,
      onClick: () => toggle(i)
    }, it.title, React.createElement('span', {
      className: 'eth-accordion__toggle'
    }, React.createElement(__ds_scope.Icon, {
      name: 'chevron-down',
      size: 12,
      strokeWidth: 2.25
    }))), React.createElement('div', {
      className: 'eth-accordion__body'
    }, React.createElement('div', {
      className: 'eth-accordion__inner'
    }, React.createElement('div', null, it.content))));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/navigation/AnnouncementBar.jsx
try { (() => {
function AnnouncementBar({
  messages = [],
  repeat = 4,
  style
}) {
  const list = [];
  for (let r = 0; r < repeat * 2; r++) messages.forEach((m, i) => list.push(React.createElement('span', {
    key: r + '-' + i,
    className: 'eth-announce__item'
  }, m)));
  return React.createElement('div', {
    className: 'eth-announce',
    role: 'region',
    'aria-label': 'announcements',
    style
  }, React.createElement('div', {
    className: 'eth-announce__track'
  }, list));
}
Object.assign(__ds_scope, { AnnouncementBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/AnnouncementBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SliderNav.jsx
try { (() => {
function SliderNav({
  progress = 0,
  span = 0.4,
  onPrev,
  onNext,
  canPrev = true,
  canNext = true,
  style
}) {
  const left = Math.max(0, Math.min(1 - span, progress * (1 - span)));
  return React.createElement('div', {
    className: 'eth-slidernav',
    style
  }, React.createElement('div', {
    className: 'eth-slidernav__track'
  }, React.createElement('div', {
    className: 'eth-slidernav__fill',
    style: {
      left: left * 100 + '%',
      width: span * 100 + '%'
    }
  })), React.createElement('div', {
    className: 'eth-slidernav__btns'
  }, React.createElement(__ds_scope.IconButton, {
    icon: 'chevron-left',
    label: 'previous',
    onClick: onPrev,
    disabled: !canPrev,
    size: 32
  }), React.createElement(__ds_scope.IconButton, {
    icon: 'chevron-right',
    label: 'next',
    onClick: onNext,
    disabled: !canNext,
    size: 32
  })));
}
Object.assign(__ds_scope, { SliderNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SliderNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  value,
  onChange,
  variant = 'pill',
  style
}) {
  return React.createElement('div', {
    role: 'tablist',
    className: 'eth-tabs' + (variant === 'underline' ? ' eth-tabs--underline' : ''),
    style
  }, tabs.map(t => {
    const v = t.value ?? t;
    const l = t.label ?? t;
    const a = v === value;
    return React.createElement('button', {
      key: v,
      role: 'tab',
      type: 'button',
      'aria-selected': a,
      className: 'eth-tab' + (a ? ' eth-tab--active' : ''),
      onClick: () => onChange && onChange(v)
    }, l);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/nutrition/AddFood.jsx
try { (() => {
const {
  TextField,
  Tabs,
  Select,
  QuantityStepper,
  Tag
} = window.ETHANDesignSystem_b7e92e;
const CAT_TONE = {
  breakfast: 'var(--sun-500)',
  fruits: 'var(--mint-200)',
  vegetables: 'var(--teal-500)',
  grains: 'var(--butter-300)',
  dairy: 'var(--cream-50)',
  meat: 'var(--orange-500)',
  snacks: 'var(--butter-300)',
  drinks: 'var(--mint-200)'
};
function FoodRow({
  f,
  onPick,
  onQuick,
  fav
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "nt-item"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onPick(f.id),
    style: {
      flex: 1,
      minWidth: 0,
      background: 'none',
      border: 0,
      padding: 0,
      textAlign: 'left',
      cursor: 'pointer',
      color: 'inherit',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: 'nt-opt__ico ' + keep(CAT_TONE[f.cat]),
    style: {
      background: CAT_TONE[f.cat],
      width: 44,
      height: 44
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: (NUT.cats.find(c => c.key === f.cat) || {}).icon,
    size: 20
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "nt-item__name",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, f.name), fav && /*#__PURE__*/React.createElement(Icon, {
    name: "heart",
    size: 13,
    strokeWidth: 2.5,
    color: "var(--red-500)"
  })), /*#__PURE__*/React.createElement("span", {
    className: "nt-item__sub",
    style: {
      display: 'block'
    }
  }, f.serving, " \xB7 ", f.kcal, " kcal"))), /*#__PURE__*/React.createElement(IconButton, {
    icon: "plus",
    label: 'quick add ' + f.name,
    variant: "solid",
    size: 40,
    iconSize: 18,
    onClick: () => onQuick(f.id)
  }));
}
function Scanner({
  onClose,
  onFound
}) {
  const [found, setFound] = React.useState(false);
  React.useEffect(() => {
    const a = setTimeout(() => setFound(true), 1800),
      b = setTimeout(() => onFound('shk'), 2500);
    return () => {
      clearTimeout(a);
      clearTimeout(b);
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "nt-scan",
    role: "dialog",
    "aria-label": "barcode scanner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nt-row",
    style: {
      justifyContent: 'space-between',
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 700
    }
  }, "scan barcode"), /*#__PURE__*/React.createElement(IconButton, {
    icon: "x",
    label: "close scanner",
    variant: "white",
    size: 40,
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 28,
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nt-scan__frame"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nt-ph",
    style: {
      position: 'absolute',
      inset: 0,
      color: 'rgba(255,255,255,.7)',
      background: 'repeating-linear-gradient(135deg,rgba(255,255,255,.06) 0 8px,transparent 8px 16px)'
    }
  }, "camera viewfinder"), !found && /*#__PURE__*/React.createElement("div", {
    className: "nt-scan__line"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nt-h1",
    style: {
      color: 'var(--sun-500)',
      fontSize: 30
    }
  }, found ? 'Got it!' : 'Line it up'), /*#__PURE__*/React.createElement("p", {
    className: "nt-body",
    style: {
      color: 'var(--white)',
      marginTop: 10
    }
  }, found ? 'Protein shake, vanilla' : 'Hold the barcode inside the frame.'))));
}
function AddFood({
  favorites,
  onPick,
  onQuick,
  mealLabel
}) {
  const [q, setQ] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [cat, setCat] = React.useState(null);
  const [list, setList] = React.useState('recent');
  const [scan, setScan] = React.useState(false);
  const tm = React.useRef();
  const onQ = v => {
    setQ(v);
    setLoading(true);
    clearTimeout(tm.current);
    tm.current = setTimeout(() => setLoading(false), 380);
  };
  const searching = q.trim() || cat;
  const results = NUT.foods.filter(f => (!cat || f.cat === cat) && (!q.trim() || (f.name + ' ' + f.brand).toLowerCase().includes(q.trim().toLowerCase())));
  const lists = {
    recent: NUT.recent,
    frequent: NUT.frequent,
    favorites
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("header", {
    className: "nt-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "nt-label",
    style: {
      marginBottom: 8
    }
  }, "adding to ", mealLabel), /*#__PURE__*/React.createElement("h1", {
    className: "nt-h1"
  }, "Add food"))), /*#__PURE__*/React.createElement("div", {
    className: "nt-row",
    style: {
      gap: 10,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(TextField, {
    value: q,
    onChange: e => onQ(e.target.value),
    placeholder: "Search food...",
    "aria-label": "search food"
  }), q && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 6,
      top: 6
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "x",
    label: "clear search",
    variant: "ghost",
    size: 36,
    iconSize: 16,
    onClick: () => onQ('')
  }))), /*#__PURE__*/React.createElement(IconButton, {
    icon: "scan-barcode",
    label: "scan barcode",
    variant: "solid",
    size: 48,
    iconSize: 22,
    onClick: () => setScan(true)
  })), /*#__PURE__*/React.createElement("div", {
    className: "nt-cats",
    style: {
      marginBottom: 20
    }
  }, NUT.cats.map(c => /*#__PURE__*/React.createElement("button", {
    key: c.key,
    className: 'nt-cat' + (cat === c.key ? ' nt-cat--on' : ''),
    onClick: () => {
      setCat(cat === c.key ? null : c.key);
      setLoading(true);
      setTimeout(() => setLoading(false), 300);
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: 'nt-cat__ico ' + keep(CAT_TONE[c.key]),
    style: {
      background: CAT_TONE[c.key]
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: c.icon,
    size: 20
  })), c.key))), searching ? /*#__PURE__*/React.createElement("section", {
    className: "nt-card nt-fade",
    key: "res"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nt-row",
    style: {
      justifyContent: 'space-between',
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "nt-h2"
  }, cat && !q ? cat : 'Results'), !loading && /*#__PURE__*/React.createElement("span", {
    className: "nt-label"
  }, results.length, " foods")), loading ? [0, 1, 2, 3].map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "nt-item"
  }, /*#__PURE__*/React.createElement(Skel, {
    w: 44,
    h: 44,
    r: 22
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Skel, {
    w: "60%",
    h: 14
  }), /*#__PURE__*/React.createElement(Skel, {
    w: "35%",
    h: 12,
    style: {
      marginTop: 8
    }
  })), /*#__PURE__*/React.createElement(Skel, {
    w: 40,
    h: 40,
    r: 20
  }))) : results.length ? results.map(f => /*#__PURE__*/React.createElement(FoodRow, {
    key: f.id,
    f: f,
    fav: favorites.includes(f.id),
    onPick: onPick,
    onQuick: onQuick
  })) : /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '32px 8px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 28,
    style: {
      margin: '0 auto'
    }
  }), /*#__PURE__*/React.createElement("h3", {
    className: "nt-h2",
    style: {
      margin: '14px 0 8px'
    }
  }, "No match for \"", q, "\""), /*#__PURE__*/React.createElement("p", {
    className: "nt-body",
    style: {
      color: 'var(--cocoa-500)',
      marginBottom: 16
    }
  }, "Try a simpler word, or scan the package."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "scan-barcode",
      size: 16
    }),
    onClick: () => setScan(true)
  }, "scan barcode"))) : /*#__PURE__*/React.createElement("section", {
    className: "nt-card nt-fade",
    key: "lists"
  }, /*#__PURE__*/React.createElement(Tabs, {
    tabs: [{
      value: 'recent',
      label: 'recent'
    }, {
      value: 'frequent',
      label: 'frequent'
    }, {
      value: 'favorites',
      label: 'favorites'
    }],
    value: list,
    onChange: setList,
    variant: "underline",
    style: {
      width: '100%',
      marginBottom: 6
    }
  }), lists[list].length ? lists[list].map(id => /*#__PURE__*/React.createElement(FoodRow, {
    key: id,
    f: NUT.byId[id],
    fav: favorites.includes(id),
    onPick: onPick,
    onQuick: onQuick
  })) : /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '32px 8px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "heart",
    size: 28,
    style: {
      margin: '0 auto'
    }
  }), /*#__PURE__*/React.createElement("h3", {
    className: "nt-h2",
    style: {
      margin: '14px 0 8px'
    }
  }, "No favorites yet"), /*#__PURE__*/React.createElement("p", {
    className: "nt-body",
    style: {
      color: 'var(--cocoa-500)'
    }
  }, "Tap the heart on any food to keep it here."))), scan && /*#__PURE__*/React.createElement(Scanner, {
    onClose: () => setScan(false),
    onFound: id => {
      setScan(false);
      onPick(id);
    }
  }));
}
function FoodDetail({
  food,
  init,
  mode,
  fav,
  toggleFav,
  onClose,
  onSave
}) {
  const [si, setSi] = React.useState(init.si || 0);
  const [qty, setQty] = React.useState(init.qty || 1);
  const [meal, setMeal] = React.useState(init.meal);
  const v = NUT.entryVals({
    foodId: food.id,
    qty,
    si
  });
  const mk = v.p * 4 + v.c * 4 + v.f * 9 || 1;
  return /*#__PURE__*/React.createElement(Sheet, {
    onClose: onClose,
    label: food.name
  }, /*#__PURE__*/React.createElement("div", {
    className: "nt-row",
    style: {
      alignItems: 'flex-start',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nt-label",
    style: {
      marginBottom: 6
    }
  }, food.brand || food.cat), /*#__PURE__*/React.createElement("h2", {
    className: "nt-h1",
    style: {
      fontSize: 32
    }
  }, food.name)), /*#__PURE__*/React.createElement(IconButton, {
    icon: "heart",
    label: fav ? 'remove favorite' : 'add favorite',
    variant: fav ? 'solid' : 'white',
    size: 44,
    onClick: toggleFav
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "x",
    label: "close",
    variant: "white",
    size: 44,
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    className: "nt-panel",
    style: {
      background: 'var(--mint-200)',
      padding: 20,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nt-row",
    style: {
      alignItems: 'baseline',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "nt-num",
    style: {
      fontSize: 56
    }
  }, /*#__PURE__*/React.createElement(CountUp, {
    value: v.kcal,
    dur: 400
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 700
    }
  }, "kcal")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: 10,
      borderRadius: 999,
      overflow: 'hidden',
      margin: '14px 0 14px',
      background: 'var(--white)'
    }
  }, ['p', 'c', 'f'].map(k => /*#__PURE__*/React.createElement("i", {
    key: k,
    style: {
      width: v[k] * (k === 'f' ? 9 : 4) / mk * 100 + '%',
      background: k === 'p' ? 'var(--cocoa-900)' : MACRO[k].color,
      transition: 'width .4s var(--ease-out)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 8
    }
  }, ['p', 'c', 'f'].map(k => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      background: 'var(--white)',
      borderRadius: 'var(--radius-sm)',
      padding: '10px 12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nt-num",
    style: {
      fontSize: 22
    }
  }, v[k], "g"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      marginTop: 2
    }
  }, MACRO[k].label))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) auto',
      gap: 10,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "serving",
    value: String(si),
    onChange: x => setSi(+x),
    options: food.servings.map((s, i) => ({
      value: String(i),
      label: s.label
    }))
  }), /*#__PURE__*/React.createElement(QuantityStepper, {
    value: qty,
    min: 1,
    max: 20,
    onChange: setQty
  })), /*#__PURE__*/React.createElement("div", {
    className: "nt-label",
    style: {
      margin: '16px 0 8px'
    }
  }, "meal"), /*#__PURE__*/React.createElement("div", {
    className: "nt-pills",
    style: {
      marginBottom: 22
    }
  }, NUT.meals.map(m => /*#__PURE__*/React.createElement("button", {
    key: m.key,
    className: 'nt-pill' + (meal === m.key ? ' nt-pill--on' : ''),
    onClick: () => setMeal(m.key)
  }, m.label))), /*#__PURE__*/React.createElement(Button, {
    block: true,
    size: "lg",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: mode === 'edit' ? 'check' : 'plus',
      size: 18,
      strokeWidth: 2.5
    }),
    onClick: () => onSave({
      foodId: food.id,
      qty,
      si
    }, meal)
  }, mode === 'edit' ? 'save changes' : 'add to diary · ' + v.kcal + ' kcal'));
}
Object.assign(window, {
  AddFood,
  FoodDetail
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/nutrition/AddFood.jsx", error: String((e && e.message) || e) }); }

// ui_kits/nutrition/Diary.jsx
try { (() => {
const shiftDate = (iso, n) => {
  const d = new Date(iso + 'T12:00:00');
  d.setDate(d.getDate() + n);
  return d.toISOString().slice(0, 10);
};
const dateLabel = iso => {
  if (iso === NUT.TODAY) return 'today';
  if (iso === shiftDate(NUT.TODAY, -1)) return 'yesterday';
  return new Date(iso + 'T12:00:00').toLocaleDateString('en-US', {
    weekday: 'long'
  }).toLowerCase();
};
const dateSub = iso => new Date(iso + 'T12:00:00').toLocaleDateString('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric'
}).toLowerCase();
function Diary({
  user,
  diary,
  date,
  setDate,
  onEdit,
  onDelete,
  openAdd
}) {
  const [loading, setLoading] = React.useState(false);
  const change = n => {
    setLoading(true);
    setDate(shiftDate(date, n));
    setTimeout(() => setLoading(false), 420);
  };
  const day = diary[date];
  const t = dayTotals(day);
  const g = macroGrams(user);
  const empty = !day || !Object.values(day).some(l => l.length);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("header", {
    className: "nt-head",
    style: {
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    className: "nt-h1"
  }, "Food diary")), /*#__PURE__*/React.createElement("div", {
    className: "nt-card",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: 10,
      borderRadius: 999,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "chevron-left",
    label: "previous day",
    variant: "ghost",
    size: 44,
    onClick: () => change(-1)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 800
    }
  }, dateLabel(date)), /*#__PURE__*/React.createElement("div", {
    className: "nt-label",
    style: {
      marginTop: 2
    }
  }, dateSub(date))), /*#__PURE__*/React.createElement(IconButton, {
    icon: "chevron-right",
    label: "next day",
    variant: "ghost",
    size: 44,
    disabled: date >= NUT.TODAY,
    onClick: () => change(1)
  })), loading ? /*#__PURE__*/React.createElement("div", {
    className: "nt-col",
    "aria-busy": "true"
  }, /*#__PURE__*/React.createElement(Skel, {
    h: 120,
    r: 28
  }), [0, 1, 2].map(i => /*#__PURE__*/React.createElement(Skel, {
    key: i,
    h: 150,
    r: 28
  }))) : /*#__PURE__*/React.createElement("div", {
    className: "nt-fade"
  }, /*#__PURE__*/React.createElement("section", {
    className: "nt-panel",
    style: {
      background: 'var(--mint-200)',
      padding: 20,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      textAlign: 'center'
    }
  }, [['goal', user.kcal], ['eaten', t.kcal], [user.kcal - t.kcal >= 0 ? 'remaining' : 'over', Math.abs(user.kcal - t.kcal)]].map(([l, v], i) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      borderLeft: i ? '1.5px solid var(--cocoa-900)' : 0,
      padding: '0 6px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nt-num",
    style: {
      fontSize: 28
    }
  }, fmt(v)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      marginTop: 4
    }
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 12,
      marginTop: 18
    }
  }, ['p', 'c', 'f'].map(k => /*#__PURE__*/React.createElement("div", {
    key: k
  }, /*#__PURE__*/React.createElement("div", {
    className: "nt-row",
    style: {
      justifyContent: 'space-between',
      fontSize: 11,
      fontWeight: 700,
      marginBottom: 6,
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", null, MACRO[k].label), /*#__PURE__*/React.createElement("span", null, t[k], "/", g[k], "g")), /*#__PURE__*/React.createElement("div", {
    className: "nt-bar",
    style: {
      background: 'var(--ring-track)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: Math.min(100, t[k] / g[k] * 100) + '%',
      background: k === 'p' ? 'var(--cocoa-900)' : MACRO[k].color
    }
  })))))), empty ? /*#__PURE__*/React.createElement("section", {
    className: "nt-card",
    style: {
      textAlign: 'center',
      padding: '48px 24px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 72,
      height: 72,
      borderRadius: '50%',
      background: 'var(--mint-200)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "book-open",
    size: 30
  })), /*#__PURE__*/React.createElement("h2", {
    className: "nt-h1",
    style: {
      fontSize: 30,
      margin: '18px 0 10px'
    }
  }, "A fresh page"), /*#__PURE__*/React.createElement("p", {
    className: "nt-body",
    style: {
      color: 'var(--cocoa-500)',
      maxWidth: 300,
      margin: '0 auto 22px'
    }
  }, "No meals logged for ", dateLabel(date), ". Add your first bite and we'll do the math."), /*#__PURE__*/React.createElement(Button, {
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 16,
      strokeWidth: 2.5
    }),
    onClick: () => openAdd('breakfast')
  }, "add breakfast")) : /*#__PURE__*/React.createElement("div", {
    className: "nt-grid nt-grid--2"
  }, NUT.meals.map(m => {
    const list = day && day[m.key] || [];
    const mt = mealTotals(list);
    return /*#__PURE__*/React.createElement("section", {
      key: m.key,
      className: "nt-card",
      "aria-label": m.label
    }, /*#__PURE__*/React.createElement("div", {
      className: "nt-row",
      style: {
        marginBottom: 4
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: m.icon,
      size: 20
    }), /*#__PURE__*/React.createElement("h2", {
      className: "nt-h2",
      style: {
        flex: 1
      }
    }, m.label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 15,
        fontWeight: 800
      }
    }, fmt(mt.kcal), " kcal")), list.length ? list.map((e, i) => {
      const v = NUT.entryVals(e);
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        className: "nt-item"
      }, /*#__PURE__*/React.createElement("div", {
        className: "nt-item__main"
      }, /*#__PURE__*/React.createElement("div", {
        className: "nt-item__name"
      }, v.name), /*#__PURE__*/React.createElement("div", {
        className: "nt-item__sub"
      }, v.serving), /*#__PURE__*/React.createElement(MacroChips, {
        v: v
      })), /*#__PURE__*/React.createElement("div", {
        style: {
          textAlign: 'right',
          flex: 'none'
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "nt-num",
        style: {
          fontSize: 20
        }
      }, v.kcal), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 11,
          fontWeight: 700,
          color: 'var(--cocoa-500)'
        }
      }, "kcal")), /*#__PURE__*/React.createElement("div", {
        className: "nt-row",
        style: {
          gap: 2,
          flex: 'none'
        }
      }, /*#__PURE__*/React.createElement(IconButton, {
        icon: "pencil",
        label: 'edit ' + v.name,
        variant: "ghost",
        size: 36,
        iconSize: 16,
        onClick: () => onEdit(m.key, i)
      }), /*#__PURE__*/React.createElement(IconButton, {
        icon: "trash",
        label: 'delete ' + v.name,
        variant: "ghost",
        size: 36,
        iconSize: 16,
        onClick: () => onDelete(m.key, i)
      })));
    }) : /*#__PURE__*/React.createElement("div", {
      className: "nt-item",
      style: {
        color: 'var(--cocoa-500)',
        fontSize: 13,
        fontWeight: 700
      }
    }, "nothing logged yet"), /*#__PURE__*/React.createElement("button", {
      className: "nt-link",
      style: {
        marginTop: 10,
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        textDecoration: 'none'
      },
      onClick: () => openAdd(m.key)
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 14,
      strokeWidth: 2.5
    }), "add to ", m.label));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "nt-sticky-add"
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    style: {
      boxShadow: 'var(--shadow-pop)'
    },
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 18,
      strokeWidth: 2.5
    }),
    onClick: () => openAdd()
  }, "add food")));
}
Object.assign(window, {
  Diary,
  shiftDate,
  dateLabel
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/nutrition/Diary.jsx", error: String((e && e.message) || e) }); }

// ui_kits/nutrition/Home.jsx
try { (() => {
const {
  Button,
  Badge,
  IconButton
} = window.ETHANDesignSystem_b7e92e;
function HomeSkeleton() {
  return /*#__PURE__*/React.createElement("div", {
    className: "nt-grid nt-grid--home",
    "aria-busy": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nt-col"
  }, /*#__PURE__*/React.createElement(Skel, {
    h: 330,
    r: 36
  }), /*#__PURE__*/React.createElement(Skel, {
    h: 150,
    r: 28
  })), /*#__PURE__*/React.createElement("div", {
    className: "nt-col"
  }, /*#__PURE__*/React.createElement(Skel, {
    h: 300,
    r: 28
  }), /*#__PURE__*/React.createElement(Skel, {
    h: 140,
    r: 28
  })));
}
function Home({
  user,
  day,
  water,
  setWater,
  go,
  openAdd,
  loading
}) {
  const t = dayTotals(day);
  const g = macroGrams(user);
  const left = user.kcal - t.kcal;
  const anyLogged = Object.values(day || {}).some(l => l.length);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("header", {
    className: "nt-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "nt-label",
    style: {
      marginBottom: 8
    }
  }, "wednesday, oct 7"), /*#__PURE__*/React.createElement("h1", {
    className: "nt-h1"
  }, "Good evening, ", user.first)), /*#__PURE__*/React.createElement("span", {
    className: "nt-row nt-keep",
    title: "daily streak",
    style: {
      gap: 6,
      background: 'var(--sun-500)',
      borderRadius: 999,
      height: 40,
      padding: '0 14px 0 10px',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "flame",
    size: 20,
    strokeWidth: 2
  }), /*#__PURE__*/React.createElement("span", {
    className: "nt-num",
    style: {
      fontSize: 20
    }
  }, user.streak))), loading ? /*#__PURE__*/React.createElement(HomeSkeleton, null) : /*#__PURE__*/React.createElement("div", {
    className: "nt-grid nt-grid--home nt-fade"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nt-col"
  }, /*#__PURE__*/React.createElement("section", {
    className: "nt-panel",
    style: {
      background: 'var(--mint-200)'
    },
    "aria-label": "today's calories"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nt-row",
    style: {
      justifyContent: 'space-between',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "nt-h2"
  }, "Today's calories"), /*#__PURE__*/React.createElement(Badge, {
    tone: "white"
  }, 'goal ' + fmt(user.kcal))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(CalorieRing, {
    eaten: t.kcal,
    goal: user.kcal,
    size: 212
  }), /*#__PURE__*/React.createElement("div", {
    className: "nt-col",
    style: {
      gap: 14,
      flex: '1 1 160px'
    }
  }, [['eaten', t.kcal, 'flame'], ['remaining', Math.max(0, left), 'target'], ['daily goal', user.kcal, 'zap']].map(([l, v, ic]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    className: "nt-row",
    style: {
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      height: 36,
      borderRadius: '50%',
      background: 'var(--white)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 18
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--cocoa-700)'
    }
  }, l), /*#__PURE__*/React.createElement("div", {
    className: "nt-num",
    style: {
      fontSize: 22,
      whiteSpace: 'nowrap'
    }
  }, fmt(v), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      fontWeight: 700
    }
  }, "kcal"))))))), /*#__PURE__*/React.createElement("div", {
    className: "nt-row",
    style: {
      justifyContent: 'space-between',
      margin: '22px 0 14px',
      fontSize: 15,
      fontWeight: 700,
      flexWrap: 'wrap',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", null, fmt(t.kcal), " / ", fmt(user.kcal), " kcal"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--cocoa-700)'
    }
  }, left >= 0 ? fmt(left) + ' kcal remaining' : fmt(-left) + ' kcal over')), /*#__PURE__*/React.createElement(Button, {
    block: true,
    size: "lg",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 18,
      strokeWidth: 2.5
    }),
    onClick: () => openAdd()
  }, "add food")), /*#__PURE__*/React.createElement("section", {
    className: "nt-card",
    "aria-label": "macros"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nt-row",
    style: {
      justifyContent: 'space-between',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "nt-h2"
  }, "Macros"), /*#__PURE__*/React.createElement("button", {
    className: "nt-link",
    onClick: () => go('profile')
  }, "edit goals")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(MacroBar, {
    k: "p",
    val: t.p,
    goal: g.p,
    compact: true
  }), /*#__PURE__*/React.createElement(MacroBar, {
    k: "c",
    val: t.c,
    goal: g.c,
    compact: true
  }), /*#__PURE__*/React.createElement(MacroBar, {
    k: "f",
    val: t.f,
    goal: g.f,
    compact: true
  })))), /*#__PURE__*/React.createElement("div", {
    className: "nt-col"
  }, /*#__PURE__*/React.createElement("section", {
    className: "nt-card",
    "aria-label": "meals"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nt-row",
    style: {
      justifyContent: 'space-between',
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "nt-h2"
  }, "Today's meals"), /*#__PURE__*/React.createElement("button", {
    className: "nt-link",
    onClick: () => go('diary')
  }, "open diary")), !anyLogged && /*#__PURE__*/React.createElement("p", {
    className: "nt-body",
    style: {
      color: 'var(--cocoa-500)',
      margin: '6px 0 4px'
    }
  }, "Nothing logged yet today. Start with what you ate last \u2014 it takes two taps."), NUT.meals.map(m => {
    const mt = mealTotals(day && day[m.key]);
    return /*#__PURE__*/React.createElement("div", {
      key: m.key,
      className: "nt-item"
    }, /*#__PURE__*/React.createElement("span", {
      className: "nt-opt__ico",
      style: {
        background: mt.n ? 'var(--mint-200)' : 'var(--cream-50)',
        width: 44,
        height: 44
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: m.icon,
      size: 20
    })), /*#__PURE__*/React.createElement("div", {
      className: "nt-item__main"
    }, /*#__PURE__*/React.createElement("div", {
      className: "nt-item__name"
    }, m.label), /*#__PURE__*/React.createElement("div", {
      className: "nt-item__sub"
    }, mt.n ? mt.n + (mt.n > 1 ? ' items' : ' item') : 'not logged yet')), mt.n ? /*#__PURE__*/React.createElement("span", {
      className: "nt-num",
      style: {
        fontSize: 20
      }
    }, fmt(mt.kcal), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 12,
        fontWeight: 700
      }
    }, " kcal")) : null, /*#__PURE__*/React.createElement(IconButton, {
      icon: "plus",
      label: 'add to ' + m.label,
      variant: mt.n ? 'ghost' : 'outline',
      size: 36,
      iconSize: 16,
      onClick: () => openAdd(m.key)
    }));
  })), /*#__PURE__*/React.createElement("section", {
    className: "nt-card",
    "aria-label": "water"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nt-row",
    style: {
      justifyContent: 'space-between',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "nt-h2"
  }, "Water"), /*#__PURE__*/React.createElement("div", {
    className: "nt-label",
    style: {
      marginTop: 6
    }
  }, water * 250, " / ", user.water * 250, " ml")), /*#__PURE__*/React.createElement("div", {
    className: "nt-row",
    style: {
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "minus",
    label: "remove glass",
    variant: "outline",
    size: 36,
    iconSize: 16,
    disabled: !water,
    onClick: () => setWater(w => Math.max(0, w - 1))
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "plus",
    label: "add glass",
    variant: "solid",
    size: 36,
    iconSize: 16,
    onClick: () => setWater(w => Math.min(12, w + 1))
  }))), /*#__PURE__*/React.createElement("div", {
    className: "nt-row",
    style: {
      gap: 6
    }
  }, Array.from({
    length: user.water
  }, (_, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    "aria-label": 'glass ' + (i + 1),
    className: 'nt-glass' + (i < water ? ' nt-glass--on' : ''),
    onClick: () => setWater(i + 1 === water ? i : i + 1)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "droplet",
    size: 18,
    strokeWidth: 2
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "nt-panel nt-keep",
    style: {
      background: 'var(--sun-500)',
      padding: 20
    },
    "aria-label": "streak"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nt-row",
    style: {
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 56,
      height: 56,
      borderRadius: '50%',
      background: 'var(--white)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "flame",
    size: 28,
    strokeWidth: 2
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nt-h2"
  }, user.streak, " day streak"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      marginTop: 4
    }
  }, "Log dinner to make it ", user.streak + 1, "!"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(7,1fr)',
      gap: 6,
      marginTop: 16
    }
  }, ['t', 'f', 's', 's', 'm', 't', 'w'].map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 28,
      borderRadius: 999,
      background: i < 6 ? 'var(--cocoa-900)' : 'var(--white)',
      color: i < 6 ? 'var(--sun-500)' : 'var(--cocoa-900)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i < 6 ? 'check' : 'clock',
    size: 14,
    strokeWidth: 2.5
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      marginTop: 4
    }
  }, d))))))));
}
window.Home = Home;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/nutrition/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/nutrition/Onboarding.jsx
try { (() => {
function Onboarding({
  onDone
}) {
  const [step, setStep] = React.useState(0);
  const [f, setF] = React.useState({
    age: 29,
    sex: 'female',
    height: 168,
    weight: 64.2,
    activity: 'moderate',
    goal: 'lose'
  });
  const set = (k, v) => setF(s => ({
    ...s,
    [k]: v
  }));
  const bmr = 10 * f.weight + 6.25 * f.height - 5 * f.age + (f.sex === 'male' ? 5 : f.sex === 'female' ? -161 : -78);
  const tdee = bmr * ACT[f.activity][2];
  const kcal = Math.max(1200, Math.round((tdee + GOALS[f.goal][2]) / 10) * 10);
  const macros = f.goal === 'gain' ? {
    p: 25,
    c: 50,
    f: 25
  } : {
    p: 30,
    c: 45,
    f: 25
  };
  const g = macroGrams({
    kcal,
    macros
  });
  const steps = 4,
    next = () => setStep(s => s + 1),
    back = () => setStep(s => s - 1);
  const Opt = ({
    on,
    onClick,
    icon,
    title,
    sub,
    bg
  }) => /*#__PURE__*/React.createElement("button", {
    className: 'nt-opt' + (on ? ' nt-opt--on' : ''),
    onClick: onClick,
    "aria-pressed": on
  }, /*#__PURE__*/React.createElement("span", {
    className: 'nt-opt__ico ' + keep(bg),
    style: {
      background: bg
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 20
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 17,
      fontWeight: 800
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--cocoa-500)',
      marginTop: 2
    }
  }, sub)), /*#__PURE__*/React.createElement("span", {
    className: "eth-radio",
    style: {
      width: 20,
      height: 20,
      boxShadow: on ? 'inset 0 0 0 6px var(--cocoa-900)' : undefined,
      transition: 'box-shadow var(--dur-base) var(--ease-bounce)'
    }
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: step === 0 || step === 4 ? 'var(--mint-200)' : 'var(--cream-50)',
      transition: 'background-color var(--dur-slow)',
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 520,
      padding: '20px 20px 28px',
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    }
  }, step > 0 && step < 4 && /*#__PURE__*/React.createElement("div", {
    className: "nt-row",
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "arrow-left",
    label: "back",
    variant: "ghost",
    size: 44,
    onClick: back
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      gap: 6
    }
  }, [1, 2, 3].map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "nt-bar",
    style: {
      flex: 1,
      height: 6,
      background: 'var(--cocoa-alpha-12)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: step >= i ? '100%' : 0,
      background: 'var(--cocoa-900)'
    }
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      width: 44,
      textAlign: 'right'
    }
  }, step, "/3")), /*#__PURE__*/React.createElement("div", {
    key: step,
    className: "nt-fade",
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    }
  }, step === 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "nt-h1",
    style: {
      fontSize: 30,
      marginTop: 8
    }
  }, "ETHAN"), /*#__PURE__*/React.createElement("div", {
    className: "nt-ph nt-keep",
    style: {
      flex: 1,
      minHeight: 220,
      margin: '28px 0',
      borderRadius: 'var(--radius-xl)',
      background: 'var(--teal-500)',
      color: 'var(--cocoa-900)',
      backgroundImage: 'repeating-linear-gradient(135deg,rgba(255,255,255,.18) 0 10px,transparent 10px 20px)'
    }
  }, "hero food shot"), /*#__PURE__*/React.createElement("h1", {
    className: "nt-h1",
    style: {
      fontSize: 56
    }
  }, "Eat well. Track less."), /*#__PURE__*/React.createElement("p", {
    className: "nt-body",
    style: {
      margin: '14px 0 28px',
      fontSize: 17
    }
  }, "Log a meal in two taps and see exactly where your day stands."), /*#__PURE__*/React.createElement(Button, {
    block: true,
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18,
      strokeWidth: 2.25
    }),
    onClick: next
  }, "get started"), /*#__PURE__*/React.createElement("button", {
    className: "nt-link",
    style: {
      margin: '18px auto 0'
    },
    onClick: () => onDone(null)
  }, "i already have an account")), step === 1 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    className: "nt-h1"
  }, "About you"), /*#__PURE__*/React.createElement("p", {
    className: "nt-body",
    style: {
      color: 'var(--cocoa-500)',
      margin: '10px 0 24px'
    }
  }, "We use this to estimate how much energy you burn."), /*#__PURE__*/React.createElement("div", {
    className: "nt-label",
    style: {
      margin: '0 4px 8px'
    }
  }, "gender"), /*#__PURE__*/React.createElement("div", {
    className: "nt-pills",
    style: {
      marginBottom: 20
    }
  }, ['female', 'male', 'other'].map(s => /*#__PURE__*/React.createElement("button", {
    key: s,
    className: 'nt-pill' + (f.sex === s ? ' nt-pill--on' : ''),
    onClick: () => set('sex', s),
    style: {
      flex: 1
    }
  }, s))), /*#__PURE__*/React.createElement("div", {
    className: "nt-col",
    style: {
      gap: 16
    }
  }, [['age', 'age', 1, 14, 99, 'years'], ['height', 'height', 1, 120, 230, 'cm'], ['weight', 'weight', .5, 35, 250, 'kg']].map(([k, l, st, mn, mx, sf]) => /*#__PURE__*/React.createElement("div", {
    key: k
  }, /*#__PURE__*/React.createElement("div", {
    className: "nt-label",
    style: {
      margin: '0 4px 8px'
    }
  }, l), /*#__PURE__*/React.createElement(NumStep, {
    value: f[k],
    step: st,
    min: mn,
    max: mx,
    suffix: sf,
    onChange: v => set(k, v)
  }))))), step === 2 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    className: "nt-h1"
  }, "How active are you?"), /*#__PURE__*/React.createElement("p", {
    className: "nt-body",
    style: {
      color: 'var(--cocoa-500)',
      margin: '10px 0 24px'
    }
  }, "Pick what a normal week looks like."), /*#__PURE__*/React.createElement("div", {
    className: "nt-col",
    style: {
      gap: 10
    }
  }, Object.entries(ACT).map(([k, [t, s]], i) => /*#__PURE__*/React.createElement(Opt, {
    key: k,
    on: f.activity === k,
    onClick: () => set('activity', k),
    icon: ['clock', 'activity', 'zap', 'flame'][i],
    title: t,
    sub: s,
    bg: ['var(--cream-50)', 'var(--mint-200)', 'var(--butter-300)', 'var(--orange-500)'][i]
  })))), step === 3 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    className: "nt-h1"
  }, "What's your goal?"), /*#__PURE__*/React.createElement("p", {
    className: "nt-body",
    style: {
      color: 'var(--cocoa-500)',
      margin: '10px 0 24px'
    }
  }, "You can change this any time."), /*#__PURE__*/React.createElement("div", {
    className: "nt-col",
    style: {
      gap: 10
    }
  }, Object.entries(GOALS).map(([k, [t, s,, ic]], i) => /*#__PURE__*/React.createElement(Opt, {
    key: k,
    on: f.goal === k,
    onClick: () => set('goal', k),
    icon: ic,
    title: t,
    sub: s,
    bg: ['var(--mint-200)', 'var(--butter-300)', 'var(--sun-500)'][i]
  })))), step === 4 && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nt-label",
    style: {
      color: 'var(--cocoa-700)'
    }
  }, "your daily target"), /*#__PURE__*/React.createElement("div", {
    className: "nt-num",
    style: {
      fontSize: 112,
      margin: '12px 0 4px'
    }
  }, /*#__PURE__*/React.createElement(CountUp, {
    value: kcal,
    dur: 1200
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 800
    }
  }, "kcal per day"), /*#__PURE__*/React.createElement("p", {
    className: "nt-body",
    style: {
      maxWidth: 360,
      margin: '18px auto 28px'
    }
  }, "Based on a burn of about ", fmt(tdee), " kcal, ", f.goal === 'lose' ? 'minus 500 to lose ~0.5 kg a week' : f.goal === 'gain' ? 'plus 300 for steady gains' : 'to hold steady', "."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 8,
      marginBottom: 28
    }
  }, ['p', 'c', 'f'].map(k => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      background: 'var(--white)',
      borderRadius: 'var(--radius-md)',
      padding: '16px 8px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nt-num",
    style: {
      fontSize: 28
    }
  }, g[k], "g"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      marginTop: 4
    }
  }, MACRO[k].label)))))), step > 0 && step < 4 && /*#__PURE__*/React.createElement(Button, {
    block: true,
    size: "lg",
    style: {
      marginTop: 28
    },
    onClick: next
  }, step === 3 ? 'calculate my target' : 'continue'), step === 4 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    block: true,
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18,
      strokeWidth: 2.25
    }),
    onClick: () => onDone({
      ...f,
      kcal,
      macros
    })
  }, "start tracking"), /*#__PURE__*/React.createElement("button", {
    className: "nt-link",
    style: {
      margin: '16px auto 0'
    },
    onClick: () => setStep(1)
  }, "adjust my details"))));
}
window.Onboarding = Onboarding;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/nutrition/Onboarding.jsx", error: String((e && e.message) || e) }); }

// ui_kits/nutrition/Profile.jsx
try { (() => {
const {
  Switch
} = window.ETHANDesignSystem_b7e92e;
const ACT = {
  sedentary: ['sedentary', 'desk job, little exercise', 1.2],
  light: ['lightly active', 'exercise 1–3 days a week', 1.375],
  moderate: ['moderately active', 'exercise 3–5 days a week', 1.55],
  very: ['very active', 'hard exercise 6–7 days', 1.725]
};
const GOALS = {
  lose: ['lose weight', 'about 0.5 kg a week', -500, 'trending-down'],
  maintain: ['maintain weight', 'keep things steady', 0, 'target'],
  gain: ['gain weight', 'build up gradually', 300, 'trending-up']
};
function NumStep({
  value,
  onChange,
  step = 1,
  min = 0,
  max = 9999,
  suffix,
  big
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "nt-row",
    style: {
      background: 'var(--white)',
      borderRadius: 999,
      padding: 6,
      gap: 8,
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "minus",
    label: "decrease",
    variant: "outline",
    size: big ? 48 : 40,
    disabled: value <= min,
    onClick: () => onChange(Math.max(min, +(value - step).toFixed(1)))
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'center',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "nt-num",
    style: {
      fontSize: big ? 40 : 24
    }
  }, big ? fmt(value) : value), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700
    }
  }, " ", suffix)), /*#__PURE__*/React.createElement(IconButton, {
    icon: "plus",
    label: "increase",
    variant: "solid",
    size: big ? 48 : 40,
    disabled: value >= max,
    onClick: () => onChange(Math.min(max, +(value + step).toFixed(1)))
  }));
}
function GoalSheet({
  kind,
  user,
  units,
  onClose,
  onSave
}) {
  const [kcal, setKcal] = React.useState(user.kcal);
  const [mac, setMac] = React.useState(user.macros);
  const [gw, setGw] = React.useState(user.goalWeight);
  const sum = mac.p + mac.c + mac.f;
  const ok = kind !== 'macros' || sum === 100;
  const title = {
    kcal: 'Daily calorie goal',
    macros: 'Macro goals',
    weight: 'Weight goal'
  }[kind];
  return /*#__PURE__*/React.createElement(Sheet, {
    onClose: onClose,
    label: title
  }, /*#__PURE__*/React.createElement("div", {
    className: "nt-row",
    style: {
      justifyContent: 'space-between',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "nt-h1",
    style: {
      fontSize: 30
    }
  }, title), /*#__PURE__*/React.createElement(IconButton, {
    icon: "x",
    label: "close",
    variant: "white",
    size: 44,
    onClick: onClose
  })), kind === 'kcal' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(NumStep, {
    big: true,
    value: kcal,
    step: 50,
    min: 1200,
    max: 4500,
    suffix: "kcal",
    onChange: setKcal
  }), /*#__PURE__*/React.createElement("p", {
    className: "nt-body",
    style: {
      color: 'var(--cocoa-500)',
      margin: '14px 4px 0'
    }
  }, "Recommended for your goal: 1,950\u20132,050 kcal.")), kind === 'macros' && /*#__PURE__*/React.createElement("div", {
    className: "nt-col",
    style: {
      gap: 12
    }
  }, ['p', 'c', 'f'].map(k => /*#__PURE__*/React.createElement("div", {
    key: k
  }, /*#__PURE__*/React.createElement("div", {
    className: "nt-row",
    style: {
      justifyContent: 'space-between',
      fontSize: 13,
      fontWeight: 700,
      margin: '0 4px 8px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "nt-row",
    style: {
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: k === 'p' ? 'var(--cocoa-900)' : MACRO[k].color
    }
  }), MACRO[k].label), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--cocoa-500)'
    }
  }, Math.round(kcal * mac[k] / 100 / (k === 'f' ? 9 : 4)), "g")), /*#__PURE__*/React.createElement(NumStep, {
    value: mac[k],
    step: 5,
    min: 5,
    max: 80,
    suffix: "%",
    onChange: v => setMac({
      ...mac,
      [k]: v
    })
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: ok ? 'var(--cocoa-700)' : 'var(--maroon-700)',
      margin: '0 4px'
    }
  }, ok ? 'adds up to 100% — nice.' : `total is ${sum}% — needs to be 100%`)), kind === 'weight' && /*#__PURE__*/React.createElement(NumStep, {
    big: true,
    value: +fmtW(gw, units),
    step: .5,
    min: 30,
    max: 400,
    suffix: units,
    onChange: v => setGw(units === 'lb' ? v / 2.2046 : v)
  }), /*#__PURE__*/React.createElement(Button, {
    block: true,
    size: "lg",
    style: {
      marginTop: 24
    },
    disabled: !ok,
    onClick: () => onSave(kind === 'kcal' ? {
      kcal
    } : kind === 'macros' ? {
      macros: mac
    } : {
      goalWeight: +gw.toFixed(1)
    })
  }, "save"));
}
function Profile({
  user,
  setUser,
  units,
  setUnits,
  toast,
  restart,
  theme,
  setTheme
}) {
  const [sheet, setSheet] = React.useState(null);
  const [notif, setNotif] = React.useState(true);
  const ht = units === 'lb' ? `${Math.floor(user.height / 30.48)}′${Math.round(user.height / 2.54 % 12)}″` : user.height + ' cm';
  const Row = ({
    icon,
    label,
    val,
    onClick,
    children
  }) => /*#__PURE__*/React.createElement("button", {
    className: "nt-setrow",
    onClick: onClick,
    style: {
      cursor: onClick ? 'pointer' : 'default'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "nt-setrow__ico"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 18
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, label), children || /*#__PURE__*/React.createElement("span", {
    className: "nt-setrow__val"
  }, val, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 16,
    strokeWidth: 2.25
  })));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("header", {
    className: "nt-head"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "nt-h1"
  }, "Profile")), /*#__PURE__*/React.createElement("div", {
    className: "nt-grid nt-grid--2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nt-col"
  }, /*#__PURE__*/React.createElement("section", {
    className: "nt-panel",
    style: {
      background: 'var(--mint-200)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nt-ph",
    style: {
      width: 104,
      height: 104,
      borderRadius: '50%',
      margin: '0 auto 14px',
      background: 'var(--white)',
      boxShadow: 'inset 0 0 0 3px var(--cocoa-900)'
    }
  }, "profile", /*#__PURE__*/React.createElement("br", null), "photo"), /*#__PURE__*/React.createElement("h2", {
    className: "nt-h1",
    style: {
      fontSize: 32
    }
  }, user.first, " ", user.last), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      marginTop: 8,
      color: 'var(--cocoa-700)'
    }
  }, "member since june 2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 8,
      marginTop: 20
    }
  }, [['age', user.age], ['height', ht], ['weight', fmtW(user.weight, units) + ' ' + units]].map(([l, v]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      background: 'var(--white)',
      borderRadius: 'var(--radius-sm)',
      padding: '12px 6px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nt-num",
    style: {
      fontSize: 20
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      marginTop: 4,
      color: 'var(--cocoa-500)'
    }
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,minmax(0,1fr))',
      gap: 8,
      marginTop: 8
    }
  }, [['goal', GOALS[user.goal][0], GOALS[user.goal][3]], ['activity', ACT[user.activity][0], 'activity']].map(([l, v, ic]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    className: "nt-row",
    style: {
      background: 'var(--white)',
      borderRadius: 'var(--radius-sm)',
      padding: '12px',
      gap: 10,
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 18
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: 'var(--cocoa-500)'
    }
  }, l), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 800
    }
  }, v)))))), /*#__PURE__*/React.createElement("section", {
    className: "nt-card",
    style: {
      paddingTop: 8,
      paddingBottom: 8
    }
  }, /*#__PURE__*/React.createElement(Row, {
    icon: "flame",
    label: "daily calorie goal",
    val: fmt(user.kcal) + ' kcal',
    onClick: () => setSheet('kcal')
  }), /*#__PURE__*/React.createElement(Row, {
    icon: "activity",
    label: "macro goals",
    val: `${user.macros.p}/${user.macros.c}/${user.macros.f}`,
    onClick: () => setSheet('macros')
  }), /*#__PURE__*/React.createElement(Row, {
    icon: "target",
    label: "weight goal",
    val: fmtW(user.goalWeight, units) + ' ' + units,
    onClick: () => setSheet('weight')
  }))), /*#__PURE__*/React.createElement("div", {
    className: "nt-col"
  }, /*#__PURE__*/React.createElement("section", {
    className: "nt-card",
    style: {
      paddingTop: 8,
      paddingBottom: 8
    }
  }, /*#__PURE__*/React.createElement(Row, {
    icon: "scale",
    label: "units"
  }, /*#__PURE__*/React.createElement(Tabs, {
    tabs: ['kg', 'lb'],
    value: units,
    onChange: setUnits,
    style: {
      background: 'var(--cream-50)'
    }
  })), /*#__PURE__*/React.createElement(Row, {
    icon: "bell",
    label: "notifications"
  }, /*#__PURE__*/React.createElement(Switch, {
    checked: notif,
    onChange: e => {
      setNotif(e.target.checked);
      toast(e.target.checked ? 'meal reminders on' : 'meal reminders off');
    },
    "aria-label": "notifications"
  })), /*#__PURE__*/React.createElement(Row, {
    icon: theme === 'dark' ? 'moon' : 'sun',
    label: "theme"
  }, /*#__PURE__*/React.createElement(Tabs, {
    tabs: ['light', 'dark', 'system'],
    value: theme,
    onChange: setTheme,
    style: {
      background: 'var(--cream-50)'
    }
  }))), /*#__PURE__*/React.createElement("section", {
    className: "nt-card",
    style: {
      paddingTop: 8,
      paddingBottom: 8
    }
  }, /*#__PURE__*/React.createElement(Row, {
    icon: "user",
    label: "account settings",
    val: "",
    onClick: () => toast('account settings')
  }), /*#__PURE__*/React.createElement(Row, {
    icon: "rotate-ccw",
    label: "redo onboarding",
    val: "",
    onClick: restart
  }), /*#__PURE__*/React.createElement(Row, {
    icon: "log-out",
    label: "sign out",
    val: "",
    onClick: () => toast('signed out (demo)')
  })))), sheet && /*#__PURE__*/React.createElement(GoalSheet, {
    kind: sheet,
    user: user,
    units: units,
    onClose: () => setSheet(null),
    onSave: patch => {
      setUser(u => ({
        ...u,
        ...patch
      }));
      setSheet(null);
      toast('goal updated!');
    }
  }));
}
Object.assign(window, {
  Profile,
  NumStep,
  ACT,
  GOALS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/nutrition/Profile.jsx", error: String((e && e.message) || e) }); }

// ui_kits/nutrition/Progress.jsx
try { (() => {
function WeightChart({
  data,
  units,
  labels
}) {
  const m = useMounted();
  const W = 340,
    H = 170,
    px = 8,
    py = 18;
  const lo = Math.min(...data) - .3,
    hi = Math.max(...data) + .3;
  const pts = data.map((v, i) => [px + i * (W - 2 * px) / (data.length - 1), py + (hi - v) / (hi - lo) * (H - 2 * py)]);
  const line = pts.map((p, i) => (i ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join(' ');
  const len = 900;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${W} ${H}`,
    width: "100%",
    style: {
      display: 'block',
      overflow: 'visible'
    },
    role: "img",
    "aria-label": "weight trend"
  }, [0, 1, 2, 3].map(i => /*#__PURE__*/React.createElement("line", {
    key: i,
    x1: "0",
    x2: W,
    y1: py + i * (H - 2 * py) / 3,
    y2: py + i * (H - 2 * py) / 3,
    stroke: "var(--cocoa-alpha-12)"
  })), /*#__PURE__*/React.createElement("path", {
    d: line + ` L ${pts[pts.length - 1][0]} ${H} L ${pts[0][0]} ${H} Z`,
    fill: "var(--mint-200)",
    style: {
      opacity: m ? 1 : 0,
      transition: 'opacity .8s'
    }
  }), /*#__PURE__*/React.createElement("path", {
    d: line,
    fill: "none",
    stroke: "var(--cocoa-900)",
    strokeWidth: "2.5",
    strokeLinejoin: "round",
    strokeLinecap: "round",
    strokeDasharray: len,
    strokeDashoffset: m ? 0 : len,
    style: {
      transition: 'stroke-dashoffset 1.2s var(--ease-out)'
    }
  }), (data.length <= 7 ? pts : [pts[0], pts[pts.length - 1]]).map((p, i, a) => /*#__PURE__*/React.createElement("circle", {
    key: i,
    cx: p[0],
    cy: p[1],
    r: i === a.length - 1 ? 6 : 4,
    fill: i === a.length - 1 ? 'var(--teal-500)' : 'var(--white)',
    stroke: "var(--cocoa-900)",
    strokeWidth: "2"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "nt-row",
    style: {
      justifyContent: 'space-between',
      marginTop: 8,
      fontSize: 11,
      fontWeight: 700,
      color: 'var(--cocoa-500)'
    }
  }, labels.map(l => /*#__PURE__*/React.createElement("span", {
    key: l
  }, l))));
}
function CalBars({
  data,
  goal
}) {
  const m = useMounted();
  const max = Math.max(goal * 1.25, ...data.map(d => d.v));
  const dense = data.length > 10;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nt-bars",
    style: {
      gap: dense ? 3 : 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nt-bars__goal",
    style: {
      bottom: `calc(${goal / max * 100}% * (160 - 20) / 160 + 20px)`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 0,
      top: -20,
      fontSize: 11,
      fontWeight: 700,
      background: 'var(--white)',
      paddingLeft: 6
    }
  }, "goal ", fmt(goal))), data.map((d, i) => {
    const last = i === data.length - 1;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "nt-bars__col"
    }, /*#__PURE__*/React.createElement("div", {
      className: "nt-bars__bar",
      title: d.d + ': ' + fmt(d.v) + ' kcal',
      style: {
        height: m ? `calc(${d.v / max * 100}% - ${d.v / max * 20}px)` : 0,
        background: last ? 'var(--cocoa-900)' : d.v > goal ? 'var(--orange-500)' : 'var(--teal-500)',
        borderRadius: dense ? 3 : undefined,
        transitionDelay: i * 25 + 'ms'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 700,
        height: 14,
        color: last ? 'var(--cocoa-900)' : 'var(--cocoa-500)'
      }
    }, dense ? i % 5 === 0 || last ? d.d : '' : d.d[0]));
  })), /*#__PURE__*/React.createElement("div", {
    className: "nt-row",
    style: {
      gap: 16,
      marginTop: 14,
      fontSize: 12,
      fontWeight: 700,
      flexWrap: 'wrap'
    }
  }, [['var(--teal-500)', 'under goal'], ['var(--orange-500)', 'over goal'], ['var(--cocoa-900)', 'today']].map(([c, l]) => /*#__PURE__*/React.createElement("span", {
    key: l,
    className: "nt-row",
    style: {
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 3,
      background: c
    }
  }), l))));
}
function Donut({
  parts
}) {
  const m = useMounted();
  const r = 54,
    C = 2 * Math.PI * r;
  let acc = 0;
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 140 140",
    width: "140",
    height: "140",
    style: {
      flex: 'none',
      transform: 'rotate(-90deg)'
    },
    role: "img",
    "aria-label": "macro distribution"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "70",
    cy: "70",
    r: r,
    fill: "none",
    stroke: "var(--cream-50)",
    strokeWidth: "22"
  }), parts.map((p, i) => {
    const len = C * p.pct / 100,
      off = acc;
    acc += len;
    return /*#__PURE__*/React.createElement("circle", {
      key: i,
      cx: "70",
      cy: "70",
      r: r,
      fill: "none",
      stroke: p.color,
      strokeWidth: "22",
      strokeDasharray: `${m ? Math.max(0, len - 3) : 0} ${C}`,
      strokeDashoffset: -off,
      style: {
        transition: 'stroke-dasharray 1s var(--ease-out)'
      }
    });
  }));
}
function Progress({
  user,
  units,
  diaryToday
}) {
  const [range, setRange] = React.useState('week');
  const kc = range === 'week' ? NUT.weekKcal : NUT.monthKcal;
  const wt = range === 'week' ? NUT.weightWeek : NUT.weightMonth;
  const done = kc.slice(0, -1);
  const avg = done.reduce((a, d) => a + d.v, 0) / done.length;
  const delta = wt[wt.length - 1] - wt[0];
  const onTarget = done.filter(d => d.v <= user.kcal).length;
  const dist = range === 'week' ? {
    p: 27,
    c: 46,
    f: 27
  } : {
    p: 25,
    c: 48,
    f: 27
  };
  const parts = ['p', 'c', 'f'].map(k => ({
    k,
    pct: dist[k],
    color: k === 'p' ? 'var(--cocoa-900)' : MACRO[k].color
  }));
  const toGo = Math.max(0, user.weight - user.goalWeight),
    lost = user.startWeight - user.weight;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("header", {
    className: "nt-head",
    style: {
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    className: "nt-h1"
  }, "Progress"), /*#__PURE__*/React.createElement(Tabs, {
    tabs: [{
      value: 'week',
      label: 'weekly'
    }, {
      value: 'month',
      label: 'monthly'
    }],
    value: range,
    onChange: setRange
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))',
      gap: 12,
      marginBottom: 16
    },
    key: range,
    className: "nt-fade"
  }, [['avg calories', fmt(avg), 'kcal / day', 'var(--mint-200)', 'flame'], ['weight change', (delta > 0 ? '+' : '') + fmtW(Math.abs(delta) * Math.sign(delta), units), units + ' this ' + range, 'var(--sun-500)', delta <= 0 ? 'trending-down' : 'trending-up'], ['current streak', user.streak, 'days logged', 'var(--butter-300)', 'zap'], ['on target', onTarget + '/' + done.length, 'days under goal', 'var(--white)', 'target']].map(([l, v, s, bg, ic]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    className: 'nt-card ' + keep(bg),
    style: {
      background: bg,
      padding: 18,
      borderRadius: 'var(--radius-md)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nt-row",
    style: {
      justifyContent: 'space-between',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700
    }
  }, l), /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    className: "nt-num",
    style: {
      fontSize: 34
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      marginTop: 4,
      color: 'var(--cocoa-700)'
    }
  }, s)))), /*#__PURE__*/React.createElement("div", {
    className: "nt-grid nt-grid--2"
  }, /*#__PURE__*/React.createElement("section", {
    className: "nt-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nt-row",
    style: {
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "nt-h2"
  }, "Weight"), /*#__PURE__*/React.createElement("div", {
    className: "nt-label",
    style: {
      marginTop: 6
    }
  }, "goal ", fmtW(user.goalWeight, units), " ", units)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "nt-num",
    style: {
      fontSize: 30
    }
  }, fmtW(wt[wt.length - 1], units)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700
    }
  }, " ", units))), /*#__PURE__*/React.createElement(WeightChart, {
    key: range,
    data: wt,
    units: units,
    labels: range === 'week' ? ['thu', 'fri', 'sat', 'sun', 'mon', 'tue', 'wed'] : ['sep 8', 'sep 22', 'oct 7']
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nt-row",
    style: {
      justifyContent: 'space-between',
      fontSize: 13,
      fontWeight: 700,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", null, fmtW(lost, units), " ", units, " lost"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--cocoa-500)'
    }
  }, fmtW(toGo, units), " ", units, " to go")), /*#__PURE__*/React.createElement("div", {
    className: "nt-bar"
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: lost / (user.startWeight - user.goalWeight) * 100 + '%',
      background: 'var(--teal-500)'
    }
  })))), /*#__PURE__*/React.createElement("section", {
    className: "nt-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nt-row",
    style: {
      justifyContent: 'space-between',
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "nt-h2"
  }, "Calories vs goal"), /*#__PURE__*/React.createElement("span", {
    className: "nt-label"
  }, range === 'week' ? 'last 7 days' : 'last 30 days')), /*#__PURE__*/React.createElement(CalBars, {
    key: range,
    data: kc,
    goal: user.kcal
  })), /*#__PURE__*/React.createElement("section", {
    className: "nt-card"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "nt-h2",
    style: {
      marginBottom: 18
    }
  }, "Macro split"), /*#__PURE__*/React.createElement("div", {
    className: "nt-row",
    style: {
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Donut, {
    key: range,
    parts: parts
  }), /*#__PURE__*/React.createElement("div", {
    className: "nt-col",
    style: {
      gap: 12,
      flex: '1 1 140px'
    }
  }, parts.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.k,
    className: "nt-row",
    style: {
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "nt-row",
    style: {
      gap: 8,
      fontSize: 15,
      fontWeight: 700
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: 12,
      height: 12,
      borderRadius: 4,
      background: p.color
    }
  }), MACRO[p.k].label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 800
    }
  }, p.pct, "% ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--cocoa-500)',
      fontWeight: 700,
      fontSize: 12
    }
  }, "/ ", user.macros[p.k], "%")))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: 'var(--cocoa-500)'
    }
  }, "actual / goal, share of calories")))), /*#__PURE__*/React.createElement("section", {
    className: "nt-panel nt-keep",
    style: {
      background: 'var(--cocoa-900)',
      color: 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nt-label",
    style: {
      color: 'var(--sun-500)',
      marginBottom: 10
    }
  }, "this ", range), /*#__PURE__*/React.createElement("h2", {
    className: "nt-h1",
    style: {
      color: 'var(--white)',
      fontSize: 30
    }
  }, onTarget >= done.length * .6 ? 'Steady wins it.' : 'Room to grow.'), /*#__PURE__*/React.createElement("p", {
    className: "nt-body",
    style: {
      color: 'var(--white)',
      marginTop: 12
    }
  }, "You stayed under your goal on ", onTarget, " of ", done.length, " days and averaged ", fmt(avg), " kcal. At this pace you'll reach ", fmtW(user.goalWeight, units), " ", units, " in about ", Math.ceil(toGo / .45), " weeks."))));
}
window.Progress = Progress;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/nutrition/Progress.jsx", error: String((e && e.message) || e) }); }

// ui_kits/nutrition/Shared.jsx
try { (() => {
const {
  Icon
} = window.ETHANDesignSystem_b7e92e;
const MACRO = {
  p: {
    label: 'protein',
    color: 'var(--teal-500)'
  },
  c: {
    label: 'carbs',
    color: 'var(--sun-500)'
  },
  f: {
    label: 'fat',
    color: 'var(--orange-500)'
  }
};
const fmt = n => Math.round(n).toLocaleString('en-US');
const dayTotals = day => {
  const t = {
    kcal: 0,
    p: 0,
    c: 0,
    f: 0
  };
  if (!day) return t;
  Object.values(day).flat().forEach(e => {
    const v = NUT.entryVals(e);
    t.kcal += v.kcal;
    t.p += v.p;
    t.c += v.c;
    t.f += v.f;
  });
  return t;
};
const mealTotals = list => (list || []).reduce((a, e) => {
  const v = NUT.entryVals(e);
  return {
    kcal: a.kcal + v.kcal,
    n: a.n + 1
  };
}, {
  kcal: 0,
  n: 0
});
const macroGrams = u => ({
  p: Math.round(u.kcal * u.macros.p / 100 / 4),
  c: Math.round(u.kcal * u.macros.c / 100 / 4),
  f: Math.round(u.kcal * u.macros.f / 100 / 9)
});
const fmtW = (kg, units) => units === 'lb' ? (kg * 2.2046).toFixed(1) : kg.toFixed(1);
const ACCENT_BG = ['var(--sun-500)', 'var(--butter-300)', 'var(--orange-500)', 'var(--teal-500)', 'var(--red-500)'];
const keep = bg => ACCENT_BG.includes(bg) ? 'nt-keep' : '';
function useMounted(delay = 60) {
  const [m, setM] = React.useState(false);
  React.useEffect(() => {
    const t = setTimeout(() => setM(true), delay);
    return () => clearTimeout(t);
  }, []);
  return m;
}
function CountUp({
  value,
  dur = 900
}) {
  const [v, setV] = React.useState(0);
  const from = React.useRef(0);
  React.useEffect(() => {
    const s = performance.now(),
      a = from.current;
    let raf;
    const tick = t => {
      const k = Math.min(1, (t - s) / dur),
        e = 1 - Math.pow(1 - k, 3);
      setV(a + (value - a) * e);
      if (k < 1) raf = requestAnimationFrame(tick);else from.current = value;
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value]);
  return fmt(v);
}
function CalorieRing({
  eaten,
  goal,
  size = 240,
  stroke = 20
}) {
  const m = useMounted();
  const r = (size - stroke) / 2,
    C = 2 * Math.PI * r;
  const pct = Math.min(1, eaten / goal),
    over = eaten > goal,
    left = goal - eaten;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: size,
      height: size,
      maxWidth: '100%',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    className: "nt-ring",
    viewBox: `0 0 ${size} ${size}`,
    width: "100%",
    height: "100%",
    style: {
      transform: 'rotate(-90deg)',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: "var(--ring-track)",
    strokeWidth: stroke
  }), /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: over ? 'var(--orange-500)' : 'var(--cocoa-900)',
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeDasharray: C,
    strokeDashoffset: m ? C * (1 - pct) : C
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "nt-label",
    style: {
      color: 'var(--cocoa-700)'
    }
  }, over ? 'over goal' : 'remaining'), /*#__PURE__*/React.createElement("span", {
    className: "nt-num",
    style: {
      fontSize: size * .25
    }
  }, /*#__PURE__*/React.createElement(CountUp, {
    value: Math.abs(left)
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700
    }
  }, "kcal")));
}
function MacroBar({
  k,
  val,
  goal,
  compact
}) {
  const m = useMounted(120);
  const pct = Math.min(100, val / goal * 100);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nt-row",
    style: {
      justifyContent: 'space-between',
      marginBottom: 8,
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "nt-row",
    style: {
      gap: 6,
      fontSize: 13,
      fontWeight: 700
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: MACRO[k].color
    }
  }), MACRO[k].label), !compact && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--cocoa-500)'
    }
  }, goal - val > 0 ? goal - val + 'g left' : 'done!')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 4,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "nt-num",
    style: {
      fontSize: 26
    }
  }, val), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--cocoa-500)'
    }
  }, "/ ", goal, "g")), /*#__PURE__*/React.createElement("div", {
    className: "nt-bar"
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: m ? pct + '%' : 0,
      background: MACRO[k].color
    }
  })));
}
function MacroChips({
  v
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "nt-macro-chips"
  }, ['p', 'c', 'f'].map(k => /*#__PURE__*/React.createElement("span", {
    key: k,
    className: "nt-mchip"
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      background: MACRO[k].color
    }
  }), v[k], "g ", MACRO[k].label[0])));
}
const Skel = ({
  w = '100%',
  h = 16,
  r,
  style
}) => /*#__PURE__*/React.createElement("div", {
  className: "nt-skel",
  style: {
    width: w,
    height: h,
    borderRadius: r,
    ...style
  }
});
function Sheet({
  onClose,
  children,
  label
}) {
  React.useEffect(() => {
    const k = e => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "nt-scrim",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "nt-sheet",
    role: "dialog",
    "aria-label": label,
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "nt-sheet__grip"
  }), children));
}
const NAV = [{
  k: 'home',
  label: 'home',
  icon: 'home'
}, {
  k: 'diary',
  label: 'diary',
  icon: 'book-open'
}, {
  k: 'add',
  label: 'add food',
  icon: 'plus'
}, {
  k: 'progress',
  label: 'progress',
  icon: 'trending-up'
}, {
  k: 'profile',
  label: 'profile',
  icon: 'user'
}];
function BottomNav({
  tab,
  go
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, tab !== 'add' && /*#__PURE__*/React.createElement("button", {
    className: "eth-btn eth-btn--secondary eth-btn--lg nt-fab-add",
    onClick: () => go('add')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 18,
    strokeWidth: 2.5
  }), "add food"), /*#__PURE__*/React.createElement("nav", {
    className: "nt-bottom",
    "aria-label": "main"
  }, NAV.filter(n => n.k !== 'add').map(n => /*#__PURE__*/React.createElement("button", {
    key: n.k,
    className: 'nt-nav' + (tab === n.k ? ' nt-nav--on' : ''),
    onClick: () => go(n.k),
    "aria-current": tab === n.k ? 'page' : undefined
  }, /*#__PURE__*/React.createElement(Icon, {
    name: n.icon,
    size: 20,
    strokeWidth: tab === n.k ? 2.25 : 1.75
  }), n.label))));
}
function SideRail({
  tab,
  go
}) {
  return /*#__PURE__*/React.createElement("aside", {
    className: "nt-rail"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nt-h1",
    style: {
      fontSize: 34,
      padding: '0 16px 28px'
    }
  }, "ETHAN"), NAV.map(n => /*#__PURE__*/React.createElement("button", {
    key: n.k,
    className: 'nt-nav' + (tab === n.k ? ' nt-nav--on' : ''),
    onClick: () => go(n.k)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: n.icon,
    size: 20,
    strokeWidth: tab === n.k ? 2.25 : 1.75
  }), n.label)));
}
Object.assign(window, {
  MACRO,
  fmt,
  dayTotals,
  mealTotals,
  macroGrams,
  fmtW,
  keep,
  useMounted,
  CountUp,
  CalorieRing,
  MacroBar,
  MacroChips,
  Skel,
  Sheet,
  BottomNav,
  SideRail
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/nutrition/Shared.jsx", error: String((e && e.message) || e) }); }

// ui_kits/nutrition/data.js
try { (() => {
// Demo data for the ETHAN nutrition kit. Values per 1 base serving.
(function () {
  const F = (id, name, brand, cat, serving, kcal, p, c, f, alts) => ({
    id,
    name,
    brand,
    cat,
    serving,
    kcal,
    p,
    c,
    f,
    servings: [{
      label: serving,
      mult: 1
    }, ...(alts || [])]
  });
  const foods = [F('yog', 'Greek yogurt, plain', '2% milkfat', 'dairy', '1 cup (245g)', 220, 20, 24, 5, [{
    label: '½ cup (123g)',
    mult: .5
  }, {
    label: '100g',
    mult: .41
  }]), F('ban', 'Banana', 'medium, raw', 'fruits', '1 medium (118g)', 105, 1, 27, 0, [{
    label: '1 large (136g)',
    mult: 1.15
  }, {
    label: '100g',
    mult: .85
  }]), F('gra', 'Oat granola', 'honey almond', 'grains', '¼ cup (30g)', 95, 3, 15, 3, [{
    label: '½ cup (60g)',
    mult: 2
  }]), F('chk', 'Grilled chicken bowl', 'brown rice, greens', 'meat', '1 bowl (410g)', 480, 38, 52, 14, [{
    label: '½ bowl',
    mult: .5
  }]), F('app', 'Apple', 'medium, raw', 'fruits', '1 medium (182g)', 80, 0, 21, 0, [{
    label: '100g',
    mult: .55
  }]), F('alm', 'Almonds', 'raw', 'snacks', '1 oz (28g)', 165, 6, 6, 14, [{
    label: '10 almonds',
    mult: .43
  }]), F('hum', 'Hummus & carrots', '2 tbsp + 1 cup', 'snacks', '1 serving', 95, 3, 11, 5), F('egg', 'Scrambled eggs', '2 large', 'breakfast', '2 eggs (100g)', 180, 13, 2, 13, [{
    label: '1 egg',
    mult: .5
  }, {
    label: '3 eggs',
    mult: 1.5
  }]), F('oat', 'Overnight oats', 'with chia & berries', 'breakfast', '1 jar (250g)', 320, 12, 48, 9), F('avt', 'Avocado toast', 'sourdough, 1 slice', 'breakfast', '1 slice', 240, 6, 26, 13), F('sal', 'Salmon fillet', 'baked', 'meat', '1 fillet (154g)', 367, 39, 0, 22, [{
    label: '100g',
    mult: .65
  }]), F('qui', 'Quinoa, cooked', '', 'grains', '1 cup (185g)', 222, 8, 39, 4, [{
    label: '½ cup',
    mult: .5
  }]), F('bro', 'Broccoli, steamed', '', 'vegetables', '1 cup (156g)', 55, 4, 11, 1), F('spn', 'Spinach salad', 'olive oil dressing', 'vegetables', '1 bowl (120g)', 140, 3, 6, 12), F('swp', 'Sweet potato', 'baked, with skin', 'vegetables', '1 medium (114g)', 103, 2, 24, 0), F('mlk', 'Oat milk latte', '16 oz', 'drinks', '1 grande', 190, 3, 29, 7, [{
    label: '12 oz',
    mult: .75
  }]), F('cof', 'Black coffee', 'brewed', 'drinks', '1 cup (240ml)', 2, 0, 0, 0), F('shk', 'Protein shake', 'vanilla, with water', 'drinks', '1 scoop (32g)', 130, 25, 3, 2), F('che', 'Cheddar cheese', 'sharp', 'dairy', '1 slice (28g)', 115, 7, 0, 9), F('cot', 'Cottage cheese', 'low fat', 'dairy', '½ cup (113g)', 90, 12, 5, 2), F('bry', 'Mixed berries', 'fresh', 'fruits', '1 cup (150g)', 70, 1, 17, 0), F('tur', 'Turkey sandwich', 'whole wheat', 'meat', '1 sandwich', 360, 26, 38, 11), F('pas', 'Whole wheat pasta', 'cooked', 'grains', '1 cup (140g)', 174, 7, 37, 1), F('bar', 'Dark chocolate', '70% cacao', 'snacks', '2 squares (20g)', 120, 2, 9, 9), F('rcb', 'Rice cakes', 'lightly salted', 'snacks', '2 cakes', 70, 2, 15, 0)];
  const byId = Object.fromEntries(foods.map(x => [x.id, x]));
  const E = (foodId, qty = 1, si = 0) => ({
    foodId,
    qty,
    si
  });
  const diary = {
    '2026-10-07': {
      breakfast: [E('yog'), E('ban'), E('gra')],
      lunch: [E('chk'), E('app')],
      dinner: [],
      snacks: [E('alm'), E('hum')]
    },
    '2026-10-06': {
      breakfast: [E('oat'), E('mlk')],
      lunch: [E('tur'), E('bry')],
      dinner: [E('sal'), E('qui'), E('bro')],
      snacks: [E('bar'), E('cot')]
    },
    '2026-10-05': {
      breakfast: [E('egg'), E('avt'), E('cof')],
      lunch: [E('spn'), E('pas')],
      dinner: [E('chk')],
      snacks: [E('shk'), E('app')]
    }
  };
  const weekKcal = [{
    d: 'thu',
    v: 1850
  }, {
    d: 'fri',
    v: 2120
  }, {
    d: 'sat',
    v: 2280
  }, {
    d: 'sun',
    v: 1720
  }, {
    d: 'mon',
    v: 1980
  }, {
    d: 'tue',
    v: 1890
  }, {
    d: 'wed',
    v: 1240
  }];
  const monthKcal = Array.from({
    length: 30
  }, (_, i) => ({
    d: String(i + 8 > 30 ? i - 22 : i + 8),
    v: Math.round(1900 + Math.sin(i * 1.7) * 230 + Math.cos(i * .6) * 140)
  }));
  monthKcal[29].v = 1240;
  const weightWeek = [64.9, 64.8, 64.7, 64.7, 64.5, 64.4, 64.2];
  const weightMonth = [66.4, 66.3, 66.1, 66.2, 65.9, 65.8, 65.9, 65.6, 65.5, 65.6, 65.4, 65.3, 65.3, 65.1, 65.0, 65.1, 64.9, 64.9, 64.8, 64.7, 64.8, 64.6, 64.5, 64.6, 64.4, 64.3, 64.4, 64.3, 64.2, 64.2];
  window.NUT = {
    foods,
    byId,
    diary,
    weekKcal,
    monthKcal,
    weightWeek,
    weightMonth,
    user: {
      name: 'Brooklyn',
      first: 'Brooklyn',
      last: 'Hayes',
      age: 29,
      sex: 'female',
      height: 168,
      weight: 64.2,
      startWeight: 67,
      goalWeight: 60,
      goal: 'lose',
      activity: 'moderate',
      kcal: 2000,
      macros: {
        p: 30,
        c: 45,
        f: 25
      },
      water: 8,
      streak: 12
    },
    meals: [{
      key: 'breakfast',
      label: 'breakfast',
      icon: 'sun'
    }, {
      key: 'lunch',
      label: 'lunch',
      icon: 'apple'
    }, {
      key: 'dinner',
      label: 'dinner',
      icon: 'moon'
    }, {
      key: 'snacks',
      label: 'snacks',
      icon: 'cookie'
    }],
    cats: [{
      key: 'breakfast',
      icon: 'egg'
    }, {
      key: 'fruits',
      icon: 'apple'
    }, {
      key: 'vegetables',
      icon: 'carrot'
    }, {
      key: 'grains',
      icon: 'wheat'
    }, {
      key: 'dairy',
      icon: 'milk'
    }, {
      key: 'meat',
      icon: 'drumstick'
    }, {
      key: 'snacks',
      icon: 'cookie'
    }, {
      key: 'drinks',
      icon: 'coffee'
    }],
    recent: ['alm', 'chk', 'yog', 'ban', 'mlk'],
    frequent: ['cof', 'egg', 'app', 'shk', 'qui', 'bro'],
    favorites: ['oat', 'sal', 'avt', 'bry'],
    TODAY: '2026-10-07',
    entryVals(e) {
      const f = byId[e.foodId];
      const m = f.servings[e.si || 0].mult * e.qty;
      return {
        name: f.name,
        serving: (e.qty !== 1 ? e.qty + ' × ' : '') + f.servings[e.si || 0].label,
        kcal: Math.round(f.kcal * m),
        p: Math.round(f.p * m),
        c: Math.round(f.c * m),
        f: Math.round(f.f * m)
      };
    }
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/nutrition/data.js", error: String((e && e.message) || e) }); }

// ui_kits/storefront/AlsoLike.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function AlsoLike() {
  const {
    Card,
    ProductCard,
    SliderNav,
    Seal
  } = window.ETHANDesignSystem_b7e92e;
  const D = window.ETHAN_DATA;
  const ref = React.useRef(null);
  const [p, setP] = React.useState(0);
  const onScroll = () => {
    const el = ref.current;
    const max = el.scrollWidth - el.clientWidth;
    setP(max > 0 ? el.scrollLeft / max : 0);
  };
  const step = d => {
    const el = ref.current;
    el.scrollBy({
      left: d * (el.clientWidth / 2),
      behavior: 'smooth'
    });
  };
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-gap) var(--page-gutter) 0'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "sun",
    style: {
      padding: 'var(--space-16)',
      paddingRight: 0
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "eth-display",
    style: {
      fontSize: 'var(--display-l)',
      marginBottom: 'var(--space-10)'
    }
  }, "YOU MAY ALSO LIKE\u2026"), /*#__PURE__*/React.createElement("div", {
    ref: ref,
    onScroll: onScroll,
    style: {
      display: 'grid',
      gridAutoFlow: 'column',
      gridAutoColumns: 'calc((100% - var(--space-16) - 72px) / 4)',
      gap: 24,
      overflowX: 'auto',
      scrollbarWidth: 'none',
      paddingRight: 'var(--space-16)',
      scrollSnapType: 'x mandatory'
    }
  }, D.related.map((r, i) => /*#__PURE__*/React.createElement(ProductCard, _extends({
    key: i
  }, r, {
    seal: r.seal ? /*#__PURE__*/React.createElement(Seal, null, r.seal) : null,
    style: {
      scrollSnapAlign: 'start'
    }
  })))), /*#__PURE__*/React.createElement(SliderNav, {
    progress: p,
    span: 0.5,
    onPrev: () => step(-1),
    onNext: () => step(1),
    canPrev: p > 0.01,
    canNext: p < 0.99,
    style: {
      marginTop: 'var(--space-10)',
      paddingRight: 'var(--space-16)'
    }
  })));
}
window.AlsoLike = AlsoLike;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/AlsoLike.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/InsideSection.jsx
try { (() => {
function InsideSection() {
  const {
    Card
  } = window.ETHANDesignSystem_b7e92e;
  const [pos, setPos] = React.useState(50);
  const ref = React.useRef(null);
  const drag = e => {
    const r = ref.current.getBoundingClientRect();
    const move = ev => setPos(Math.max(5, Math.min(95, (ev.clientX - r.left) / r.width * 100)));
    move(e);
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 var(--page-gutter)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "mint",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.6fr',
      gap: 'var(--space-12)',
      alignItems: 'center',
      padding: 'var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "eth-display",
    style: {
      fontSize: 'var(--display-l)',
      marginBottom: 'var(--space-6)'
    }
  }, "INSIDE THE", /*#__PURE__*/React.createElement("br", null), "ETHAN BITE"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 19,
      fontWeight: 700,
      lineHeight: 1.45,
      textWrap: 'pretty'
    }
  }, "Our bites are made with sustainably grown chickpeas, so they pack plant-based protein, fiber and far out flavor into every crunch.")), /*#__PURE__*/React.createElement("div", {
    ref: ref,
    onPointerDown: drag,
    style: {
      position: 'relative',
      aspectRatio: '1.55 / 1',
      borderRadius: 'var(--radius-lg)',
      background: 'var(--teal-500)',
      overflow: 'hidden',
      cursor: 'ew-resize',
      userSelect: 'none',
      touchAction: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      paddingRight: '12%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eth-placeholder",
    style: {
      width: '38%',
      height: '55%'
    }
  }, "whole product")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      clipPath: 'inset(0 ' + (100 - pos) + '% 0 0)',
      background: 'var(--teal-500)',
      display: 'flex',
      alignItems: 'center',
      paddingLeft: '12%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eth-placeholder",
    style: {
      width: '38%',
      height: '55%',
      background: 'rgba(255,255,255,.3)'
    }
  }, "raw ingredient")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: pos + '%',
      width: 2,
      background: 'var(--cocoa-900)',
      transform: 'translateX(-1px)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      width: 32,
      height: 32,
      borderRadius: '50%',
      background: 'var(--cocoa-900)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: '700 12px var(--font-body)',
      letterSpacing: 1
    }
  }, "|||")))));
}
window.InsideSection = InsideSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/InsideSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/ProductHero.jsx
try { (() => {
function ProductHero({
  onAdd
}) {
  const {
    Card,
    Badge,
    Select,
    PurchaseOption,
    QuantityStepper,
    Button,
    Accordion,
    StatTile,
    IconButton,
    Icon
  } = window.ETHANDesignSystem_b7e92e;
  const D = window.ETHAN_DATA;
  const [flavor, setFlavor] = React.useState('original');
  const [mode, setMode] = React.useState('once');
  const [qty, setQty] = React.useState(1);
  const f = D.flavors.find(x => x.value === flavor);
  const line = '1.5px solid var(--cocoa-900)';
  const price = mode === 'sub' ? 21.24 : 24.99;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 var(--page-gutter)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "mint",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1',
      aspectRatio: '1.15 / 1',
      borderRadius: 'var(--radius-lg)',
      background: f.tone,
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background-color var(--dur-slow) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    style: {
      position: 'absolute',
      top: 24,
      left: 24
    }
  }, "6 pack"), /*#__PURE__*/React.createElement("div", {
    className: "eth-placeholder",
    style: {
      width: '42%',
      height: '70%'
    }
  }, "cut-out pack shot", /*#__PURE__*/React.createElement("br", null), f.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '1 / 1',
      borderRadius: 'var(--radius-lg)',
      background: f.tone,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background-color var(--dur-slow) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eth-placeholder",
    style: {
      width: '60%',
      height: '40%'
    }
  }, "macro product")), /*#__PURE__*/React.createElement(Card, {
    tone: "sun",
    radius: "lg",
    padding: "none",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: '1fr 1fr',
      aspectRatio: '1 / 1'
    }
  }, /*#__PURE__*/React.createElement(StatTile, {
    value: /*#__PURE__*/React.createElement(Icon, {
      name: "sprout",
      size: 48,
      strokeWidth: 1.75
    }),
    label: "Plant-based",
    style: {
      borderRight: line,
      borderBottom: line
    }
  }), /*#__PURE__*/React.createElement(StatTile, {
    value: /*#__PURE__*/React.createElement(Icon, {
      name: "leaf",
      size: 48,
      strokeWidth: 1.75
    }),
    label: "Vegan",
    style: {
      borderBottom: line
    }
  }), /*#__PURE__*/React.createElement(StatTile, {
    value: "4g",
    label: "Protein*",
    style: {
      borderRight: line
    }
  }), /*#__PURE__*/React.createElement(StatTile, {
    value: "3g",
    label: "Fiber*",
    footnote: "*per 1oz serving"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      paddingTop: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    className: "eth-display",
    style: {
      fontSize: 'var(--display-l)',
      marginBottom: 'var(--space-5)'
    }
  }, "CRUNCHY BITES"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontWeight: 700,
      fontSize: 17
    }
  }, /*#__PURE__*/React.createElement("span", null, "6 pack - 4oz bags"), /*#__PURE__*/React.createElement("span", null, '$' + price.toFixed(2))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 var(--space-3)',
      fontSize: 17,
      fontWeight: 700,
      lineHeight: 1.45,
      textWrap: 'pretty'
    }
  }, "Our bites have a seriously bold crunch, and they're made entirely from plants. No weird stuff, just big flavor."), /*#__PURE__*/React.createElement(Select, {
    label: "flavor",
    options: D.flavors,
    value: flavor,
    onChange: setFlavor
  }), /*#__PURE__*/React.createElement(PurchaseOption, {
    value: "once",
    label: "one-time purchase",
    price: "$24.99",
    selected: mode === 'once',
    onSelect: setMode
  }), /*#__PURE__*/React.createElement(PurchaseOption, {
    value: "sub",
    label: "subscribe & save",
    price: "$21.24",
    compareAt: "$24.99",
    selected: mode === 'sub',
    onSelect: setMode
  }, /*#__PURE__*/React.createElement(Select, {
    variant: "muted",
    options: [{
      value: '2',
      label: 'Delivery every 2 weeks'
    }, {
      value: '4',
      label: 'Delivery every 4 weeks'
    }, {
      value: '6',
      label: 'Delivery every 6 weeks'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(QuantityStepper, {
    value: qty,
    onChange: setQty
  }), /*#__PURE__*/React.createElement(Button, {
    block: true,
    onClick: () => onAdd(qty, f.label)
  }, "add to cart")), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    block: true
  }, "or buy on marketplace"), /*#__PURE__*/React.createElement(Accordion, {
    style: {
      marginTop: 'var(--space-4)'
    },
    items: [{
      title: 'ingredients',
      content: 'Chickpea flour, rice flour, sunflower oil, sea salt, natural seasoning. Made in a facility free from peanuts and tree nuts.'
    }, {
      title: 'nutrition',
      content: 'Per 1oz serving: 130 calories, 4g protein, 3g fiber, 5g fat, 210mg sodium.'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 15
    }
  }, "you might also like\u2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "chevron-left",
    label: "previous",
    variant: "white",
    size: 24
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "chevron-right",
    label: "next",
    variant: "white",
    size: 24
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-3)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 88,
      height: 88,
      borderRadius: 'var(--radius-sm)',
      background: 'var(--butter-300)',
      flex: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eth-placeholder",
    style: {
      width: 64,
      height: 64,
      fontSize: 9
    }
  }, "pack")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 15
    }
  }, "crunchy bites"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 11
    }
  }, "variety pack"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: 11,
      color: 'var(--text-muted)'
    }
  }, "18 pack")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      width: 230
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    block: true,
    onClick: () => onAdd(1, 'variety pack')
  }, "add to cart - $24.99"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    block: true
  }, "subscribe - $21.24"))))));
}
window.ProductHero = ProductHero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/ProductHero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/SiteFooter.jsx
try { (() => {
function SiteFooter({
  onSubscribe
}) {
  const {
    TextField,
    Icon
  } = window.ETHANDesignSystem_b7e92e;
  const cols = [['shop', ['bites', 'chips', 'bundles', 'merch', 'shop all']], ['support', ['contact', 'shipping & returns', 'subscriptions', 'terms of service', 'privacy policy']], ['learn', ['about', 'find a store', 'FAQs', 'ambassador program']]];
  const a = {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 700,
    fontSize: 15
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-inverse)',
      color: '#fff',
      marginTop: 'var(--space-20)',
      padding: 'var(--space-16) var(--page-gutter) var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.3fr repeat(3, 0.8fr) 1.6fr',
      gap: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eth-display",
    style: {
      fontSize: 'var(--display-xl)',
      color: 'var(--sun-500)'
    }
  }, "ETHAN"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-5)'
    }
  }, ['facebook', 'twitter', 'instagram'].map(n => /*#__PURE__*/React.createElement("a", {
    key: n,
    "aria-label": n,
    style: a
  }, /*#__PURE__*/React.createElement(Icon, {
    name: n,
    size: 20
  }))))), cols.map(([h, links]) => /*#__PURE__*/React.createElement("div", {
    key: h,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 17,
      color: 'rgba(255,255,255,.75)',
      marginBottom: 'var(--space-3)'
    }
  }, h), links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    style: a
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eth-display",
    style: {
      fontSize: 'var(--display-s)',
      color: '#fff',
      lineHeight: 1.05
    }
  }, "SUBSCRIBE FOR 10% OFF", /*#__PURE__*/React.createElement("br", null), "YOUR FIRST ORDER"), /*#__PURE__*/React.createElement(TextField, {
    variant: "inverse",
    type: "email",
    placeholder: "E-mail",
    onSubmit: onSubscribe
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 'var(--space-20)',
      fontSize: 11,
      fontWeight: 700
    }
  }, /*#__PURE__*/React.createElement("span", null, "ETHAN\xAE All Rights Reserved. \xA9 2026 ETHAN"), /*#__PURE__*/React.createElement("span", null, "privacy policy")));
}
window.SiteFooter = SiteFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/SiteHeader.jsx
try { (() => {
function SiteHeader({
  cartCount,
  onCart
}) {
  const {
    AnnouncementBar,
    Icon
  } = window.ETHANDesignSystem_b7e92e;
  const link = {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    fontWeight: 700,
    fontSize: 15,
    color: 'var(--cocoa-900)',
    textDecoration: 'none',
    cursor: 'pointer'
  };
  return /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement(AnnouncementBar, {
    messages: ['Buy a 6 pack, get 6 more bags free!', 'Free shipping on orders over $35']
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr auto 1fr',
      alignItems: 'center',
      height: 88,
      padding: '0 var(--page-gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    style: link
  }, "shop ", /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: 14,
    strokeWidth: 2
  })), /*#__PURE__*/React.createElement("a", {
    style: link
  }, "learn ", /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: 14,
    strokeWidth: 2
  })), /*#__PURE__*/React.createElement("a", {
    style: link
  }, "subscribe")), /*#__PURE__*/React.createElement("span", {
    className: "eth-display",
    style: {
      fontSize: 40
    }
  }, "ETHAN"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-16)',
      justifyContent: 'flex-end',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("a", {
    style: link
  }, "find a store"), /*#__PURE__*/React.createElement("a", {
    style: link
  }, "account"), /*#__PURE__*/React.createElement("button", {
    onClick: onCart,
    "aria-label": "cart",
    style: {
      position: 'relative',
      background: 'none',
      border: 0,
      padding: 4,
      cursor: 'pointer',
      color: 'var(--cocoa-900)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shopping-bag",
    size: 22
  }), /*#__PURE__*/React.createElement("span", {
    key: cartCount,
    style: {
      position: 'absolute',
      top: -2,
      right: -4,
      minWidth: 16,
      height: 16,
      borderRadius: 99,
      background: 'var(--cocoa-900)',
      color: '#fff',
      font: '700 10px/16px var(--font-body)',
      textAlign: 'center',
      animation: 'eth-pop var(--dur-base) var(--ease-bounce)'
    }
  }, cartCount)))));
}
window.SiteHeader = SiteHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/ValueProps.jsx
try { (() => {
function ValueProps() {
  const {
    Icon,
    Tooltip
  } = window.ETHANDesignSystem_b7e92e;
  const items = [['sprout', 'Sustainably grown'], ['check', 'Vegan'], ['leaf', 'Plant-based protein'], ['wheat', 'Source of fiber'], ['ban', 'No nuts']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'flex',
      justifyContent: 'space-around',
      padding: 'var(--space-24) var(--page-gutter)'
    }
  }, items.map(([icon, label]) => /*#__PURE__*/React.createElement(Tooltip, {
    key: label,
    content: "per 1oz serving",
    placement: "bottom"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10,
      width: 120
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 76,
      height: 76,
      borderRadius: '50%',
      boxShadow: 'inset 0 0 0 5px var(--cocoa-900)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--cocoa-900)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 36,
    strokeWidth: 2.25
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 15,
      textAlign: 'center',
      lineHeight: 1.15
    }
  }, label)))));
}
window.ValueProps = ValueProps;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/ValueProps.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/data.js
try { (() => {
window.ETHAN_DATA = {
  flavors: [{
    value: 'original',
    label: 'the original',
    swatch: 'var(--teal-500)',
    tone: 'var(--teal-500)'
  }, {
    value: 'chipotle',
    label: 'smoky chipotle',
    swatch: 'var(--orange-500)',
    tone: 'var(--orange-500)'
  }, {
    value: 'sriracha',
    label: 'sriracha heat',
    swatch: 'var(--red-500)',
    tone: 'var(--red-500)'
  }, {
    value: 'bbq',
    label: 'backyard bbq',
    swatch: 'var(--maroon-700)',
    tone: 'var(--maroon-700)'
  }],
  related: [{
    tone: 'orange',
    badge: '6 pack',
    seal: 'new',
    name: 'crunchy bites',
    variant: 'smoky chipotle',
    price: '$24.99',
    size: '4oz bags'
  }, {
    tone: 'butter',
    badge: '18 pack',
    name: 'crunchy bites',
    variant: 'variety pack',
    price: '$24.99',
    size: '0.8oz bags'
  }, {
    tone: 'maroon',
    badge: '6 pack',
    name: 'crunchy bites',
    variant: 'backyard bbq',
    price: '$24.99',
    size: '4oz bags'
  }, {
    tone: 'red',
    badge: '6 pack',
    name: 'crunchy bites',
    variant: 'sriracha heat',
    price: '$24.99',
    size: '4oz bags'
  }, {
    tone: 'teal',
    badge: '6 pack',
    name: 'crunchy bites',
    variant: 'the original',
    price: '$24.99',
    size: '4oz bags'
  }, {
    tone: 'mint',
    badge: '12 pack',
    name: 'crunchy bites',
    variant: 'sea salt',
    price: '$29.99',
    size: '1.5oz bags'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Seal = __ds_scope.Seal;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.StatTile = __ds_scope.StatTile;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.PurchaseOption = __ds_scope.PurchaseOption;

__ds_ns.QuantityStepper = __ds_scope.QuantityStepper;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.AnnouncementBar = __ds_scope.AnnouncementBar;

__ds_ns.SliderNav = __ds_scope.SliderNav;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
