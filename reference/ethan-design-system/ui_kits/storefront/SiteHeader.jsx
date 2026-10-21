function SiteHeader({ cartCount, onCart }) {
  const { AnnouncementBar, Icon } = window.ETHANDesignSystem_b7e92e;
  const link = { display: 'flex', alignItems: 'center', gap: 6, fontWeight: 700, fontSize: 15, color: 'var(--cocoa-900)', textDecoration: 'none', cursor: 'pointer' };
  return (
    <header>
      <AnnouncementBar messages={['Buy a 6 pack, get 6 more bags free!', 'Free shipping on orders over $35']} />
      <nav style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', height: 88, padding: '0 var(--page-gutter)' }}>
        <div style={{ display: 'flex', gap: 'var(--space-16)' }}>
          <a style={link}>shop <Icon name="chevron-down" size={14} strokeWidth={2} /></a>
          <a style={link}>learn <Icon name="chevron-down" size={14} strokeWidth={2} /></a>
          <a style={link}>subscribe</a>
        </div>
        <span className="eth-display" style={{ fontSize: 40 }}>ETHAN</span>
        <div style={{ display: 'flex', gap: 'var(--space-16)', justifyContent: 'flex-end', alignItems: 'center' }}>
          <a style={link}>find a store</a>
          <a style={link}>account</a>
          <button onClick={onCart} aria-label="cart" style={{ position: 'relative', background: 'none', border: 0, padding: 4, cursor: 'pointer', color: 'var(--cocoa-900)' }}>
            <Icon name="shopping-bag" size={22} />
            <span key={cartCount} style={{ position: 'absolute', top: -2, right: -4, minWidth: 16, height: 16, borderRadius: 99, background: 'var(--cocoa-900)', color: '#fff', font: '700 10px/16px var(--font-body)', textAlign: 'center', animation: 'eth-pop var(--dur-base) var(--ease-bounce)' }}>{cartCount}</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
window.SiteHeader = SiteHeader;
