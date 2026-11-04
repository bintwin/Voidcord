(function() {
  if (window.__voidcord_injected) return;
  window.__voidcord_injected = true;

  const vcStyles = `
.vc-nav-group {
  margin-top: 8px;
  padding-top: 8px;
  border-top: 1px solid var(--border, rgba(255, 255, 255, 0.08));
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.vc-nav-tab {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 7px 10px;
  border-radius: 4px;
  font-size: 14.5px;
  font-weight: 500;
  color: var(--text-muted, #949ba4);
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  transition: background-color 0.1s linear, color 0.1s linear;
}
.vc-nav-tab:hover {
  background: var(--bg-hover, rgba(255, 255, 255, 0.05));
  color: var(--text, #dbdee1);
}
.vc-nav-tab.active {
  background: var(--bg-active, #35373c) !important;
  color: var(--text, #fff) !important;
  font-weight: 500;
}
.vc-nav-badge {
  margin-left: auto;
  background: #4e5058;
  color: #fff;
  font-size: 11px;
  font-weight: 600;
  padding: 1px 6px;
  border-radius: 8px;
}
.vc-main-panel {
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: var(--text, #dbdee1);
  font-family: inherit;
  padding-bottom: 40px;
}
.vc-top-title {
  font-size: 20px;
  font-weight: 700;
  color: var(--text, #fff);
  margin: 0 0 10px 0;
}
.vc-banner-box {
  background: var(--bg-elev, #2b2d31);
  border-radius: 8px;
  padding: 14px 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.vc-banner-title {
  font-size: 14.5px;
  font-weight: 700;
  color: var(--text, #fff);
}
.vc-banner-desc {
  font-size: 13px;
  color: var(--text-muted, #949ba4);
  line-height: 1.4;
}
.vc-filters-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 4px;
}
.vc-sec-label {
  font-size: 12px;
  font-weight: 700;
  color: var(--text-muted, #949ba4);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
.vc-filter-inputs {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.vc-search-bar {
  width: 100%;
  box-sizing: border-box;
  background: #1e1f22 !important;
  border: 1px solid rgba(0, 0, 0, 0.2) !important;
  border-radius: 4px !important;
  color: #dbdee1 !important;
  padding: 9px 12px !important;
  font-size: 14px !important;
  outline: none;
}
.vc-search-bar:focus {
  border-color: #5865f2 !important;
}
.vc-filter-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}
.vc-dropdown-select {
  width: 100%;
  box-sizing: border-box;
  background: #1e1f22;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  color: #dbdee1;
  padding: 8px 10px;
  font-size: 13.5px;
  outline: none;
  cursor: pointer;
}
.vc-plugins-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  gap: 12px;
  margin-top: 6px;
}
.vc-p-card {
  background: var(--bg-elev, #2b2d31);
  border-radius: 8px;
  padding: 12px 14px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
  transition: background-color 0.1s ease;
}
.vc-p-card:hover {
  background: #313338;
}
.vc-p-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}
.vc-p-name {
  font-size: 14.5px;
  font-weight: 600;
  color: var(--text, #f2f3f5);
  display: flex;
  align-items: center;
  gap: 8px;
}
.vc-p-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}
.vc-btn-icon {
  background: none;
  border: none;
  color: #949ba4;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.1s, background-color 0.1s;
}
.vc-btn-icon:hover {
  color: #dbdee1;
  background: rgba(255, 255, 255, 0.06);
}
.vc-vencord-switch {
  position: relative;
  width: 38px;
  height: 22px;
  border-radius: 12px;
  background: #4e5058;
  cursor: pointer;
  transition: background-color 0.15s ease;
  flex-shrink: 0;
  display: inline-block;
  user-select: none;
}
.vc-vencord-switch.active {
  background: #eb459e;
}
.vc-vencord-thumb {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #fff;
  transition: transform 0.15s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}
.vc-vencord-switch.active .vc-vencord-thumb {
  transform: translateX(16px);
}
.vc-thumb-icon {
  width: 10px;
  height: 10px;
  color: #4e5058;
  display: block;
}
.vc-vencord-switch.active .vc-thumb-icon {
  color: #eb459e;
}
.vc-p-desc {
  font-size: 12.5px;
  color: var(--text-muted, #949ba4);
  line-height: 1.35;
  margin: 0;
}
.vc-cfg-panel {
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.vc-info-panel {
  margin-top: 10px;
}

.vc-themes-subnav {
  display: flex;
  gap: 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  padding-bottom: 8px;
  margin-bottom: 16px;
}
.vc-subnav-btn {
  background: none;
  border: none;
  color: #949ba4;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  padding: 4px 2px;
  position: relative;
}
.vc-subnav-btn:hover {
  color: #dbdee1;
}
.vc-subnav-btn.active {
  color: #f28b82;
}
.vc-subnav-btn.active::after {
  content: '';
  position: absolute;
  bottom: -9px;
  left: 0;
  right: 0;
  height: 2px;
  background: #f28b82;
  border-radius: 2px;
}
.vc-theme-alert {
  background: rgba(250, 168, 26, 0.08);
  border: 1px solid rgba(250, 168, 26, 0.35);
  border-radius: 8px;
  padding: 14px 16px;
  margin-bottom: 12px;
}
.vc-alert-title {
  font-size: 14px;
  font-weight: 700;
  color: #f0b232;
  margin-bottom: 6px;
}
.vc-alert-text {
  font-size: 13px;
  line-height: 1.45;
  color: #c4a055;
}
.vc-theme-box {
  background: #1e1f22;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 8px;
  padding: 14px 16px;
  margin-bottom: 12px;
}
.vc-box-title {
  font-size: 13.5px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 6px;
}
.vc-box-links {
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin-bottom: 6px;
}
.vc-theme-link {
  color: #f28b82;
  text-decoration: none;
  font-size: 13px;
}
.vc-theme-link:hover {
  text-decoration: underline;
}
.vc-box-hint {
  font-size: 12.5px;
  color: #949ba4;
  line-height: 1.4;
}
.vc-themes-toolbar-row {
  margin-top: 14px;
  margin-bottom: 14px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.vc-themes-header-title {
  font-size: 16px;
  font-weight: 700;
  color: #fff;
}
.vc-themes-actions-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #1e1f22;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 8px;
  padding: 10px 14px;
  flex-wrap: wrap;
}
.vc-theme-action-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #2b2d31;
  color: #dbdee1;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 6px;
  padding: 8px 14px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
}
.vc-theme-action-btn:hover {
  background: #35373c;
  color: #fff;
}
.vc-themes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 14px;
}
.vc-theme-card {
  background: #1e1f22;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.vc-theme-card-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
}
.vc-theme-name {
  font-size: 15px;
  font-weight: 700;
  color: #fff;
}
.vc-theme-author {
  font-size: 12px;
  color: #949ba4;
  margin-top: 2px;
}
.vc-theme-desc {
  font-size: 13px;
  color: #949ba4;
  line-height: 1.45;
  flex: 1;
}
.vc-theme-footer {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  margin-top: 4px;
}
.vc-theme-dot {
  color: #4e5058;
}
.vc-theme-switch {
  width: 40px;
  height: 24px;
  background: #404040;
  border-radius: 12px;
  position: relative;
  cursor: pointer;
  transition: background 0.2s ease;
  flex-shrink: 0;
}
.vc-theme-switch.active {
  background: #d3869b;
}
.vc-theme-thumb {
  width: 18px;
  height: 18px;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  top: 3px;
  left: 3px;
  transition: transform 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}
.vc-theme-switch.active .vc-theme-thumb {
  transform: translateX(16px);
}
.vc-theme-thumb-icon {
  width: 11px;
  height: 11px;
  stroke: #404040;
}
.vc-theme-switch.active .vc-theme-thumb-icon {
  stroke: #000;
}
.vc-quick-modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 999999;
  display: flex;
  align-items: center;
  justify-content: center;
}
.vc-quick-modal {
  width: 90%;
  max-width: 650px;
  background: #1e1f22;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.vc-quick-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.vc-quick-title {
  font-size: 17px;
  font-weight: 700;
  color: #fff;
}
.vc-quick-area {
  width: 100%;
  height: 260px;
  background: #141519;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  color: #e0e0e0;
  font-family: monospace;
  font-size: 13px;
  padding: 10px;
  box-sizing: border-box;
  resize: vertical;
}
.vc-quick-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
}

.vc-msg-deleted {
  background: rgba(242, 63, 67, 0.1) !important;
  border-left: 3px solid #f23f43 !important;
  opacity: 0.95 !important;
  display: flex !important;
  visibility: visible !important;
  transition: background-color 0.15s ease;
}
.vc-msg-deleted:hover {
  background: rgba(242, 63, 67, 0.16) !important;
}
.vc-msg-deleted.grouped {
  margin-top: 0 !important;
  padding-top: 1px !important;
  padding-bottom: 1px !important;
  min-height: 24px !important;
}
.vc-msg-deleted.grouped .msg-head,
.vc-msg-deleted.grouped .avatar,
.vc-msg-deleted.grouped .vc-msg-deleted-badge {
  display: none !important;
}
.vc-msg-deleted.grouped .msg-gutter {
  align-items: center !important;
}
.vc-msg-deleted.grouped .msg-text {
  margin-top: 0 !important;
}
.vc-msg-deleted-text,
.vc-msg-deleted-text * {
  color: #f23f43 !important;
  text-decoration: line-through !important;
}
.vc-msg-deleted-author {
  color: #f23f43 !important;
}
.vc-msg-deleted-badge {
  display: inline-block;
  background: rgba(242, 63, 67, 0.22);
  color: #f23f43 !important;
  font-size: 10px;
  font-weight: 700;
  padding: 1px 6px;
  border-radius: 4px;
  margin-left: 6px;
  text-decoration: none !important;
  vertical-align: middle;
  user-select: none;
}
.vc-msg-deleted .msg-actions,
.vc-msg-deleted .mini-menu,
.vc-msg-deleted .chat-actions,
.vc-msg-deleted .msg-editor-actions,
.vc-msg-deleted [class*="action"],
.vc-msg-deleted [class*="toolbar"] {
  display: none !important;
  opacity: 0 !important;
  pointer-events: none !important;
  visibility: hidden !important;
  width: 0 !important;
  height: 0 !important;
}
.vc-msg-deleted:hover .msg-actions,
.vc-msg-deleted:hover [class*="action"] {
  display: none !important;
}
.vc-edited-stack {
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-bottom: 2px;
}
.vc-edited-prev-line {
  color: var(--text-muted, #949ba4);
  font-size: 13.5px;
  line-height: 1.4;
  opacity: 0.85;
}
.vc-edited-tag {
  color: var(--text-faint, #6d6f78);
  font-size: 10.5px;
  margin-left: 4px;
  user-select: none;
}
.vc-custom-ctx {
  position: fixed;
  z-index: 99999;
  background: var(--bg-rail, #1e1f22);
  border: 1px solid var(--border, rgba(255, 255, 255, 0.08));
  min-width: 190px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
  border-radius: 4px;
  padding: 6px 8px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  animation: vc-menu-pop 0.08s ease-out;
}
@keyframes vc-menu-pop {
  from { opacity: 0; transform: scale(0.96); }
  to { opacity: 1; transform: scale(1); }
}
.vc-custom-ctx button {
  min-height: 32px;
  color: var(--text, #dbdee1);
  border-radius: 2px;
  padding: 6px 8px;
  font-size: 14px;
  font-weight: 500;
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
}
.vc-custom-ctx button:hover {
  background: #5865f2;
  color: #fff;
}
.vc-custom-ctx button.danger {
  color: #f23f43;
}
.vc-custom-ctx button.danger:hover {
  background: #da373c;
  color: #fff;
}
.vc-ctx-item-danger {
  color: #f23f43 !important;
  font-weight: 600;
}
.vc-ctx-item-danger:hover {
  background: #da373c !important;
  color: #fff !important;
}
.vc-plus-badge {
  vertical-align: 1px;
  letter-spacing: 0.06em;
  color: #fff !important;
  background: linear-gradient(135deg, #ff6b4a, #9b59ff) !important;
  border-radius: 4px;
  margin-left: 6px;
  padding: 1px 6px;
  font-size: 10px;
  font-weight: 800;
  display: inline-block;
  user-select: none;
}
.vc-update-banner {
  position: fixed;
  top: 14px;
  right: 18px;
  z-index: 100000;
  display: flex;
  align-items: center;
  gap: 12px;
  background: var(--bg-elev, var(--bg-float, var(--background-floating, var(--background-secondary, #2b2c33))));
  border: 1px solid var(--border, var(--border-light, var(--border-subtle, rgba(255, 255, 255, 0.1))));
  border-radius: var(--radius, 8px);
  padding: 12px 16px;
  box-shadow: var(--shadow, 0 8px 28px rgba(0, 0, 0, 0.65));
  color: var(--text, var(--text-normal, #ffffff));
  font-family: var(--font, inherit);
  font-size: 13px;
  backdrop-filter: blur(var(--blur-amount, 0px));
  cursor: pointer;
  user-select: none;
  transition: transform 0.15s ease, opacity 0.15s ease;
}
.vc-update-banner:hover {
  transform: translateY(-1px);
}
.vc-update-icon {
  width: 22px;
  height: 22px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent, var(--interactive-active, var(--text, #ffffff)));
}
.vc-update-body {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.vc-update-title {
  font-weight: 700;
  color: var(--header-primary, var(--text, #ffffff));
  font-size: 13.5px;
}
.vc-update-text {
  color: var(--text-muted, var(--text-4, #949ba4));
  font-size: 12px;
  line-height: 1.35;
}
.vc-update-dismiss {
  background: transparent;
  border: none;
  color: var(--interactive-normal, var(--text-muted, #80848e));
  cursor: pointer;
  padding: 4px;
  font-size: 14px;
  line-height: 1;
  transition: color 0.15s ease, background 0.15s ease;
  margin-left: 6px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
}
.vc-update-dismiss:hover {
  color: var(--interactive-hover, var(--text, #ffffff));
  background: var(--bg-hover, var(--hover, rgba(255, 255, 255, 0.08)));
}
`;

  let styleTag = document.getElementById('voidcord-clean-css');
  if (!styleTag) {
    styleTag = document.createElement('style');
    styleTag.id = 'voidcord-clean-css';
    styleTag.textContent = vcStyles;
    document.head.appendChild(styleTag);
  }

  const CURRENT_VOIDCORD_VERSION = '1.0.1';
  if (!localStorage.getItem('voidcord_version') || localStorage.getItem('voidcord_version') !== CURRENT_VOIDCORD_VERSION) {
    localStorage.setItem('voidcord_version', CURRENT_VOIDCORD_VERSION);
    localStorage.removeItem('vc_update_available');
  }

  function isUpdateAvailable() {
    const v = localStorage.getItem('voidcord_version');
    if (!v || v !== CURRENT_VOIDCORD_VERSION) return true;
    return localStorage.getItem('vc_update_available') === 'true';
  }

  function showUpdateNotification() {
    if (!isUpdateAvailable()) return;
    if (document.getElementById('vc-update-notification')) return;
    if (sessionStorage.getItem('vc_dismissed_update')) return;

    const banner = document.createElement('div');
    banner.id = 'vc-update-notification';
    banner.className = 'vc-update-banner';
    banner.innerHTML = `
      <div class="vc-update-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 2v10m0 0l3-3m-3 3l-3-3"></path>
          <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"></path>
        </svg>
      </div>
      <div class="vc-update-body">
        <div class="vc-update-title">Voidcord Update Available</div>
        <div class="vc-update-text">Click to update Voidcord and restart Yapper.</div>
      </div>
      <button class="vc-update-dismiss" id="vc-update-dismiss-btn" aria-label="Dismiss">✕</button>
    `;

    const target = document.body || document.documentElement;
    if (target) {
      target.appendChild(banner);
      const dismissBtn = banner.querySelector('#vc-update-dismiss-btn');
      if (dismissBtn) {
        dismissBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          sessionStorage.setItem('vc_dismissed_update', '1');
          banner.remove();
        });
      }

      banner.addEventListener('click', async (e) => {
        if (e.target.closest('#vc-update-dismiss-btn')) return;
        localStorage.setItem('voidcord_version', CURRENT_VOIDCORD_VERSION);
        localStorage.removeItem('vc_update_available');
        const titleEl = banner.querySelector('.vc-update-title');
        const textEl = banner.querySelector('.vc-update-text');
        if (titleEl) titleEl.textContent = 'Updating Voidcord...';
        if (textEl) textEl.textContent = 'Closing Yapper and reapplying injection...';
        banner.style.pointerEvents = 'none';
        banner.style.opacity = '0.85';

        if (window.voidcordDesktop && typeof window.voidcordDesktop.updateAndRestart === 'function') {
          try {
            await window.voidcordDesktop.updateAndRestart();
          } catch (err) {}
        }
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', showUpdateNotification);
  } else {
    showUpdateNotification();
  }
  setTimeout(showUpdateNotification, 1200);

  const STORE_KEY = 'voidcord_prefs_clean';

  const THEMES_KEY = 'voidcord_enabled_themes';
  const QUICK_CSS_KEY = 'voidcord_quick_css';
  const BUILTIN_THEMES = [
    {
      id: 'midnight',
      filename: 'midnight.theme.css',
      name: 'midnight (voidcord)',
      author: 'refact0r',
      description: 'a dark, customizable discord theme. based on https://github.com/nanoqoi/vencord-theme.',
      version: '2.0.1',
      website: 'https://github.com/refact0r/midnight-discord',
      source: 'https://github.com/refact0r/midnight-discord/blob/master/themes/midnight-vencord.theme.css',
      css: "/**\n * @name midnight (voidcord)\n * @description a dark, customizable discord theme. based on https://github.com/nanoqoi/vencord-theme.\n * @author refact0r\n * @version 2.0.1\n * @invite nz87hXyvcy\n * @website https://github.com/refact0r/midnight-discord\n * @source https://github.com/refact0r/midnight-discord/blob/master/themes/midnight-vencord.theme.css\n * @authorId 508863359777505290\n * @authorLink https://www.refact0r.dev\n*/\n\n@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');\n\n@import url('https://refact0r.github.io/midnight-discord/build/midnight.css');\n\nbody {\n    \n    --font: 'Inter';\n\n    --gap: 12px; \n    --divider-thickness: 4px; \n\n    --animations: on; \n    --list-item-transition: 0.2s ease; \n    --dms-icon-svg-transition: 0.4s ease; \n\n    --move-top-bar-buttons: off; \n    --custom-app-top-bar-height: 32px; \n\n    --custom-window-controls: on; \n    --window-control-size: 14px; \n\n    --dms-icon: on; \n    --dms-icon-svg-url: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 27' width='24' height='24'%3E%3Cpath fill='currentColor' d='M0 0h7v1H6v1H5v1H4v1H3v1H2v1h5v1H0V6h1V5h1V4h1V3h1V2h1V1H0m13 2h5v1h-1v1h-1v1h-1v1h3v1h-5V7h1V6h1V5h1V4h-3m8 5h1v5h1v-1h1v1h-1v1h1v-1h1v1h-1v3h-1v1h-2v1h-1v1h1v-1h2v-1h1v2h-1v1h-2v1h-1v-1h-1v1h-6v-1h-1v-1h-1v-2h1v1h2v1h3v1h1v-1h-1v-1h-3v-1h-4v-4h1v-2h1v-1h1v-1h1v2h1v1h1v-1h1v1h-1v1h2v-2h1v-2h1v-1h1M8 14h2v1H9v4h1v2h1v1h1v1h1v1h4v1h-6v-1H5v-1H4v-5h1v-1h1v-2h2m17 3h1v3h-1v1h-1v1h-1v2h-2v-2h2v-1h1v-1h1m1 0h1v3h-1v1h-2v-1h1v-1h1'%3E%3C/path%3E%3C/svg%3E\"); \n    --dms-icon-svg-size: 90%; \n    --dms-icon-color-before: var(--icon-primary); \n    --dms-icon-color-after: var(--white); \n\n    --dms-background: off; \n    --dms-background-image-url: url(''); \n    --dms-background-image-size: cover; \n    --dms-background-color: linear-gradient(70deg, var(--blue-2), var(--purple-2), var(--red-2)); \n\n    --background-image: off; \n    --background-image-url: url(''); \n\n    --transparency-tweaks: off; \n    --remove-bg-layer: off; \n    --panel-blur: off; \n    --blur-amount: 12px; \n    --bg-floating: var(--bg-3); \n\n    --flipped-chatbar: on; \n    --chatbar-height: 47px; \n    --chatbar-padding: 8px; \n\n    --small-user-panel: off; \n}\n\n:root {\n    --colors: on; \n\n    --text-0: var(--bg-4); \n    --text-1: hsl(38, 47%, 90%); \n    --text-2: hsl(38, 47%, 80%); \n    --text-3: #d4be98; \n    --text-4: #a79a83; \n    --text-5: #d4be9866; \n\n    --bg-1: hsl(20, 5%, 25%); \n    --bg-2: #3c3836; \n    --bg-3: hsl(20, 2%, 19%); \n    --bg-4: #282828; \n    --hover: hsla(20, 3%, 40%, 0.1); \n    --active: hsla(20, 3%, 40%, 0.2); \n    --active-2: hsla(20, 3%, 40%, 0.3); \n    --message-hover: hsla(0, 0%, 0%, 0.1); \n\n    --accent-1: var(--purple-1); \n    --accent-2: var(--purple-2); \n    --accent-3: var(--purple-3); \n    --accent-4: var(--purple-4); \n    --accent-5: var(--purple-5); \n    --accent-new: var(--accent-2); \n    --mention: linear-gradient(to right, color-mix(in hsl, var(--accent-2), transparent 90%) 40%, transparent); \n    --mention-hover: linear-gradient(to right, color-mix(in hsl, var(--accent-2), transparent 95%) 40%, transparent); \n    --reply: linear-gradient(to right, color-mix(in hsl, var(--text-3), transparent 90%) 40%, transparent); \n    --reply-hover: linear-gradient(to right, color-mix(in hsl, var(--text-3), transparent 95%) 40%, transparent); \n\n    --online: var(--green-2); \n    --dnd: var(--red-2); \n    --idle: var(--yellow-2); \n    --streaming: var(--purple-2); \n    --offline: var(--text-4); \n\n    --border-light: var(--hover); \n    --border: var(--active); \n    --button-border: hsl(0, 0%, 100%, 0.1); \n\n    --red-1: hsl(3, 76%, 70%);\n    --red-2: #ea6962;\n    --red-3: #ea6962;\n    --red-4: hsl(3, 76%, 60%);\n    --red-5: hsl(3, 76%, 55%);\n\n    --green-1: hsl(70, 36%, 60%);\n    --green-2: #a8b665;\n    --green-3: #a8b665;\n    --green-4: hsl(70, 36%, 50%);\n    --green-5: hsl(70, 36%, 45%);\n\n    --blue-1: hsl(167, 24%, 63%);\n    --blue-2: #7caea3;\n    --blue-3: #7caea3;\n    --blue-4: hsl(167, 24%, 53%);\n    --blue-5: hsl(167, 24%, 48%);\n\n    --yellow-1: hsl(37, 63%, 64%);\n    --yellow-2: #d8a656;\n    --yellow-3: #d8a656;\n    --yellow-4: hsl(37, 63%, 54%);\n    --yellow-5: hsl(37, 63%, 49%);\n\n    --purple-1: hsl(344, 47%, 73%);\n    --purple-2: #d3869b;\n    --purple-3: #d3869b;\n    --purple-4: hsl(344, 47%, 63%);\n    --purple-5: hsl(344, 47%, 58%);\n}\n\n:root {\n  --font: 'Inter', -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif !important;\n\n  --bg-rail: #191716 !important;\n  --bg-side: #1f1d1d !important;\n  --bg-side-solid: #1f1d1d !important;\n  --bg-main: #282828 !important;\n  --bg-elev: #32302f !important;\n  --bg-float: #282828 !important;\n  --bg-input: #3c3836 !important;\n  --bg-hover: rgba(212, 190, 152, 0.08) !important;\n  --bg-active: rgba(212, 190, 152, 0.16) !important;\n  --text: #d4be98 !important;\n  --text-muted: #a79a83 !important;\n  --text-faint: rgba(212, 190, 152, 0.45) !important;\n  --border: rgba(212, 190, 152, 0.12) !important;\n  --accent: #d3869b !important;\n  --accent-hover: #e094a9 !important;\n  --accent-soft: rgba(211, 134, 155, 0.15) !important;\n  --accent-fill: #d3869b !important;\n  --accent-fill-hover: #e094a9 !important;\n  --danger: #ea6962 !important;\n  --success: #a8b665 !important;\n  --warning: #d8a656 !important;\n}\n\nbody, html {\n  font-family: var(--font) !important;\n  background-color: var(--bg-main) !important;\n  color: var(--text) !important;\n}\n\n.channel-row:hover, .seg button:hover, .tab:hover, .rail-item:hover {\n  background-color: var(--bg-hover) !important;\n}\n.channel-row.active, .seg button.active, .tab.active, .rail-item.active {\n  background-color: var(--bg-active) !important;\n  color: #fff !important;\n}\n.chat-input, input, textarea, select {\n  background-color: var(--bg-input) !important;\n  color: var(--text) !important;\n  border-color: var(--border) !important;\n}\n.msg:hover, .chat-row:hover {\n  background-color: rgba(212, 190, 152, 0.03) !important;\n}\n.settings-nav {\n  background-color: var(--bg-side) !important;\n  border-right: 1px solid var(--border) !important;\n}\n.settings-main {\n  background-color: var(--bg-main) !important;\n}\n"
    }
  ];

  let allThemes = [...BUILTIN_THEMES];

  function getEnabledThemes() {
    try {
      const raw = localStorage.getItem(THEMES_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    return [];
  }

  function setEnabledThemes(ids) {
    try {
      localStorage.setItem(THEMES_KEY, JSON.stringify(ids));
    } catch (e) {}
    applyAllEnabledThemes();
  }

  function applyAllEnabledThemes() {
    const enabled = getEnabledThemes();
    document.querySelectorAll('style[id^="vc-theme-"]').forEach(el => {
      const id = el.id.replace('vc-theme-', '');
      if (!enabled.includes(id)) el.remove();
    });
    enabled.forEach(id => {
      const th = allThemes.find(t => t.id === id);
      if (th) {
        let el = document.getElementById('vc-theme-' + th.id);
        if (!el) {
          el = document.createElement('style');
          el.id = 'vc-theme-' + th.id;
          document.head.appendChild(el);
        }
        el.textContent = th.css;
      }
    });
    const qCss = localStorage.getItem(QUICK_CSS_KEY) || '';
    let qEl = document.getElementById('vc-quick-css');
    if (qCss) {
      if (!qEl) {
        qEl = document.createElement('style');
        qEl.id = 'vc-quick-css';
        document.head.appendChild(qEl);
      }
      qEl.textContent = qCss;
    } else if (qEl) {
      qEl.remove();
    }
    const badge = document.querySelector('.vc-themes-badge');
    if (badge) badge.textContent = String(enabled.length);
  }

  async function fetchLocalThemes() {
    if (window.voidcordDesktop?.getThemes) {
      try {
        const fromFs = await window.voidcordDesktop.getThemes();
        if (Array.isArray(fromFs) && fromFs.length > 0) {
          const map = new Map();
          BUILTIN_THEMES.forEach(t => map.set(t.id, t));
          fromFs.forEach(t => map.set(t.id, t));
          allThemes = Array.from(map.values());
        }
      } catch (e) {}
    }
    if (window.voidcordDesktop?.getQuickCss) {
      try {
        const fsQ = await window.voidcordDesktop.getQuickCss();
        if (fsQ && !localStorage.getItem(QUICK_CSS_KEY)) {
          localStorage.setItem(QUICK_CSS_KEY, fsQ);
        }
      } catch (e) {}
    }
    applyAllEnabledThemes();
  }

  applyAllEnabledThemes();
  fetchLocalThemes();

  function loadPrefs() {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && parsed.plugins) {
          delete parsed.plugins['CustomCSS'];
          delete parsed.plugins['ClickSounds'];
          delete parsed.plugins['InfiniteSupercharge'];
          if (parsed.plugins['Plus4f'] === undefined) {
            parsed.plugins['Plus4f'] = true;
          }
        }
        delete parsed.customCssText;
        delete parsed.soundPreset;
        delete parsed.soundVolume;
        delete parsed.customAudioData;
        return parsed;
      }
    } catch (e) {}
    return {
      plugins: {
        'DetailedTimestamps': true,
        'DeveloperTools': true,
        'MessageLogger': true,
        'Plus4f': true
      }
    };
  }

  function savePrefs() {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(appPrefs));
    } catch (e) {}
  }

  const appPrefs = loadPrefs();
  let curTab = null;
  let curSearch = '';
  let curFilter = 'all';
  let curTag = 'all';
  let lastRightClickedNode = null;
  const userMsgRegistry = new Map();
  const deletedMsgSignatures = new Set();
  const confirmedDeletedIds = new Set();
  const confirmedDeletedTexts = new Set();
  const authorHeaderCache = new Map();

  function recordDeletedMessage(id, text) {
    if (id) confirmedDeletedIds.add(String(id));
    if (text && typeof text === 'string' && text.trim().length > 1) {
      confirmedDeletedTexts.add(text.trim());
    }
  }

  function scanObjForDeletes(obj) {
    if (!obj || typeof obj !== 'object') return;
    if (obj.id) recordDeletedMessage(obj.id);
    if (obj.message_id) recordDeletedMessage(obj.message_id);
    if (obj.old_record) scanObjForDeletes(obj.old_record);
    if (obj.record) scanObjForDeletes(obj.record);
    if (obj.old) scanObjForDeletes(obj.old);
    if (obj.payload) scanObjForDeletes(obj.payload);
    if (obj.data) scanObjForDeletes(obj.data);
    const txt = obj.content || obj.text || obj.message;
    if (txt && typeof txt === 'string' && txt.trim().length > 1) {
      confirmedDeletedTexts.add(txt.trim());
    }
  }

  const OrigWebSocket = window.WebSocket;
  if (OrigWebSocket && !window.__vc_ws_hooked) {
    window.__vc_ws_hooked = true;
    window.WebSocket = function(...args) {
      const ws = new OrigWebSocket(...args);
      ws.addEventListener('message', (event) => {
        try {
          if (typeof event.data === 'string' && (event.data.includes('DELETE') || event.data.includes('delete'))) {
            const parsed = JSON.parse(event.data);
            scanObjForDeletes(parsed);
          }
        } catch (err) {}
      });
      return ws;
    };
    window.WebSocket.prototype = OrigWebSocket.prototype;
  }

  const OrigXHR = window.XMLHttpRequest;
  if (OrigXHR && !window.__vc_xhr_hooked) {
    window.__vc_xhr_hooked = true;
    const origOpen = OrigXHR.prototype.open;
    OrigXHR.prototype.open = function(method, url, ...rest) {
      this.__vc_method = method;
      this.__vc_url = url;
      return origOpen.call(this, method, url, ...rest);
    };
    const origSend = OrigXHR.prototype.send;
    OrigXHR.prototype.send = function(body) {
      if (this.__vc_method === 'DELETE' || (typeof this.__vc_url === 'string' && this.__vc_url.includes('/messages'))) {
        const m = String(this.__vc_url).match(/(?:id=eq\.|messages\/)([a-zA-Z0-9_-]+)/);
        if (m && m[1]) recordDeletedMessage(m[1]);
      }
      return origSend.call(this, body);
    };
  }

  const plugRegistry = [
    {
      id: 'DetailedTimestamps',
      name: 'DetailedTimestamps',
      tag: 'Chat',
      desc: 'Shows exact date and full timestamp format on messages.',
      hasSettings: false,
      timer: null,
      start: function() {
        const updateDates = () => {
          document.querySelectorAll('time, [data-timestamp], .msg-time').forEach(tn => {
            if (tn.__vc_date_set) return;
            const raw = tn.getAttribute('datetime') || tn.getAttribute('data-timestamp') || tn.title;
            if (raw) {
              const d = new Date(raw);
              if (!isNaN(d.getTime())) {
                tn.title = d.toLocaleString();
                tn.__vc_date_set = true;
              }
            }
          });
        };
        updateDates();
        this.timer = setInterval(updateDates, 2500);
      },
      stop: function() {
        if (this.timer) clearInterval(this.timer);
      }
    },
    {
      id: 'MessageLogger',
      name: 'MessageLogger',
      tag: 'Chat',
      desc: 'Saves deleted and edited messages so you can still view them in chat.',
      hasSettings: true,
      timer: null,
      start: function() {
        if (this.timer) clearInterval(this.timer);
        this.timer = setInterval(() => {
          if (!appPrefs.plugins['MessageLogger']) return;
          document.querySelectorAll('.msg, .chat-row').forEach(row => {
            if (row.__vc_is_ghost || row.__vc_deleted) return;
            const avEl = row.querySelector('.avatar');
            const authorEl = row.querySelector('.msg-author, .uname');
            const hdEl = row.querySelector('.msg-head');
            if (authorEl && authorEl.textContent.trim()) {
              const aName = authorEl.textContent.trim();
              const oldH = authorHeaderCache.get(aName) || {};
              authorHeaderCache.set(aName, {
                avatarHtml: avEl ? avEl.outerHTML : oldH.avatarHtml,
                headHtml: hdEl ? hdEl.outerHTML : oldH.headHtml
              });
            }

            const textElem = row.querySelector('.msg-text');
            if (!textElem) return;
            const currentText = textElem.innerText.replace(/\(edited\)/g, '').trim();

            if (!row.__vc_orig_text) {
              row.__vc_orig_text = currentText;
              row.__vc_edit_history = [];
              if (authorEl) {
                const authorName = authorEl.textContent.trim();
                const list = userMsgRegistry.get(authorName) || [];
                if (!list.includes(row)) list.push(row);
                userMsgRegistry.set(authorName, list);
              }
            } else if (row.__vc_orig_text !== currentText) {
              if (!row.__vc_edit_history.includes(row.__vc_orig_text)) {
                row.__vc_edit_history.push(row.__vc_orig_text);
              }
              row.__vc_orig_text = currentText;

              let stackBox = row.querySelector('.vc-edited-stack');
              if (!stackBox) {
                stackBox = document.createElement('div');
                stackBox.className = 'vc-edited-stack';
                textElem.parentElement.insertBefore(stackBox, textElem);
              }
              stackBox.innerHTML = '';
              row.__vc_edit_history.forEach(hist => {
                const line = document.createElement('div');
                line.className = 'vc-edited-prev-line';
                line.innerHTML = `<span>${hist}</span><span class="vc-edited-tag">(edited)</span>`;
                stackBox.appendChild(line);
              });

              if (authorEl) {
                const authorName = authorEl.textContent.trim();
                const list = userMsgRegistry.get(authorName) || [];
                if (!list.includes(row)) list.push(row);
                userMsgRegistry.set(authorName, list);
              }
            }
          });
        }, 1000);
      },
      stop: function() {
        if (this.timer) clearInterval(this.timer);
      }
    },
    {
      id: 'CharacterCounter',
      name: 'CharacterCounter',
      tag: 'Chat',
      desc: 'Adds a live character and word counter directly under the chat input.',
      hasSettings: false,
      timer: null,
      start: function() {
        const updateCount = () => {
          const area = document.querySelector('textarea, [contenteditable="true"], .chat-input');
          if (!area) return;
          let c = document.getElementById('vc-char-counter');
          if (!c) {
            c = document.createElement('div');
            c.id = 'vc-char-counter';
            c.style.cssText = 'font-size: 11px; color: #949ba4; padding: 2px 8px; text-align: right; user-select: none; pointer-events: none;';
            if (area.parentElement) area.parentElement.appendChild(c);
          }
          const len = (area.value || area.innerText || '').length;
          c.textContent = len > 0 ? `${len} / 4000` : '';
        };
        this.timer = setInterval(updateCount, 400);
      },
      stop: function() {
        if (this.timer) clearInterval(this.timer);
        const el = document.getElementById('vc-char-counter');
        if (el) el.remove();
      }
    },
    {
      id: 'ClearURLs',
      name: 'ClearURLs',
      tag: 'Privacy',
      desc: 'Automatically removes tracking and telemetry parameters from URLs you send.',
      hasSettings: false,
      handler: null,
      start: function() {
        this.handler = (e) => {
          const text = e.clipboardData?.getData('text/plain');
          if (text && (text.includes('utm_') || text.includes('fbclid') || text.includes('gclid') || text.includes('si='))) {
            try {
              const cleaned = text.replace(/([?&])(utm_[^&=]+|fbclid|gclid|igshid|si|ref_src|ref_url)=[^&#]*/gi, '').replace(/\?&/, '?').replace(/[?&]$/, '');
              if (cleaned !== text) {
                e.preventDefault();
                document.execCommand('insertText', false, cleaned);
              }
            } catch (_) {}
          }
        };
        window.addEventListener('paste', this.handler, true);
      },
      stop: function() {
        if (this.handler) window.removeEventListener('paste', this.handler, true);
      }
    },
    {
      id: 'CopyFileContents',
      name: 'CopyFileContents',
      tag: 'Chat',
      desc: 'Adds a button to text attachments and code snippets to copy their contents.',
      hasSettings: false,
      timer: null,
      start: function() {
        this.timer = setInterval(() => {
          document.querySelectorAll('pre:not([data-vc-copy])').forEach(pre => {
            pre.setAttribute('data-vc-copy', '1');
            pre.style.position = 'relative';
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.textContent = 'Copy';
            btn.style.cssText = 'position: absolute; top: 6px; right: 6px; padding: 2px 8px; border-radius: 4px; background: rgba(0,0,0,0.6); color: #fff; font-size: 11px; border: none; cursor: pointer; opacity: 0.8;';
            btn.onmouseenter = () => { btn.style.opacity = '1'; };
            btn.onmouseleave = () => { btn.style.opacity = '0.8'; };
            btn.onclick = (e) => {
              e.stopPropagation();
              navigator.clipboard.writeText(pre.innerText.replace(/^Copy\n?/, ''));
              btn.textContent = 'Copied!';
              setTimeout(() => { btn.textContent = 'Copy'; }, 1500);
            };
            pre.appendChild(btn);
          });
        }, 1000);
      },
      stop: function() {
        if (this.timer) clearInterval(this.timer);
        document.querySelectorAll('[data-vc-copy] button').forEach(b => {
          if (b.textContent && b.textContent.includes('Copy')) b.remove();
        });
      }
    },
    {
      id: 'CopyEmojiMarkdown',
      name: 'CopyEmojiMarkdown',
      tag: 'Chat',
      desc: 'Allows you to copy emojis as formatted markdown strings (<:name:id>).',
      hasSettings: false,
      start: function() { window.__vc_copy_emoji_md = true; },
      stop: function() { window.__vc_copy_emoji_md = false; }
    },
    {
      id: 'FavoriteEmojiFirst',
      name: 'FavoriteEmojiFirst',
      tag: 'Chat',
      desc: 'Puts your favorite and frequently used emojis first in emoji autocomplete.',
      hasSettings: false,
      start: function() { window.__vc_fav_emoji_first = true; },
      stop: function() { window.__vc_fav_emoji_first = false; }
    },
    {
      id: 'FixCodeblockGap',
      name: 'FixCodeblockGap',
      tag: 'Visual',
      desc: 'Removes the gap between codeblocks and text below it.',
      hasSettings: false,
      start: function() {
        if (document.getElementById('vc-codeblock-gap-css')) return;
        const s = document.createElement('style');
        s.id = 'vc-codeblock-gap-css';
        s.textContent = 'pre, code, [class*="codeBlock"] { margin-top: 2px !important; margin-bottom: 2px !important; }';
        document.head.appendChild(s);
      },
      stop: function() {
        const el = document.getElementById('vc-codeblock-gap-css');
        if (el) el.remove();
      }
    },
    {
      id: 'SilentTyping',
      name: 'SilentTyping',
      tag: 'Privacy',
      desc: 'Prevents typing indicators from broadcasting so others cannot see you typing.',
      hasSettings: false,
      start: function() { window.__vc_silent_typing = true; },
      stop: function() { window.__vc_silent_typing = false; }
    },
    {
      id: 'DontRoundMyTimestamps',
      name: 'DontRoundMyTimestamps',
      tag: 'Chat',
      desc: 'Always rounds relative timestamps down, so 7.6y stays 7.6y instead of 8y.',
      hasSettings: false,
      start: function() { window.__vc_exact_rel_time = true; },
      stop: function() { window.__vc_exact_rel_time = false; }
    },
    {
      id: 'SendTimestamps',
      name: 'SendTimestamps',
      tag: 'Chat',
      desc: 'Converts typed dates into interactive timestamp tags (<t:timestamp:R>).',
      hasSettings: false,
      start: function() { window.__vc_send_timestamps = true; },
      stop: function() { window.__vc_send_timestamps = false; }
    },
    {
      id: 'ExpressionManager',
      name: 'ExpressionManager',
      tag: 'Chat',
      desc: 'Clone emotes & stickers with right-click context menu options to save or edit.',
      hasSettings: false,
      start: function() { window.__vc_expr_mgr = true; },
      stop: function() { window.__vc_expr_mgr = false; }
    },

    {
      id: 'NoTrack',
      name: 'NoTrack',
      tag: 'Privacy',
      desc: 'Disables analytics, telemetry, and tracking endpoints completely.',
      hasSettings: false,
      start: function() { window.__vc_notrack = true; },
      stop: function() { window.__vc_notrack = false; }
    },
    {
      id: 'AlwaysTrust',
      name: 'AlwaysTrust',
      tag: 'Privacy',
      desc: 'Removes the annoying untrusted domain and suspicious file popup warnings.',
      hasSettings: false,
      timer: null,
      start: function() {
        this.timer = setInterval(() => {
          document.querySelectorAll('[class*="modal"] button, [role="dialog"] button').forEach(b => {
            const t = b.textContent?.toLowerCase() || '';
            if (t.includes('trust this domain') || t.includes('continue to link') || t.includes('trust domain')) {
              b.click();
            }
          });
        }, 500);
      },
      stop: function() {
        if (this.timer) clearInterval(this.timer);
      }
    },
    {
      id: 'AnonymiseFileNames',
      name: 'AnonymiseFileNames',
      tag: 'Privacy',
      desc: 'Anonymises uploaded file names before sending to protect personal privacy.',
      hasSettings: false,
      handler: null,
      start: function() {
        this.handler = (e) => {
          if (e.target?.type === 'file' && e.target.files) {
            const dt = new DataTransfer();
            for (let f of e.target.files) {
              const ext = f.name.includes('.') ? '.' + f.name.split('.').pop() : '';
              const rnd = Math.random().toString(36).substring(2, 10);
              const renamed = new File([f], `upload_${rnd}${ext}`, { type: f.type });
              dt.items.add(renamed);
            }
            try { e.target.files = dt.files; } catch (_) {}
          }
        };
        window.addEventListener('change', this.handler, true);
      },
      stop: function() {
        if (this.handler) window.removeEventListener('change', this.handler, true);
      }
    },
    {
      id: 'BlurNSFW',
      name: 'BlurNSFW',
      tag: 'Privacy',
      desc: 'Blurs attachments and media in NSFW channels until hovered with your mouse.',
      hasSettings: false,
      start: function() {
        if (document.getElementById('vc-blur-nsfw-style')) return;
        const s = document.createElement('style');
        s.id = 'vc-blur-nsfw-style';
        s.textContent = '[data-nsfw="true"] img, [data-nsfw="true"] video, .nsfw-media, [class*="nsfw"] img { filter: blur(28px) !important; transition: filter 0.25s ease !important; } [data-nsfw="true"] img:hover, [data-nsfw="true"] video:hover, .nsfw-media:hover, [class*="nsfw"] img:hover { filter: none !important; }';
        document.head.appendChild(s);
      },
      stop: function() {
        const el = document.getElementById('vc-blur-nsfw-style');
        if (el) el.remove();
      }
    },
    {
      id: 'ConsoleJanitor',
      name: 'ConsoleJanitor',
      tag: 'Utility',
      desc: 'Disables annoying console warnings, tracker logs, and telemetry errors.',
      hasSettings: false,
      origWarn: null,
      origErr: null,
      start: function() {
        this.origWarn = console.warn;
        this.origErr = console.error;
        console.warn = (...args) => {
          const s = args.join(' ');
          if (s.includes('telemetry') || s.includes('analytics') || s.includes('Deprecated') || s.includes('WebSocket')) return;
          this.origWarn.apply(console, args);
        };
        console.error = (...args) => {
          const s = args.join(' ');
          if (s.includes('science') || s.includes('metrics') || s.includes('sentry')) return;
          this.origErr.apply(console, args);
        };
      },
      stop: function() {
        if (this.origWarn) console.warn = this.origWarn;
        if (this.origErr) console.error = this.origErr;
      }
    },

    {
      id: 'VolumeBooster',
      name: 'VolumeBooster',
      tag: 'Audio',
      desc: 'Allows boosting audio and video playback volume past 100% up to 200%.',
      hasSettings: false,
      ctx: null,
      start: function() {
        try {
          const AudioCtx = window.AudioContext || window.webkitAudioContext;
          if (!AudioCtx) return;
          this.ctx = new AudioCtx();
          const hookAudio = (el) => {
            if (el.__vc_boosted) return;
            el.__vc_boosted = true;
            try {
              const src = this.ctx.createMediaElementSource(el);
              const gain = this.ctx.createGain();
              gain.gain.value = 1.75;
              src.connect(gain);
              gain.connect(this.ctx.destination);
            } catch (_) {}
          };
          document.querySelectorAll('audio, video').forEach(hookAudio);
        } catch (_) {}
      },
      stop: function() {
        if (this.ctx) {
          try { this.ctx.close(); } catch (_) {}
          this.ctx = null;
        }
      }
    },
    {
      id: 'CallTimer',
      name: 'CallTimer',
      tag: 'Audio',
      desc: 'Adds an active elapsed timer to voice and video calls.',
      hasSettings: false,
      timer: null,
      start: function() {
        let startTime = Date.now();
        this.timer = setInterval(() => {
          const callBox = document.querySelector('.call-container, [class*="voiceCall"], [class*="callWrapper"]');
          if (!callBox) {
            startTime = Date.now();
            const oldT = document.getElementById('vc-call-timer');
            if (oldT) oldT.remove();
            return;
          }
          let tEl = document.getElementById('vc-call-timer');
          if (!tEl) {
            tEl = document.createElement('div');
            tEl.id = 'vc-call-timer';
            tEl.style.cssText = 'display: inline-flex; align-items: center; padding: 2px 8px; border-radius: 4px; background: rgba(0,0,0,0.5); color: #23a55a; font-size: 12px; font-weight: 600; font-family: monospace;';
            callBox.appendChild(tEl);
          }
          const diff = Math.floor((Date.now() - startTime) / 1000);
          const m = String(Math.floor(diff / 60)).padStart(2, '0');
          const s = String(diff % 60).padStart(2, '0');
          tEl.textContent = `${m}:${s}`;
        }, 1000);
      },
      stop: function() {
        if (this.timer) clearInterval(this.timer);
        const el = document.getElementById('vc-call-timer');
        if (el) el.remove();
      }
    },
    {
      id: 'BiggerStreamPreview',
      name: 'BiggerStreamPreview',
      tag: 'Audio',
      desc: 'Enlarges stream previews when hovering over screen shares.',
      hasSettings: false,
      start: function() {
        if (document.getElementById('vc-bigger-stream-preview-css')) return;
        const s = document.createElement('style');
        s.id = 'vc-bigger-stream-preview-css';
        s.textContent = '[class*="streamPreview"] { width: 420px !important; height: auto !important; max-width: 90vw !important; transition: transform 0.2s ease; }';
        document.head.appendChild(s);
      },
      stop: function() {
        const el = document.getElementById('vc-bigger-stream-preview-css');
        if (el) el.remove();
      }
    },
    {
      id: 'DisableCallIdle',
      name: 'DisableCallIdle',
      tag: 'Audio',
      desc: 'Disables automatically getting kicked from a voice call after 3 minutes.',
      hasSettings: false,
      timer: null,
      start: function() {
        this.timer = setInterval(() => {
          if (window.__vc_ws && window.__vc_ws.readyState === 1) {
            try { window.__vc_ws.send(JSON.stringify({ op: 3, d: Date.now() })); } catch (_) {}
          }
        }, 30000);
      },
      stop: function() {
        if (this.timer) clearInterval(this.timer);
      }
    },
    {
      id: 'FixSpotifyEmbeds',
      name: 'FixSpotifyEmbeds',
      tag: 'Audio',
      desc: 'Fixes overly loud Spotify media embeds by letting you set custom volume.',
      hasSettings: false,
      start: function() {
        document.querySelectorAll('iframe[src*="spotify.com"]').forEach(f => {
          try { f.style.maxHeight = '80px'; } catch (_) {}
        });
      },
      stop: function() {}
    },
    {
      id: 'FixYoutubeEmbeds',
      name: 'FixYoutubeEmbeds',
      tag: 'Audio',
      desc: 'Bypasses YouTube videos being blocked from inline display.',
      hasSettings: false,
      start: function() {
        document.querySelectorAll('iframe[src*="youtube.com/embed"]').forEach(f => {
          if (!f.src.includes('youtube-nocookie.com')) {
            f.src = f.src.replace('youtube.com', 'youtube-nocookie.com');
          }
        });
      },
      stop: function() {}
    },

    {
      id: 'Plus4f',
      name: 'Plus4f',
      tag: 'Perks',
      desc: 'Makes all Yapin Plus perks available: 4000 char messages, 100MB uploads, 1080p60 streaming.',
      hasSettings: false,
      start: function() {
        try {
          const sc = JSON.parse(localStorage.getItem('yapper:showcase') || '{}');
          sc.plus = true;
          sc.plus_4000 = true;
          sc.plus_badge = true;
          localStorage.setItem('yapper:showcase', JSON.stringify(sc));
          localStorage.setItem('yapper:sharePreset', '1080p60');
        } catch (e) {}
        if (window.__vc_store) {
          try {
            const cur = window.__vc_store.getState()?.flagOverrides || {};
            window.__vc_store.setState({ flagOverrides: { ...cur, plus: true, plus_4000: true, plus_badge: true } });
          } catch (e) {}
        }
      },
      stop: function() {
        try {
          const sc = JSON.parse(localStorage.getItem('yapper:showcase') || '{}');
          delete sc.plus;
          delete sc.plus_4000;
          delete sc.plus_badge;
          localStorage.setItem('yapper:showcase', JSON.stringify(sc));
        } catch (e) {}
        document.querySelectorAll('.vc-plus-badge').forEach(el => el.remove());
        if (window.__vc_store) {
          try {
            const cur = { ...(window.__vc_store.getState()?.flagOverrides || {}) };
            delete cur.plus;
            delete cur.plus_4000;
            delete cur.plus_badge;
            window.__vc_store.setState({ flagOverrides: cur });
          } catch (e) {}
        }
      }
    },
    {
      id: 'FakeNitro',
      name: 'FakeNitro',
      tag: 'Perks',
      desc: 'Allows sending custom emojis everywhere and unlocks high quality streaming.',
      hasSettings: false,
      start: function() {
        window.__vc_fake_nitro = true;
        try { localStorage.setItem('yapper:sharePreset', '1080p60'); } catch (_) {}
      },
      stop: function() { window.__vc_fake_nitro = false; }
    },
    {
      id: 'ClientTheme',
      name: 'ClientTheme',
      tag: 'Customization',
      desc: 'Custom accent color theme controls and dark theme personalization.',
      hasSettings: false,
      start: function() { window.__vc_client_theme = true; },
      stop: function() { window.__vc_client_theme = false; }
    },
    {
      id: 'FakeProfileThemes',
      name: 'FakeProfileThemes',
      tag: 'Customization',
      desc: 'Allows profile theming with custom banner and accent colors.',
      hasSettings: false,
      start: function() { window.__vc_fake_prof_themes = true; },
      stop: function() { window.__vc_fake_prof_themes = false; }
    },
    {
      id: 'AlwaysAnimate',
      name: 'AlwaysAnimate',
      tag: 'Customization',
      desc: 'Animates server icons, user avatars, and custom emojis continuously.',
      hasSettings: false,
      start: function() {
        if (document.getElementById('vc-always-animate-css')) return;
        const s = document.createElement('style');
        s.id = 'vc-always-animate-css';
        s.textContent = '[class*="avatar"] img, [class*="emoji"], [class*="guildIcon"] img { animation-play-state: running !important; }';
        document.head.appendChild(s);
      },
      stop: function() {
        const el = document.getElementById('vc-always-animate-css');
        if (el) el.remove();
      }
    },
    {
      id: 'ColorSighted',
      name: 'ColorSighted',
      tag: 'Visual',
      desc: 'Restores classic clean status indicators without colorblind symbols.',
      hasSettings: false,
      start: function() {
        if (document.getElementById('vc-color-sighted-css')) return;
        const s = document.createElement('style');
        s.id = 'vc-color-sighted-css';
        s.textContent = '[class*="status"] svg rect { mask: none !important; rx: 50% !important; }';
        document.head.appendChild(s);
      },
      stop: function() {
        const el = document.getElementById('vc-color-sighted-css');
        if (el) el.remove();
      }
    },
    {
      id: 'FixDiscordCss',
      name: 'FixDiscordCss',
      tag: 'Visual',
      desc: 'Removes unnecessary CSS lag, smooths animations, and speeds up rendering.',
      hasSettings: false,
      start: function() {
        if (document.getElementById('vc-fix-css')) return;
        const s = document.createElement('style');
        s.id = 'vc-fix-css';
        s.textContent = '* { scroll-behavior: smooth; } ::-webkit-scrollbar { width: 8px; height: 8px; } ::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.15); border-radius: 4px; }';
        document.head.appendChild(s);
      },
      stop: function() {
        const el = document.getElementById('vc-fix-css');
        if (el) el.remove();
      }
    },
    {
      id: 'FixImagesQuality',
      name: 'FixImagesQuality',
      tag: 'Visual',
      desc: 'Improves quality of images by loading them at their original uncompressed resolution.',
      hasSettings: false,
      timer: null,
      start: function() {
        const upgradeImgs = () => {
          document.querySelectorAll('img[src*="size="]').forEach(img => {
            img.src = img.src.replace(/size=\d+/, 'size=2048');
          });
        };
        upgradeImgs();
        this.timer = setInterval(upgradeImgs, 3000);
      },
      stop: function() {
        if (this.timer) clearInterval(this.timer);
      }
    },

    {
      id: 'BetterUploadButton',
      name: 'BetterUploadButton',
      tag: 'QoL',
      desc: 'Upload attachments with a single click, open menu with right click.',
      hasSettings: false,
      start: function() { window.__vc_better_upload = true; },
      stop: function() { window.__vc_better_upload = false; }
    },
    {
      id: 'BetterSettings',
      name: 'BetterSettings',
      tag: 'QoL',
      desc: 'Enhances your settings menu with quick filter search and smooth navigation.',
      hasSettings: false,
      start: function() { window.__vc_better_settings = true; },
      stop: function() { window.__vc_better_settings = false; }
    },
    {
      id: 'BetterFolders',
      name: 'BetterFolders',
      tag: 'QoL',
      desc: 'Shows server folders in a dedicated drawer with cleaner organization.',
      hasSettings: false,
      start: function() { window.__vc_better_folders = true; },
      stop: function() { window.__vc_better_folders = false; }
    },
    {
      id: 'BetterGifPicker',
      name: 'BetterGifPicker',
      tag: 'QoL',
      desc: 'Makes the GIF picker open your favorite category by default.',
      hasSettings: false,
      start: function() { window.__vc_better_gif_picker = true; },
      stop: function() { window.__vc_better_gif_picker = false; }
    },
    {
      id: 'BetterGifAltText',
      name: 'BetterGifAltText',
      tag: 'QoL',
      desc: 'Changes GIF alt text from simply being GIF to containing the tags and filename.',
      hasSettings: false,
      start: function() { window.__vc_better_gif_alt = true; },
      stop: function() { window.__vc_better_gif_alt = false; }
    },
    {
      id: 'AlwaysExpandRoles',
      name: 'AlwaysExpandRoles',
      tag: 'QoL',
      desc: 'Always expands the role list in profile popouts without clicking show more.',
      hasSettings: false,
      start: function() {
        if (document.getElementById('vc-expand-roles-css')) return;
        const s = document.createElement('style');
        s.id = 'vc-expand-roles-css';
        s.textContent = '[class*="rolesList"], .roles-list { max-height: none !important; overflow: visible !important; } [class*="roleCollapseButton"] { display: none !important; }';
        document.head.appendChild(s);
      },
      stop: function() {
        const el = document.getElementById('vc-expand-roles-css');
        if (el) el.remove();
      }
    },
    {
      id: 'AccountPanelServerProfile',
      name: 'AccountPanelServerProfile',
      tag: 'QoL',
      desc: 'Right click your account panel in the bottom left to view your profile in the current server.',
      hasSettings: false,
      start: function() { window.__vc_acct_panel_srv = true; },
      stop: function() { window.__vc_acct_panel_srv = false; }
    },
    {
      id: 'BetterRoleContext',
      name: 'BetterRoleContext',
      tag: 'QoL',
      desc: 'Adds options to copy role color hex codes, edit roles, or view role icons.',
      hasSettings: false,
      start: function() { window.__vc_role_ctx = true; },
      stop: function() { window.__vc_role_ctx = false; }
    },
    {
      id: 'BetterRoleDot',
      name: 'BetterRoleDot',
      tag: 'QoL',
      desc: 'Displays colored role dots next to usernames according to their top role.',
      hasSettings: false,
      start: function() { window.__vc_role_dot = true; },
      stop: function() { window.__vc_role_dot = false; }
    },
    {
      id: 'ReadAllNotificationsButton',
      name: 'ReadAllNotificationsButton',
      tag: 'QoL',
      desc: 'Adds a one-click button to clear all unread badges across all servers.',
      hasSettings: false,
      timer: null,
      start: function() {
        this.timer = setInterval(() => {
          const list = document.querySelector('nav[aria-label="Servers sidebar"], [class*="guilds"]');
          if (!list || document.getElementById('vc-read-all-btn')) return;
          const b = document.createElement('div');
          b.id = 'vc-read-all-btn';
          b.title = 'Mark All Read';
          b.style.cssText = 'width: 32px; height: 32px; margin: 4px auto; border-radius: 50%; background: #2b2d31; display: flex; align-items: center; justify-content: center; cursor: pointer; color: #dbdee1;';
          b.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>';
          b.onclick = () => {
            document.querySelectorAll('[class*="unread"], .badge').forEach(el => el.remove());
          };
          list.prepend(b);
        }, 1500);
      },
      stop: function() {
        if (this.timer) clearInterval(this.timer);
        const el = document.getElementById('vc-read-all-btn');
        if (el) el.remove();
      }
    },
    {
      id: 'AutoDNDWhilePlaying',
      name: 'AutoDNDWhilePlaying',
      tag: 'QoL',
      desc: 'Automatically sets your status to Do Not Disturb when playing a game.',
      hasSettings: false,
      start: function() { window.__vc_auto_dnd = true; },
      stop: function() { window.__vc_auto_dnd = false; }
    },

    {
      id: 'DeveloperTools',
      name: 'DeveloperTools',
      tag: 'Utility',
      desc: 'Enables F12 and Ctrl+Shift+I to open Electron developer tools.',
      hasSettings: false,
      handler: null,
      start: function() {
        this.handler = (e) => {
          if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
            e.preventDefault();
            if (window.voidcordDesktop?.toggleDevTools) {
              window.voidcordDesktop.toggleDevTools();
            }
          }
        };
        window.addEventListener('keydown', this.handler);
      },
      stop: function() {
        if (this.handler) window.removeEventListener('keydown', this.handler);
      }
    },
    {
      id: 'Experiments',
      name: 'Experiments',
      tag: 'Utility',
      desc: 'Enables access to developer experiments and dev-only feature flags in settings.',
      hasSettings: false,
      start: function() {
        try {
          if (window.__vc_store) {
            const s = window.__vc_store.getState?.() || {};
            if (s.developer) s.developer = true;
          }
        } catch (_) {}
      },
      stop: function() {}
    },
    {
      id: 'F8Break',
      name: 'F8Break',
      tag: 'Utility',
      desc: 'Pause client execution immediately when you press F8 with DevTools open.',
      hasSettings: false,
      handler: null,
      start: function() {
        this.handler = (e) => {
          if (e.key === 'F8') debugger;
        };
        window.addEventListener('keydown', this.handler);
      },
      stop: function() {
        if (this.handler) window.removeEventListener('keydown', this.handler);
      }
    },
    {
      id: 'ConsoleShortcuts',
      name: 'ConsoleShortcuts',
      tag: 'Utility',
      desc: 'Adds shorter aliases on the window console for quick inspection ($chat, $clear).',
      hasSettings: false,
      start: function() {
        window.$chat = () => document.querySelector('.chat-input, textarea');
        window.$clear = () => console.clear();
      },
      stop: function() {
        delete window.$chat;
        delete window.$clear;
      }
    },
    {
      id: 'ReverseImageSearch',
      name: 'ReverseImageSearch',
      tag: 'Utility',
      desc: 'Right click images to quickly search on Google or SauceNAO.',
      hasSettings: false,
      start: function() { window.__vc_rev_img = true; },
      stop: function() { window.__vc_rev_img = false; }
    }
  ];

    let lastUploadPath = '';
  const catboxMap = new Map();
  let origFetch = null;
  let origGUM = null;
  let origGDM = null;
  let origSetParams = null;
  let pasteHandler = null;

  function initNetHooks() {
    if (!origFetch && window.fetch) {
      origFetch = window.fetch;
      window.fetch = async function(...fargs) {
        const reqUrl = typeof fargs[0] === 'string' ? fargs[0] : (fargs[0]?.url || '');
        const reqOpts = fargs[1] || {};
        const reqMethod = (reqOpts.method || (typeof fargs[0] === 'object' && fargs[0]?.method) || 'GET').toUpperCase();

        if (window.__vc_notrack && (reqUrl.includes('/science') || reqUrl.includes('/metrics') || reqUrl.includes('sentry') || reqUrl.includes('amplitude'))) {
          return new Response(JSON.stringify({ ok: true }));
        }
        if (window.__vc_silent_typing && reqUrl.includes('/typing')) {
          return new Response(JSON.stringify({ ok: true }));
        }

        if (reqMethod === 'DELETE' || (typeof reqUrl === 'string' && reqUrl.includes('/messages'))) {
          const idMatch = reqUrl.match(/(?:id=eq\.|messages\/)([a-zA-Z0-9_-]+)/);
          if (idMatch && idMatch[1]) {
            recordDeletedMessage(idMatch[1]);
          }
          try {
            const b = typeof reqOpts.body === 'string' ? JSON.parse(reqOpts.body) : null;
            if (b) scanObjForDeletes(b);
          } catch (e) {}
        }

        if (appPrefs.plugins['Plus4f']) {
          if (reqUrl.includes('/rest/v1/profiles') && reqMethod === 'GET') {
            const profRes = await origFetch.apply(this, fargs);
            if (profRes.ok) {
              try {
                const pData = await profRes.json();
                if (Array.isArray(pData)) {
                  pData.forEach(p => {
                    if (p) {
                      p.plus_until = '2099-01-01T00:00:00Z';
                      p.plus_badge_hidden = false;
                    }
                  });
                  return new Response(JSON.stringify(pData), {
                    status: profRes.status,
                    headers: { 'content-type': 'application/json' }
                  });
                } else if (pData && typeof pData === 'object') {
                  pData.plus_until = '2099-01-01T00:00:00Z';
                  pData.plus_badge_hidden = false;
                  return new Response(JSON.stringify(pData), {
                    status: profRes.status,
                    headers: { 'content-type': 'application/json' }
                  });
                }
              } catch (e) {}
            }
            return profRes;
          }
        }

        if (appPrefs.plugins['Plus4f']) {
          if (reqUrl.includes('/api/media/upload-url') && reqMethod === 'POST') {
            try {
              const bodyObj = typeof reqOpts.body === 'string' ? JSON.parse(reqOpts.body) : null;
              if (bodyObj && bodyObj.path) {
                lastUploadPath = bodyObj.path;
                if (bodyObj.size && bodyObj.size > 10485760) {
                  const spoofed = { ...bodyObj, size: 1048576 };
                  const spoofedOpts = { ...reqOpts, body: JSON.stringify(spoofed) };
                  const spoofedRes = await origFetch.call(this, fargs[0], spoofedOpts);
                  if (spoofedRes.ok) return spoofedRes;
                  return new Response(JSON.stringify({
                    url: 'https://catbox-internal.fallback/upload',
                    headers: {}
                  }), {
                    status: 200,
                    headers: { 'content-type': 'application/json' }
                  });
                }
              }
            } catch (e) {}
          }

          if (reqMethod === 'PUT' && reqOpts.body) {
            if (String(reqUrl).includes('catbox-internal.fallback/upload')) {
              try {
                const fd = new FormData();
                fd.append('reqtype', 'fileupload');
                fd.append('fileToUpload', reqOpts.body);
                const cRes = await origFetch('https://catbox.moe/user/api.php', { method: 'POST', body: fd });
                const cUrl = (await cRes.text()).trim();
                if (cUrl && cUrl.startsWith('http')) {
                  const cleanProto = '//' + cUrl.replace(/^https?:[/][/]/, '');
                  if (lastUploadPath) catboxMap.set(lastUploadPath, cleanProto);
                  return new Response('', { status: 200, statusText: 'OK' });
                }
              } catch (e) {}
            }

            const putRes = await origFetch.apply(this, fargs);
            if (!putRes.ok && (putRes.status === 413 || putRes.status >= 400)) {
              try {
                const fd = new FormData();
                fd.append('reqtype', 'fileupload');
                fd.append('fileToUpload', reqOpts.body);
                const cRes = await origFetch('https://catbox.moe/user/api.php', { method: 'POST', body: fd });
                const cUrl = (await cRes.text()).trim();
                if (cUrl && cUrl.startsWith('http')) {
                  const cleanProto = '//' + cUrl.replace(/^https?:[/][/]/, '');
                  if (lastUploadPath) catboxMap.set(lastUploadPath, cleanProto);
                  return new Response('', { status: 200, statusText: 'OK' });
                }
              } catch (e) {}
            }
            return putRes;
          }

          if (reqUrl.includes('/api/media/scan') && reqMethod === 'POST') {
            return new Response(JSON.stringify({ ok: true, verdict: 'ok' }), {
              status: 200,
              headers: { 'content-type': 'application/json' }
            });
          }

          if (reqUrl.includes('/rest/v1/messages') && reqMethod === 'POST') {
            try {
              let parsedBody = typeof reqOpts.body === 'string' ? JSON.parse(reqOpts.body) : null;
              if (parsedBody) {
                const isArr = Array.isArray(parsedBody);
                let msgRow = isArr ? parsedBody[0] : parsedBody;
                if (msgRow) {
                  if (msgRow.attachment_path && catboxMap.has(msgRow.attachment_path)) {
                    msgRow.attachment_path = catboxMap.get(msgRow.attachment_path);
                    reqOpts.body = JSON.stringify(isArr ? [msgRow] : msgRow);
                  }
                  if (msgRow.content && msgRow.content.length > 2000) {
                    const initSend = await origFetch.call(this, fargs[0], reqOpts);
                    if (initSend.ok) return initSend;
                    const chunkList = [];
                    const fullTxt = msgRow.content;
                    for (let ci = 0; ci < fullTxt.length; ci += 2000) {
                      chunkList.push(fullTxt.slice(ci, ci + 2000));
                    }
                    let firstChunkRes = null;
                    for (let ci = 0; ci < chunkList.length; ci++) {
                      const partRow = {
                        ...msgRow,
                        id: ci === 0 ? msgRow.id : crypto.randomUUID(),
                        content: chunkList[ci]
                      };
                      const partOpts = { ...reqOpts, body: JSON.stringify(isArr ? [partRow] : partRow) };
                      const partRes = await origFetch.call(this, fargs[0], partOpts);
                      if (ci === 0) firstChunkRes = partRes;
                      await new Promise(rk => setTimeout(rk, 180));
                    }
                    return firstChunkRes || initSend;
                  }
                }
              }
            } catch (e) {}
          }
        }

        return origFetch.apply(this, fargs);
      };
    }

    if (!origGUM && navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      origGUM = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
      navigator.mediaDevices.getUserMedia = async function(c) {
        if ((appPrefs.plugins['Plus4f']) && c && c.video) {
          if (typeof c.video === 'object') {
            if (c.video.mandatory) {
              c.video.mandatory.maxFrameRate = 60;
              c.video.mandatory.minFrameRate = 60;
              c.video.maxWidth = 1920;
              c.video.maxHeight = 1080;
            }
            c.video.frameRate = { ideal: 60, max: 60 };
            c.video.width = { ideal: 1920, max: 1920 };
            c.video.height = { ideal: 1080, max: 1080 };
          }
        }
        const str = await origGUM(c);
        if ((appPrefs.plugins['Plus4f']) && str) {
          str.getVideoTracks().forEach(vTr => {
            try {
              vTr.applyConstraints({ frameRate: 60, width: 1920, height: 1080 }).catch(() => {});
            } catch (e) {}
          });
        }
        return str;
      };
    }

    if (!origGDM && navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia) {
      origGDM = navigator.mediaDevices.getDisplayMedia.bind(navigator.mediaDevices);
      navigator.mediaDevices.getDisplayMedia = async function(c) {
        if (appPrefs.plugins['Plus4f']) {
          c = c || {};
          if (!c.video || typeof c.video === 'boolean') c.video = {};
          c.video.width = { ideal: 1920, max: 1920 };
          c.video.height = { ideal: 1080, max: 1080 };
          c.video.frameRate = { ideal: 60, max: 60 };
        }
        const str = await origGDM(c);
        if ((appPrefs.plugins['Plus4f']) && str) {
          str.getVideoTracks().forEach(vTr => {
            try {
              vTr.applyConstraints({ frameRate: 60, width: 1920, height: 1080 }).catch(() => {});
            } catch (e) {}
          });
        }
        return str;
      };
    }

    if (!origSetParams && window.RTCRtpSender && window.RTCRtpSender.prototype.setParameters) {
      origSetParams = window.RTCRtpSender.prototype.setParameters;
      window.RTCRtpSender.prototype.setParameters = async function(params, ...rest) {
        if ((appPrefs.plugins['Plus4f']) && params && params.encodings) {
          params.encodings.forEach(enc => {
            if (enc) {
              enc.maxFramerate = 60;
              if (enc.maxBitrate && enc.maxBitrate < 7000000) enc.maxBitrate = 7000000;
            }
          });
        }
        return origSetParams.call(this, params, ...rest);
      };
    }

    if (!pasteHandler) {
      pasteHandler = function(ev) {
        if (!appPrefs.plugins['Plus4f']) return;
        const target = ev.target;
        if (!target || target.tagName !== 'TEXTAREA') return;
        const pasted = ev.clipboardData ? ev.clipboardData.getData('text/plain') : '';
        if (pasted && pasted.length > 2000) {
          ev.stopImmediatePropagation();
          ev.preventDefault();
          const start = target.selectionStart || 0;
          const end = target.selectionEnd || 0;
          const val = target.value || '';
          const nextVal = val.slice(0, start) + pasted + val.slice(end);
          target.value = nextVal.slice(0, 4000);
          const newPos = Math.min(4000, start + pasted.length);
          target.setSelectionRange(newPos, newPos);
          target.dispatchEvent(new Event('input', { bubbles: true }));
        }
      };
      window.addEventListener('paste', pasteHandler, true);
    }
  }

  initNetHooks();

  const syncStoreState = (stRef) => {
    try {
      const s = stRef.getState();
      if (!s) return;
      const uid = s.userId;
      const curOv = s.flagOverrides || {};
      let dirty = false;
      let nextOv = { ...curOv };

      if (appPrefs.plugins['Plus4f']) {
        if (!nextOv.plus || !nextOv.plus_4000 || !nextOv.plus_badge) {
          nextOv.plus = true;
          nextOv.plus_4000 = true;
          nextOv.plus_badge = true;
          dirty = true;
        }
      }
      delete nextOv.supercharge;
      delete nextOv.server_banner;

      const curP = { ...(s.profiles || {}) };
      if (appPrefs.plugins['Plus4f'] && uid) {
        if (!curP[uid]?.plus_until || curP[uid].plus_until !== '2099-01-01T00:00:00Z' || curP[uid].plus_badge_hidden) {
          curP[uid] = { ...(curP[uid] || {}), plus_until: '2099-01-01T00:00:00Z', plus_badge_hidden: false };
          dirty = true;
        }
      }

      if (dirty) {
        stRef.setState({
          flagOverrides: nextOv,
          profiles: curP
        });
      }
    } catch (e) {}
  };

  const findStoreInTree = () => {
    const candidates = document.querySelectorAll('#__next, .app, .user-bar, .channels, .server-list, .chat-view, nav, div');
    for (let idx = 0; idx < candidates.length; idx++) {
      const el = candidates[idx];
      const fiberKey = Object.keys(el).find(k => k.startsWith('__reactFiber$'));
      if (!fiberKey) continue;
      let curr = el[fiberKey];
      const visited = new Set();
      const queue = [curr];
      let steps = 0;
      while (queue.length > 0 && steps++ < 200) {
        const f = queue.shift();
        if (!f || visited.has(f)) continue;
        visited.add(f);
        let s = f.memoizedState;
        while (s) {
          if (s.memoizedState && typeof s.memoizedState === 'object') {
            const cand = s.memoizedState;
            if (typeof cand.getState === 'function' && typeof cand.setState === 'function') {
              const st = cand.getState();
              if (st && st.profiles !== undefined && st.channels !== undefined) {
                return cand;
              }
            }
          }
          if (Array.isArray(s.memoizedState) && s.memoizedState[1] && Array.isArray(s.memoizedState[1])) {
            for (let dep of s.memoizedState[1]) {
              if (dep && typeof dep.getState === 'function' && typeof dep.setState === 'function') {
                const st = dep.getState();
                if (st && st.profiles !== undefined && st.channels !== undefined) {
                  return dep;
                }
              }
            }
          }
          s = s.next;
        }
        if (f.child) queue.push(f.child);
        if (f.sibling) queue.push(f.sibling);
      }
    }
    return null;
  };

  const applyActivePerks = () => {
    if (!window.__vc_store) {
      window.__vc_store = findStoreInTree();
    }

    if (window.__vc_store) {
      syncStoreState(window.__vc_store);
      if (!window.__vc_store_subscribed && typeof window.__vc_store.subscribe === 'function') {
        window.__vc_store_subscribed = true;
        window.__vc_store.subscribe(() => {
          if (window.__vc_store) {
            syncStoreState(window.__vc_store);
          }
        });
      }
    }

    try {
      const sc = JSON.parse(localStorage.getItem('yapper:showcase') || '{}');
      if (appPrefs.plugins['Plus4f']) {
        sc.plus = true;
        sc.plus_4000 = true;
        sc.plus_badge = true;
      }
      delete sc.supercharge;
      delete sc.server_banner;
      localStorage.setItem('yapper:showcase', JSON.stringify(sc));
    } catch (e) {}

    document.querySelectorAll('textarea').forEach(ta => {
      if (appPrefs.plugins['Plus4f']) {
        if (ta.maxLength && ta.maxLength < 4000) ta.maxLength = 4000;
        const ml = parseInt(ta.getAttribute('maxlength') || '0', 10);
        if (ml && ml < 4000) ta.setAttribute('maxlength', '4000');
      }
    });

    if (appPrefs.plugins['Plus4f']) {
      const userBarWho = document.querySelector('.user-bar .who');
      if (userBarWho && !userBarWho.querySelector('.plus-badge')) {
        const b = document.createElement('span');
        b.className = 'plus-badge vc-plus-badge';
        b.textContent = 'PLUS';
        userBarWho.appendChild(b);
      }
    }
  };

  applyActivePerks();
  setInterval(applyActivePerks, 1200);

  function runActivePlugins() {
    plugRegistry.forEach(p => {
      if (appPrefs.plugins[p.id] && typeof p.start === 'function') {
        try { p.start(); } catch (e) {}
      }
    });
  }
  runActivePlugins();

  let activeChannelPath = window.location.pathname + window.location.search + window.location.hash;
  let navigationLockUntil = 0;

  function onNavigationChange() {
    navigationLockUntil = Date.now() + 1500;
    activeChannelPath = window.location.pathname + window.location.search + window.location.hash;
    document.querySelectorAll('.vc-msg-deleted').forEach(ghost => {
      ghost.__vc_purged = true;
      ghost.remove();
    });
  }

  window.addEventListener('popstate', onNavigationChange);
  const rawPushState = history.pushState;
  if (rawPushState) {
    history.pushState = function(...args) {
      onNavigationChange();
      return rawPushState.apply(this, args);
    };
  }
  const rawReplaceState = history.replaceState;
  if (rawReplaceState) {
    history.replaceState = function(...args) {
      onNavigationChange();
      return rawReplaceState.apply(this, args);
    };
  }
  document.addEventListener('click', (e) => {
    if (e.target.closest?.('.channel-row, .channel-item, .server-icon, .server-item, .rail-item, a[href*="/channels/"], a[href*="/servers/"]')) {
      onNavigationChange();
    }
  }, true);

  let isScrolling = false;
  let scrollTimer = null;
  let lastScrollTime = 0;
  function markScrolling() {
    isScrolling = true;
    lastScrollTime = Date.now();
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
      isScrolling = false;
    }, 400);
  }
  window.addEventListener('scroll', markScrolling, { capture: true, passive: true });
  window.addEventListener('wheel', markScrolling, { capture: true, passive: true });
  window.addEventListener('touchmove', markScrolling, { capture: true, passive: true });
  window.addEventListener('keydown', (e) => {
    if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '].includes(e.key)) {
      markScrolling();
    }
  }, { capture: true, passive: true });

  function copyReactTree(source, target) {
    if (!source || !target) return;
    for (const k of Object.keys(source)) {
      if (k.startsWith('__reactFiber$') || k.startsWith('__reactProps$') || k.startsWith('__reactEvents$')) {
        try { target[k] = source[k]; } catch (e) {}
      }
    }
    const sKids = source.children;
    const tKids = target.children;
    if (sKids && tKids) {
      const len = Math.min(sKids.length, tKids.length);
      for (let i = 0; i < len; i++) {
        copyReactTree(sKids[i], tKids[i]);
      }
    }
  }

  function findRowTime(row) {
    if (!row) return '';
    const tEl = row.querySelector('.msg-time, time');
    if (tEl && tEl.textContent.trim()) return tEl.textContent.trim();
    let prev = row.previousElementSibling;
    while (prev) {
      if (prev.matches?.('.msg, .chat-row')) {
        const pt = prev.querySelector('.msg-time, time');
        if (pt && pt.textContent.trim()) return pt.textContent.trim();
      }
      prev = prev.previousElementSibling;
    }
    return '';
  }

  function reconcileMessageGroups() {
    const seenDates = new Set();
    document.querySelectorAll('.day-divider, [class*="day-divider"]').forEach(divider => {
      const dateText = divider.textContent.trim();
      if (!dateText) return;
      if (seenDates.has(dateText)) {
        divider.remove();
        return;
      }
      seenDates.add(dateText);

      let prev = divider.previousElementSibling;
      while (prev && !prev.matches?.('.msg, .chat-row')) prev = prev.previousElementSibling;
      let next = divider.nextElementSibling;
      while (next && !next.matches?.('.msg, .chat-row')) next = next.nextElementSibling;
      if (prev && next) {
        const pAuthor = findRowAuthor(prev);
        const nAuthor = findRowAuthor(next);
        if (pAuthor && nAuthor && pAuthor === nAuthor) {
          const pHeadTime = prev.querySelector('.msg-head .msg-time, .msg-head time')?.textContent.trim() || findRowTime(prev);
          const nHeadTime = next.querySelector('.msg-head .msg-time, .msg-head time')?.textContent.trim();
          if (!nHeadTime || nHeadTime === pHeadTime) {
            divider.remove();
          }
        }
      }
    });

    const allRows = document.querySelectorAll('.msg, .chat-row');
    for (let i = 1; i < allRows.length; i++) {
      const prev = allRows[i - 1];
      const cur = allRows[i];

      let sib = prev.nextElementSibling;
      while (sib && !sib.matches?.('.msg, .chat-row')) {
        if (sib.matches?.('.day-divider, [class*="day-divider"]')) break;
        sib = sib.nextElementSibling;
      }
      if (sib !== cur) continue;

      const pAuthor = findRowAuthor(prev);
      const cAuthor = findRowAuthor(cur);
      if (!pAuthor || !cAuthor || pAuthor !== cAuthor) continue;

      const pTime = prev.querySelector('.msg-head .msg-time, .msg-head time')?.textContent.trim() || findRowTime(prev);
      const curHead = cur.querySelector('.msg-head');
      const curTimeEl = curHead?.querySelector('.msg-time, time');
      const cTime = curTimeEl ? curTimeEl.textContent.trim() : '';

      if (cTime && pTime && cTime !== pTime) continue;

      if (!cTime || (pTime && cTime === pTime)) {
        cur.classList.add('grouped');
        cur.querySelectorAll('.avatar, .msg-head, .vc-msg-deleted-badge').forEach(el => el.remove());

        let gutter = cur.querySelector('.msg-gutter');
        if (!gutter) {
          gutter = document.createElement('div');
          gutter.className = 'msg-gutter';
          cur.insertBefore(gutter, cur.firstChild);
        }
        gutter.querySelectorAll('.avatar').forEach(a => a.remove());

        if (!gutter.querySelector('.msg-hover-time') && pTime) {
          const ht = document.createElement('span');
          ht.className = 'msg-hover-time';
          ht.textContent = pTime.replace(/Today at\s*/i, '').replace(/Yesterday at\s*/i, '').trim();
          gutter.appendChild(ht);
        }
      }
    }
  }

  const msgRemovalsObserver = new MutationObserver((mutList) => {
    if (!appPrefs.plugins['MessageLogger']) return;
    if (Date.now() < navigationLockUntil) return;

    const currentPath = window.location.pathname + window.location.search + window.location.hash;
    if (currentPath !== activeChannelPath) {
      onNavigationChange();
      return;
    }

    for (const mut of mutList) {
      if (!document.contains(mut.target)) continue;
      if (!mut.removedNodes || mut.removedNodes.length === 0) continue;
      if (mut.removedNodes.length > 2) continue;

      const chatTarget = mut.target.closest?.('.messages, .messages-inner, .chat-messages');
      if (!chatTarget) continue;
      if (mut.target.children.length === 0) continue;

      for (const remNode of mut.removedNodes) {
        if (remNode.nodeType !== 1) continue;
        if (remNode.__vc_purged || remNode.__vc_is_ghost || remNode.__vc_deleted) continue;
        if (remNode.querySelector?.('.chat-start, .channel-row, .server-list, .settings-main, .side-panel')) continue;

        let msgRow = null;
        if (remNode.matches?.('.msg, .chat-row')) {
          msgRow = remNode;
        } else if (remNode.querySelector) {
          msgRow = remNode.querySelector('.msg, .chat-row');
        }
        if (!msgRow) continue;

        const textNode = msgRow.querySelector?.('.msg-text');
        const mediaNode = msgRow.querySelector?.('.media, .embed, img, video, [class*="attachment"]');
        if (!textNode && !mediaNode) continue;

        const msgId = msgRow.getAttribute?.('data-message-id') || remNode.getAttribute?.('data-block') || remNode.dataset?.block || '';
        if (msgId && chatTarget.querySelector(`[data-message-id="${msgId}"]`)) continue;

        const mText = textNode ? textNode.innerText.replace(/\(edited\)/g, '').trim() : '';
        const isConfirmed = (msgId && confirmedDeletedIds.has(String(msgId))) || (mText && confirmedDeletedTexts.has(mText));
        if (!isConfirmed) {
          continue;
        }

        let mAuthor = findRowAuthor(msgRow);
        let mTime = findRowTime(msgRow) || '';

        if (!mAuthor && mut.previousSibling) {
          let ps = mut.previousSibling;
          while (ps) {
            if (ps.nodeType === 1) {
              const a = ps.querySelector?.('.msg-author, .uname') || (ps.matches?.('.msg-author, .uname') ? ps : null);
              if (a && a.textContent.trim()) {
                mAuthor = a.textContent.trim();
                break;
              }
            }
            ps = ps.previousElementSibling;
          }
        }
        if (!mAuthor) {
          const cachedKeys = Array.from(authorHeaderCache.keys());
          if (cachedKeys.length > 0) mAuthor = cachedKeys[cachedKeys.length - 1];
        }

        const sig = msgId ? ('id:' + msgId) : (mAuthor + '|' + mTime + '|' + mText);
        if (deletedMsgSignatures.has(sig)) continue;
        deletedMsgSignatures.add(sig);
        setTimeout(() => deletedMsgSignatures.delete(sig), 8000);

        if (remNode.matches?.('.day-divider, .chat-divider, .divider, [class*="day-divider"]')) continue;

        const origHadHeader = !!(msgRow.querySelector?.('.msg-head') || msgRow.querySelector?.('.avatar'));
        let wasGrouped = !origHadHeader;

        const targetEl = mut.target;
        const nextEl = (mut.nextSibling && targetEl.contains(mut.nextSibling)) ? mut.nextSibling : null;
        const prevNode = (mut.previousSibling && targetEl.contains(mut.previousSibling)) ? mut.previousSibling : null;

        const ghost = remNode.cloneNode(true);
        copyReactTree(remNode, ghost);

        ghost.__vc_is_ghost = true;
        ghost.__vc_deleted = true;
        ghost.__vc_sig = sig;
        ghost.__vc_channel = activeChannelPath;
        ghost.__vc_msg_id = msgId;

        ghost.querySelectorAll('.day-divider, .chat-divider, .divider, [class*="day-divider"], [class*="date-separator"]').forEach(el => el.remove());

        const ghostRow = ghost.matches?.('.msg, .chat-row') ? ghost : (ghost.querySelector?.('.msg, .chat-row') || ghost);
        ghost.querySelectorAll('.msg-actions, .mini-menu, .chat-actions, .msg-editor-actions, [class*="action"], [class*="hover-bar"], [class*="toolbar"]').forEach(el => el.remove());

        const ghostText = ghostRow.querySelector('.msg-text');
        if (ghostText) {
          ghostText.classList.add('vc-msg-deleted-text');
          ghostText.querySelectorAll('.vc-msg-deleted-badge').forEach(b => b.remove());
        }

        let body = ghostRow.querySelector('.msg-body');
        if (!body) {
          body = document.createElement('div');
          body.className = 'msg-body';
          ghostRow.appendChild(body);
        }

        const repBtn = ghost.querySelector('.reply-preview');
        if (repBtn) {
          const origRep = remNode.querySelector('.reply-preview');
          const repSnippet = repBtn.querySelector('.reply-text')?.textContent.trim() || '';
          const repId = repBtn.getAttribute('data-reply-id') || repBtn.getAttribute('data-message-id') || remNode.getAttribute('data-reply-to') || '';

          repBtn.style.cursor = 'pointer';
          repBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (origRep) {
              const k = Object.keys(origRep).find(p => p.startsWith('__reactProps$'));
              if (k && origRep[k]?.onClick) {
                try { origRep[k].onClick(e); return; } catch (err) {}
              }
            }

            if (repId) {
              const match = document.querySelector(`[data-message-id="${repId}"]`);
              if (match) {
                match.scrollIntoView({ behavior: 'smooth', block: 'center' });
                match.style.transition = 'background-color 0.25s ease';
                const old = match.style.backgroundColor;
                match.style.backgroundColor = 'rgba(88, 101, 242, 0.25)';
                setTimeout(() => { match.style.backgroundColor = old; }, 1500);
                return;
              }
            }

            if (repSnippet) {
              const all = document.querySelectorAll('.msg, .chat-row');
              for (const m of all) {
                if (m === ghost || ghost.contains(m)) continue;
                const txt = m.querySelector('.msg-text')?.textContent.trim() || '';
                if (txt && txt.includes(repSnippet)) {
                  m.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  m.style.transition = 'background-color 0.25s ease';
                  const old = m.style.backgroundColor;
                  m.style.backgroundColor = 'rgba(88, 101, 242, 0.25)';
                  setTimeout(() => { m.style.backgroundColor = old; }, 1500);
                  return;
                }
              }
            }
          });
        }

        if (wasGrouped) {
          ghostRow.classList.add('vc-msg-deleted', 'grouped');
          ghostRow.classList.remove('menu-open', 'editing', 'has-focus', 'open');
          delete ghostRow.dataset.fx;

          ghostRow.querySelectorAll('.avatar, .msg-head, .vc-msg-deleted-badge').forEach(el => el.remove());

          let gutter = ghostRow.querySelector('.msg-gutter');
          if (!gutter) {
            gutter = document.createElement('div');
            gutter.className = 'msg-gutter';
            ghostRow.insertBefore(gutter, ghostRow.firstChild);
          }
          gutter.querySelectorAll('.avatar').forEach(a => a.remove());

          if (!gutter.querySelector('.msg-hover-time') && mTime) {
            const ht = document.createElement('span');
            ht.className = 'msg-hover-time';
            ht.textContent = mTime.replace(/Today at\s*/i, '').trim();
            gutter.appendChild(ht);
          }
        } else {
          ghostRow.classList.add('vc-msg-deleted');
          ghostRow.classList.remove('grouped', 'menu-open', 'editing', 'has-focus', 'open');
          delete ghostRow.dataset.fx;

          let gutter = ghostRow.querySelector('.msg-gutter');
          if (!gutter) {
            gutter = document.createElement('div');
            gutter.className = 'msg-gutter';
            ghostRow.insertBefore(gutter, ghostRow.firstChild);
          }
          const hoverTime = gutter.querySelector('.msg-hover-time');
          if (hoverTime) {
            if (!mTime) mTime = hoverTime.textContent.trim();
            hoverTime.remove();
          }

          if (!gutter.querySelector('.avatar')) {
            let avHtml = authorHeaderCache.get(mAuthor)?.avatarHtml;
            if (!avHtml && mut.target) {
              const prevAv = Array.from(mut.target.querySelectorAll('.avatar')).pop();
              if (prevAv) avHtml = prevAv.outerHTML;
            }
            if (avHtml) {
              const dummyDiv = document.createElement('div');
              dummyDiv.innerHTML = avHtml;
              if (dummyDiv.firstElementChild) gutter.appendChild(dummyDiv.firstElementChild);
            } else {
              const fallbackAv = document.createElement('div');
              fallbackAv.className = 'avatar';
              fallbackAv.style.cssText = 'width: 34px; height: 34px; border-radius: 50%; background: #5865f2; display: flex; align-items: center; justify-content: center; color: #fff; font-weight: 700;';
              fallbackAv.textContent = (mAuthor || 'U').charAt(0).toUpperCase();
              gutter.appendChild(fallbackAv);
            }
          }

          let head = ghostRow.querySelector('.msg-head');
          if (!head) {
            let headHtml = authorHeaderCache.get(mAuthor)?.headHtml;
            if (headHtml) {
              const dummyDiv = document.createElement('div');
              dummyDiv.innerHTML = headHtml;
              head = dummyDiv.firstElementChild;
              const tNode = head.querySelector('.msg-time, time');
              if (tNode && mTime) tNode.textContent = mTime;
            } else {
              head = document.createElement('div');
              head.className = 'msg-head';
              head.innerHTML = `<span class="msg-author">${mAuthor || 'User'}</span><span class="msg-time">${mTime || ''}</span>`;
            }
            body.insertBefore(head, ghostText || body.firstChild);
          }

          const authorInGhost = ghostRow.querySelector('.msg-author, .uname');
          if (authorInGhost) {
            authorInGhost.classList.add('vc-msg-deleted-author');
          }

          if (head && !head.querySelector('.vc-msg-deleted-badge')) {
            const badge = document.createElement('span');
            badge.className = 'vc-msg-deleted-badge';
            badge.textContent = 'deleted';
            head.appendChild(badge);
          }
        }

        if (mAuthor) {
          const list = userMsgRegistry.get(mAuthor) || [];
          list.push(ghost);
          userMsgRegistry.set(mAuthor, list);
        }

        setTimeout(() => {
          if (!document.contains(targetEl)) return;
          if (Date.now() < navigationLockUntil) return;
          const nowPath = window.location.pathname + window.location.search + window.location.hash;
          if (nowPath !== activeChannelPath) return;
          if (document.contains(ghost)) return;
          try {
            if (nextEl && targetEl.contains(nextEl)) {
              targetEl.insertBefore(ghost, nextEl);
            } else if (prevNode && targetEl.contains(prevNode)) {
              targetEl.insertBefore(ghost, prevNode.nextSibling);
            } else {
              targetEl.appendChild(ghost);
            }
            reconcileMessageGroups();
          } catch (e) {}
        }, 0);
        document.querySelectorAll('.msg.menu-open, .msg-actions.open').forEach(el => {
          el.classList.remove('menu-open', 'open');
          if (el.classList.contains('msg-actions') && !el.closest('.msg:hover')) {
            el.style.display = 'none';
          }
        });
      }
    }
  });

  msgRemovalsObserver.observe(document.documentElement, {
    childList: true,
    subtree: true
  });

  setInterval(() => {
    if (!appPrefs.plugins['MessageLogger']) return;
    reconcileMessageGroups();
    const ghosts = document.querySelectorAll('.vc-msg-deleted');
    if (ghosts.length === 0) return;
    const mountedIds = new Set();
    document.querySelectorAll('.msg:not(.vc-msg-deleted)[data-message-id], .chat-row:not(.vc-msg-deleted)[data-message-id]').forEach(el => {
      const id = el.getAttribute('data-message-id');
      if (id) mountedIds.add(id);
    });
    ghosts.forEach(ghost => {
      const gId = ghost.getAttribute?.('data-message-id') || ghost.querySelector?.('[data-message-id]')?.getAttribute?.('data-message-id') || ghost.__vc_msg_id;
      if (gId && mountedIds.has(gId)) {
        ghost.__vc_purged = true;
        ghost.remove();
      }
    });
  }, 500);

  function findRowAuthor(row) {
    if (!row) return '';
    let el = row.querySelector('.msg-author, .uname');
    if (el && el.textContent.trim()) return el.textContent.trim();
    let prev = row.previousElementSibling;
    while (prev) {
      if (prev.matches && (prev.matches('.msg, .chat-row, .msg-block') || prev.querySelector?.('.msg-author, .uname'))) {
        const a = prev.querySelector('.msg-author, .uname');
        if (a && a.textContent.trim()) return a.textContent.trim();
      }
      prev = prev.previousElementSibling;
    }
    return '';
  }

  function getAuthorLoggedRows(authorName) {
    const list = [];
    if (!authorName) return list;
    const reg = userMsgRegistry.get(authorName) || [];
    reg.forEach(r => {
      if (r.__vc_deleted || r.__vc_is_ghost || r.classList?.contains('vc-msg-deleted') || (r.__vc_edit_history && r.__vc_edit_history.length > 0) || r.querySelector?.('.vc-edited-stack')) {
        if (!list.includes(r)) list.push(r);
      }
    });
    document.querySelectorAll('.msg, .chat-row').forEach(r => {
      if (findRowAuthor(r) === authorName) {
        const isDel = r.__vc_deleted || r.__vc_is_ghost || r.classList?.contains('vc-msg-deleted');
        const isEdit = (r.__vc_edit_history && r.__vc_edit_history.length > 0) || !!r.querySelector?.('.vc-edited-stack');
        if ((isDel || isEdit) && !list.includes(r)) {
          list.push(r);
        }
      }
    });
    return list;
  }

  function clearAllUserLogs(authorName) {
    const rows = getAuthorLoggedRows(authorName);
    rows.forEach(r => {
      if (r.__vc_deleted || r.__vc_is_ghost || r.classList?.contains('vc-msg-deleted')) {
        r.__vc_purged = true;
        const par = r.parentElement;
        r.remove();
        if (par && par.classList?.contains('msg-block') && par.children.length === 0) {
          par.remove();
        }
      }
      if (r.__vc_edit_history) {
        r.__vc_edit_history = [];
      }
      const s = r.querySelector?.('.vc-edited-stack');
      if (s) s.remove();
    });
    userMsgRegistry.delete(authorName);
  }

  function clearAllMessageLogs() {
    confirmedDeletedIds.clear();
    confirmedDeletedTexts.clear();
    deletedMsgSignatures.clear();
    userMsgRegistry.clear();
    document.querySelectorAll('.vc-msg-deleted, .vc-msg-deleted-text, [class*="vc-msg-deleted"]').forEach(el => {
      const container = el.closest('.msg-block, .msg, .chat-row') || el;
      container.__vc_purged = true;
      const par = container.parentElement;
      container.remove();
      if (par && par.classList?.contains('msg-block') && par.children.length === 0) {
        par.remove();
      }
    });
    document.querySelectorAll('.vc-edited-stack, .vc-edited-prev-line').forEach(el => el.remove());
    document.querySelectorAll('.msg, .chat-row').forEach(row => {
      delete row.__vc_orig_text;
      delete row.__vc_edit_history;
      row.classList.remove('vc-msg-deleted');
    });
  }

  function closeCustomCtx(e) {
    if (e && e.target && e.target.closest && e.target.closest('.vc-custom-ctx')) return;
    const old = document.querySelector('.vc-custom-ctx');
    if (old) old.remove();
  }

  document.addEventListener('mousedown', (e) => {
    if (!e.target.closest('.vc-custom-ctx')) closeCustomCtx();
  }, false);
  document.addEventListener('contextmenu', (e) => {
    if (!e.target.closest('.vc-custom-ctx')) closeCustomCtx();
  }, false);
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeCustomCtx();
  });

  function showCustomCtx(x, y, items) {
    closeCustomCtx();
    const menu = document.createElement('div');
    menu.className = 'vc-custom-ctx';
    menu.style.left = Math.min(x, window.innerWidth - 220) + 'px';
    menu.style.top = Math.min(y, window.innerHeight - (items.length * 36 + 24)) + 'px';

    items.forEach(it => {
      const b = document.createElement('button');
      b.type = 'button';
      if (it.danger) b.className = 'danger';
      b.textContent = it.label;
      b.onclick = (e) => {
        e.stopPropagation();
        e.preventDefault();
        closeCustomCtx();
        it.action();
      };
      menu.appendChild(b);
    });

    document.body.appendChild(menu);
  }

  window.addEventListener('contextmenu', (e) => {
    if (e.target.closest('.vc-custom-ctx')) return;
    lastRightClickedNode = e.target;

    const ghostHit = e.target.closest('.vc-msg-deleted, .vc-msg-deleted-text');
    const msgHit = e.target.closest('.msg, .chat-row');
    const authorHit = e.target.closest('.msg-author, .author, .avatar, button.avatar, .msg-head');

    if (ghostHit || (msgHit && (msgHit.__vc_deleted || msgHit.__vc_is_ghost || msgHit.classList?.contains('vc-msg-deleted')))) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      const targetRow = ghostHit ? ghostHit.closest('.msg, .chat-row') || ghostHit : msgHit;
      const authorText = findRowAuthor(targetRow);
      const menuItems = [
        {
          label: 'Clear This Message',
          danger: true,
          action: () => {
            targetRow.__vc_purged = true;
            const par = targetRow.parentElement;
            targetRow.remove();
            if (par && par.classList?.contains('msg-block') && par.children.length === 0) {
              par.remove();
            }
          }
        },
        {
          label: 'Clear Message Log',
          danger: true,
          action: () => {
            clearAllMessageLogs();
          }
        }
      ];
      if (authorText) {
        menuItems.push({
          label: `Clear Logs for ${authorText}`,
          danger: true,
          action: () => {
            clearAllUserLogs(authorText);
          }
        });
      }
      menuItems.push({
        label: 'Copy Message Text',
        danger: false,
        action: () => {
          const t = (targetRow.querySelector('.msg-text') || targetRow).innerText.replace(/\(edited\)/g, '').trim();
          navigator.clipboard.writeText(t);
        }
      });
      showCustomCtx(e.clientX, e.clientY, menuItems);
      return;
    }

    if (authorHit) {
      const authorName = findRowAuthor(authorHit.closest('.msg, .chat-row')) || authorHit.textContent.trim();
      const userLogs = getAuthorLoggedRows(authorName);
      if (userLogs.length > 0) {
        setTimeout(() => {
          const nativeCtx = document.querySelector('.ctx-menu:not(.vc-custom-ctx)');
          if (nativeCtx && !nativeCtx.querySelector('.vc-ctx-clear-user')) {
            const clearBtn = document.createElement('button');
            clearBtn.type = 'button';
            clearBtn.className = 'vc-ctx-item-danger vc-ctx-clear-user';
            clearBtn.style.cssText = 'min-height: 32px; border-radius: 2px; padding: 6px 8px; font-size: 14px; text-align: left; background: none; border: none; cursor: pointer; display: flex; align-items: center; width: 100%;';
            clearBtn.textContent = 'Clear Message Log';
            clearBtn.addEventListener('click', (ev) => {
              ev.stopPropagation();
              clearAllMessageLogs();
              nativeCtx.remove();
            });
            nativeCtx.appendChild(clearBtn);
          } else if (!nativeCtx) {
            showCustomCtx(e.clientX, e.clientY, [
              {
                label: 'Clear Message Log',
                danger: true,
                action: () => clearAllMessageLogs()
              },
              {
                label: `Clear Logs for ${authorName}`,
                danger: true,
                action: () => clearAllUserLogs(authorName)
              }
            ]);
          }
        }, 50);
      }
      return;
    }

    if (msgHit) {
      const hasEdited = !!((msgHit.__vc_edit_history && msgHit.__vc_edit_history.length > 0) || msgHit.querySelector?.('.vc-edited-stack'));
      const hasDeleted = !!(msgHit.__vc_deleted || msgHit.__vc_is_ghost || msgHit.querySelector?.('.vc-msg-deleted-text'));

      if (hasEdited || hasDeleted) {
        setTimeout(() => {
          const nativeCtx = document.querySelector('.ctx-menu:not(.vc-custom-ctx)');
          if (nativeCtx && !nativeCtx.querySelector('.vc-ctx-clear-msg')) {
            const clearMsgBtn = document.createElement('button');
            clearMsgBtn.type = 'button';
            clearMsgBtn.className = 'vc-ctx-item-danger vc-ctx-clear-msg';
            clearMsgBtn.style.cssText = 'min-height: 32px; border-radius: 2px; padding: 6px 8px; font-size: 14px; text-align: left; background: none; border: none; cursor: pointer; display: flex; align-items: center; width: 100%;';
            clearMsgBtn.textContent = 'Clear Message History';
            clearMsgBtn.addEventListener('click', (ev) => {
              ev.stopPropagation();
              if (hasDeleted) {
                msgHit.__vc_purged = true;
                const par = msgHit.parentElement;
                msgHit.remove();
                if (par && par.classList?.contains('msg-block') && par.children.length === 0) {
                  par.remove();
                }
              }
              if (hasEdited) {
                msgHit.__vc_edit_history = [];
                const stack = msgHit.querySelector('.vc-edited-stack');
                if (stack) stack.remove();
              }
              nativeCtx.remove();
            });
            nativeCtx.appendChild(clearMsgBtn);

            const clearAllBtn = document.createElement('button');
            clearAllBtn.type = 'button';
            clearAllBtn.className = 'vc-ctx-item-danger vc-ctx-clear-all';
            clearAllBtn.style.cssText = 'min-height: 32px; border-radius: 2px; padding: 6px 8px; font-size: 14px; text-align: left; background: none; border: none; cursor: pointer; display: flex; align-items: center; width: 100%;';
            clearAllBtn.textContent = 'Clear Message Log';
            clearAllBtn.addEventListener('click', (ev) => {
              ev.stopPropagation();
              clearAllMessageLogs();
              nativeCtx.remove();
            });
            nativeCtx.appendChild(clearAllBtn);
          } else if (!nativeCtx) {
            showCustomCtx(e.clientX, e.clientY, [
              {
                label: 'Clear Message History',
                danger: true,
                action: () => {
                  if (hasDeleted) {
                    msgHit.__vc_purged = true;
                    const par = msgHit.parentElement;
                    msgHit.remove();
                    if (par && par.classList?.contains('msg-block') && par.children.length === 0) {
                      par.remove();
                    }
                  }
                  if (hasEdited) {
                    msgHit.__vc_edit_history = [];
                    const stack = msgHit.querySelector('.vc-edited-stack');
                    if (stack) stack.remove();
                  }
                }
              },
              {
                label: 'Clear Message Log',
                danger: true,
                action: () => clearAllMessageLogs()
              }
            ]);
          }
        }, 50);
      }
      return;
    }
  }, true);

  function setPluginEnabled(plugId, state) {
    appPrefs.plugins[plugId] = state;
    savePrefs();
    const p = plugRegistry.find(item => item.id === plugId);
    if (p) {
      if (state && typeof p.start === 'function') p.start();
      else if (!state && typeof p.stop === 'function') p.stop();
    }
  }

  function injectNavTab() {
    const nav = document.querySelector('.settings-nav');
    if (!nav || nav.querySelector('.vc-nav-group')) return;

    const grp = document.createElement('div');
    grp.className = 'settings-nav-group vc-nav-group';

    const lbl = document.createElement('div');
    lbl.className = 'settings-nav-label';
    lbl.textContent = 'Voidcord';
    grp.appendChild(lbl);

    const plugBtn = document.createElement('button');
    plugBtn.type = 'button';
    plugBtn.className = 'vc-nav-tab' + (curTab === 'plugins' ? ' active' : '');
    plugBtn.setAttribute('data-tab', 'plugins');
    plugBtn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M19.439 7.85c0-1.57.802-2.54 2.14-2.54 1.35 0 2.421 1.07 2.421 2.42 0 1.34-1.071 2.42-2.421 2.42-.32 0-.62-.06-.89-.17l-1.25 5.02h-4.3l1.1-4.42c-.52-.35-.86-.94-.86-1.62 0-1.11.89-2 2-2 .41 0 .78.13 1.1.34l.96-1.45z"/>
        <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4z"/>
      </svg>
      <span>Plugins</span>
      <span class="vc-nav-badge vc-plugins-badge">${plugRegistry.filter(p => !!appPrefs.plugins[p.id]).length}</span>
    `;
    plugBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      openPluginsTab();
    });
    grp.appendChild(plugBtn);

    const themesBtn = document.createElement('button');
    themesBtn.type = 'button';
    themesBtn.className = 'vc-nav-tab' + (curTab === 'themes' ? ' active' : '');
    themesBtn.setAttribute('data-tab', 'themes');
    themesBtn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/>
        <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/>
        <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>
        <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/>
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.563-2.512 5.563-5.563C21.438 6.5 17.188 2 12 2z"/>
      </svg>
      <span>Themes</span>
      <span class="vc-nav-badge vc-themes-badge">${getEnabledThemes().length}</span>
    `;
    themesBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      openThemesTab();
    });
    grp.appendChild(themesBtn);

    nav.appendChild(grp);
  }

  function hookNav() {
    const nav = document.querySelector('.settings-nav');
    if (!nav || nav.__vc_hooked) return;
    nav.__vc_hooked = true;

    nav.addEventListener('click', (e) => {
      const b = e.target.closest('button');
      if (!b) return;
      if (!b.classList.contains('vc-nav-tab')) {
        curTab = null;
        nav.querySelectorAll('.vc-nav-tab').forEach(tb => tb.classList.remove('active'));
        const mainPanel = document.getElementById('vc-vencord-main');
        if (mainPanel) mainPanel.style.display = 'none';
        const sMain = document.querySelector('.settings-main');
        if (sMain) {
          Array.from(sMain.children).forEach(ch => {
            if (ch.id !== 'vc-vencord-main') {
              const orig = ch.getAttribute('data-vc-disp');
              ch.style.display = orig !== null ? orig : '';
            }
          });
        }
      }
    });
  }

  function hideYapperSettings() {
    const sMain = document.querySelector('.settings-main');
    if (!sMain) return null;
    Array.from(sMain.children).forEach(ch => {
      if (ch.id !== 'vc-vencord-main') {
        if (!ch.hasAttribute('data-vc-disp')) {
          ch.setAttribute('data-vc-disp', ch.style.display || '');
        }
        ch.style.display = 'none';
      }
    });
    let mainPanel = document.getElementById('vc-vencord-main');
    if (!mainPanel) {
      mainPanel = document.createElement('div');
      mainPanel.id = 'vc-vencord-main';
      mainPanel.className = 'vc-main-panel';
      sMain.appendChild(mainPanel);
    }
    mainPanel.style.display = 'block';
    return mainPanel;
  }

  function openPluginsTab() {
    curTab = 'plugins';
    const nav = document.querySelector('.settings-nav');
    if (nav) {
      nav.querySelectorAll('button').forEach(b => b.classList.remove('active'));
      const btn = nav.querySelector('.vc-nav-tab[data-tab="plugins"]');
      if (btn) btn.classList.add('active');
    }
    const mainPanel = hideYapperSettings();
    if (mainPanel) renderVencordUi(mainPanel);
  }

  function openThemesTab() {
    curTab = 'themes';
    const nav = document.querySelector('.settings-nav');
    if (nav) {
      nav.querySelectorAll('button').forEach(b => b.classList.remove('active'));
      const btn = nav.querySelector('.vc-nav-tab[data-tab="themes"]');
      if (btn) btn.classList.add('active');
    }
    const mainPanel = hideYapperSettings();
    if (mainPanel) renderThemesUi(mainPanel);
  }

  function renderThemesUi(mainPanel) {
    const enabled = getEnabledThemes();
    mainPanel.innerHTML = `
      <div class="vc-themes-subnav">
        <button type="button" class="vc-subnav-btn active">Local Themes</button>
        <button type="button" class="vc-subnav-btn" style="opacity: 0.5;">Online Themes</button>
      </div>

      <div class="vc-theme-alert">
        <div class="vc-alert-title">Theme Performance</div>
        <div class="vc-alert-text">
          Themes and custom CSS have the potential to cause major lag! If you experience performance issues, try disabling your themes and CSS to see if they're the cause. The most common cause of lag is the :has() operator.
        </div>
      </div>

      <div class="vc-theme-box">
        <div class="vc-box-title">Find Themes:</div>
        <div class="vc-box-links">
          <a href="https://betterdiscord.app/themes" target="_blank" class="vc-theme-link">– BetterDiscord theme list</a>
          <a href="https://github.com/topics/discord-theme" target="_blank" class="vc-theme-link">– GitHub</a>
        </div>
        <div class="vc-box-hint">
          If using the BD site, click on "Download" and place the downloaded .theme.css file into your themes folder.
        </div>
      </div>

      <div class="vc-theme-box">
        <div class="vc-box-title">External Resources</div>
        <div class="vc-box-hint">
          For security reasons, loading resources (styles, fonts, images, ...) from most sites is blocked. Make sure all your assets are hosted on GitHub, GitLab, Codeberg, Imgur, Discord or Google Fonts.
        </div>
      </div>

      <div class="vc-themes-toolbar-row">
        <div class="vc-themes-header-title">Local Themes</div>
        <div class="vc-themes-actions-bar">
          <button type="button" class="vc-theme-action-btn vc-btn-open-dir">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/>
            </svg>
            <span>Open Themes Folder</span>
          </button>
          <button type="button" class="vc-theme-action-btn vc-btn-reload-dir">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21.5 2v6h-6 M2.5 22v-6h6 M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.3"/>
            </svg>
            <span>Load missing Themes</span>
          </button>
          <button type="button" class="vc-theme-action-btn vc-btn-refresh-page">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 12a9 9 0 0 1 15-6.7L21 8 M21 3v5h-5 M21 12a9 9 0 0 1-15 6.7L3 16 M3 21v-5h5"/>
            </svg>
            <span>Refresh Page</span>
          </button>
          <button type="button" class="vc-theme-action-btn vc-btn-quick-css">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 20h9 M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
            </svg>
            <span>Edit QuickCSS</span>
          </button>
        </div>
      </div>

      <div class="vc-themes-grid"></div>
    `;

    const openDirBtn = mainPanel.querySelector('.vc-btn-open-dir');
    openDirBtn.addEventListener('click', () => {
      if (window.voidcordDesktop?.openThemesDir) {
        window.voidcordDesktop.openThemesDir();
      } else {
        alert('Themes folder is located in yapper-desktop/voidcord/themes');
      }
    });

    const reloadDirBtn = mainPanel.querySelector('.vc-btn-reload-dir');
    reloadDirBtn.addEventListener('click', async () => {
      reloadDirBtn.disabled = true;
      reloadDirBtn.style.opacity = '0.5';
      await fetchLocalThemes();
      renderThemesUi(mainPanel);
    });

    const refreshPageBtn = mainPanel.querySelector('.vc-btn-refresh-page');
    refreshPageBtn.addEventListener('click', () => {
      location.reload();
    });

    const quickCssBtn = mainPanel.querySelector('.vc-btn-quick-css');
    quickCssBtn.addEventListener('click', () => {
      openQuickCssModal();
    });

    const grid = mainPanel.querySelector('.vc-themes-grid');
    allThemes.forEach(th => {
      const isAct = enabled.includes(th.id);
      const card = document.createElement('div');
      card.className = 'vc-theme-card';
      card.setAttribute('data-id', th.id);
      card.innerHTML = `
        <div class="vc-theme-card-top">
          <div>
            <div class="vc-theme-name">${th.name}</div>
            <div class="vc-theme-author">by ${th.author}</div>
          </div>
          <div class="vc-theme-switch ${isAct ? 'active' : ''}">
            <div class="vc-theme-thumb">
              <svg class="vc-theme-thumb-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                ${isAct ? '<polyline points="20 6 9 17 4 12"/>' : '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>'}
              </svg>
            </div>
          </div>
        </div>
        <div class="vc-theme-desc">${th.description}</div>
        <div class="vc-theme-footer">
          ${th.website ? `<a href="${th.website}" target="_blank" class="vc-theme-link">Website</a>` : ''}
          ${th.website && th.source ? '<span class="vc-theme-dot">•</span>' : ''}
          ${th.source ? `<a href="${th.source}" target="_blank" class="vc-theme-link">Source</a>` : ''}
        </div>
      `;

      const sw = card.querySelector('.vc-theme-switch');
      sw.addEventListener('click', () => {
        const next = !sw.classList.contains('active');
        sw.classList.toggle('active', next);
        const iconSvg = sw.querySelector('.vc-theme-thumb-icon');
        iconSvg.innerHTML = next ? '<polyline points="20 6 9 17 4 12"/>' : '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>';
        const curList = getEnabledThemes();
        let updated;
        if (next) {
          updated = Array.from(new Set([...curList, th.id]));
        } else {
          updated = curList.filter(x => x !== th.id);
        }
        setEnabledThemes(updated);
      });

      grid.appendChild(card);
    });
  }

  function openQuickCssModal() {
    let backdrop = document.querySelector('.vc-quick-modal-backdrop');
    if (backdrop) backdrop.remove();

    backdrop = document.createElement('div');
    backdrop.className = 'vc-quick-modal-backdrop';
    const curCss = localStorage.getItem(QUICK_CSS_KEY) || '';

    backdrop.innerHTML = `
      <div class="vc-quick-modal">
        <div class="vc-quick-header">
          <div>
            <div class="vc-quick-title">Quick CSS</div>
            <div style="font-size: 12px; color: #949ba4;">Custom CSS rules apply live to Voidcord.</div>
          </div>
          <button type="button" class="vc-btn-icon vc-modal-close" style="width: 28px; height: 28px;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
        <textarea class="vc-quick-area" placeholder="Enter custom CSS rules...">${curCss}</textarea>
        <div class="vc-quick-footer">
          <button type="button" class="vc-theme-action-btn vc-modal-cancel">Close</button>
          <button type="button" class="vc-save-btn vc-modal-save" style="margin: 0; min-height: 34px;">Apply & Save</button>
        </div>
      </div>
    `;

    const area = backdrop.querySelector('.vc-quick-area');
    const close = () => backdrop.remove();
    backdrop.querySelector('.vc-modal-close').addEventListener('click', close);
    backdrop.querySelector('.vc-modal-cancel').addEventListener('click', close);
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) close();
    });

    backdrop.querySelector('.vc-modal-save').addEventListener('click', () => {
      const val = area.value;
      localStorage.setItem(QUICK_CSS_KEY, val);
      applyAllEnabledThemes();
      if (window.voidcordDesktop?.saveQuickCss) {
        window.voidcordDesktop.saveQuickCss(val);
      }
      close();
    });

    document.body.appendChild(backdrop);
  }


  function renderVencordUi(mainPanel) {
    const updateNeeded = isUpdateAvailable();
    mainPanel.innerHTML = `
      <div class="vc-top-title">Plugins</div>

      ${updateNeeded ? `
      <div class="vc-banner-box" id="vc-plugins-update-banner" style="border: 1px solid var(--border, rgba(255, 255, 255, 0.1)); margin-bottom: 12px; cursor: pointer;">
        <div class="vc-banner-title">Voidcord Update Available</div>
        <div class="vc-banner-desc">Click here to update Voidcord and restart Yapper.</div>
      </div>
      ` : `
      <div class="vc-banner-box" id="vc-plugins-update-banner" style="border: 1px solid var(--border, rgba(255, 255, 255, 0.1)); margin-bottom: 12px; cursor: pointer;">
        <div class="vc-banner-title">Voidcord is Up to Date</div>
        <div class="vc-banner-desc">Running version ${CURRENT_VOIDCORD_VERSION}. Click to re-run injection if needed.</div>
      </div>
      `}

      <div class="vc-banner-box">
        <div class="vc-banner-title">Plugin Management</div>
        <div class="vc-banner-desc">Press the cog wheel or info icon to get more info on a plugin. Plugins with a cog wheel have settings you can modify!</div>
      </div>

      <div class="vc-filters-section">
        <div class="vc-sec-label">Filters</div>
        <div class="vc-filter-inputs">
          <input type="text" id="vc-search-input" class="vc-search-bar" placeholder="Search for a plugin..." value="${curSearch}" />
          <div class="vc-filter-row">
            <select id="vc-filter-state" class="vc-dropdown-select">
              <option value="all" ${curFilter === 'all' ? 'selected' : ''}>Show All</option>
              <option value="enabled" ${curFilter === 'enabled' ? 'selected' : ''}>Enabled Only</option>
              <option value="disabled" ${curFilter === 'disabled' ? 'selected' : ''}>Disabled Only</option>
            </select>
            <select id="vc-filter-tag" class="vc-dropdown-select">
              <option value="all" ${curTag === 'all' ? 'selected' : ''}>Filter by Tags</option>
              <option value="Chat" ${curTag === 'Chat' ? 'selected' : ''}>Chat</option>
              <option value="Privacy" ${curTag === 'Privacy' ? 'selected' : ''}>Privacy</option>
              <option value="Audio" ${curTag === 'Audio' ? 'selected' : ''}>Audio</option>
              <option value="Perks" ${curTag === 'Perks' ? 'selected' : ''}>Perks</option>
              <option value="Customization" ${curTag === 'Customization' ? 'selected' : ''}>Customization</option>
              <option value="Visual" ${curTag === 'Visual' ? 'selected' : ''}>Visual</option>
              <option value="QoL" ${curTag === 'QoL' ? 'selected' : ''}>QoL</option>
              <option value="Utility" ${curTag === 'Utility' ? 'selected' : ''}>Utility</option>
            </select>
          </div>
        </div>
      </div>

      <div class="vc-sec-label" style="margin-top: 6px;">Plugins</div>
      <div class="vc-plugins-grid" id="vc-cards-container"></div>
    `;

    const searchBox = mainPanel.querySelector('#vc-search-input');
    searchBox.addEventListener('input', (e) => {
      curSearch = e.target.value.toLowerCase().trim();
      renderCardsList();
    });

    const stateSelect = mainPanel.querySelector('#vc-filter-state');
    stateSelect.addEventListener('change', (e) => {
      curFilter = e.target.value;
      renderCardsList();
    });

    const tagSelect = mainPanel.querySelector('#vc-filter-tag');
    tagSelect.addEventListener('change', (e) => {
      curTag = e.target.value;
      renderCardsList();
    });

    const pluginBanner = mainPanel.querySelector('#vc-plugins-update-banner');
    if (pluginBanner) {
      pluginBanner.addEventListener('click', async () => {
        const titleEl = pluginBanner.querySelector('.vc-banner-title');
        const descEl = pluginBanner.querySelector('.vc-banner-desc');
        if (titleEl) titleEl.textContent = 'Updating Voidcord...';
        if (descEl) descEl.textContent = 'Closing Yapper and reapplying injection...';
        pluginBanner.style.pointerEvents = 'none';
        pluginBanner.style.opacity = '0.85';
        if (window.voidcordDesktop && typeof window.voidcordDesktop.updateAndRestart === 'function') {
          try {
            await window.voidcordDesktop.updateAndRestart();
          } catch (err) {}
        }
      });
    }

    renderCardsList();
  }

  function renderCardsList() {
    const container = document.getElementById('vc-cards-container');
    if (!container) return;

    const filtered = plugRegistry.filter(p => {
      const isEnabled = !!appPrefs.plugins[p.id];
      if (curFilter === 'enabled' && !isEnabled) return false;
      if (curFilter === 'disabled' && isEnabled) return false;
      if (curTag !== 'all' && p.tag !== curTag) return false;
      if (curSearch) {
        const nMatch = p.name.toLowerCase().includes(curSearch);
        const dMatch = p.desc.toLowerCase().includes(curSearch);
        if (!nMatch && !dMatch) return false;
      }
      return true;
    });

    container.innerHTML = '';
    if (filtered.length === 0) {
      container.innerHTML = '<div style="grid-column: 1/-1; padding: 24px; text-align: center; color: #949ba4;">No plugins found matching criteria.</div>';
      return;
    }

    filtered.forEach(p => {
      const isEnabled = !!appPrefs.plugins[p.id];
      const card = document.createElement('div');
      card.className = 'vc-p-card';
      card.setAttribute('data-id', p.id);

      card.innerHTML = `
        <div class="vc-p-top">
          <div class="vc-p-name">
            <span>${p.name}</span>
          </div>
          <div class="vc-p-actions">
            ${p.hasSettings ? `
              <button type="button" class="vc-btn-icon vc-btn-cog" title="Configure Plugin">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                </svg>
              </button>
            ` : ''}
            <button type="button" class="vc-btn-icon vc-btn-info" title="Plugin Info">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="16" x2="12" y2="12"/>
                <line x1="12" y1="8" x2="12.01" y2="8"/>
              </svg>
            </button>
            <div class="vc-vencord-switch ${isEnabled ? 'active' : ''}">
              <div class="vc-vencord-thumb">
                <svg class="vc-thumb-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                  ${isEnabled ? '<polyline points="20 6 9 17 4 12"/>' : '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>'}
                </svg>
              </div>
            </div>
          </div>
        </div>
        <p class="vc-p-desc">${p.desc}</p>
        <div class="vc-cfg-panel" style="display: none;"></div>
        <div class="vc-info-panel" style="display: none;"></div>
      `;

      const sw = card.querySelector('.vc-vencord-switch');
      const infoBtn = card.querySelector('.vc-btn-info');
      const infoPanel = card.querySelector('.vc-info-panel');
      const cfgPanel = card.querySelector('.vc-cfg-panel');

      sw.addEventListener('click', () => {
        const next = !sw.classList.contains('active');
        sw.classList.toggle('active', next);
        const iconSvg = sw.querySelector('.vc-thumb-icon');
        iconSvg.innerHTML = next ? '<polyline points="20 6 9 17 4 12"/>' : '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>';
        setPluginEnabled(p.id, next);
        const navCount = document.querySelector('.vc-nav-badge');
        if (navCount) {
          navCount.textContent = String(plugRegistry.filter(item => !!appPrefs.plugins[item.id]).length);
        }
        const st = infoPanel ? infoPanel.querySelector('.vc-info-status') : null;
        if (st) {
          st.textContent = next ? 'Enabled' : 'Disabled';
          st.style.color = next ? '#23a55a' : '#f23f43';
        }
      });

      if (infoBtn && infoPanel) {
        infoBtn.addEventListener('click', () => {
          const isOpen = infoPanel.style.display !== 'none';
          if (cfgPanel) cfgPanel.style.display = 'none';
          infoPanel.style.display = isOpen ? 'none' : 'block';
          if (!isOpen) {
            const activeNow = !!appPrefs.plugins[p.id];
            infoPanel.innerHTML = `
              <div style="display: flex; flex-direction: column; gap: 8px; padding: 12px; background: rgba(0, 0, 0, 0.3); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 6px; font-size: 13px; color: #dbdee1;">
                <div style="display: flex; align-items: center; justify-content: space-between;">
                  <div style="font-weight: 700; font-size: 14px; color: #fff;">${p.name}</div>
                  <div style="font-size: 11px; padding: 2px 7px; background: #2b2d31; border-radius: 4px; color: #949ba4; font-weight: 600;">${p.tag}</div>
                </div>
                <div style="color: #949ba4; line-height: 1.45;">${p.desc}</div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 6px; font-size: 12px; margin-top: 4px; padding-top: 8px; border-top: 1px solid rgba(255, 255, 255, 0.06);">
                  <div><span style="color: #80848e;">ID:</span> <code style="background: #1e1f22; padding: 2px 5px; border-radius: 3px; font-size: 11px; color: #e0e0e0;">${p.id}</code></div>
                  <div><span style="color: #80848e;">Status:</span> <span class="vc-info-status" style="color: ${activeNow ? '#23a55a' : '#f23f43'}; font-weight: 600;">${activeNow ? 'Enabled' : 'Disabled'}</span></div>
                  <div><span style="color: #80848e;">Author:</span> <span style="color: #dbdee1;">Voidcord Core</span></div>
                  <div><span style="color: #80848e;">Version:</span> <span style="color: #dbdee1;">1.0.0</span></div>
                </div>
              </div>
            `;
          }
        });
      }

      if (p.hasSettings) {
        const cog = card.querySelector('.vc-btn-cog');
        if (cog && cfgPanel) {
          cog.addEventListener('click', () => {
            const isOpen = cfgPanel.style.display !== 'none';
            if (infoPanel) infoPanel.style.display = 'none';
            cfgPanel.style.display = isOpen ? 'none' : 'flex';
            if (!isOpen && !cfgPanel.__rendered) {
              cfgPanel.__rendered = true;
              if (p.id === 'MessageLogger') {
                cfgPanel.innerHTML = `
                  <div style="display: flex; flex-direction: column; gap: 8px;">
                    <div style="font-size: 12.5px; color: #dbdee1;">
                      Right-click messages to delete their history. Right-click any username or message to clear logs.
                    </div>
                    <button type="button" class="vc-save-btn vc-clear-all-btn" style="background: #da373c; align-self: flex-start; margin-top: 4px;">
                      Clear Message Log
                    </button>
                  </div>
                `;
                const clrAll = cfgPanel.querySelector('.vc-clear-all-btn');
                clrAll.addEventListener('click', () => {
                  clearAllMessageLogs();
                  clrAll.textContent = 'Logs Cleared';
                  setTimeout(() => { clrAll.textContent = 'Clear Message Log'; }, 1500);
                });
              }
          }
        });
      }
    }

    container.appendChild(card);
    });
  }

  const domObs = new MutationObserver(() => {
    const nav = document.querySelector('.settings-nav');
    if (nav) {
      injectNavTab();
      hookNav();
      if (curTab === 'plugins') {
        const btn = nav.querySelector('.vc-nav-tab');
        if (btn && !btn.classList.contains('active')) {
          nav.querySelectorAll('button:not(.vc-nav-tab)').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
        }
        const sMain = document.querySelector('.settings-main');
        if (sMain) {
          let mainPanel = document.getElementById('vc-vencord-main');
          if (!mainPanel) {
            mainPanel = document.createElement('div');
            mainPanel.id = 'vc-vencord-main';
            mainPanel.className = 'vc-main-panel';
            sMain.appendChild(mainPanel);
            renderVencordUi(mainPanel);
          }
          mainPanel.style.display = 'block';
          Array.from(sMain.children).forEach(ch => {
            if (ch.id !== 'vc-vencord-main') {
              ch.style.display = 'none';
            }
          });
        }
      }
    } else {
      if (curTab) curTab = null;
    }
  });

  domObs.observe(document.documentElement, { childList: true, subtree: true });
})();
