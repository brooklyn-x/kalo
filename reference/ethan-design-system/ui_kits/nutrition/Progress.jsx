function WeightChart({ data, units, labels }) {
  const m = useMounted(); const W = 340, H = 170, px = 8, py = 18;
  const lo = Math.min(...data) - .3, hi = Math.max(...data) + .3;
  const pts = data.map((v, i) => [px + i * (W - 2 * px) / (data.length - 1), py + (hi - v) / (hi - lo) * (H - 2 * py)]);
  const line = pts.map((p, i) => (i ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join(' ');
  const len = 900;
  return <div>
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: 'block', overflow: 'visible' }} role="img" aria-label="weight trend">
      {[0, 1, 2, 3].map(i => <line key={i} x1="0" x2={W} y1={py + i * (H - 2 * py) / 3} y2={py + i * (H - 2 * py) / 3} stroke="var(--cocoa-alpha-12)" />)}
      <path d={line + ` L ${pts[pts.length - 1][0]} ${H} L ${pts[0][0]} ${H} Z`} fill="var(--mint-200)" style={{ opacity: m ? 1 : 0, transition: 'opacity .8s' }} />
      <path d={line} fill="none" stroke="var(--cocoa-900)" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" strokeDasharray={len} strokeDashoffset={m ? 0 : len} style={{ transition: 'stroke-dashoffset 1.2s var(--ease-out)' }} />
      {(data.length <= 7 ? pts : [pts[0], pts[pts.length - 1]]).map((p, i, a) => <circle key={i} cx={p[0]} cy={p[1]} r={i === a.length - 1 ? 6 : 4} fill={i === a.length - 1 ? 'var(--teal-500)' : 'var(--white)'} stroke="var(--cocoa-900)" strokeWidth="2" />)}
    </svg>
    <div className="nt-row" style={{ justifyContent: 'space-between', marginTop: 8, fontSize: 11, fontWeight: 700, color: 'var(--cocoa-500)' }}>{labels.map(l => <span key={l}>{l}</span>)}</div>
  </div>;
}

function CalBars({ data, goal }) {
  const m = useMounted(); const max = Math.max(goal * 1.25, ...data.map(d => d.v)); const dense = data.length > 10;
  return <div style={{ position: 'relative' }}>
    <div className="nt-bars" style={{ gap: dense ? 3 : 8 }}>
      <div className="nt-bars__goal" style={{ bottom: `calc(${goal / max * 100}% * (160 - 20) / 160 + 20px)` }}><span style={{ position: 'absolute', right: 0, top: -20, fontSize: 11, fontWeight: 700, background: 'var(--white)', paddingLeft: 6 }}>goal {fmt(goal)}</span></div>
      {data.map((d, i) => { const last = i === data.length - 1; return <div key={i} className="nt-bars__col">
        <div className="nt-bars__bar" title={d.d + ': ' + fmt(d.v) + ' kcal'} style={{ height: m ? `calc(${d.v / max * 100}% - ${d.v / max * 20}px)` : 0, background: last ? 'var(--cocoa-900)' : d.v > goal ? 'var(--orange-500)' : 'var(--teal-500)', borderRadius: dense ? 3 : undefined, transitionDelay: i * 25 + 'ms' }}></div>
        <span style={{ fontSize: 11, fontWeight: 700, height: 14, color: last ? 'var(--cocoa-900)' : 'var(--cocoa-500)' }}>{dense ? (i % 5 === 0 || last ? d.d : '') : d.d[0]}</span>
      </div>; })}
    </div>
    <div className="nt-row" style={{ gap: 16, marginTop: 14, fontSize: 12, fontWeight: 700, flexWrap: 'wrap' }}>{[['var(--teal-500)', 'under goal'], ['var(--orange-500)', 'over goal'], ['var(--cocoa-900)', 'today']].map(([c, l]) => <span key={l} className="nt-row" style={{ gap: 6 }}><i style={{ width: 10, height: 10, borderRadius: 3, background: c }}></i>{l}</span>)}</div>
  </div>;
}

function Donut({ parts }) {
  const m = useMounted(); const r = 54, C = 2 * Math.PI * r; let acc = 0;
  return <svg viewBox="0 0 140 140" width="140" height="140" style={{ flex: 'none', transform: 'rotate(-90deg)' }} role="img" aria-label="macro distribution">
    <circle cx="70" cy="70" r={r} fill="none" stroke="var(--cream-50)" strokeWidth="22" />
    {parts.map((p, i) => { const len = C * p.pct / 100, off = acc; acc += len; return <circle key={i} cx="70" cy="70" r={r} fill="none" stroke={p.color} strokeWidth="22" strokeDasharray={`${m ? Math.max(0, len - 3) : 0} ${C}`} strokeDashoffset={-off} style={{ transition: 'stroke-dasharray 1s var(--ease-out)' }} />; })}
  </svg>;
}

