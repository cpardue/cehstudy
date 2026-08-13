// CEStudy Flashcard App - Core Application
// Handles module selection, flashcard navigation, progress tracking, and localStorage persistence

(function() {
    'use strict';

    // === State ===
    let allCards = [];
    let currentIndex = 0;
    let reviewedSet = new Set();
    let selectedModules = new Set();
    let shuffleDeck = false;

    // Spaced repetition state: { "moduleId-qHash": { lastReview: timestamp, ease: number, interval: number, repetitions: number } }
    let srData = {};

    // === DOM Elements ===
    const progressBar = document.getElementById('progressBar');
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const slideMenu = document.getElementById('slideMenu');
    const menuOverlay = document.getElementById('menuOverlay');
    const menuClose = document.getElementById('menuClose');
    const menuList = document.getElementById('menuList');
    const fcCard = document.getElementById('fcCard');
    const placeholderCard = document.getElementById('placeholderCard');
    const fcModuleLabel = document.getElementById('fcModuleLabel');
    const fcTitle = document.getElementById('fcTitle');
    const fcInfo = document.getElementById('fcInfo');
    const fcHint = document.getElementById('fcHint');
    const fcCounter = document.getElementById('fcCounter');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const reviewedLabel = document.getElementById('reviewedLabel');
    const globalReviewed = document.getElementById('globalReviewed');

    // === localStorage Keys ===
    const STORAGE_KEY_MODULES = 'cehstudy_modules';
    const STORAGE_KEY_REVIEWED = 'cehstudy_reviewed';
    const STORAGE_KEY_INDEX = 'cehstudy_index';
    const STORAGE_KEY_SR = 'cehstudy_sr';
    const STORAGE_KEY_STATS = 'cehstudy_stats';

    // === Initialize ===
    function init() {
        loadFromStorage();
        buildMenu();
        // Check for ?module=X query param - toggle that module, turn off others
        const urlParams = new URLSearchParams(window.location.search);
        const moduleParam = parseInt(urlParams.get('module'), 10);
        if (!isNaN(moduleParam)) {
            const modExists = CEH_DATA.modules.some(m => m.id === moduleParam);
            if (modExists) {
                selectedModules.clear();
                selectedModules.add(moduleParam);
                saveModules();
                // Update menu checkboxes to match
                menuList.querySelectorAll('input[type="checkbox"]').forEach(cb => {
                    const cbModId = parseInt(cb.dataset.moduleId, 10);
                    cb.checked = cbModId === moduleParam;
                });
            }
        }
        buildDeck();
        setupEventListeners();
        renderCard();
        updateReviewCount();
    }

    // === Storage ===
    function loadFromStorage() {
        try {
            const mods = localStorage.getItem(STORAGE_KEY_MODULES);
            if (mods) {
                selectedModules = new Set(JSON.parse(mods));
            } else {
                CEH_DATA.modules.forEach(m => selectedModules.add(m.id));
            }
            const rev = localStorage.getItem(STORAGE_KEY_REVIEWED);
            if (rev) reviewedSet = new Set(JSON.parse(rev));
            const idx = localStorage.getItem(STORAGE_KEY_INDEX);
            if (idx !== null) currentIndex = parseInt(idx, 10);

            // Load spaced repetition data
            const sr = localStorage.getItem(STORAGE_KEY_SR);
            if (sr) {
                try {
                    srData = JSON.parse(sr);
                } catch(e) { srData = {}; }
            }

            // Initialize stats if missing
            const stats = getStats();
            if (!stats.firstVisit) {
                stats.firstVisit = Date.now();
                saveStats();
            }
        } catch(e) {
            console.warn('Failed to load from localStorage:', e);
        }
    }

    function saveModules() {
        try {
            localStorage.setItem(STORAGE_KEY_MODULES, JSON.stringify([...selectedModules]));
        } catch(e) { /* ignore */ }
    }

    function saveReviewed() {
        try {
            localStorage.setItem(STORAGE_KEY_REVIEWED, JSON.stringify([...reviewedSet]));
        } catch(e) { /* ignore */ }
    }

    function saveIndex() {
        try {
            localStorage.setItem(STORAGE_KEY_INDEX, currentIndex.toString());
        } catch(e) { /* ignore */ }
    }

    function saveSRData() {
        try {
            localStorage.setItem(STORAGE_KEY_SR, JSON.stringify(srData));
        } catch(e) { /* ignore */ }
    }

    // === Stats ===
    function getStats() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY_STATS);
            if (raw) return JSON.parse(raw);
        } catch(e) {}
        return { firstVisit: null, totalReviews: 0, sessions: [], lastSession: null };
    }

    function saveStats() {
        try {
            localStorage.setItem(STORAGE_KEY_STATS, JSON.stringify(getStats()));
        } catch(e) { /* ignore */ }
    }

    function recordReview(moduleId) {
        const stats = getStats();
        stats.totalReviews = (stats.totalReviews || 0) + 1;
        const today = new Date().toISOString().split('T')[0];
        if (!stats.sessions) stats.sessions = [];
        const existing = stats.sessions.find(s => s.date === today);
        if (existing) {
            existing.count = (existing.count || 0) + 1;
        } else {
            stats.sessions.push({ date: today, count: 1 });
        }
        stats.lastSession = { date: today, count: 1 };
        saveStats();

        // Track per-module review counts
        if (!stats.moduleReviews) stats.moduleReviews = {};
        stats.moduleReviews[moduleId] = (stats.moduleReviews[moduleId] || 0) + 1;
        saveStats();
    }

    // === Spaced Repetition ===
    function getCardSRKey(card) {
        return `${card.moduleId}-${card.q}`;
    }

    function updateSRForCard(card) {
        const key = getCardSRKey(card);
        if (!srData[key]) {
            srData[key] = { lastReview: 0, ease: 2.5, interval: 0, repetitions: 0 };
        }
        const entry = srData[key];
        entry.lastReview = Date.now();

        // SM-2 algorithm simplified
        if (entry.repetitions === 0) {
            entry.interval = 1;
        } else if (entry.repetitions === 1) {
            entry.interval = 6;
        } else {
            entry.interval = Math.round(entry.interval * entry.ease);
        }
        entry.repetitions++;
        // Ease factor stays at 2.5 for study purposes (auto-review)
        saveSRData();
    }

    function getPriorityCards() {
        // Return cards sorted by spaced repetition priority (overdue first, then newest)
        if (allCards.length === 0) return allCards;

        const cardPriority = allCards.map(card => {
            const key = getCardSRKey(card);
            const entry = srData[key] || { lastReview: 0, interval: 0 };
            const now = Date.now();
            const msSinceReview = now - (entry.lastReview || 0);
            const daysSinceReview = msSinceReview / (1000 * 60 * 60 * 24);

            // Priority: negative = overdue, higher = due sooner
            let priority = 0;
            if (entry.lastReview === 0) {
                priority = -9999; // New cards first
            } else if (daysSinceReview < entry.interval) {
                priority = daysSinceReview - entry.interval; // Negative = not due yet
            } else {
                priority = daysSinceReview - entry.interval; // Positive = overdue
            }
            return { card, priority };
        });

        cardPriority.sort((a, b) => b.priority - a.priority);
        return cardPriority.map(p => p.card);
    }

    // === Reset Functions ===
    function resetProgress() {
        if (confirm('Reset all study progress? This cannot be undone.')) {
            reviewedSet.clear();
            srData = {};
            const stats = getStats();
            stats.totalReviews = 0;
            stats.sessions = [];
            stats.lastSession = null;
            saveStats();
            saveReviewed();
            saveSRData();
            updateReviewCount();
            renderStatsDashboard();
        }
    }

    function resetModuleProgress(modId) {
        if (confirm(`Reset progress for Module ${modId}?`)) {
            reviewedSet = new Set([...reviewedSet].filter(k => !k.startsWith(`${modId}-`)));
            srData = Object.keys(srData).reduce((acc, k) => {
                if (!k.startsWith(`${modId}-`)) acc[k] = srData[k];
                return acc;
            }, {});
            const stats = getStats();
            delete stats.moduleReviews?.[modId];
            saveStats();
            saveReviewed();
            saveSRData();
            updateReviewCount();
            renderStatsDashboard();
        }
    }

    // === Menu ===
    function buildMenu() {
        menuList.innerHTML = '';
        CEH_DATA.modules.forEach(mod => {
            const li = document.createElement('li');
            li.className = 'menu-item';
            const isChecked = selectedModules.has(mod.id) ? 'checked' : '';
            li.innerHTML = `
                <span class="menu-item-label">${mod.title}</span>
                <label class="toggle-switch">
                    <input type="checkbox" data-module-id="${mod.id}" ${isChecked}>
                    <span class="toggle-slider"></span>
                </label>
            `;
            menuList.appendChild(li);
        });

        menuList.querySelectorAll('input[type="checkbox"]').forEach(cb => {
            cb.addEventListener('change', onModuleToggle);
        });
    }

    function onModuleToggle(e) {
        const modId = parseInt(e.target.dataset.moduleId, 10);
        if (e.target.checked) {
            selectedModules.add(modId);
        } else {
            selectedModules.delete(modId);
        }
        saveModules();
        syncUrl();
        buildDeck();
        renderCard();
        updateReviewCount();
    }

    // === URL Sync ===
    function syncUrl() {
        const mods = [...selectedModules].sort((a, b) => a - b);
        if (mods.length > 0 && mods.length <= CEH_DATA.modules.length) {
            const lastMod = mods[mods.length - 1];
            const newUrl = `${window.location.origin}${window.location.pathname}?module=${lastMod}`;
            window.history.replaceState({}, '', newUrl);
        }
    }

    // === Card Deck ===
    function buildDeck() {
        allCards = [];
        CEH_DATA.modules.forEach(mod => {
            if (!selectedModules.has(mod.id)) return;
            mod.sections.forEach(section => {
                section.cards.forEach(card => {
                    allCards.push({
                        moduleId: mod.id,
                        moduleTitle: mod.title,
                        sectionTitle: section.title,
                        q: card.q,
                        a: card.a
                    });
                });
            });
        });

        if (shuffleDeck) {
            shuffleArray(allCards);
        }

        currentIndex = 0;
    }

    function resetCardDeck() {
        shuffleDeck = false;
        buildDeck();
        renderCard();
        updateReviewCount();
        updateProgress();
        saveIndex();
    }

    function shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    // === Render ===
    function renderCard() {
        if (allCards.length === 0) {
            fcCard.innerHTML = '';
            fcCard.appendChild(placeholderCard);
            placeholderCard.classList.remove('hidden');
            fcModuleLabel.classList.add('hidden');
            fcTitle.classList.add('hidden');
            fcInfo.classList.add('hidden');
            fcHint.textContent = 'All modules selected — use Select Modules to customize';
            fcCounter.classList.add('hidden');
            prevBtn.disabled = true;
            nextBtn.disabled = true;
            return;
        }

        if (currentIndex < 0) currentIndex = 0;
        if (currentIndex >= allCards.length) currentIndex = allCards.length - 1;

        const card = allCards[currentIndex];

        placeholderCard.classList.add('hidden');
        fcModuleLabel.classList.remove('hidden');
        fcTitle.classList.remove('hidden');
        fcInfo.classList.remove('hidden');
        fcCounter.classList.remove('hidden');

        fcModuleLabel.textContent = `Module ${card.moduleId}: ${card.moduleTitle}`;
        fcTitle.innerHTML = card.q;
        fcInfo.innerHTML = card.a;
        fcCounter.textContent = `${currentIndex + 1} / ${allCards.length}`;
        fcHint.textContent = 'Click answer to reveal - Arrow keys or swipe to navigate';

        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === allCards.length - 1;

        updateProgress();
    }

    function updateProgress() {
        if (allCards.length === 0) {
            progressBar.style.width = '0%';
            return;
        }
        const pct = ((currentIndex + 1) / allCards.length) * 100;
        progressBar.style.width = pct + '%';
    }

    function updateReviewCount() {
        const totalReviewed = reviewedSet.size;
        globalReviewed.textContent = totalReviewed;

        reviewedLabel.classList.add('fire-active');
        globalReviewed.classList.add('fire-active');
        document.getElementById('flameEmoji').classList.add('fire-active');

        setTimeout(() => {
            reviewedLabel.classList.remove('fire-active');
            globalReviewed.classList.remove('fire-active');
            document.getElementById('flameEmoji').classList.remove('fire-active');
        }, 700);
    }

    // === Navigation ===
    function showNextCard() {
        if (allCards.length === 0) return;
        if (currentIndex < allCards.length - 1) {
            currentIndex++;
            saveIndex();
            renderCard();
        } else {
            shuffleDeck = true;
            buildDeck();
            renderCard();
            updateReviewCount();
        }
    }

    function showPrevCard() {
        if (allCards.length === 0) return;
        if (currentIndex > 0) {
            currentIndex--;
            saveIndex();
            renderCard();
        }
    }

    function markReviewed() {
        if (allCards.length === 0) return;
        const card = allCards[currentIndex];
        const key = `${card.moduleId}-${card.q}`;
        if (!reviewedSet.has(key)) {
            reviewedSet.add(key);
            saveReviewed();
            updateReviewCount();
        }
        recordReview(card.moduleId);
        updateSRForCard(card);
    }

    // === Event Listeners ===
    function setupEventListeners() {
        hamburgerBtn.addEventListener('click', () => {
            slideMenu.classList.add('open');
            menuOverlay.classList.add('open');
        });

        menuClose.addEventListener('click', closeMenu);
        menuOverlay.addEventListener('click', closeMenu);

        function closeMenu() {
            slideMenu.classList.remove('open');
            menuOverlay.classList.remove('open');
        }

        prevBtn.addEventListener('click', () => {
            showPrevCard();
            markReviewed();
        });

        nextBtn.addEventListener('click', () => {
            showNextCard();
            markReviewed();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight' || e.key === ' ') {
                e.preventDefault();
                showNextCard();
                markReviewed();
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                showPrevCard();
                markReviewed();
            }
        });

        let touchStartX = 0;
        let touchEndX = 0;

        fcCard.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        fcCard.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            const diff = touchStartX - touchEndX;
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    showNextCard();
                    markReviewed();
                } else {
                    showPrevCard();
                    markReviewed();
                }
            }
        }, { passive: true });

        fcCard.addEventListener('click', () => {
            markReviewed();
        });

        // Stats dashboard toggle
        const statsToggle = document.getElementById('statsToggle');
        if (statsToggle) {
            statsToggle.addEventListener('click', () => {
                renderStatsDashboard();
                const panel = document.getElementById('statsPanel');
                if (panel) panel.classList.toggle('open');
            });
        }

        // Reset buttons in stats panel
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('stats-reset-all')) resetProgress();
            if (e.target.classList.contains('stats-reset-module')) {
                const modId = e.target.dataset.moduleId;
                resetModuleProgress(modId);
            }
        });
    }

    // === Stats Dashboard ===
    function renderStatsDashboard() {
        const panel = document.getElementById('statsPanel');
        if (!panel) return;

        const stats = getStats();
        const totalCards = CEH_DATA.modules.reduce((sum, m) => sum + m.sections.reduce((s, sec) => s + sec.cards.length, 0), 0);
        const reviewedCount = reviewedSet.size;
        const pct = totalCards > 0 ? Math.round((reviewedCount / totalCards) * 100) : 0;

        // Per-module progress
        let moduleRows = '';
        CEH_DATA.modules.forEach(mod => {
            const modCards = mod.sections.reduce((s, sec) => s + sec.cards.length, 0);
            const modReviewed = mod.sections.reduce((s, sec) => s + sec.cards.filter(c => reviewedSet.has(`${mod.id}-${c.q}`)).length, 0);
            const modPct = modCards > 0 ? Math.round((modReviewed / modCards) * 100) : 0;
            const isActive = selectedModules.has(mod.id);

            moduleRows += `
                <tr class="stats-module-row${isActive ? '' : ' inactive'}">
                    <td>${isActive ? mod.id : '?'}</td>
                    <td>${mod.title}</td>
                    <td>${modReviewed}/${modCards}</td>
                    <td>
                        <div class="stats-bar"><div class="stats-bar-fill" style="width:${modPct}%"></div></div>
                    </td>
                    <td>${modPct}%</td>
                    ${isActive ? `<td><button class="stats-reset-module" data-module-id="${mod.id}" title="Reset module progress">&times;</button></td>` : '<td>&mdash;</td>'}
                </tr>`;
        });

        // Streak calculation
        let streak = 0;
        const today = new Date();
        if (stats.sessions && stats.sessions.length > 0) {
            for (let i = 0; i < 365; i++) {
                const d = new Date(today);
                d.setDate(d.getDate() - i);
                const dateStr = d.toISOString().split('T')[0];
                const session = stats.sessions.find(s => s.date === dateStr);
                if (session) {
                    streak++;
                } else {
                    break;
                }
            }
        }

        panel.innerHTML = `
            <div class="stats-header">
                <h3>Study Dashboard</h3>
                <button class="stats-close" id="statsClose">&times;</button>
            </div>
            <div class="stats-overview">
                <div class="stat-card">
                    <div class="stat-value">${pct}%</div>
                    <div class="stat-label">Overall Progress</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value">${reviewedCount}</div>
                    <div class="stat-label">Cards Reviewed</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value">${stats.totalReviews || 0}</div>
                    <div class="stat-label">Total Reviews</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value">${streak}</div>
                    <div class="stat-label">Day Streak</div>
                </div>
            </div>
            <table class="stats-table">
                <thead>
                    <tr><th>#</th><th>Module</th><th>Reviewed</th><th>Progress</th><th>%</th><th></th></tr>
                </thead>
                <tbody>${moduleRows}</tbody>
            </table>
            <div class="stats-footer">
                <button class="stats-reset-all" id="statsResetAll">Reset All Progress</button>
            </div>
        `;

        document.getElementById('statsClose').addEventListener('click', () => {
            panel.classList.remove('open');
        });
    }

    // === Start ===
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
