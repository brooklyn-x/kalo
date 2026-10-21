const { Icon } = window.ETHANDesignSystem_b7e92e;
const MACRO = { p: { label: 'protein', color: 'var(--teal-500)' }, c: { label: 'carbs', color: 'var(--sun-500)' }, f: { label: 'fat', color: 'var(--orange-500)' } };
const fmt = n => Math.round(n).toLocaleString('en-US');
const dayTotals = day => { const t = { kcal: 0, p: 0, c: 0, f: 0 }; if (!day) return t; Object.values(day).flat().forEach(e => { const v = NUT.entryVals(e); t.kcal += v.kcal; t.p += v.p; t.c += v.c; t.f += v.f; }); return t; };
const mealTotals = list => (list || []).reduce((a, e) => { const v = NUT.entryVals(e); return { kcal: a.kcal + v.kcal, n: a.n + 1 }; }, { kcal: 0, n: 0 });
const macroGrams = u => ({ p: Math.round(u.kcal * u.macros.p / 100 / 4), c: Math.round(u.kcal * u.macros.c / 100 / 4), f: Math.round(u.kcal * u.macros.f / 100 / 9) });
const fmtW = (kg, units) => units === 'lb' ? (kg * 2.2046).toFixed(1) : kg.toFixed(1);
const ACCENT_BG = ['var(--sun-500)', 'var(--butter-300)', 'var(--orange-500)', 'var(--teal-500)', 'var(--red-500)'];
const keep = bg => ACCENT_BG.includes(bg) ? 'nt-keep' : '';

function useMounted(delay = 60) { const [m, setM] = React.useState(false); React.useEffect(() => { const t = setTimeout(() => setM(true), delay); return () => clearTimeout(t); }, []); return m; }

function CountUp({ value, dur = 900 }) {
  const [v, setV] = React.useState(0); const from = React.useRef(0);
  React.useEffect(() => { const s = performance.now(), a = from.current; let raf; const tick = t => { const k = Math.min(1, (t - s) / dur), e = 1 - Math.pow(1 - k, 3); setV(a + (value - a) * e); if (k < 1) raf = requestAnimationFrame(tick); else from.current = value; }; raf = requestAnimationFrame(tick); return () => cancelAnimationFrame(raf); }, [value]);
  return fmt(v);
}

function CalorieRing({ eaten, goal, size = 240, stroke = 20 }) {
  const m = useMounted(); const r = (size - stroke) / 2, C = 2 * Math.PI * r;
  const pct = Math.min(1, eaten / goal), over = eaten > goal, left = goal - eaten;
  return <div style={{ position: 'relative', width: size, height: size, maxWidth: '100%', flex: 'none' }}>
    <svg className="nt-ring" viewBox={`0 0 ${size} ${size}`} width="100%" height="100%" style={{ transform: 'rotate(-90deg)', display: 'block' }}>
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--ring-track)" strokeWidth={stroke} />
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={over ? 'var(--orange-500)' : 'var(--cocoa-900)'} strokeWidth={stroke} strokeLinecap="round" strokeDasharray={C} strokeDashoffset={m ? C * (1 - pct) : C} />
    </svg>
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 6, textAlign: 'center' }}>
      <span className="nt-label" style={{ color: 'var(--cocoa-700)' }}>{over ? 'over goal' : 'remaining'}</span>
      <span className="nt-num" style={{ fontSize: size * .25 }}><CountUp value={Math.abs(left)} /></span>
      <span style={{ fontSize: 13, fontWeight: 700 }}>kcal</span>
    </div>
  </div>;
}

function MacroBar({ k, val, goal, compact }) {
  const m = useMounted(120); const pct = Math.min(100, val / goal * 100);
  return <div style={{ minWidth: 0 }}>
    <div className="nt-row" style={{ justifyContent: 'space-between', marginBottom: 8, gap: 6 }}>
      <span className="nt-row" style={{ gap: 6, fontSize: 13, fontWeight: 700 }}><i style={{ width: 8, height: 8, borderRadius: '50%', background: MACRO[k].color }}></i>{MACRO[k].label}</span>
      {!compact && <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--cocoa-500)' }}>{goal - val > 0 ? goal - val + 'g left' : 'done!'}</span>}
    </div>
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 10 }}><span className="nt-num" style={{ fontSize: 26 }}>{val}</span><span style={{ fontSize: 13, fontWeight: 700, color: 'var(--cocoa-500)' }}>/ {goal}g</span></div>
    <div className="nt-bar"><i style={{ width: m ? pct + '%' : 0, background: MACRO[k].color }}></i></div>
  </div>;
}

function MacroChips({ v }) {
  return <div className="nt-macro-chips">{['p', 'c', 'f'].map(k => <span key={k} className="nt-mchip"><i style={{ background: MACRO[k].color }}></i>{v[k]}g {MACRO[k].label[0]}</span>)}</div>;
}

const Skel = ({ w = '100%', h = 16, r, style }) => <div className="nt-skel" style={{ width: w, height: h, borderRadius: r, ...style }}></div>;

function Sheet({ onClose, children, label }) {
  React.useEffect(() => { const k = e => e.key === 'Escape' && onClose(); window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k); }, []);
  return <div className="nt-scrim" onClick={onClose}><div className="nt-sheet" role="dialog" aria-label={label} onClick={e => e.stopPropagation()}><div className="nt-sheet__grip"></div>{children}</div></div>;
}

const NAV = [{ k: 'home', label: 'home', icon: 'home' }, { k: 'diary', label: 'diary', icon: 'book-open' }, { k: 'add', label: 'add food', icon: 'plus' }, { k: 'progress', label: 'progress', icon: 'trending-up' }, { k: 'profile', label: 'profile', icon: 'user' }];
function BottomNav({ tab, go }) {
  return <>
    {tab !== 'add' && <button className="eth-btn eth-btn--secondary eth-btn--lg nt-fab-add" onClick={() => go('add')}><Icon name="plus" size={18} strokeWidth={2.5} />add food</button>}
    <nav className="nt-bottom" aria-label="main">{NAV.filter(n => n.k !== 'add').map(n => <button key={n.k} className={'nt-nav' + (tab === n.k ? ' nt-nav--on' : '')} onClick={() => go(n.k)} aria-current={tab === n.k ? 'page' : undefined}><Icon name={n.icon} size={20} strokeWidth={tab === n.k ? 2.25 : 1.75} />{n.label}</button>)}</nav>
  </>;
}
function SideRail({ tab, go }) {
  return <aside className="nt-rail">
    <div className="nt-h1" style={{ fontSize: 34, padding: '0 16px 28px' }}>ETHAN</div>
    {NAV.map(n => <button key={n.k} className={'nt-nav' + (tab === n.k ? ' nt-nav--on' : '')} onClick={() => go(n.k)}><Icon name={n.icon} size={20} strokeWidth={tab === n.k ? 2.25 : 1.75} />{n.label}</button>)}
  </aside>;
}

Object.assign(window, { MACRO, fmt, dayTotals, mealTotals, macroGrams, fmtW, keep, useMounted, CountUp, CalorieRing, MacroBar, MacroChips, Skel, Sheet, BottomNav, SideRail });
