const { Switch } = window.ETHANDesignSystem_b7e92e;
const ACT = { sedentary: ['sedentary', 'desk job, little exercise', 1.2], light: ['lightly active', 'exercise 1–3 days a week', 1.375], moderate: ['moderately active', 'exercise 3–5 days a week', 1.55], very: ['very active', 'hard exercise 6–7 days', 1.725] };
const GOALS = { lose: ['lose weight', 'about 0.5 kg a week', -500, 'trending-down'], maintain: ['maintain weight', 'keep things steady', 0, 'target'], gain: ['gain weight', 'build up gradually', 300, 'trending-up'] };

function NumStep({ value, onChange, step = 1, min = 0, max = 9999, suffix, big }) {
  return <div className="nt-row" style={{ background: 'var(--white)', borderRadius: 999, padding: 6, gap: 8, justifyContent: 'space-between' }}>
    <IconButton icon="minus" label="decrease" variant="outline" size={big ? 48 : 40} disabled={value <= min} onClick={() => onChange(Math.max(min, +(value - step).toFixed(1)))} />
    <span style={{ textAlign: 'center', flex: 1 }}><span className="nt-num" style={{ fontSize: big ? 40 : 24 }}>{big ? fmt(value) : value}</span>{suffix && <span style={{ fontSize: 13, fontWeight: 700 }}> {suffix}</span>}</span>
    <IconButton icon="plus" label="increase" variant="solid" size={big ? 48 : 40} disabled={value >= max} onClick={() => onChange(Math.min(max, +(value + step).toFixed(1)))} />
  </div>;
}

function GoalSheet({ kind, user, units, onClose, onSave }) {
  const [kcal, setKcal] = React.useState(user.kcal); const [mac, setMac] = React.useState(user.macros); const [gw, setGw] = React.useState(user.goalWeight);
  const sum = mac.p + mac.c + mac.f; const ok = kind !== 'macros' || sum === 100;
  const title = { kcal: 'Daily calorie goal', macros: 'Macro goals', weight: 'Weight goal' }[kind];
  return <Sheet onClose={onClose} label={title}>
    <div className="nt-row" style={{ justifyContent: 'space-between', marginBottom: 20 }}><h2 className="nt-h1" style={{ fontSize: 30 }}>{title}</h2><IconButton icon="x" label="close" variant="white" size={44} onClick={onClose} /></div>
    {kind === 'kcal' && <><NumStep big value={kcal} step={50} min={1200} max={4500} suffix="kcal" onChange={setKcal} /><p className="nt-body" style={{ color: 'var(--cocoa-500)', margin: '14px 4px 0' }}>Recommended for your goal: 1,950–2,050 kcal.</p></>}
    {kind === 'macros' && <div className="nt-col" style={{ gap: 12 }}>{['p', 'c', 'f'].map(k => <div key={k}><div className="nt-row" style={{ justifyContent: 'space-between', fontSize: 13, fontWeight: 700, margin: '0 4px 8px' }}><span className="nt-row" style={{ gap: 6 }}><i style={{ width: 8, height: 8, borderRadius: '50%', background: k === 'p' ? 'var(--cocoa-900)' : MACRO[k].color }}></i>{MACRO[k].label}</span><span style={{ color: 'var(--cocoa-500)' }}>{Math.round(kcal * mac[k] / 100 / (k === 'f' ? 9 : 4))}g</span></div><NumStep value={mac[k]} step={5} min={5} max={80} suffix="%" onChange={v => setMac({ ...mac, [k]: v })} /></div>)}
      <div style={{ fontSize: 13, fontWeight: 700, color: ok ? 'var(--cocoa-700)' : 'var(--maroon-700)', margin: '0 4px' }}>{ok ? 'adds up to 100% — nice.' : `total is ${sum}% — needs to be 100%`}</div></div>}
    {kind === 'weight' && <NumStep big value={+fmtW(gw, units)} step={.5} min={30} max={400} suffix={units} onChange={v => setGw(units === 'lb' ? v / 2.2046 : v)} />}
    <Button block size="lg" style={{ marginTop: 24 }} disabled={!ok} onClick={() => onSave(kind === 'kcal' ? { kcal } : kind === 'macros' ? { macros: mac } : { goalWeight: +gw.toFixed(1) })}>save</Button>
  </Sheet>;
}

