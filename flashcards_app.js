/**
 * CEH Flashcard App - Single Page Application
 * Handles module toggles, randomization, and flashcard navigation
 */
(function(){
    if (typeof CEH_DATA === 'undefined') return;

    // --- State ---
    let toggles = JSON.parse(localStorage.getItem('ceh_toggles') || '{}');
    let reviewedCount = parseInt(localStorage.getItem('ceh_reviewed') || '0');
    let activeCards = [];
    let shuffledPool = [];
    let currentIdx = 0;
    let revealed = false;
    let cycleCount = 0;

    // Initialize default toggles (all ON)
    CEH_DATA.modules.forEach(m => {
        if (!(m.id in toggles)) toggles[m.id] = true;
    });

    // --- DOM Elements ---
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const menuOverlay = document.getElementById('menuOverlay');
    const slideMenu = document.getElementById('slideMenu');
    const menuClose = document.getElementById('menuClose');
    const menuList = document.getElementById('menuList');
    const fcCard = document.getElementById('fcCard');
    const placeholderCard = document.getElementById('placeholderCard');
    const fcQuestion = document.getElementById('fcQuestion');
    const fcAnswer = document.getElementById('fcAnswer');
    const fcHint = document.getElementById('fcHint');
    const fcCounter = document.getElementById('fcCounter');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const globalReviewed = document.getElementById('globalReviewed');

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
                cards.forEach(c => { c.moduleId = m.id; });
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

    // --- Update Display ---
    function updateDisplay() {
        const hasCards = shuffledPool.length > 0 && currentIdx < shuffledPool.length;

        if (!hasCards) {
            placeholderCard.classList.remove('hidden');
            fcQuestion.classList.add('hidden');
            fcAnswer.classList.add('hidden');
            fcAnswer.classList.remove('revealed');
            fcHint.textContent = activeCards.length === 0 
                ? 'Click a module toggle to begin' 
                : 'All selected cards shown! Reshuffling...';
            fcCounter.classList.add('hidden');
            prevBtn.disabled = true;
            nextBtn.disabled = true;
            return;
        }

        placeholderCard.classList.add('hidden');
        const card = shuffledPool[currentIdx];
        fcQuestion.textContent = card.q;
        fcQuestion.classList.remove('hidden');
        
        fcAnswer.innerHTML = card.a;
        fcAnswer.classList.remove('hidden');
        fcAnswer.classList.add('revealed');
        revealed = true;

        fcCounter.textContent = (currentIdx + 1) + ' of ' + shuffledPool.length + ' (cycle ' + (cycleCount + 1) + ')';
        fcCounter.classList.remove('hidden');
        
        fcHint.textContent = 'Click card to hide answer';
        
        prevBtn.disabled = currentIdx === 0;
        nextBtn.disabled = false;

        reviewedCount++;
        localStorage.setItem('ceh_reviewed', reviewedCount.toString());
        if (globalReviewed) globalReviewed.textContent = reviewedCount;
    }

    // --- Navigation ---
    window.revealCard = function() {
        if (shuffledPool.length === 0) return;
        
        if (revealed) {
            fcAnswer.classList.remove('revealed');
            fcAnswer.classList.add('hidden');
            revealed = false;
            fcHint.textContent = 'Click card to reveal answer';
        } else {
            fcAnswer.classList.remove('hidden');
            fcAnswer.classList.add('revealed');
            revealed = true;
            fcHint.textContent = 'Click to hide answer';
            markReviewed();
        }
    };

    function markReviewed() {
        reviewedCount++;
        localStorage.setItem('ceh_reviewed', reviewedCount.toString());
        if (globalReviewed) globalReviewed.textContent = reviewedCount;
    }

    window.nextCard = function() {
        if (currentIdx < shuffledPool.length - 1) {
            currentIdx++;
            // Reset reveal state before updating display
            revealed = false;
            fcAnswer.classList.remove('revealed');
            updateDisplay();
        } else {
            rebuildPool();
            currentIdx = 0;
            cycleCount++;
            revealed = false;
            fcAnswer.classList.remove('revealed');
            updateDisplay();
        }
    };

    window.prevCard = function() {
        if (currentIdx > 0) {
            currentIdx--;
            // Reset reveal state before updating display
            revealed = false;
            fcAnswer.classList.remove('revealed');
            updateDisplay();
        }
    };

    // --- Keyboard Navigation ---
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight' || e.key === ' ') {
            e.preventDefault();
            window.nextCard();
        }
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            window.prevCard();
        }
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            revealCard();
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
    updateDisplay();
    
    if (globalReviewed) globalReviewed.textContent = reviewedCount;

})();
