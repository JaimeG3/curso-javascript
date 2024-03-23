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

  function sumIntervals(xs) {
    let ys = xs.sort(([a,b], [c,d]) => a-c);
    let m = -Number.MAX_VALUE;
    let res = 0;
    for (let [a,b] of ys) {
      m = Math.max(m, a);
      res += Math.max(0, b-m);
      m = Math.max(m, b);
    }
    return res;
  }

  const sumIntervals = (intervals) => {
    intervals.sort((p, n) => p[1] - n[1]);

    for (let i = 0; i < intervals.length-1; i++) {
        if (intervals[i][1] > intervals[i+1][0]) {
            intervals[i][0] = Math.min(intervals[i][0], intervals[i+1][0])
            intervals[i][1] = intervals[i+1][1];
            intervals.splice(i+1,1);
            i = -1;
        }
    }
    return intervals.reduce((a, v) => a + (v[1]-v[0]),0);
}

function sumIntervals(xs) {
    let ys = xs.sort(([a,b], [c,d]) => a-c);
    let m = -Number.MAX_VALUE;
    let res = 0;
    for (let [a,b] of ys) {
      m = Math.max(m, a);
      res += Math.max(0, b-m);
      m = Math.max(m, b);
    }
    return res;
  }