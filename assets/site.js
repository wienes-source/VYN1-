const role = document.getElementById('role');
if (role) {
  const params = new URLSearchParams(location.search);
  const selected = params.get('rol');
  if (['professional', 'opdrachtgever'].includes(selected)) role.value = selected;
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
