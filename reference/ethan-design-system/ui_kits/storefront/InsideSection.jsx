function InsideSection() {
  const { Card } = window.ETHANDesignSystem_b7e92e;
  const [pos, setPos] = React.useState(50);
  const ref = React.useRef(null);
  const drag = (e) => {
    const r = ref.current.getBoundingClientRect();
    const move = (ev) => setPos(Math.max(5, Math.min(95, ((ev.clientX - r.left) / r.width) * 100)));
    move(e);
    const up = () => { window.removeEventListener('pointermove', move); window.removeEventListener('pointerup', up); };
    window.addEventListener('pointermove', move); window.addEventListener('pointerup', up);
  };
  return (
    <section style={{ padding: '0 var(--page-gutter)' }}>
      <Card tone="mint" style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 'var(--space-12)', alignItems: 'center', padding: 'var(--space-16)' }}>
        <div>
          <h2 className="eth-display" style={{ fontSize: 'var(--display-l)', marginBottom: 'var(--space-6)' }}>INSIDE THE<br />ETHAN BITE</h2>
          <p style={{ margin: 0, fontSize: 19, fontWeight: 700, lineHeight: 1.45, textWrap: 'pretty' }}>Our bites are made with sustainably grown chickpeas, so they pack plant-based protein, fiber and far out flavor into every crunch.</p>
        </div>
        <div ref={ref} onPointerDown={drag} style={{ position: 'relative', aspectRatio: '1.55 / 1', borderRadius: 'var(--radius-lg)', background: 'var(--teal-500)', overflow: 'hidden', cursor: 'ew-resize', userSelect: 'none', touchAction: 'none' }}>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: '12%' }}><div className="eth-placeholder" style={{ width: '38%', height: '55%' }}>whole product</div></div>
          <div style={{ position: 'absolute', inset: 0, clipPath: 'inset(0 ' + (100 - pos) + '% 0 0)', background: 'var(--teal-500)', display: 'flex', alignItems: 'center', paddingLeft: '12%' }}><div className="eth-placeholder" style={{ width: '38%', height: '55%', background: 'rgba(255,255,255,.3)' }}>raw ingredient</div></div>
          <div style={{ position: 'absolute', top: 0, bottom: 0, left: pos + '%', width: 2, background: 'var(--cocoa-900)', transform: 'translateX(-1px)' }}>
            <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 32, height: 32, borderRadius: '50%', background: 'var(--cocoa-900)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', font: '700 12px var(--font-body)', letterSpacing: 1 }}>|||</span>
          </div>
        </div>
      </Card>
    </section>
  );
}
window.InsideSection = InsideSection;
