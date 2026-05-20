// Easy Shop - Functional Settings Controller (Firefox Native)

// Pure transform: Array of checkboxes -> Config object (uses immutable reducer)
const toConfig = (checkboxes) => 
  checkboxes.reduce((acc, cb) => ({ ...acc, [cb.id]: cb.checked }), {});

// Side-effect: Update DOM checkboxes with saved config
const applyConfig = (checkboxes, config) => 
  checkboxes.forEach(cb => cb.checked = config[cb.id] !== false);

// Side-effect: Send message to the active tab's content script
const notifyActiveTab = (config) => 
  browser.tabs.query({ active: true, currentWindow: true })
    .then(([tab]) => tab?.id && browser.tabs.sendMessage(tab.id, { type: 'UPDATE_CONFIG', config }))
    .catch(() => {}); // Swallows errors if tab is not Amazon (no content script loaded)

// Higher-Order Function: Generates the change handler bound to current checkboxes
const handleChange = (checkboxes) => () => {
  const newConfig = toConfig(checkboxes);
  browser.storage.local.set(newConfig)
    .then(() => notifyActiveTab(newConfig));
};

// Orchestration / Initialization Pipeline
document.addEventListener('DOMContentLoaded', () => {
  const checkboxes = [...document.querySelectorAll('input[type="checkbox"]')];

  browser.storage.local.get()
    .then(config => applyConfig(checkboxes, config))
    .then(() => checkboxes.forEach(cb => cb.addEventListener('change', handleChange(checkboxes))));
});
