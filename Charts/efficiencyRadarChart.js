document.addEventListener('DOMContentLoaded', function() {
  var ctx = document.getElementById('efficiencyRadarChart').getContext('2d');
  var efficiencyRadarChart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['Memory', 'Attention', 'Problem-solving', 'Flexibility', 'Speed', 'Accuracy'],
      datasets: [{
        label: 'Task Efficiency',
        data: [82, 90, 90, 81, 72, 91],
        fill: true,
        backgroundColor: 'rgba(196, 24, 137, 0.5)',
        borderColor: 'rgba(196, 24, 137, 1)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)',
      }]
    },
    options: {
      scales: {
        r: {
          beginAtZero: false,
          min: 50,
          ticks: {
            stepSize: 10
          }
        }
      },
      elements: {
        line: {
          borderWidth: 3
        }
      }
    }
  });
});
