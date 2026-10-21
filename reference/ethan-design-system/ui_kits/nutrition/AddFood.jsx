const { TextField, Tabs, Select, QuantityStepper, Tag } = window.ETHANDesignSystem_b7e92e;
const CAT_TONE = { breakfast: 'var(--sun-500)', fruits: 'var(--mint-200)', vegetables: 'var(--teal-500)', grains: 'var(--butter-300)', dairy: 'var(--cream-50)', meat: 'var(--orange-500)', snacks: 'var(--butter-300)', drinks: 'var(--mint-200)' };

function FoodRow({ f, onPick, onQuick, fav }) {
  return <div className="nt-item">
    <button onClick={() => onPick(f.id)} style={{ flex: 1, minWidth: 0, background: 'none', border: 0, padding: 0, textAlign: 'left', cursor: 'pointer', color: 'inherit', display: 'flex', alignItems: 'center', gap: 12 }}>
      <span className={'nt-opt__ico ' + keep(CAT_TONE[f.cat])} style={{ background: CAT_TONE[f.cat], width: 44, height: 44 }}><Icon name={(NUT.cats.find(c => c.key === f.cat) || {}).icon} size={20} /></span>
      <span style={{ minWidth: 0, flex: 1 }}><span className="nt-item__name" style={{ display: 'flex', alignItems: 'center', gap: 6 }}><span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{f.name}</span>{fav && <Icon name="heart" size={13} strokeWidth={2.5} color="var(--red-500)" />}</span><span className="nt-item__sub" style={{ display: 'block' }}>{f.serving} · {f.kcal} kcal</span></span>
    </button>
    <IconButton icon="plus" label={'quick add ' + f.name} variant="solid" size={40} iconSize={18} onClick={() => onQuick(f.id)} />
  </div>;
}

function Scanner({ onClose, onFound }) {
  const [found, setFound] = React.useState(false);
  React.useEffect(() => { const a = setTimeout(() => setFound(true), 1800), b = setTimeout(() => onFound('shk'), 2500); return () => { clearTimeout(a); clearTimeout(b); }; }, []);
  return <div className="nt-scan" role="dialog" aria-label="barcode scanner">
    <div className="nt-row" style={{ justifyContent: 'space-between', padding: 16 }}><span style={{ fontSize: 15, fontWeight: 700 }}>scan barcode</span><IconButton icon="x" label="close scanner" variant="white" size={40} onClick={onClose} /></div>
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 28, padding: 24 }}>
      <div className="nt-scan__frame"><div className="nt-ph" style={{ position: 'absolute', inset: 0, color: 'rgba(255,255,255,.7)', background: 'repeating-linear-gradient(135deg,rgba(255,255,255,.06) 0 8px,transparent 8px 16px)' }}>camera viewfinder</div>{!found && <div className="nt-scan__line"></div>}</div>
      <div style={{ textAlign: 'center' }}><div className="nt-h1" style={{ color: 'var(--sun-500)', fontSize: 30 }}>{found ? 'Got it!' : 'Line it up'}</div><p className="nt-body" style={{ color: 'var(--white)', marginTop: 10 }}>{found ? 'Protein shake, vanilla' : 'Hold the barcode inside the frame.'}</p></div>
    </div>
  </div>;
}

function AddFood({ favorites, onPick, onQuick, mealLabel }) {
  const [q, setQ] = React.useState(''); const [loading, setLoading] = React.useState(false); const [cat, setCat] = React.useState(null);
  const [list, setList] = React.useState('recent'); const [scan, setScan] = React.useState(false);
  const tm = React.useRef();
  const onQ = v => { setQ(v); setLoading(true); clearTimeout(tm.current); tm.current = setTimeout(() => setLoading(false), 380); };
  const searching = q.trim() || cat;
  const results = NUT.foods.filter(f => (!cat || f.cat === cat) && (!q.trim() || (f.name + ' ' + f.brand).toLowerCase().includes(q.trim().toLowerCase())));
  const lists = { recent: NUT.recent, frequent: NUT.frequent, favorites };
  return <div>
    <header className="nt-head"><div><div className="nt-label" style={{ marginBottom: 8 }}>adding to {mealLabel}</div><h1 className="nt-h1">Add food</h1></div></header>
    <div className="nt-row" style={{ gap: 10, marginBottom: 20 }}>
      <div style={{ flex: 1, minWidth: 0, position: 'relative' }}>
        <TextField value={q} onChange={e => onQ(e.target.value)} placeholder="Search food..." aria-label="search food" />
        {q && <span style={{ position: 'absolute', right: 6, top: 6 }}><IconButton icon="x" label="clear search" variant="ghost" size={36} iconSize={16} onClick={() => onQ('')} /></span>}
      </div>
      <IconButton icon="scan-barcode" label="scan barcode" variant="solid" size={48} iconSize={22} onClick={() => setScan(true)} />
    </div>
    <div className="nt-cats" style={{ marginBottom: 20 }}>{NUT.cats.map(c => <button key={c.key} className={'nt-cat' + (cat === c.key ? ' nt-cat--on' : '')} onClick={() => { setCat(cat === c.key ? null : c.key); setLoading(true); setTimeout(() => setLoading(false), 300); }}><span className={'nt-cat__ico ' + keep(CAT_TONE[c.key])} style={{ background: CAT_TONE[c.key] }}><Icon name={c.icon} size={20} /></span>{c.key}</button>)}</div>
    {searching ? <section className="nt-card nt-fade" key="res">
      <div className="nt-row" style={{ justifyContent: 'space-between', marginBottom: 4 }}><h2 className="nt-h2">{cat && !q ? cat : 'Results'}</h2>{!loading && <span className="nt-label">{results.length} foods</span>}</div>
      {loading ? [0, 1, 2, 3].map(i => <div key={i} className="nt-item"><Skel w={44} h={44} r={22} /><div style={{ flex: 1 }}><Skel w="60%" h={14} /><Skel w="35%" h={12} style={{ marginTop: 8 }} /></div><Skel w={40} h={40} r={20} /></div>)
        : results.length ? results.map(f => <FoodRow key={f.id} f={f} fav={favorites.includes(f.id)} onPick={onPick} onQuick={onQuick} />)
          : <div style={{ textAlign: 'center', padding: '32px 8px' }}><Icon name="search" size={28} style={{ margin: '0 auto' }} /><h3 className="nt-h2" style={{ margin: '14px 0 8px' }}>No match for "{q}"</h3><p className="nt-body" style={{ color: 'var(--cocoa-500)', marginBottom: 16 }}>Try a simpler word, or scan the package.</p><Button variant="outline" size="sm" iconLeft={<Icon name="scan-barcode" size={16} />} onClick={() => setScan(true)}>scan barcode</Button></div>}
    </section> : <section className="nt-card nt-fade" key="lists">
      <Tabs tabs={[{ value: 'recent', label: 'recent' }, { value: 'frequent', label: 'frequent' }, { value: 'favorites', label: 'favorites' }]} value={list} onChange={setList} variant="underline" style={{ width: '100%', marginBottom: 6 }} />
      {lists[list].length ? lists[list].map(id => <FoodRow key={id} f={NUT.byId[id]} fav={favorites.includes(id)} onPick={onPick} onQuick={onQuick} />)
        : <div style={{ textAlign: 'center', padding: '32px 8px' }}><Icon name="heart" size={28} style={{ margin: '0 auto' }} /><h3 className="nt-h2" style={{ margin: '14px 0 8px' }}>No favorites yet</h3><p className="nt-body" style={{ color: 'var(--cocoa-500)' }}>Tap the heart on any food to keep it here.</p></div>}
    </section>}
    {scan && <Scanner onClose={() => setScan(false)} onFound={id => { setScan(false); onPick(id); }} />}
  </div>;
}

