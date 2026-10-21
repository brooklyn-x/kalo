function ValueProps() {
  const { Icon, Tooltip } = window.ETHANDesignSystem_b7e92e;
  const items = [['sprout', 'Sustainably grown'], ['check', 'Vegan'], ['leaf', 'Plant-based protein'], ['wheat', 'Source of fiber'], ['ban', 'No nuts']];
  return (
    <section style={{ display: 'flex', justifyContent: 'space-around', padding: 'var(--space-24) var(--page-gutter)' }}>
      {items.map(([icon, label]) => (
        <Tooltip key={label} content="per 1oz serving" placement="bottom">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, width: 120 }}>
            <span style={{ width: 76, height: 76, borderRadius: '50%', boxShadow: 'inset 0 0 0 5px var(--cocoa-900)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--cocoa-900)' }}><Icon name={icon} size={36} strokeWidth={2.25} /></span>
            <span style={{ fontWeight: 700, fontSize: 15, textAlign: 'center', lineHeight: 1.15 }}>{label}</span>
          </div>
        </Tooltip>
      ))}
    </section>
  );
}
window.ValueProps = ValueProps;
