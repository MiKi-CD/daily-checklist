// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    renderChecklist();
    renderStreak();
    renderProtein();
    renderDashboard();
});

// Render checklist items efficiently using DOM methods
function renderChecklist() {
    const checklistItems = document.getElementById('checklist-items');
    checklistItems.innerHTML = ''; // Clear first
    const items = ['Sample Item 1', 'Sample Item 2'];
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        checklistItems.appendChild(li);
    });
}

// Render streak count
function renderStreak() {
    const streakCount = document.getElementById('streak-count');
    streakCount.textContent = '5';
}

// Render protein tracker
function renderProtein() {
    const proteinCount = document.getElementById('protein-count');
    proteinCount.textContent = '100g';
}

// Render dashboard - using appendChild instead of innerHTML +=
function renderDashboard() {
    const dashboard = document.getElementById('dashboard');
    const p = document.createElement('p');
    p.textContent = 'Your current progress is good.';
    dashboard.appendChild(p);
}