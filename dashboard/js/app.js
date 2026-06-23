/* ═══════════════════════════════════════════════════════════════════
   SWIFT ANALYTICS — Entry Point
   Initializes navigation, filters, then renders the landing page.
   ═══════════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  Swift.Nav.init();
  Swift.Filter.init();
  if (Swift.Export) Swift.Export.init();
  Swift.Pages[Swift.State.page].render(Swift.State.filters);
});
