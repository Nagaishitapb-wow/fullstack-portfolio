# Debugging Log — Mini Recipe Finder

### Bug 1 — Nothing happening when clicking search
- **Cause:** Button was inside form → auto refresh
- **Fix:** Removed form tag

### Bug 2 — Results overlapped
- **Cause:** Old results not cleared
- **Fix:** Added `resultsBox.innerHTML = ""` before rendering

### Bug 3 — "No recipes found" not showing
- **Cause:** Checking wrong property
- **Fix:** Updated to `data.hits.length === 0`

