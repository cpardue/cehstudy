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

## Task 3: Fix ceh-v13 module page flashcard links
- [x] Change all `/moduleX.html` → `/?module=X` in ceh-v13/module-XX/index.html
- [x] Verify no remaining old links in any HTML file on GitHub
- [x] Status: ✅ Complete

## Task 4: Verify sitemap.xml
- [x] Confirm no references to module1.html etc. (already verified clean)
- [x] Status: ✅ Complete

## Task 5: Commit and push to github.com/cpardue/cehstudy
- [x] Committed and pushed: flashcards_app.js changes + module1-5.html deletions
- [x] Pushed remaining deletions (module13-17.html)
- [x] Updated ceh-v13/module-01 through module-03 with correct `/?module=X` links
- [x] Verified all 20 ceh-v13 module pages use `/?module=X` format
- [x] Status: ✅ Complete

---

## Task 6: Keep ?module=X in URL for bookmarkability
- [x] Remove immediate URL cleanup after ?module=X processing in flashcards_app.js
- [x] Add syncUrl() function that updates URL when modules are toggled
- [x] URL now shows ?module=X (last selected module) after manual toggle
- [x] Status: ✅ Complete

## Recent Changes (2026-08-13)

### Critical Bugfix: Missing buildDeck() in init()
- [x] Added `buildDeck()` call in flashcards_app.js init() — was missing, causing empty flashcard deck on fresh load
- [x] Commit: 08f5058402d352e32b75e963412b5566d8e5e44f
- [x] Status: ✅ Complete

### Flashcard Link Fixes
- Updated ceh-v13/module-01/index.html: `/module1.html` → `/?module=1`
- Updated ceh-v13/module-02/index.html: `/module2.html` → `/?module=2`
- Updated ceh-v13/module-03/index.html: `/module3.html` → `/?module=3`
- Verified ceh-v13/module-04 through module-20 already had correct links

### Legacy Page Deletions
- Deleted from GitHub: module1-5.html (previous commits), module13-17.html (this session)
- All legacy module pages (module1-19.html) now removed from repository

### Verification
- Zero old `/moduleX.html` links remain in any HTML file
- sitemap.xml verified clean - no references to deleted module*.html pages
- All ceh-v13 module pages correctly link to `/?module=N` for flashcards app