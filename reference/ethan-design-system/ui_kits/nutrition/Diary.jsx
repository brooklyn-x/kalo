const shiftDate = (iso, n) => { const d = new Date(iso + 'T12:00:00'); d.setDate(d.getDate() + n); return d.toISOString().slice(0, 10); };
const dateLabel = iso => { if (iso === NUT.TODAY) return 'today'; if (iso === shiftDate(NUT.TODAY, -1)) return 'yesterday'; return new Date(iso + 'T12:00:00').toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase(); };
const dateSub = iso => new Date(iso + 'T12:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).toLowerCase();

function Diary({ user, diary, date, setDate, onEdit, onDelete, openAdd }) {
  const [loading, setLoading] = React.useState(false);
  const change = n => { setLoading(true); setDate(shiftDate(date, n)); setTimeout(() => setLoading(false), 420); };
  const day = diary[date]; const t = dayTotals(day); const g = macroGrams(user);
  const empty = !day || !Object.values(day).some(l => l.length);
  return <div>
    <header className="nt-head" style={{ alignItems: 'center' }}><h1 className="nt-h1">Food diary</h1></header>
    <div className="nt-card" style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 10, borderRadius: 999, marginBottom: 16 }}>
      <IconButton icon="chevron-left" label="previous day" variant="ghost" size={44} onClick={() => change(-1)} />
      <div style={{ flex: 1, textAlign: 'center' }}><div style={{ fontSize: 17, fontWeight: 800 }}>{dateLabel(date)}</div><div className="nt-label" style={{ marginTop: 2 }}>{dateSub(date)}</div></div>
      <IconButton icon="chevron-right" label="next day" variant="ghost" size={44} disabled={date >= NUT.TODAY} onClick={() => change(1)} />
    </div>
    {loading ? <div className="nt-col" aria-busy="true"><Skel h={120} r={28} />{[0, 1, 2].map(i => <Skel key={i} h={150} r={28} />)}</div> : <div className="nt-fade">
      <section className="nt-panel" style={{ background: 'var(--mint-200)', padding: 20, marginBottom: 16 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', textAlign: 'center' }}>
          {[['goal', user.kcal], ['eaten', t.kcal], [user.kcal - t.kcal >= 0 ? 'remaining' : 'over', Math.abs(user.kcal - t.kcal)]].map(([l, v], i) =>
            <div key={l} style={{ borderLeft: i ? '1.5px solid var(--cocoa-900)' : 0, padding: '0 6px' }}><div className="nt-num" style={{ fontSize: 28 }}>{fmt(v)}</div><div style={{ fontSize: 13, fontWeight: 700, marginTop: 4 }}>{l}</div></div>)}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 12, marginTop: 18 }}>
          {['p', 'c', 'f'].map(k => <div key={k}><div className="nt-row" style={{ justifyContent: 'space-between', fontSize: 11, fontWeight: 700, marginBottom: 6, gap: 4 }}><span>{MACRO[k].label}</span><span>{t[k]}/{g[k]}g</span></div><div className="nt-bar" style={{ background: 'var(--ring-track)' }}><i style={{ width: Math.min(100, t[k] / g[k] * 100) + '%', background: k === 'p' ? 'var(--cocoa-900)' : MACRO[k].color }}></i></div></div>)}
        </div>
      </section>
      {empty ? <section className="nt-card" style={{ textAlign: 'center', padding: '48px 24px' }}>
        <span style={{ width: 72, height: 72, borderRadius: '50%', background: 'var(--mint-200)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="book-open" size={30} /></span>
        <h2 className="nt-h1" style={{ fontSize: 30, margin: '18px 0 10px' }}>A fresh page</h2>
        <p className="nt-body" style={{ color: 'var(--cocoa-500)', maxWidth: 300, margin: '0 auto 22px' }}>No meals logged for {dateLabel(date)}. Add your first bite and we'll do the math.</p>
        <Button iconLeft={<Icon name="plus" size={16} strokeWidth={2.5} />} onClick={() => openAdd('breakfast')}>add breakfast</Button>
      </section> :
      <div className="nt-grid nt-grid--2">{NUT.meals.map(m => { const list = (day && day[m.key]) || []; const mt = mealTotals(list);
        return <section key={m.key} className="nt-card" aria-label={m.label}>
          <div className="nt-row" style={{ marginBottom: 4 }}>
            <Icon name={m.icon} size={20} /><h2 className="nt-h2" style={{ flex: 1 }}>{m.label}</h2>
            <span style={{ fontSize: 15, fontWeight: 800 }}>{fmt(mt.kcal)} kcal</span>
          </div>
          {list.length ? list.map((e, i) => { const v = NUT.entryVals(e); return <div key={i} className="nt-item">
            <div className="nt-item__main"><div className="nt-item__name">{v.name}</div><div className="nt-item__sub">{v.serving}</div><MacroChips v={v} /></div>
            <div style={{ textAlign: 'right', flex: 'none' }}><div className="nt-num" style={{ fontSize: 20 }}>{v.kcal}</div><div style={{ fontSize: 11, fontWeight: 700, color: 'var(--cocoa-500)' }}>kcal</div></div>
            <div className="nt-row" style={{ gap: 2, flex: 'none' }}><IconButton icon="pencil" label={'edit ' + v.name} variant="ghost" size={36} iconSize={16} onClick={() => onEdit(m.key, i)} /><IconButton icon="trash" label={'delete ' + v.name} variant="ghost" size={36} iconSize={16} onClick={() => onDelete(m.key, i)} /></div>
          </div>; }) : <div className="nt-item" style={{ color: 'var(--cocoa-500)', fontSize: 13, fontWeight: 700 }}>nothing logged yet</div>}
          <button className="nt-link" style={{ marginTop: 10, display: 'inline-flex', alignItems: 'center', gap: 6, textDecoration: 'none' }} onClick={() => openAdd(m.key)}><Icon name="plus" size={14} strokeWidth={2.5} />add to {m.label}</button>
        </section>; })}</div>}
    </div>}
    <div className="nt-sticky-add"><Button size="lg" style={{ boxShadow: 'var(--shadow-pop)' }} iconLeft={<Icon name="plus" size={18} strokeWidth={2.5} />} onClick={() => openAdd()}>add food</Button></div>
  </div>;
}
Object.assign(window, { Diary, shiftDate, dateLabel });
