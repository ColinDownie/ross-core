// Navigation Component Logic

export function highlightActiveLink() {
    const links = document.querySelectorAll("header nav a");
    const current = window.location.pathname;

    links.forEach(link => {
        if (link.getAttribute("href") === current) {
            link.classList.add("active");
        }
    });
}