function Progress({ user, units, diaryToday }) {
  const [range, setRange] = React.useState('week');
  const kc = range === 'week' ? NUT.weekKcal : NUT.monthKcal; const wt = range === 'week' ? NUT.weightWeek : NUT.weightMonth;
  const done = kc.slice(0, -1); const avg = done.reduce((a, d) => a + d.v, 0) / done.length;
  const delta = wt[wt.length - 1] - wt[0]; const onTarget = done.filter(d => d.v <= user.kcal).length;
  const dist = range === 'week' ? { p: 27, c: 46, f: 27 } : { p: 25, c: 48, f: 27 };
  const parts = ['p', 'c', 'f'].map(k => ({ k, pct: dist[k], color: k === 'p' ? 'var(--cocoa-900)' : MACRO[k].color }));
  const toGo = Math.max(0, user.weight - user.goalWeight), lost = user.startWeight - user.weight;
  return <div>
    <header className="nt-head" style={{ alignItems: 'center', flexWrap: 'wrap' }}><h1 className="nt-h1">Progress</h1><Tabs tabs={[{ value: 'week', label: 'weekly' }, { value: 'month', label: 'monthly' }]} value={range} onChange={setRange} /></header>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))', gap: 12, marginBottom: 16 }} key={range} className="nt-fade">
      {[['avg calories', fmt(avg), 'kcal / day', 'var(--mint-200)', 'flame'], ['weight change', (delta > 0 ? '+' : '') + fmtW(Math.abs(delta) * Math.sign(delta), units), units + ' this ' + range, 'var(--sun-500)', delta <= 0 ? 'trending-down' : 'trending-up'], ['current streak', user.streak, 'days logged', 'var(--butter-300)', 'zap'], ['on target', onTarget + '/' + done.length, 'days under goal', 'var(--white)', 'target']].map(([l, v, s, bg, ic]) =>
        <div key={l} className={'nt-card ' + keep(bg)} style={{ background: bg, padding: 18, borderRadius: 'var(--radius-md)' }}><div className="nt-row" style={{ justifyContent: 'space-between', marginBottom: 12 }}><span style={{ fontSize: 13, fontWeight: 700 }}>{l}</span><Icon name={ic} size={18} /></div><div className="nt-num" style={{ fontSize: 34 }}>{v}</div><div style={{ fontSize: 12, fontWeight: 700, marginTop: 4, color: 'var(--cocoa-700)' }}>{s}</div></div>)}
    </div>
    <div className="nt-grid nt-grid--2">
      <section className="nt-card">
        <div className="nt-row" style={{ justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}><div><h2 className="nt-h2">Weight</h2><div className="nt-label" style={{ marginTop: 6 }}>goal {fmtW(user.goalWeight, units)} {units}</div></div><div style={{ textAlign: 'right' }}><span className="nt-num" style={{ fontSize: 30 }}>{fmtW(wt[wt.length - 1], units)}</span><span style={{ fontSize: 13, fontWeight: 700 }}> {units}</span></div></div>
        <WeightChart key={range} data={wt} units={units} labels={range === 'week' ? ['thu', 'fri', 'sat', 'sun', 'mon', 'tue', 'wed'] : ['sep 8', 'sep 22', 'oct 7']} />
        <div style={{ marginTop: 18 }}><div className="nt-row" style={{ justifyContent: 'space-between', fontSize: 13, fontWeight: 700, marginBottom: 8 }}><span>{fmtW(lost, units)} {units} lost</span><span style={{ color: 'var(--cocoa-500)' }}>{fmtW(toGo, units)} {units} to go</span></div><div className="nt-bar"><i style={{ width: lost / (user.startWeight - user.goalWeight) * 100 + '%', background: 'var(--teal-500)' }}></i></div></div>
      </section>
      <section className="nt-card">
        <div className="nt-row" style={{ justifyContent: 'space-between', marginBottom: 28 }}><h2 className="nt-h2">Calories vs goal</h2><span className="nt-label">{range === 'week' ? 'last 7 days' : 'last 30 days'}</span></div>
        <CalBars key={range} data={kc} goal={user.kcal} />
      </section>
      <section className="nt-card">
        <h2 className="nt-h2" style={{ marginBottom: 18 }}>Macro split</h2>
        <div className="nt-row" style={{ gap: 24, flexWrap: 'wrap' }}>
          <Donut key={range} parts={parts} />
          <div className="nt-col" style={{ gap: 12, flex: '1 1 140px' }}>{parts.map(p => <div key={p.k} className="nt-row" style={{ justifyContent: 'space-between' }}><span className="nt-row" style={{ gap: 8, fontSize: 15, fontWeight: 700 }}><i style={{ width: 12, height: 12, borderRadius: 4, background: p.color }}></i>{MACRO[p.k].label}</span><span style={{ fontSize: 15, fontWeight: 800 }}>{p.pct}% <span style={{ color: 'var(--cocoa-500)', fontWeight: 700, fontSize: 12 }}>/ {user.macros[p.k]}%</span></span></div>)}<div style={{ fontSize: 12, fontWeight: 700, color: 'var(--cocoa-500)' }}>actual / goal, share of calories</div></div>
        </div>
      </section>
      <section className="nt-panel nt-keep" style={{ background: 'var(--cocoa-900)', color: 'var(--white)' }}>
        <div className="nt-label" style={{ color: 'var(--sun-500)', marginBottom: 10 }}>this {range}</div>
        <h2 className="nt-h1" style={{ color: 'var(--white)', fontSize: 30 }}>{onTarget >= done.length * .6 ? 'Steady wins it.' : 'Room to grow.'}</h2>
        <p className="nt-body" style={{ color: 'var(--white)', marginTop: 12 }}>You stayed under your goal on {onTarget} of {done.length} days and averaged {fmt(avg)} kcal. At this pace you'll reach {fmtW(user.goalWeight, units)} {units} in about {Math.ceil(toGo / .45)} weeks.</p>
      </section>
    </div>
  </div>;
}
window.Progress = Progress;
