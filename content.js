// Easy Shop - Content Script (Firefox Native)
(() => {
  const KEY_CLASS_MAP = {
    blockAds: 'es-block-ads',
    blockMRP: 'es-block-mrp',
    blockDeal: 'es-block-deal',
    blockStats: 'es-block-stats'
  };

  // Apply conditional class names to root <html> element using native toggle
  const applyConfig = (config) => {
    const docEl = document.documentElement;
    if (docEl) {
      Object.entries(KEY_CLASS_MAP).forEach(([key, className]) => {
        docEl.classList.toggle(className, config[key] !== false);
      });
    }
  };

  // Query config on page load (defaults to blocking on failure)
  browser.storage.local.get()
    .then(applyConfig)
    .catch(() => applyConfig({}));

  // Synchronously listen for real-time config updates
  browser.runtime.onMessage.addListener((msg) => {
    if (msg?.type === 'UPDATE_CONFIG') applyConfig(msg.config);
  });
})();
