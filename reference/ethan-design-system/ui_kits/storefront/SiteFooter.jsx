function SiteFooter({ onSubscribe }) {
  const { TextField, Icon } = window.ETHANDesignSystem_b7e92e;
  const cols = [['shop', ['bites', 'chips', 'bundles', 'merch', 'shop all']], ['support', ['contact', 'shipping & returns', 'subscriptions', 'terms of service', 'privacy policy']], ['learn', ['about', 'find a store', 'FAQs', 'ambassador program']]];
  const a = { color: '#fff', textDecoration: 'none', fontWeight: 700, fontSize: 15 };
  return (
    <footer style={{ background: 'var(--surface-inverse)', color: '#fff', marginTop: 'var(--space-20)', padding: 'var(--space-16) var(--page-gutter) var(--space-8)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.3fr repeat(3, 0.8fr) 1.6fr', gap: 'var(--space-10)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
          <span className="eth-display" style={{ fontSize: 'var(--display-xl)', color: 'var(--sun-500)' }}>ETHAN</span>
          <div style={{ display: 'flex', gap: 'var(--space-5)' }}>{['facebook', 'twitter', 'instagram'].map((n) => <a key={n} aria-label={n} style={a}><Icon name={n} size={20} /></a>)}</div>
        </div>
        {cols.map(([h, links]) => (
          <div key={h} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <span style={{ fontWeight: 700, fontSize: 17, color: 'rgba(255,255,255,.75)', marginBottom: 'var(--space-3)' }}>{h}</span>
            {links.map((l) => <a key={l} style={a}>{l}</a>)}
          </div>
        ))}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
          <span className="eth-display" style={{ fontSize: 'var(--display-s)', color: '#fff', lineHeight: 1.05 }}>SUBSCRIBE FOR 10% OFF<br />YOUR FIRST ORDER</span>
          <TextField variant="inverse" type="email" placeholder="E-mail" onSubmit={onSubscribe} />
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 'var(--space-20)', fontSize: 11, fontWeight: 700 }}>
        <span>ETHAN® All Rights Reserved. © 2026 ETHAN</span><span>privacy policy</span>
      </div>
    </footer>
  );
}
window.SiteFooter = SiteFooter;
