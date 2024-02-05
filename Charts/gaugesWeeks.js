document.addEventListener('DOMContentLoaded', function() {
    function createGauge(canvasId, value) {
        var ctx = document.getElementById(canvasId).getContext('2d');
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [value, 100 - value], // Value and the remaining to complete the circle
                    backgroundColor: ['#C41889', '#FFF'], // Pink for value and white for the remaining part
                    borderWidth: 0, // Remove outline by setting borderWidth to 0
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
                },
                elements: {
                    arc: {
                        borderWidth: 0 // Ensure no border/outline around the arcs
                    }
                }
            }
        });
    }
  
    // Create gauges for each day with dummy data
    createGauge('gaugeMonday', 65); // Adjusted to pass only necessary parameters
    createGauge('gaugeTuesday', 30);
    createGauge('gaugeWednesday', 62);
    createGauge('gaugeThursday', 72);
    createGauge('gaugeFriday', 82);
    createGauge('gaugeSaturday', 20);
    createGauge('gaugeSunday', 0);
});
