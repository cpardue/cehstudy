# TODO — CEHStudy Module Unification

## Summary
Remove legacy `module1.html` through `module19.html` pages (study notes format). Add `?module=X` query param support to flashcards app so "Launch Flashcards — Module X" buttons on ceh-v13 module pages work correctly. Users landing via `?module=N` see only that module's flashcards but can toggle additional modules via Select Modules menu.

---

## Task 1: Add `?module=X` support to flashcards_app.js
- [x] Parse URL query params for `module=N` on init
- [x] Auto-toggle only specified module, leave others off
- [x] Allow user to toggle additional modules normally
- [x] Handle invalid module numbers gracefully (no-op)
- [x] Status: ✅ Complete

## Task 2: Delete old module pages
- [x] Delete `module1.html` through `module5.html` from root
- [x] Delete local `backup/2026-08-12/` folder
- [x] Delete `module6.html` through `module19.html` from GitHub repo
- [x] Verify all deletions pushed to github
- [x] Status: ✅ Complete

## Task 3: Verify sitemap.xml
- [x] Confirm no references to module1.html etc. (already verified clean)
- [x] Status: ✅ Complete

## Task 4: Commit and push to github.com/cpardue/cehstudy
- [x] Committed and pushed: flashcards_app.js changes + module1-5.html deletions
- [x] Pushed remaining deletions (module13-17.html)
- [x] Status: ✅ Complete

---

## Recent Changes (2026-08-13)
- Deleted from GitHub: module13.html, module14.html, module15.html, module16.html, module17.html
- All legacy module pages (module1-19.html) now removed from repository
- ceh-v13 module pages correctly link to `/?module=N` for flashcards app
