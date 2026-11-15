/* Interacties voor de laatst aangeleverde VYN1-ontwerpen. Formulieren verzenden via de bestaande contactbestemming. */
function selectPackage(packageName) {
  const select = document.getElementById('package-select');
  if (select) {
    const option = Array.from(select.options).find(item => item.value === packageName);
    if (option) { select.value = option.value; select.dispatchEvent(new Event('change', {bubbles:true})); }
  }
  document.getElementById('offerte-aanvraag')?.scrollIntoView({behavior:'smooth', block:'start'});
}
(function () {
  const search = document.getElementById('service-search-input');
  if (search) {
    const clear = document.getElementById('service-search-clear');
    const count = document.getElementById('service-count-badge');
    const chips = [...document.querySelectorAll('#service-filter-chips .chip-filter')];
    const items = [...document.querySelectorAll('#service-list-container .service-item')];
    const empty = document.getElementById('service-empty-state');
    const reset = document.getElementById('service-reset-btn');
    let category = 'all';
    function update() {
      const query = search.value.trim().toLocaleLowerCase('nl');
      let visible = 0;
      items.forEach(item => {
        const cats = (item.dataset.category || '').split(/\s+/);
        const matches = (category === 'all' || cats.includes(category)) && item.textContent.toLocaleLowerCase('nl').includes(query);
        item.hidden = !matches;
        item.classList.toggle('hidden', !matches);
        if (matches) visible++;
      });
      if (count) count.textContent = visible + ' / ' + items.length;
      if (clear) clear.classList.toggle('hidden', !search.value);
      if (empty) { empty.hidden = visible !== 0; empty.classList.toggle('hidden', visible !== 0); }
      chips.forEach(chip => {
        const active = chip.dataset.category === category;
        chip.setAttribute('aria-pressed', String(active));
        ['active','bg-primary','text-on-primary','shadow-sm'].forEach(name => chip.classList.toggle(name, active));
        ['bg-surface-container-lowest','text-on-surface-variant','border','border-outline-variant/40'].forEach(name => chip.classList.toggle(name, !active));
      });
    }
    search.addEventListener('input', update);
    clear?.addEventListener('click', () => { search.value = ''; search.focus(); update(); });
    chips.forEach(chip => chip.addEventListener('click', () => { category = chip.dataset.category; update(); }));
    reset?.addEventListener('click', () => { category = 'all'; search.value = ''; update(); search.focus(); });
    update();
  }
  const packages = document.getElementById('packages-view');
  const maintenance = document.getElementById('maintenance-view');
  const packageButton = document.getElementById('toggle-packages');
  const maintenanceButton = document.getElementById('toggle-maintenance');
  if (packages && maintenance && packageButton && maintenanceButton) {
    function show(maint) {
      [[packages,maint],[maintenance,!maint]].forEach(([view,hide]) => { view.hidden = hide; view.classList.toggle('hidden', hide); view.classList.toggle('flex', !hide); });
      [[packageButton,!maint],[maintenanceButton,maint]].forEach(([button,active]) => { button.setAttribute('aria-pressed',String(active)); ['bg-surface','text-on-surface','shadow-sm'].forEach(name=>button.classList.toggle(name,active));button.classList.toggle('text-on-surface-variant',!active); });
    }
    packageButton.addEventListener('click',()=>show(false));
    maintenanceButton.addEventListener('click',()=>show(true));
    show(false);
  }
})();
