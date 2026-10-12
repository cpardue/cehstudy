// CEHStudy — webmcp.js (WebMCP agent-facing tools)
// W3C WebMCP tool registration. This is the ONLY file in the app that may
// reference the WebMCP modelContext API: loaded on index.html (the only page
// carrying the origin-trial meta) and always AFTER data.js, so CEH_DATA exists
// when this runs. Feature-detected: wherever document.modelContext is absent
// (Firefox/Safari, Chrome/Edge without the origin trial) the IIFE returns
// immediately — silent no-op, zero console noise, zero behavior change.
//
// The four tools are thin READ-ONLY wrappers over the study data already on
// this page: CEH_DATA (data.js — 20 modules / 306 flashcards) and
// questions.json (200 practice questions, fetched lazily on first use and
// cached). No tool touches the DOM or localStorage. Rules per the WebMCP
// conventions used across the site fleet: <=10 tools (we register 4),
// snake_case names, plain-English agent-facing descriptions that state
// preconditions, every execute returns an object and never throws (guard).

(function () {
    'use strict';

    // document first: on builds that deprecate the navigator alias, touching
    // navigator.modelContext logs a console warning. No-op when unsupported.
    const doc = typeof document !== 'undefined' ? document : undefined;
    const nav = typeof navigator !== 'undefined' ? navigator : undefined;
    const mc = (doc && doc.modelContext) || (nav && nav.modelContext);
    if (!mc || typeof mc.registerTool !== 'function') return;

    // data.js defines a top-level const CEH_DATA; it is in scope here because
    // this script loads after it. Defensive: skip silently if the shape ever
    // changes instead of throwing on every page load.
    const data = (typeof CEH_DATA !== 'undefined' && CEH_DATA) ? CEH_DATA : null;
    if (!data || !Array.isArray(data.modules)) return;

    // Flat card index with 1-based position within module.
    const cards = [];
    const cardCountByModule = {};
    for (const m of data.modules) {
        let pos = 0;
        for (const s of (m.sections || [])) {
            for (const c of (s.cards || [])) {
                pos += 1;
                cards.push({ moduleId: m.id, moduleTitle: m.title, section: s.title, position: pos, q: c.q, a: c.a });
            }
        }
        cardCountByModule[m.id] = pos;
    }

    // Practice questions: same-origin fetch, cached, retried after one failure.
    let questionsPromise = null;
    function loadQuestions() {
        if (!questionsPromise) {
            questionsPromise = fetch('questions.json', { cache: 'force-cache' })
                .then((r) => { if (!r.ok) throw new Error('questions.json HTTP ' + r.status); return r.json(); })
                .catch((e) => { questionsPromise = null; throw e; });
        }
        return questionsPromise;
    }

    // Every execute returns an object and never throws.
    const guard = (fn) => async (input) => {
        try { return await fn(input || {}); }
        catch (e) { return { ok: false, error: String((e && e.message) || e) }; }
    };

    // registerTool differs across builds: canonical 2-arg (name, def) first;
    // on sync throw / rejecting promise fall back to single-arg { name, ...def }.
    // Every failure mode swallowed — silent no-op, zero console noise.
    const register = (name, def) => {
        const alt = () => {
            try { return Promise.resolve(mc.registerTool({ name: name, ...def })).catch(() => {}); }
            catch (e) { return Promise.resolve(); }
        };
        try {
            const r = mc.registerTool(name, def);
            if (r && typeof r.then === 'function') return r.catch(alt);
        } catch (e) { return alt(); }
    };

    register('ceh_get_overview', {
        description: 'Report what CEHStudy (free CEH v13 study site) has on this page: the 20 exam modules with their flashcard counts, the total flashcard count, and the number of practice questions. Takes no input and changes nothing; call it first to see what ceh_get_flashcard, ceh_search_flashcards and ceh_get_practice_question can return.',
        inputSchema: { type: 'object', properties: {} },
        execute: guard(async () => {
            const modules = data.modules.map((m) => ({ id: m.id, title: m.title, cards: cardCountByModule[m.id] || 0 }));
            const out = { ok: true, exam: 'CEH v13', site: 'https://cehstudy.com', modules: modules, total_cards: cards.length };
            try { out.practice_questions = (await loadQuestions()).length; }
            catch (e) { out.practice_questions = null; out.note = 'Practice question data unavailable right now: ' + ((e && e.message) || e); }
            return out;
        })
    });

    register('ceh_get_flashcard', {
        description: 'Fetch one CEH flashcard by module number and position within that module (both start at 1). Returns the question, the full answer, and its section. Valid positions per module are 1..N where N comes from ceh_get_overview.',
        inputSchema: {
            type: 'object',
            properties: {
                module: { type: 'integer', minimum: 1, maximum: 20, description: 'Module number (1-20)' },
                position: { type: 'integer', minimum: 1, description: 'Card position within the module, starting at 1' }
            },
            required: ['module', 'position']
        },
        execute: guard((input) => {
            const m = input.module;
            if (!Number.isInteger(m) || m < 1 || m > 20) return { ok: false, error: 'module must be an integer from 1 to 20', given: m };
            const total = cardCountByModule[m] || 0;
            const p = input.position;
            if (!Number.isInteger(p) || p < 1) return { ok: false, error: 'position must be an integer of 1 or greater', given: p };
            if (p > total) return { ok: false, error: 'position out of range for this module', module: m, position: p, valid_range: '1..' + total };
            const c = cards.find((x) => x.moduleId === m && x.position === p);
            return { ok: true, module_id: m, module_title: c.moduleTitle, section: c.section, position: p, total_in_module: total, question: c.q, answer: c.a };
        })
    });

    register('ceh_search_flashcards', {
        description: 'Case-insensitive substring search across all CEH flashcards (question and answer text). Returns up to limit matches with module, section, position, question and a short answer snippet; call ceh_get_flashcard with the returned module and position for the full answer. total_matches is reported even when the list is capped.',
        inputSchema: {
            type: 'object',
            properties: {
                query: { type: 'string', minLength: 1, description: 'Substring to find, e.g. "CIA triad" or "buffer overflow"' },
                limit: { type: 'integer', minimum: 1, maximum: 25, description: 'Maximum matches to return (default 10)' }
            },
            required: ['query']
        },
        execute: guard((input) => {
            const q = (typeof input.query === 'string' ? input.query : '').trim().toLowerCase();
            if (!q) return { ok: false, error: 'query must be a non-empty string' };
            let limit = (input.limit === undefined || input.limit === null) ? 10 : input.limit;
            if (!Number.isInteger(limit) || limit < 1) limit = 10;
            if (limit > 25) limit = 25;
            const matches = [];
            let total = 0;
            for (const c of cards) {
                if (!(c.q.toLowerCase().includes(q) || c.a.toLowerCase().includes(q))) continue;
                total += 1;
                if (matches.length < limit) {
                    matches.push({ module: c.moduleId, module_title: c.moduleTitle, section: c.section, position: c.position, question: c.q, answer_snippet: c.a.length > 240 ? c.a.slice(0, 237) + '...' : c.a });
                }
            }
            return { ok: true, query: (typeof input.query === 'string' ? input.query.trim() : ''), total_matches: total, returned: matches.length, matches: matches };
        })
    });

    register('ceh_get_practice_question', {
        description: 'Fetch one CEH v13 practice question (from the 200-question bank) with its four options, the correct option text and the explanation. Address it by global id (1-200) or by module (1-20) plus an index within that module (default 1).',
        inputSchema: {
            type: 'object',
            properties: {
                id: { type: 'integer', minimum: 1, description: 'Global question id (1-200)' },
                module: { type: 'integer', minimum: 1, maximum: 20, description: 'Module number to pick from (used with index)' },
                index: { type: 'integer', minimum: 1, description: 'Question number within the module (default 1)' }
            }
        },
        execute: guard(async (input) => {
            const qs = await loadQuestions();
            let target;
            if (input.id !== undefined && input.id !== null) {
                if (!Number.isInteger(input.id)) return { ok: false, error: 'id must be an integer', given: input.id };
                target = qs.find((x) => x.id === input.id);
                if (!target) return { ok: false, error: 'no question with that id', id: input.id, valid_range: '1..' + qs.length };
            } else if (input.module !== undefined && input.module !== null) {
                const m = input.module;
                if (!Number.isInteger(m) || m < 1 || m > 20) return { ok: false, error: 'module must be an integer from 1 to 20', given: m };
                let idx = (input.index === undefined || input.index === null) ? 1 : input.index;
                if (!Number.isInteger(idx) || idx < 1) return { ok: false, error: 'index must be an integer of 1 or greater', given: input.index };
                const inModule = qs.filter((x) => x.module === m);
                if (!inModule.length) return { ok: false, error: 'no practice questions for that module', module: m };
                if (idx > inModule.length) return { ok: false, error: 'index out of range for this module', module: m, index: idx, valid_range: '1..' + inModule.length };
                target = inModule[idx - 1];
            } else {
                return { ok: false, error: 'address the question by "id" (1-200) or by "module" (1-20) plus an optional "index"' };
            }
            const mod = data.modules.find((x) => x.id === target.module);
            return {
                ok: true, id: target.id, module: target.module, module_title: mod ? mod.title : null, topic: target.topic,
                question: target.question, options: target.options, correct_option: target.options[target.correctIndex], explanation: target.explanation
            };
        })
    });
})();
