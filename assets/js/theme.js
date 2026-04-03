// Ross Core – Theme Handler

export function setTheme(mode) {
    document.documentElement.setAttribute("data-theme", mode);
    localStorage.setItem("theme", mode);
}

export function initTheme() {
    const saved = localStorage.getItem("theme") || "light";
    setTheme(saved);
}

initTheme();
