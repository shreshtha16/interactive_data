// script.js

const ctx = document.getElementById('myChart').getContext('2d');

// Initial data
let chartData = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: 'Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

// Create the chart
let myChart = new Chart(ctx, {
  type: 'bar',
  data: chartData,
  options: {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true,
      },
    },
    interaction: {
      mode: 'index',
      intersect: false,
    },
    animation: false, // Turn off default animations for Anime.js
  },
});

// Animate the chart on hover
const animateChart = () => {
  anime({
    targets: chartData.datasets[0].data,
    value: chartData.datasets[0].data.map(() => Math.random() * 20),
    round: 1,
    easing: 'easeInOutQuad',
    duration: 1000,
    update: function () {
      myChart.update('none'); // Efficient update without Chart.js animations
    },
  });
};

// Add click event for data update
document.getElementById('updateData').addEventListener('click', () => {
  animateChart();
});
