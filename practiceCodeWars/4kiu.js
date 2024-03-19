//Sum of Intervals

function sumIntervals(intervals) {
    let sortedIntervals = intervals.sort((a, b) => a[0] - b[0]); // Ordenar los intervalos por el inicio
    let totalSum = 0;
    let currentInterval = sortedIntervals[0];
    
    for (let i = 1; i < sortedIntervals.length; i++) {
      const nextInterval = sortedIntervals[i];
      if (nextInterval[0] <= currentInterval[1]) { // Verificar si hay superposición
        currentInterval[1] = Math.max(currentInterval[1], nextInterval[1]); // Fusionar los intervalos
      } else {
        totalSum += currentInterval[1] - currentInterval[0]; // Sumar longitud del intervalo sin superposición
        currentInterval = nextInterval; // Mover al siguiente intervalo
      }
    }
    
    totalSum += currentInterval[1] - currentInterval[0]; // Sumar longitud del último intervalo sin superposición
    return totalSum;
  }