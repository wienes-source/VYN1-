const role = document.getElementById('role');
if (role) {
  const params = new URLSearchParams(location.search);
  const selected = params.get('rol');
  if (['professional', 'opdrachtgever', 'ondernemer'].includes(selected)) role.value = selected;
  const area = params.get('vakgebied');
  const message = document.getElementById('message');
  if (message && ['Finance', 'Digital', 'HR', 'Management'].includes(area) && !message.value) {
    message.value = 'Ik zoek expertise op het gebied van ' + area + '. ';
  }
}
const search = document.getElementById('job-search');
if (search) {
  let filter = 'all';
  const cards = [...document.querySelectorAll('.job-card')];
  const buttons = [...document.querySelectorAll('[data-filter]')];
  function update() {
    let count = 0;
    const query = search.value.trim().toLocaleLowerCase('nl');
    cards.forEach(card => {
      card.hidden = !((filter === 'all' || card.dataset.category === filter) && card.textContent.toLocaleLowerCase('nl').includes(query));
      if (!card.hidden) count++;
    });
    document.getElementById('job-count').textContent = count + ' ' + (count === 1 ? 'voorbeeld' : 'voorbeelden');
    document.getElementById('no-results').hidden = count !== 0;
  }
  search.addEventListener('input', update);
  buttons.forEach(button => button.addEventListener('click', () => {
    filter = button.dataset.filter;
    buttons.forEach(b => b.setAttribute('aria-pressed', String(b === button)));
    update();
  }));
  update();
}

const hireCalculator = document.getElementById('hire-calculator');
if (hireCalculator) {
  const rate = document.getElementById('hourly-rate');
  const hours = document.getElementById('hours-week');
  const months = document.getElementById('months');
  const result = document.getElementById('calculator-result');
  const error = document.getElementById('calculator-error');
  const euro = n => new Intl.NumberFormat('nl-NL',{style:'currency',currency:'EUR'}).format(n);
  function update() {
    const r=Number(rate.value), h=Number(hours.value), m=Number(months.value);
    const valid=rate.value!=='' && hours.value!=='' && months.value!=='' && [r,h,m].every(Number.isFinite) && r>=85 && r<=1000 && Number.isInteger(h) && h>=1 && h<=60 && Number.isInteger(m) && m>=1 && m<=36;
    error.hidden=valid;
    if (!valid) {result.textContent='Vul geldige waarden in om uw indicatie te berekenen.';return;}
    const weekly=Math.round(r*100)*h/100;
    const monthly=weekly*52/12;
    result.innerHTML='<div><span>Per week</span><strong>'+euro(weekly)+'</strong></div><div><span>Gemiddeld per maand</span><strong>'+euro(monthly)+'</strong></div><div><span>Totaal voor '+m+' maanden</span><strong>'+euro(monthly*m)+'</strong></div>';
  }
  [rate,hours,months].forEach(input=>input.addEventListener('input',update));
  hireCalculator.addEventListener('submit',event=>{event.preventDefault();update();});
  update();
}
const packageMessage=document.getElementById('message');
if(packageMessage && new URLSearchParams(location.search).get('pakket')==='starterscombinatie' && !packageMessage.value)packageMessage.value='Ik ontvang graag een voorstel voor de starterscombinatie boekhouding en website.';
