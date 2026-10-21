function ProductHero({ onAdd }) {
  const { Card, Badge, Select, PurchaseOption, QuantityStepper, Button, Accordion, StatTile, IconButton, Icon } = window.ETHANDesignSystem_b7e92e;
  const D = window.ETHAN_DATA;
  const [flavor, setFlavor] = React.useState('original');
  const [mode, setMode] = React.useState('once');
  const [qty, setQty] = React.useState(1);
  const f = D.flavors.find((x) => x.value === flavor);
  const line = '1.5px solid var(--cocoa-900)';
  const price = mode === 'sub' ? 21.24 : 24.99;
  return (
    <section style={{ padding: '0 var(--page-gutter)' }}>
      <Card tone="mint" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-12)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-6)' }}>
          <div style={{ gridColumn: '1 / -1', aspectRatio: '1.15 / 1', borderRadius: 'var(--radius-lg)', background: f.tone, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background-color var(--dur-slow) var(--ease-out)' }}>
            <Badge style={{ position: 'absolute', top: 24, left: 24 }}>6 pack</Badge>
            <div className="eth-placeholder" style={{ width: '42%', height: '70%' }}>cut-out pack shot<br />{f.label}</div>
          </div>
          <div style={{ aspectRatio: '1 / 1', borderRadius: 'var(--radius-lg)', background: f.tone, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background-color var(--dur-slow) var(--ease-out)' }}>
            <div className="eth-placeholder" style={{ width: '60%', height: '40%' }}>macro product</div>
          </div>
          <Card tone="sun" radius="lg" padding="none" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', aspectRatio: '1 / 1' }}>
            <StatTile value={<Icon name="sprout" size={48} strokeWidth={1.75} />} label="Plant-based" style={{ borderRight: line, borderBottom: line }} />
            <StatTile value={<Icon name="leaf" size={48} strokeWidth={1.75} />} label="Vegan" style={{ borderBottom: line }} />
            <StatTile value="4g" label="Protein*" style={{ borderRight: line }} />
            <StatTile value="3g" label="Fiber*" footnote="*per 1oz serving" />
          </Card>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', paddingTop: 'var(--space-2)' }}>
          <h1 className="eth-display" style={{ fontSize: 'var(--display-l)', marginBottom: 'var(--space-5)' }}>CRUNCHY BITES</h1>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: 17 }}><span>6 pack - 4oz bags</span><span>{'$' + price.toFixed(2)}</span></div>
          <p style={{ margin: '0 0 var(--space-3)', fontSize: 17, fontWeight: 700, lineHeight: 1.45, textWrap: 'pretty' }}>Our bites have a seriously bold crunch, and they're made entirely from plants. No weird stuff, just big flavor.</p>
          <Select label="flavor" options={D.flavors} value={flavor} onChange={setFlavor} />
          <PurchaseOption value="once" label="one-time purchase" price="$24.99" selected={mode === 'once'} onSelect={setMode} />
          <PurchaseOption value="sub" label="subscribe & save" price="$21.24" compareAt="$24.99" selected={mode === 'sub'} onSelect={setMode}>
            <Select variant="muted" options={[{ value: '2', label: 'Delivery every 2 weeks' }, { value: '4', label: 'Delivery every 4 weeks' }, { value: '6', label: 'Delivery every 6 weeks' }]} />
          </PurchaseOption>
          <div style={{ display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-2)' }}>
            <QuantityStepper value={qty} onChange={setQty} />
            <Button block onClick={() => onAdd(qty, f.label)}>add to cart</Button>
          </div>
          <Button variant="secondary" block>or buy on marketplace</Button>
          <Accordion style={{ marginTop: 'var(--space-4)' }} items={[
            { title: 'ingredients', content: 'Chickpea flour, rice flour, sunflower oil, sea salt, natural seasoning. Made in a facility free from peanuts and tree nuts.' },
            { title: 'nutrition', content: 'Per 1oz serving: 130 calories, 4g protein, 3g fiber, 5g fat, 210mg sodium.' }
          ]} />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'var(--space-4)' }}>
            <span style={{ fontWeight: 700, fontSize: 15 }}>you might also like…</span>
            <div style={{ display: 'flex', gap: 8 }}><IconButton icon="chevron-left" label="previous" variant="white" size={24} /><IconButton icon="chevron-right" label="next" variant="white" size={24} /></div>
          </div>
          <div style={{ background: '#fff', borderRadius: 'var(--radius-md)', padding: 'var(--space-3)', display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
            <div style={{ width: 88, height: 88, borderRadius: 'var(--radius-sm)', background: 'var(--butter-300)', flex: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><div className="eth-placeholder" style={{ width: 64, height: 64, fontSize: 9 }}>pack</div></div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ fontWeight: 700, fontSize: 15 }}>crunchy bites</span>
              <span style={{ fontWeight: 700, fontSize: 11 }}>variety pack</span>
              <span style={{ fontWeight: 600, fontSize: 11, color: 'var(--text-muted)' }}>18 pack</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: 230 }}>
              <Button size="sm" block onClick={() => onAdd(1, 'variety pack')}>add to cart - $24.99</Button>
              <Button size="sm" block>subscribe - $21.24</Button>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}
window.ProductHero = ProductHero;
