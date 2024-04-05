// Función para exportar el gráfico como imagen
function exportChart() {
    
    const chartCanvas = document.getElementById('statisticsChart');
    const url = chartCanvas.toDataURL('image/png');
  
    const link = document.createElement('a');
    link.download = 'flujo-grafico.png'; 
    link.href = url;
    link.click();
  }
  
  // Función para imprimir el gráfico
  function printChart() {
    
    const chartCanvas = document.getElementById('statisticsChart');
    const imgUrl = chartCanvas.toDataURL('image/png');
    
    const win = window.open('');
    win.document.write('<img src="' + imgUrl + '" onload="window.print();window.close()" />');
    win.focus();
  }
  
  
  document.querySelector('.export-btn').addEventListener('click', exportChart);
  
  document.querySelector('.print-btn').addEventListener('click', printChart);
  