function AlsoLike() {
  const { Card, ProductCard, SliderNav, Seal } = window.ETHANDesignSystem_b7e92e;
  const D = window.ETHAN_DATA;
  const ref = React.useRef(null);
  const [p, setP] = React.useState(0);
  const onScroll = () => { const el = ref.current; const max = el.scrollWidth - el.clientWidth; setP(max > 0 ? el.scrollLeft / max : 0); };
  const step = (d) => { const el = ref.current; el.scrollBy({ left: d * (el.clientWidth / 2), behavior: 'smooth' }); };
  return (
    <section style={{ padding: 'var(--section-gap) var(--page-gutter) 0' }}>
      <Card tone="sun" style={{ padding: 'var(--space-16)', paddingRight: 0 }}>
        <h2 className="eth-display" style={{ fontSize: 'var(--display-l)', marginBottom: 'var(--space-10)' }}>YOU MAY ALSO LIKE…</h2>
        <div ref={ref} onScroll={onScroll} style={{ display: 'grid', gridAutoFlow: 'column', gridAutoColumns: 'calc((100% - var(--space-16) - 72px) / 4)', gap: 24, overflowX: 'auto', scrollbarWidth: 'none', paddingRight: 'var(--space-16)', scrollSnapType: 'x mandatory' }}>
          {D.related.map((r, i) => <ProductCard key={i} {...r} seal={r.seal ? <Seal>{r.seal}</Seal> : null} style={{ scrollSnapAlign: 'start' }} />)}
        </div>
        <SliderNav progress={p} span={0.5} onPrev={() => step(-1)} onNext={() => step(1)} canPrev={p > 0.01} canNext={p < 0.99} style={{ marginTop: 'var(--space-10)', paddingRight: 'var(--space-16)' }} />
      </Card>
    </section>
  );
}
window.AlsoLike = AlsoLike;
