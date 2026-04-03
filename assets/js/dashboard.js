// Ross Core – Dashboard Interactions

import { qs, qsa } from './utils/dom.js';

export function initDashboard() {
    const cards = qsa(".card");

    if (!cards.length) return;

    cards.forEach(card => {
        card.addEventListener("click", () => {
            console.log("Card clicked:", card.querySelector("h4")?.textContent);
        });
    });
}

initDashboard();

