function Onboarding({ onDone }) {
  const [step, setStep] = React.useState(0);
  const [f, setF] = React.useState({ age: 29, sex: 'female', height: 168, weight: 64.2, activity: 'moderate', goal: 'lose' });
  const set = (k, v) => setF(s => ({ ...s, [k]: v }));
  const bmr = 10 * f.weight + 6.25 * f.height - 5 * f.age + (f.sex === 'male' ? 5 : f.sex === 'female' ? -161 : -78);
  const tdee = bmr * ACT[f.activity][2]; const kcal = Math.max(1200, Math.round((tdee + GOALS[f.goal][2]) / 10) * 10);
  const macros = f.goal === 'gain' ? { p: 25, c: 50, f: 25 } : { p: 30, c: 45, f: 25 };
  const g = macroGrams({ kcal, macros });
  const steps = 4, next = () => setStep(s => s + 1), back = () => setStep(s => s - 1);
  const Opt = ({ on, onClick, icon, title, sub, bg }) => <button className={'nt-opt' + (on ? ' nt-opt--on' : '')} onClick={onClick} aria-pressed={on}><span className={'nt-opt__ico ' + keep(bg)} style={{ background: bg }}><Icon name={icon} size={20} /></span><span style={{ flex: 1 }}><span style={{ display: 'block', fontSize: 17, fontWeight: 800 }}>{title}</span><span style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--cocoa-500)', marginTop: 2 }}>{sub}</span></span><span className="eth-radio" style={{ width: 20, height: 20, boxShadow: on ? 'inset 0 0 0 6px var(--cocoa-900)' : undefined, transition: 'box-shadow var(--dur-base) var(--ease-bounce)' }}></span></button>;
  return <div style={{ minHeight: '100vh', background: step === 0 || step === 4 ? 'var(--mint-200)' : 'var(--cream-50)', transition: 'background-color var(--dur-slow)', display: 'flex', justifyContent: 'center' }}>
    <div style={{ width: '100%', maxWidth: 520, padding: '20px 20px 28px', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {step > 0 && step < 4 && <div className="nt-row" style={{ marginBottom: 24 }}>
        <IconButton icon="arrow-left" label="back" variant="ghost" size={44} onClick={back} />
        <div style={{ flex: 1, display: 'flex', gap: 6 }}>{[1, 2, 3].map(i => <div key={i} className="nt-bar" style={{ flex: 1, height: 6, background: 'var(--cocoa-alpha-12)' }}><i style={{ width: step >= i ? '100%' : 0, background: 'var(--cocoa-900)' }}></i></div>)}</div>
        <span style={{ fontSize: 13, fontWeight: 700, width: 44, textAlign: 'right' }}>{step}/3</span>
      </div>}
      <div key={step} className="nt-fade" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {step === 0 && <>
          <div className="nt-h1" style={{ fontSize: 30, marginTop: 8 }}>ETHAN</div>
          <div className="nt-ph nt-keep" style={{ flex: 1, minHeight: 220, margin: '28px 0', borderRadius: 'var(--radius-xl)', background: 'var(--teal-500)', color: 'var(--cocoa-900)', backgroundImage: 'repeating-linear-gradient(135deg,rgba(255,255,255,.18) 0 10px,transparent 10px 20px)' }}>hero food shot</div>
          <h1 className="nt-h1" style={{ fontSize: 56 }}>Eat well. Track less.</h1>
          <p className="nt-body" style={{ margin: '14px 0 28px', fontSize: 17 }}>Log a meal in two taps and see exactly where your day stands.</p>
          <Button block size="lg" iconRight={<Icon name="arrow-right" size={18} strokeWidth={2.25} />} onClick={next}>get started</Button>
          <button className="nt-link" style={{ margin: '18px auto 0' }} onClick={() => onDone(null)}>i already have an account</button>
        </>}
        {step === 1 && <>
          <h1 className="nt-h1">About you</h1><p className="nt-body" style={{ color: 'var(--cocoa-500)', margin: '10px 0 24px' }}>We use this to estimate how much energy you burn.</p>
          <div className="nt-label" style={{ margin: '0 4px 8px' }}>gender</div>
          <div className="nt-pills" style={{ marginBottom: 20 }}>{['female', 'male', 'other'].map(s => <button key={s} className={'nt-pill' + (f.sex === s ? ' nt-pill--on' : '')} onClick={() => set('sex', s)} style={{ flex: 1 }}>{s}</button>)}</div>
          <div className="nt-col" style={{ gap: 16 }}>
            {[['age', 'age', 1, 14, 99, 'years'], ['height', 'height', 1, 120, 230, 'cm'], ['weight', 'weight', .5, 35, 250, 'kg']].map(([k, l, st, mn, mx, sf]) => <div key={k}><div className="nt-label" style={{ margin: '0 4px 8px' }}>{l}</div><NumStep value={f[k]} step={st} min={mn} max={mx} suffix={sf} onChange={v => set(k, v)} /></div>)}
          </div>
        </>}
        {step === 2 && <>
          <h1 className="nt-h1">How active are you?</h1><p className="nt-body" style={{ color: 'var(--cocoa-500)', margin: '10px 0 24px' }}>Pick what a normal week looks like.</p>
          <div className="nt-col" style={{ gap: 10 }}>{Object.entries(ACT).map(([k, [t, s]], i) => <Opt key={k} on={f.activity === k} onClick={() => set('activity', k)} icon={['clock', 'activity', 'zap', 'flame'][i]} title={t} sub={s} bg={['var(--cream-50)', 'var(--mint-200)', 'var(--butter-300)', 'var(--orange-500)'][i]} />)}</div>
        </>}
        {step === 3 && <>
          <h1 className="nt-h1">What's your goal?</h1><p className="nt-body" style={{ color: 'var(--cocoa-500)', margin: '10px 0 24px' }}>You can change this any time.</p>
          <div className="nt-col" style={{ gap: 10 }}>{Object.entries(GOALS).map(([k, [t, s, , ic]], i) => <Opt key={k} on={f.goal === k} onClick={() => set('goal', k)} icon={ic} title={t} sub={s} bg={['var(--mint-200)', 'var(--butter-300)', 'var(--sun-500)'][i]} />)}</div>
        </>}
        {step === 4 && <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
          <div className="nt-label" style={{ color: 'var(--cocoa-700)' }}>your daily target</div>
          <div className="nt-num" style={{ fontSize: 112, margin: '12px 0 4px' }}><CountUp value={kcal} dur={1200} /></div>
          <div style={{ fontSize: 17, fontWeight: 800 }}>kcal per day</div>
          <p className="nt-body" style={{ maxWidth: 360, margin: '18px auto 28px' }}>Based on a burn of about {fmt(tdee)} kcal, {f.goal === 'lose' ? 'minus 500 to lose ~0.5 kg a week' : f.goal === 'gain' ? 'plus 300 for steady gains' : 'to hold steady'}.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 8, marginBottom: 28 }}>{['p', 'c', 'f'].map(k => <div key={k} style={{ background: 'var(--white)', borderRadius: 'var(--radius-md)', padding: '16px 8px' }}><div className="nt-num" style={{ fontSize: 28 }}>{g[k]}g</div><div style={{ fontSize: 13, fontWeight: 700, marginTop: 4 }}>{MACRO[k].label}</div></div>)}</div>
        </div>}
      </div>
      {step > 0 && step < 4 && <Button block size="lg" style={{ marginTop: 28 }} onClick={next}>{step === 3 ? 'calculate my target' : 'continue'}</Button>}
      {step === 4 && <><Button block size="lg" iconRight={<Icon name="arrow-right" size={18} strokeWidth={2.25} />} onClick={() => onDone({ ...f, kcal, macros })}>start tracking</Button><button className="nt-link" style={{ margin: '16px auto 0' }} onClick={() => setStep(1)}>adjust my details</button></>}
    </div>
  </div>;
}
window.Onboarding = Onboarding;
