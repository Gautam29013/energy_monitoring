var map = L.map('map').setView([20.5937, 78.9629], 5);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
L.circle([28.6139, 77.2090], { color: 'red', radius: 50000 }).addTo(map).bindPopup('High Risk Zone');