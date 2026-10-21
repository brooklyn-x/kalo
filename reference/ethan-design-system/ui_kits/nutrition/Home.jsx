const { Button, Badge, IconButton } = window.ETHANDesignSystem_b7e92e;

function HomeSkeleton() {
  return <div className="nt-grid nt-grid--home" aria-busy="true">
    <div className="nt-col"><Skel h={330} r={36} /><Skel h={150} r={28} /></div>
    <div className="nt-col"><Skel h={300} r={28} /><Skel h={140} r={28} /></div>
  </div>;
}

function Home({ user, day, water, setWater, go, openAdd, loading }) {
  const t = dayTotals(day); const g = macroGrams(user); const left = user.kcal - t.kcal;
  const anyLogged = Object.values(day || {}).some(l => l.length);
  return <div>
    <header className="nt-head">
      <div><div className="nt-label" style={{ marginBottom: 8 }}>wednesday, oct 7</div><h1 className="nt-h1">Good evening, {user.first}</h1></div>
      <span className="nt-row nt-keep" title="daily streak" style={{ gap: 6, background: 'var(--sun-500)', borderRadius: 999, height: 40, padding: '0 14px 0 10px', flex: 'none' }}><Icon name="flame" size={20} strokeWidth={2} /><span className="nt-num" style={{ fontSize: 20 }}>{user.streak}</span></span>
    </header>
    {loading ? <HomeSkeleton /> : <div className="nt-grid nt-grid--home nt-fade">
      <div className="nt-col">
        <section className="nt-panel" style={{ background: 'var(--mint-200)' }} aria-label="today's calories">
          <div className="nt-row" style={{ justifyContent: 'space-between', marginBottom: 20 }}>
            <h2 className="nt-h2">Today's calories</h2>
            <Badge tone="white">{'goal ' + fmt(user.kcal)}</Badge>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 24 }}>
            <CalorieRing eaten={t.kcal} goal={user.kcal} size={212} />
            <div className="nt-col" style={{ gap: 14, flex: '1 1 160px' }}>
              {[['eaten', t.kcal, 'flame'], ['remaining', Math.max(0, left), 'target'], ['daily goal', user.kcal, 'zap']].map(([l, v, ic]) =>
                <div key={l} className="nt-row" style={{ gap: 10 }}><span style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--white)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}><Icon name={ic} size={18} /></span>
                  <div><div style={{ fontSize: 13, fontWeight: 700, color: 'var(--cocoa-700)' }}>{l}</div><div className="nt-num" style={{ fontSize: 22, whiteSpace: 'nowrap' }}>{fmt(v)} <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 700 }}>kcal</span></div></div></div>)}
            </div>
          </div>
          <div className="nt-row" style={{ justifyContent: 'space-between', margin: '22px 0 14px', fontSize: 15, fontWeight: 700, flexWrap: 'wrap', gap: 4 }}>
            <span>{fmt(t.kcal)} / {fmt(user.kcal)} kcal</span><span style={{ color: 'var(--cocoa-700)' }}>{left >= 0 ? fmt(left) + ' kcal remaining' : fmt(-left) + ' kcal over'}</span>
          </div>
          <Button block size="lg" iconLeft={<Icon name="plus" size={18} strokeWidth={2.5} />} onClick={() => openAdd()}>add food</Button>
        </section>
        <section className="nt-card" aria-label="macros">
          <div className="nt-row" style={{ justifyContent: 'space-between', marginBottom: 18 }}><h2 className="nt-h2">Macros</h2><button className="nt-link" onClick={() => go('profile')}>edit goals</button></div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 16 }}>
            <MacroBar k="p" val={t.p} goal={g.p} compact /><MacroBar k="c" val={t.c} goal={g.c} compact /><MacroBar k="f" val={t.f} goal={g.f} compact />
          </div>
        </section>
      </div>
      <div className="nt-col">
        <section className="nt-card" aria-label="meals">
          <div className="nt-row" style={{ justifyContent: 'space-between', marginBottom: 6 }}><h2 className="nt-h2">Today's meals</h2><button className="nt-link" onClick={() => go('diary')}>open diary</button></div>
          {!anyLogged && <p className="nt-body" style={{ color: 'var(--cocoa-500)', margin: '6px 0 4px' }}>Nothing logged yet today. Start with what you ate last — it takes two taps.</p>}
          {NUT.meals.map(m => { const mt = mealTotals(day && day[m.key]); return <div key={m.key} className="nt-item">
            <span className="nt-opt__ico" style={{ background: mt.n ? 'var(--mint-200)' : 'var(--cream-50)', width: 44, height: 44 }}><Icon name={m.icon} size={20} /></span>
            <div className="nt-item__main"><div className="nt-item__name">{m.label}</div><div className="nt-item__sub">{mt.n ? mt.n + (mt.n > 1 ? ' items' : ' item') : 'not logged yet'}</div></div>
            {mt.n ? <span className="nt-num" style={{ fontSize: 20 }}>{fmt(mt.kcal)}<span style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 700 }}> kcal</span></span> : null}
            <IconButton icon="plus" label={'add to ' + m.label} variant={mt.n ? 'ghost' : 'outline'} size={36} iconSize={16} onClick={() => openAdd(m.key)} />
          </div>; })}
        </section>
        <section className="nt-card" aria-label="water">
          <div className="nt-row" style={{ justifyContent: 'space-between', marginBottom: 14 }}>
            <div><h2 className="nt-h2">Water</h2><div className="nt-label" style={{ marginTop: 6 }}>{water * 250} / {user.water * 250} ml</div></div>
            <div className="nt-row" style={{ gap: 8 }}><IconButton icon="minus" label="remove glass" variant="outline" size={36} iconSize={16} disabled={!water} onClick={() => setWater(w => Math.max(0, w - 1))} /><IconButton icon="plus" label="add glass" variant="solid" size={36} iconSize={16} onClick={() => setWater(w => Math.min(12, w + 1))} /></div>
          </div>
          <div className="nt-row" style={{ gap: 6 }}>{Array.from({ length: user.water }, (_, i) => <button key={i} aria-label={'glass ' + (i + 1)} className={'nt-glass' + (i < water ? ' nt-glass--on' : '')} onClick={() => setWater(i + 1 === water ? i : i + 1)}><Icon name="droplet" size={18} strokeWidth={2} /></button>)}</div>
        </section>
        <section className="nt-panel nt-keep" style={{ background: 'var(--sun-500)', padding: 20 }} aria-label="streak">
          <div className="nt-row" style={{ gap: 16 }}>
            <span style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--white)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}><Icon name="flame" size={28} strokeWidth={2} /></span>
            <div style={{ flex: 1, minWidth: 0 }}><div className="nt-h2">{user.streak} day streak</div><div style={{ fontSize: 13, fontWeight: 700, marginTop: 4 }}>Log dinner to make it {user.streak + 1}!</div></div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 6, marginTop: 16 }}>{['t', 'f', 's', 's', 'm', 't', 'w'].map((d, i) => <div key={i} style={{ textAlign: 'center' }}><div style={{ height: 28, borderRadius: 999, background: i < 6 ? 'var(--cocoa-900)' : 'var(--white)', color: i < 6 ? 'var(--sun-500)' : 'var(--cocoa-900)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name={i < 6 ? 'check' : 'clock'} size={14} strokeWidth={2.5} /></div><div style={{ fontSize: 11, fontWeight: 700, marginTop: 4 }}>{d}</div></div>)}</div>
        </section>
      </div>
    </div>}
  </div>;
}
window.Home = Home;
