const ctx = document.getElementById('chart');
if (ctx) {
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['T-3', 'T-2', 'T-1', 'Now'],
            datasets: [{ label: 'Hospital Admissions', data: [12, 19, 30, 45], borderColor: '#ff4757', tension: 0.4 }]
        },
        options: { plugins: { legend: { display: true } } }
    });
}