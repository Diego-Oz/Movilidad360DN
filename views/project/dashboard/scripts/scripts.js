document.addEventListener('DOMContentLoaded', function () {
    var statisticsChartCanvas = document.getElementById('statisticsChart').getContext('2d');
    var statisticsChart = new Chart(statisticsChartCanvas, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Usuarios Activos',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                data: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 900, 800], 
                fill: true,
            }, {
                label: 'Tiempo de Viaje Promedio',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                data: [200, 300, 400, 500, 400, 300, 200, 100, 200, 300, 400, 500], 
                fill: true,
            }, {
                label: 'Vehiculos en Uso',
                backgroundColor: 'rgba(255, 206, 86, 0.2)',
                borderColor: 'rgba(255, 206, 86, 1)',
                data: [50, 100, 150, 200, 250, 300, 350, 300, 250, 200, 150, 100], 
                fill: true,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                position: 'bottom',
            },
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            hover: {
                mode: 'nearest',
                intersect: true
            }
        }
    });

    // Configuración del gráfico de ventas diarias
    var dailySalesChartCanvas = document.getElementById('dailySalesChart').getContext('2d');
    var dailySalesChart = new Chart(dailySalesChartCanvas, {
        type: 'line',
        data: {
            labels: ['Mar 25', 'Mar 26', 'Mar 27', 'Mar 28', 'Mar 29', 'Mar 30', 'Mar 31', 'Apr 1', 'Apr 2'],
            datasets: [{
                label: 'Sastifaccion del Usuario',
                backgroundColor: 'rgba(76, 175, 80, 0.2)',
                borderColor: 'rgba(76, 175, 80, 1)',
                data: [400, 450, 470, 500, 520, 530, 550, 570, 600], 
                fill: false,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: false
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Amount'
                    }
                }]
            }
        }
    });
});

var myChart = new myChart(ctx, {
    type: 'line', 
    data: data,
    options: {
        responsive: true,
        maintainAspectRatio: false,

    }
});

