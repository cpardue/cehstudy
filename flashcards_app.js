/**
 * CEH Flashcard App - Single Page Application
 * Handles module toggles, randomization, and flashcard navigation
 */
(function(){
    if (typeof CEH_DATA === 'undefined') return;

    // --- State ---
    let toggles = {};
    let reviewedCount = parseInt(localStorage.getItem('ceh_reviewed') || '0');
    let activeCards = [];
    let shuffledPool = [];
    let currentIdx = 0;
    let cycleCount = 0;

    // Initialize default toggles (all ON by default)
    CEH_DATA.modules.forEach(m => {
        toggles[m.id] = true;
    });

    // --- DOM Elements ---
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const menuOverlay = document.getElementById('menuOverlay');
    const slideMenu = document.getElementById('slideMenu');
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
    const flameEmoji = document.getElementById('flameEmoji');
    const progressBar = document.getElementById('progressBar');

    // --- Hamburger Menu ---
    function openMenu() {
        slideMenu.classList.add('open');
        menuOverlay.classList.add('open');
    }
    function closeMenu() {
        slideMenu.classList.remove('open');
        menuOverlay.classList.remove('open');
    }

    hamburgerBtn.addEventListener('click', openMenu);
    menuClose.addEventListener('click', closeMenu);
    menuOverlay.addEventListener('click', closeMenu);

    // --- Wire up chevron buttons ---
    prevBtn.addEventListener('click', function() { window.prevCard(); this.blur(); });
    nextBtn.addEventListener('click', function() { window.nextCard(); this.blur(); });

    // --- Render Module Toggle List ---
    function renderModuleList() {
        menuList.innerHTML = '';
        CEH_DATA.modules.forEach(m => {
            const li = document.createElement('li');
            li.className = 'menu-item';

            const label = document.createElement('span');
            label.className = 'menu-item-label';
            label.textContent = m.id + '. ' + m.title;

            const toggleWrap = document.createElement('label');
            toggleWrap.className = 'toggle-switch';

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = toggles[m.id] || false;
            checkbox.dataset.id = m.id;

            const slider = document.createElement('span');
            slider.className = 'toggle-slider';

            toggleWrap.appendChild(checkbox);
            toggleWrap.appendChild(slider);
            li.appendChild(label);
            li.appendChild(toggleWrap);
            menuList.appendChild(li);

            checkbox.addEventListener('change', function() {
                const modId = parseInt(this.dataset.id);
                toggles[modId] = this.checked;
                localStorage.setItem('ceh_toggles', JSON.stringify(toggles));
                rebuildPool();
                updateDisplay();
            });
        });
    }

    // --- Build Card Pool ---
    function getModuleCards(moduleData) {
        const cards = [];
        moduleData.sections.forEach(function(sec) {
            if (sec.cards && sec.cards.length > 0) {
                sec.cards.forEach(function(c) {
                    cards.push({ q: c.q, a: c.a });
                });
            }
        });
        return cards;
    }

    function getAllActiveCards() {
        let all = [];
        CEH_DATA.modules.forEach(function(m) {
            if (toggles[m.id]) {
                const cards = getModuleCards(m);
                cards.forEach(c => { c.moduleId = m.id; c.moduleTitle = m.title; });
                all = all.concat(cards);
            }
        });
        return all;
    }

    // Fisher-Yates shuffle
    function shuffle(arr) {
        const a = arr.slice();
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    function rebuildPool() {
        activeCards = getAllActiveCards();
        shuffledPool = shuffle(activeCards);
        currentIdx = 0;
        cycleCount = 0;
    }

    // Trigger flame emoji + green flash on Reviewed counter at every 5th increment
    function triggerFlameMilestone() {
        if (flameEmoji && reviewedCount % 5 === 0) {
            flameEmoji.classList.add('fire-active');
            if (globalReviewed) globalReviewed.classList.add('fire-active');
            if (reviewedLabel) reviewedLabel.classList.add('fire-active');
            setTimeout(() => {
                flameEmoji.classList.remove('fire-active');
                if (globalReviewed) globalReviewed.classList.remove('fire-active');
                if (reviewedLabel) reviewedLabel.classList.remove('fire-active');
            }, 600);
        }
    }

    // --- Update Display ---
    function updateDisplay(animate) {
        const hasCards = shuffledPool.length > 0 && currentIdx < shuffledPool.length;

        if (!hasCards) {
            placeholderCard.classList.remove('hidden');
            fcModuleLabel.classList.add('hidden');
            fcTitle.classList.add('hidden');
            fcInfo.classList.add('hidden');
            fcHint.textContent = activeCards.length === 0
                ? 'Click a module toggle to begin'
                : 'All selected cards shown! Reshuffling...';
            fcCounter.classList.add('hidden');
            prevBtn.disabled = true;
            nextBtn.disabled = true;
            updateProgress();
            return;
        }

        // Card animation: add enter class, then remove on next frame
        if (animate) {
            fcCard.classList.add('card-enter');
        }

        placeholderCard.classList.add('hidden');
        const card = shuffledPool[currentIdx];

        // Update content while card-enter is active
        requestAnimationFrame(function() {
            // Show module label
            if (fcModuleLabel) {
                fcModuleLabel.textContent = 'Module ' + card.moduleId + ': ' + card.moduleTitle;
                fcModuleLabel.classList.remove('hidden');
            }

            // Show question (title) and answer
            fcTitle.textContent = card.q;
            fcTitle.classList.remove('hidden');

            fcInfo.innerHTML = card.a;
            fcInfo.classList.remove('hidden');

            fcCounter.textContent = (currentIdx + 1) + ' of ' + shuffledPool.length + ' (cycle ' + (cycleCount + 1) + ')';
            fcCounter.classList.remove('hidden');

            fcHint.textContent = 'Use arrow buttons or swipe to navigate between cards';

            // Remove card-enter class to trigger fade-in
            fcCard.classList.remove('card-enter');
        });

        prevBtn.disabled = currentIdx === 0;
        nextBtn.disabled = false;

        reviewedCount++;
        localStorage.setItem('ceh_reviewed', reviewedCount.toString());
        if (globalReviewed) globalReviewed.textContent = reviewedCount;
        triggerFlameMilestone();
        updateProgress();
    }

    function updateProgress() {
        if (progressBar && shuffledPool.length > 0) {
            const totalSeen = currentIdx + 1;
            progressBar.style.width = (totalSeen / shuffledPool.length * 100) + '%';
        }
    }

    function markReviewed() {
        reviewedCount++;
        localStorage.setItem('ceh_reviewed', reviewedCount.toString());
        if (globalReviewed) globalReviewed.textContent = reviewedCount;
        triggerFlameMilestone();
    }

    window.nextCard = function() {
        if (currentIdx < shuffledPool.length - 1) {
            currentIdx++;
            updateDisplay(true);
        } else {
            rebuildPool();
            currentIdx = 0;
            cycleCount++;
            updateDisplay(true);
        }
    };

    window.prevCard = function() {
        if (currentIdx > 0) {
            currentIdx--;
            updateDisplay(true);
        }
    };

    // --- Keyboard Navigation ---
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight') {
            e.preventDefault();
            window.nextCard();
        }
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            window.prevCard();
        }
    });

    // --- Swipe Support for Mobile ---
    let touchStartX = 0;
    let touchEndX = 0;

    fcCard.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    fcCard.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 60) {
            if (diff > 0) {
                window.nextCard();
            } else {
                window.prevCard();
            }
        }
    }, { passive: true });

    // --- Initialize ---
    renderModuleList();
    rebuildPool();
    updateDisplay(false);

    if (globalReviewed) globalReviewed.textContent = reviewedCount;

})();
