// CEHStudy Flashcard App - Core Application
// Simplified: All 20 modules always active, no module selection UI

(function() {
    'use strict';

    // === State ===
    let allCards = [];
    let currentIndex = 0;
    let reviewedSet = new Set();
    let shuffleDeck = false;
    let sessionReviewedCount = 0; // resets on page load

    // Spaced repetition state: { "moduleId-qHash": { lastReview: timestamp, ease: number, interval: number, repetitions: number } }
    let srData = {};

    // === DOM Elements ===
    const progressBar = document.getElementById('progressBar');
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
    const STORAGE_KEY_REVIEWED = 'cehstudy_reviewed';
    const STORAGE_KEY_INDEX = 'cehstudy_index';
    const STORAGE_KEY_SR = 'cehstudy_sr';
    const STORAGE_KEY_STATS = 'cehstudy_stats';

    // === Initialize ===
    function init() {
        try {
            loadFromStorage();
            sessionReviewedCount = 0; // reset session counter on page load
            buildDeck();
            setupEventListeners();
            renderCard();
            updateReviewCount();
        } catch(e) {
            console.error('Init error:', e);
        }
    }

    // === Storage ===
    function loadFromStorage() {
        try {
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
        saveSRData();
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

    // === Card Deck (all modules always active) ===
    function buildDeck() {
        allCards = [];
        CEH_DATA.modules.forEach(mod => {
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
            fcHint.textContent = 'No flashcards available';
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
        globalReviewed.textContent = sessionReviewedCount;

        // Render cycling flame emojis: 1→2→3 at every multiple of 5
        const flameContainer = document.getElementById('flameContainer');
        if (flameContainer && sessionReviewedCount > 0 && sessionReviewedCount % 5 === 0) {
            const flameCount = ((sessionReviewedCount / 5) % 3) + 1;
            flameContainer.textContent = '\u{1F525}'.repeat(flameCount);
        } else if (flameContainer) {
            flameContainer.textContent = '';
        }
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
        }
        sessionReviewedCount++;
        updateReviewCount();
        recordReview(card.moduleId);
        updateSRForCard(card);
    }

    // === Event Listeners ===
    function setupEventListeners() {
        prevBtn.addEventListener('click', () => { showPrevCard(); markReviewed(); });
        nextBtn.addEventListener('click', () => { showNextCard(); markReviewed(); });

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

        if (fcCard) {
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

            fcCard.addEventListener('click', () => { markReviewed(); });
        }

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

            moduleRows += `
                <tr class="stats-module-row">
                    <td>${mod.id}</td>
                    <td>${mod.title}</td>
                    <td>${modReviewed}/${modCards}</td>
                    <td>
                        <div class="stats-bar"><div class="stats-bar-fill" style="width:${modPct}%"></div></div>
                    </td>
                    <td>${modPct}%</td>
                    <td><button class="stats-reset-module" data-module-id="${mod.id}" title="Reset module progress">&times;</button></td>
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

        const statsClose = document.getElementById('statsClose');
        if (statsClose) {
            statsClose.addEventListener('click', () => {
                panel.classList.remove('open');
            });
        }
    }

    // === Start ===
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
