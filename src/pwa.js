import { registerSW } from "virtual:pwa-register";

export const registerServiceWorker = registerSW({
  onOfflineReady() {
    window.dispatchEvent(new Event("offline-ready"));
  },
  onNeedRefresh() {
    window.dispatchEvent(new Event("new-version-available"));
  },
});