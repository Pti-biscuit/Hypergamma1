document.addEventListener('DOMContentLoaded', function() {
  var ctx = document.getElementById('stressFatigueChart').getContext('2d');
  var stressFatigueChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          datasets: [
            {
              label: 'Average Fatigue Level',
              data: [72, 35, 90, 34, 12, 18, 24],
              type: 'line',
              fill: false,
              borderColor: '#262262',
              tension: 0.4,
              yAxisID: 'y-axis-fatigue'
          },
              {
                  label: 'Average Stress Level',
                  data: [90, 50, 83, 20, 10, 18, 12, 20],
                  backgroundColor: 'rgba(196, 24, 137, 0.75)',
                  borderColor: 'rgba(196, 24, 137, 1)',
                  borderWidth: 1,
                  yAxisID: 'y-axis-stress',
                  borderRadius: {topLeft: 3, topRight: 3, bottomLeft: 0, bottomRight: 0},
              }
          ]
      },
      options: {
          scales: {
              'y-axis-stress': {
                  ticks: {
                    beginAtZero: true,
                    max: 100 // Set the maximum value
                },
                  position: 'left',
                  type: 'linear',
                  grid: {
                    display: false // This will remove the grid lines for y-axis-stress
                }
              },
              'y-axis-fatigue': {
                  ticks: {
                    beginAtZero: true,
                    max: 100 // Set the maximum value
                },
                  position: 'right',
                  type: 'linear',
                  grid: {
                    display: false // This will remove the grid lines for y-axis-fatigue
                }
              }
          }
      }
  });
});