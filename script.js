const ctx = document.getElementById('performanceChart').getContext('2d');
const performanceChart = new Chart(ctx, {
    type: 'line',
    data:{
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{