function Profile({ user, setUser, units, setUnits, toast, restart, theme, setTheme }) {
  const [sheet, setSheet] = React.useState(null); const [notif, setNotif] = React.useState(true);
  const ht = units === 'lb' ? `${Math.floor(user.height / 30.48)}′${Math.round(user.height / 2.54 % 12)}″` : user.height + ' cm';
  const Row = ({ icon, label, val, onClick, children }) => <button className="nt-setrow" onClick={onClick} style={{ cursor: onClick ? 'pointer' : 'default' }}><span className="nt-setrow__ico"><Icon name={icon} size={18} /></span><span style={{ flex: 1 }}>{label}</span>{children || <span className="nt-setrow__val">{val}<Icon name="chevron-right" size={16} strokeWidth={2.25} /></span>}</button>;
  return <div>
    <header className="nt-head"><h1 className="nt-h1">Profile</h1></header>
    <div className="nt-grid nt-grid--2">
      <div className="nt-col">
        <section className="nt-panel" style={{ background: 'var(--mint-200)', textAlign: 'center' }}>
          <div className="nt-ph" style={{ width: 104, height: 104, borderRadius: '50%', margin: '0 auto 14px', background: 'var(--white)', boxShadow: 'inset 0 0 0 3px var(--cocoa-900)' }}>profile<br />photo</div>
          <h2 className="nt-h1" style={{ fontSize: 32 }}>{user.first} {user.last}</h2>
          <div style={{ fontSize: 13, fontWeight: 700, marginTop: 8, color: 'var(--cocoa-700)' }}>member since june 2026</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 8, marginTop: 20 }}>{[['age', user.age], ['height', ht], ['weight', fmtW(user.weight, units) + ' ' + units]].map(([l, v]) => <div key={l} style={{ background: 'var(--white)', borderRadius: 'var(--radius-sm)', padding: '12px 6px' }}><div className="nt-num" style={{ fontSize: 20 }}>{v}</div><div style={{ fontSize: 12, fontWeight: 700, marginTop: 4, color: 'var(--cocoa-500)' }}>{l}</div></div>)}</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,minmax(0,1fr))', gap: 8, marginTop: 8 }}>{[['goal', GOALS[user.goal][0], GOALS[user.goal][3]], ['activity', ACT[user.activity][0], 'activity']].map(([l, v, ic]) => <div key={l} className="nt-row" style={{ background: 'var(--white)', borderRadius: 'var(--radius-sm)', padding: '12px', gap: 10, textAlign: 'left' }}><Icon name={ic} size={18} /><div style={{ minWidth: 0 }}><div style={{ fontSize: 12, fontWeight: 700, color: 'var(--cocoa-500)' }}>{l}</div><div style={{ fontSize: 13, fontWeight: 800 }}>{v}</div></div></div>)}</div>
        </section>
        <section className="nt-card" style={{ paddingTop: 8, paddingBottom: 8 }}>
          <Row icon="flame" label="daily calorie goal" val={fmt(user.kcal) + ' kcal'} onClick={() => setSheet('kcal')} />
          <Row icon="activity" label="macro goals" val={`${user.macros.p}/${user.macros.c}/${user.macros.f}`} onClick={() => setSheet('macros')} />
          <Row icon="target" label="weight goal" val={fmtW(user.goalWeight, units) + ' ' + units} onClick={() => setSheet('weight')} />
        </section>
      </div>
      <div className="nt-col">
        <section className="nt-card" style={{ paddingTop: 8, paddingBottom: 8 }}>
          <Row icon="scale" label="units"><Tabs tabs={['kg', 'lb']} value={units} onChange={setUnits} style={{ background: 'var(--cream-50)' }} /></Row>
          <Row icon="bell" label="notifications"><Switch checked={notif} onChange={e => { setNotif(e.target.checked); toast(e.target.checked ? 'meal reminders on' : 'meal reminders off'); }} aria-label="notifications" /></Row>
          <Row icon={theme === 'dark' ? 'moon' : 'sun'} label="theme"><Tabs tabs={['light', 'dark', 'system']} value={theme} onChange={setTheme} style={{ background: 'var(--cream-50)' }} /></Row>
        </section>
        <section className="nt-card" style={{ paddingTop: 8, paddingBottom: 8 }}>
          <Row icon="user" label="account settings" val="" onClick={() => toast('account settings')} />
          <Row icon="rotate-ccw" label="redo onboarding" val="" onClick={restart} />
          <Row icon="log-out" label="sign out" val="" onClick={() => toast('signed out (demo)')} />
        </section>
      </div>
    </div>
    {sheet && <GoalSheet kind={sheet} user={user} units={units} onClose={() => setSheet(null)} onSave={patch => { setUser(u => ({ ...u, ...patch })); setSheet(null); toast('goal updated!'); }} />}
  </div>;
}
Object.assign(window, { Profile, NumStep, ACT, GOALS });
