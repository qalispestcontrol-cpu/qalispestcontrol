// Google Tag helper — safe wrappers for SPA pageview/event tracking
// Measurement ID: AW-17923372377
const GA_ID = 'AW-17923372377'

function isGtagAvailable() {
  return typeof window !== 'undefined' && typeof window.gtag === 'function'
}

export function pageview(path) {
  if (!isGtagAvailable()) return
  try {
    window.gtag('config', GA_ID, { page_path: path })
  } catch (e) {
    // fail silently in older browsers / test environments
    // eslint-disable-next-line no-console
    console.warn('gtag.pageview() failed', e)
  }
}

export function event(action, params) {
  if (!isGtagAvailable()) return
  try {
    window.gtag('event', action, params)
  } catch (e) {
    // eslint-disable-next-line no-console
    console.warn('gtag.event() failed', e)
  }
}

export default {
  pageview,
  event,
  GA_ID,
}