function FoodDetail({ food, init, mode, fav, toggleFav, onClose, onSave }) {
  const [si, setSi] = React.useState(init.si || 0); const [qty, setQty] = React.useState(init.qty || 1); const [meal, setMeal] = React.useState(init.meal);
  const v = NUT.entryVals({ foodId: food.id, qty, si }); const mk = v.p * 4 + v.c * 4 + v.f * 9 || 1;
  return <Sheet onClose={onClose} label={food.name}>
    <div className="nt-row" style={{ alignItems: 'flex-start', marginBottom: 18 }}>
      <div style={{ flex: 1, minWidth: 0 }}><div className="nt-label" style={{ marginBottom: 6 }}>{food.brand || food.cat}</div><h2 className="nt-h1" style={{ fontSize: 32 }}>{food.name}</h2></div>
      <IconButton icon="heart" label={fav ? 'remove favorite' : 'add favorite'} variant={fav ? 'solid' : 'white'} size={44} onClick={toggleFav} />
      <IconButton icon="x" label="close" variant="white" size={44} onClick={onClose} />
    </div>
    <div className="nt-panel" style={{ background: 'var(--mint-200)', padding: 20, marginBottom: 12 }}>
      <div className="nt-row" style={{ alignItems: 'baseline', gap: 8 }}><span className="nt-num" style={{ fontSize: 56 }}><CountUp value={v.kcal} dur={400} /></span><span style={{ fontSize: 15, fontWeight: 700 }}>kcal</span></div>
      <div style={{ display: 'flex', height: 10, borderRadius: 999, overflow: 'hidden', margin: '14px 0 14px', background: 'var(--white)' }}>{['p', 'c', 'f'].map(k => <i key={k} style={{ width: (v[k] * (k === 'f' ? 9 : 4) / mk * 100) + '%', background: k === 'p' ? 'var(--cocoa-900)' : MACRO[k].color, transition: 'width .4s var(--ease-out)' }}></i>)}</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 8 }}>{['p', 'c', 'f'].map(k => <div key={k} style={{ background: 'var(--white)', borderRadius: 'var(--radius-sm)', padding: '10px 12px' }}><div className="nt-num" style={{ fontSize: 22 }}>{v[k]}g</div><div style={{ fontSize: 12, fontWeight: 700, marginTop: 2 }}>{MACRO[k].label}</div></div>)}</div>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) auto', gap: 10, marginBottom: 12 }}>
      <Select label="serving" value={String(si)} onChange={x => setSi(+x)} options={food.servings.map((s, i) => ({ value: String(i), label: s.label }))} />
      <QuantityStepper value={qty} min={1} max={20} onChange={setQty} />
    </div>
    <div className="nt-label" style={{ margin: '16px 0 8px' }}>meal</div>
    <div className="nt-pills" style={{ marginBottom: 22 }}>{NUT.meals.map(m => <button key={m.key} className={'nt-pill' + (meal === m.key ? ' nt-pill--on' : '')} onClick={() => setMeal(m.key)}>{m.label}</button>)}</div>
    <Button block size="lg" iconLeft={<Icon name={mode === 'edit' ? 'check' : 'plus'} size={18} strokeWidth={2.5} />} onClick={() => onSave({ foodId: food.id, qty, si }, meal)}>{mode === 'edit' ? 'save changes' : 'add to diary · ' + v.kcal + ' kcal'}</Button>
  </Sheet>;
}
Object.assign(window, { AddFood, FoodDetail });
