---
name: Web3Forms domain blocking
description: Why Web3Forms contact-form integrations fail during development on Replit, and how to wire them correctly.
---

Web3Forms (free tier) rejects requests in two independent ways that both surfaced while wiring a portfolio contact form:

1. **No server-to-server calls.** Their API returns HTTP 403 "This method is not allowed. Use our API in client side..." if the POST doesn't look like it came from a browser (e.g. proxying through your own backend with `fetch`/`curl`). The access key is designed to be public and embedded client-side — it is not a traditional secret.
2. **Replit dev-preview domain is blocklisted.** Even a client-side-shaped request (with Origin/Referer/User-Agent headers) from a `*.replit.dev` domain gets HTTP 400 "Form submissions from this domain TLD is blocked." This is independent of #1 — it blocks by Origin/Referer domain, not by request shape.

**How to apply:** Call the Web3Forms API directly from frontend code (no backend proxy). Inject the access key at build time via Vite's `define` (e.g. `import.meta.env.VITE_WEB3FORMS_ACCESS_KEY`) reading from a Replit secret — safe because Web3Forms keys are meant to be public. Expect it to fail during Replit dev/preview testing regardless of correct wiring; verify only after publishing to a real production domain.
