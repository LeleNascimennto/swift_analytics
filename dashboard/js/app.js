/* ═══════════════════════════════════════════════════════════════════
   SWIFT ANALYTICS — Entry Point
   Initializes navigation, filters, then renders the landing page.
   ═══════════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  Swift.Nav.init();
  Swift.Filter.init();
  Swift.Pages[Swift.State.page].render(Swift.State.filters);
});
