// Demo data for the ETHAN nutrition kit. Values per 1 base serving.
(function(){
const F=(id,name,brand,cat,serving,kcal,p,c,f,alts)=>({id,name,brand,cat,serving,kcal,p,c,f,servings:[{label:serving,mult:1},...(alts||[])]});
const foods=[
F('yog','Greek yogurt, plain','2% milkfat','dairy','1 cup (245g)',220,20,24,5,[{label:'½ cup (123g)',mult:.5},{label:'100g',mult:.41}]),
F('ban','Banana','medium, raw','fruits','1 medium (118g)',105,1,27,0,[{label:'1 large (136g)',mult:1.15},{label:'100g',mult:.85}]),
F('gra','Oat granola','honey almond','grains','¼ cup (30g)',95,3,15,3,[{label:'½ cup (60g)',mult:2}]),
F('chk','Grilled chicken bowl','brown rice, greens','meat','1 bowl (410g)',480,38,52,14,[{label:'½ bowl',mult:.5}]),
F('app','Apple','medium, raw','fruits','1 medium (182g)',80,0,21,0,[{label:'100g',mult:.55}]),
F('alm','Almonds','raw','snacks','1 oz (28g)',165,6,6,14,[{label:'10 almonds',mult:.43}]),
F('hum','Hummus & carrots','2 tbsp + 1 cup','snacks','1 serving',95,3,11,5),
F('egg','Scrambled eggs','2 large','breakfast','2 eggs (100g)',180,13,2,13,[{label:'1 egg',mult:.5},{label:'3 eggs',mult:1.5}]),
F('oat','Overnight oats','with chia & berries','breakfast','1 jar (250g)',320,12,48,9),
F('avt','Avocado toast','sourdough, 1 slice','breakfast','1 slice',240,6,26,13),
F('sal','Salmon fillet','baked','meat','1 fillet (154g)',367,39,0,22,[{label:'100g',mult:.65}]),
F('qui','Quinoa, cooked','','grains','1 cup (185g)',222,8,39,4,[{label:'½ cup',mult:.5}]),
F('bro','Broccoli, steamed','','vegetables','1 cup (156g)',55,4,11,1),
F('spn','Spinach salad','olive oil dressing','vegetables','1 bowl (120g)',140,3,6,12),
F('swp','Sweet potato','baked, with skin','vegetables','1 medium (114g)',103,2,24,0),
F('mlk','Oat milk latte','16 oz','drinks','1 grande',190,3,29,7,[{label:'12 oz',mult:.75}]),
F('cof','Black coffee','brewed','drinks','1 cup (240ml)',2,0,0,0),
F('shk','Protein shake','vanilla, with water','drinks','1 scoop (32g)',130,25,3,2),
F('che','Cheddar cheese','sharp','dairy','1 slice (28g)',115,7,0,9),
F('cot','Cottage cheese','low fat','dairy','½ cup (113g)',90,12,5,2),
F('bry','Mixed berries','fresh','fruits','1 cup (150g)',70,1,17,0),
F('tur','Turkey sandwich','whole wheat','meat','1 sandwich',360,26,38,11),
F('pas','Whole wheat pasta','cooked','grains','1 cup (140g)',174,7,37,1),
F('bar','Dark chocolate','70% cacao','snacks','2 squares (20g)',120,2,9,9),
F('rcb','Rice cakes','lightly salted','snacks','2 cakes',70,2,15,0),
];
const byId=Object.fromEntries(foods.map(x=>[x.id,x]));
const E=(foodId,qty=1,si=0)=>({foodId,qty,si});
const diary={
'2026-10-07':{breakfast:[E('yog'),E('ban'),E('gra')],lunch:[E('chk'),E('app')],dinner:[],snacks:[E('alm'),E('hum')]},
'2026-10-06':{breakfast:[E('oat'),E('mlk')],lunch:[E('tur'),E('bry')],dinner:[E('sal'),E('qui'),E('bro')],snacks:[E('bar'),E('cot')]},
'2026-10-05':{breakfast:[E('egg'),E('avt'),E('cof')],lunch:[E('spn'),E('pas')],dinner:[E('chk')],snacks:[E('shk'),E('app')]},
};
const weekKcal=[{d:'thu',v:1850},{d:'fri',v:2120},{d:'sat',v:2280},{d:'sun',v:1720},{d:'mon',v:1980},{d:'tue',v:1890},{d:'wed',v:1240}];
const monthKcal=Array.from({length:30},(_,i)=>({d:String(i+8>30?i-22:i+8),v:Math.round(1900+Math.sin(i*1.7)*230+Math.cos(i*.6)*140)}));monthKcal[29].v=1240;
const weightWeek=[64.9,64.8,64.7,64.7,64.5,64.4,64.2];
const weightMonth=[66.4,66.3,66.1,66.2,65.9,65.8,65.9,65.6,65.5,65.6,65.4,65.3,65.3,65.1,65.0,65.1,64.9,64.9,64.8,64.7,64.8,64.6,64.5,64.6,64.4,64.3,64.4,64.3,64.2,64.2];
window.NUT={foods,byId,diary,weekKcal,monthKcal,weightWeek,weightMonth,
 user:{name:'Brooklyn',first:'Brooklyn',last:'Hayes',age:29,sex:'female',height:168,weight:64.2,startWeight:67,goalWeight:60,goal:'lose',activity:'moderate',kcal:2000,macros:{p:30,c:45,f:25},water:8,streak:12},
 meals:[{key:'breakfast',label:'breakfast',icon:'sun'},{key:'lunch',label:'lunch',icon:'apple'},{key:'dinner',label:'dinner',icon:'moon'},{key:'snacks',label:'snacks',icon:'cookie'}],
 cats:[{key:'breakfast',icon:'egg'},{key:'fruits',icon:'apple'},{key:'vegetables',icon:'carrot'},{key:'grains',icon:'wheat'},{key:'dairy',icon:'milk'},{key:'meat',icon:'drumstick'},{key:'snacks',icon:'cookie'},{key:'drinks',icon:'coffee'}],
 recent:['alm','chk','yog','ban','mlk'],frequent:['cof','egg','app','shk','qui','bro'],favorites:['oat','sal','avt','bry'],
 TODAY:'2026-10-07',
 entryVals(e){const f=byId[e.foodId];const m=f.servings[e.si||0].mult*e.qty;return{name:f.name,serving:(e.qty!==1?e.qty+' × ':'')+f.servings[e.si||0].label,kcal:Math.round(f.kcal*m),p:Math.round(f.p*m),c:Math.round(f.c*m),f:Math.round(f.f*m)};},
};
})();
