document.addEventListener('DOMContentLoaded', function() {
    function createGauge(canvasId, value) {
        var ctx = document.getElementById(canvasId).getContext('2d');
        new Chart(ctx, {
          type: 'doughnut',
          data: {
            datasets: [{
              data: [value, 100 - value], // Value and the remaining to complete the circle
              backgroundColor: ['#C41889', 'transparent'], // Color for value and transparent for the remaining part
              circumference: 180, // Half circle
              rotation: 270 // Start from the top
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false, // To maintain the semi-circle shape
            cutout: '80%', // Increase this value to have a thinner gauge
            plugins: {
              legend: {
                display: false // Don't display the legend
              },
              tooltip: {
                enabled: false // Disable tooltips
              }
            }
          }
        });
      }
     
  
    // Create a gauge for Monday
    createGauge('gaugeMonday', 65, 100); // 65 out of 100 as an example value
    createGauge('gaugeTuesday', 30, 100); // 
    createGauge('gaugeWednesday', 62, 100); //
    createGauge('gaugeThursday',72, 100); //
    createGauge('gaugeFriday', 82, 100); //
    createGauge('gaugeSaturday', 20, 100); //
    createGauge('gaugeSunday', 0, 100); //
  
  
    // Repeat the createGauge function call for each day with the appropriate canvas ID and values
  });
  