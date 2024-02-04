document.addEventListener('DOMContentLoaded', function() {
  var ctx = document.getElementById('stressFatigueChart').getContext('2d');
  var stressFatigueChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          datasets: [
              {
                  label: 'Stress Level',
                  data: [12, 19, 3, 5, 2, 3],
                  backgroundColor: 'rgba(255, 99, 132, 0.5)',
                  borderColor: 'rgba(255, 99, 132, 1)',
                  borderWidth: 1,
                  yAxisID: 'y-axis-stress'
              },
              {
                  label: 'Fatigue Level',
                  data: [2, 3, 4, 5, 3],
                  type: 'line',
                  fill: false,
                  borderColor: 'rgb(54, 162, 235)',
                  tension: 0.1,
                  yAxisID: 'y-axis-fatigue'
              }
          ]
      },
      options: {
          scales: {
              'y-axis-stress': {
                  beginAtZero: true,
                  position: 'left',
                  type: 'linear'
              },
              'y-axis-fatigue': {
                  beginAtZero: true,
                  position: 'right',
                  type: 'linear',
                  grid: {
                      drawOnChartArea: false // ensure that the grid lines of the second y-axis do not show
                  }
              }
          }
      }
  });
});
