function initMap() {
    var mapOptions = {
      zoom: 13,
      center: {lat: 18.4860575, lng: -69.9312117},
      mapTypeId: 'roadmap'
    };
  
    var map = new google.maps.Map(document.getElementById('trafficHeatmap'), mapOptions);
  
    var avenidas = [
      {nombre: "Avenida Winston Churchill", lat: LATITUD, lng: LONGITUD},
      {nombre: "Avenida 27 de Febrero", lat: LATITUD, lng: LONGITUD},
    ];
  
    avenidas.forEach(function(avenida) {
      var marker = new google.maps.Marker({
        position: {lat: avenida.lat, lng: avenida.lng},
        map: map,
        title: avenida.nombre
      });
    });
  }


const trafficData = {
    labels: ['Av. Máximo Gómez', 'Expreso John F. Kennedy', '27 de Febrero', 'Av. Simón Bolívar', 'Av. Anacaona'],
    datasets: [{
      label: 'Número de Vehículos',
      backgroundColor: 'rgb(54, 162, 235)',
      borderColor: 'rgb(54, 162, 235)',
      data: [200, 150, 220, 130, 190], 
    }]
  };
  
  // Configuración del gráfico
  const config = {
    type: 'bar', 
    data: trafficData,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };
  
  const trafficChartElement = document.getElementById('trafficChart');
  
  const trafficChart = new Chart(trafficChartElement, config);
  