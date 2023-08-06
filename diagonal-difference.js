function abs(num) {
  if(num < 0){
    return (-1 * num);
  } else {
    return num;
  }
}

function diagonalDifference(ar) {
    let n = ar[0];
    let iPositive = 1
    let iNegative = n;
    let sumPositive = 0
    let sumNegative = 0
    for(let i = 1; i < ar.length; i++) {
      if(i == iPositive){
        sumPositive += ar[i];
        iPositive += n + 1;
      } 
      if (i == iNegative && i!= ar.length -1){
        sumNegative += ar[i];
        iNegative += n - 1;
      }
    }
  return abs(sumPositive - sumNegative);
}

let x = [3, 11, 2, 4, 4, 5, 6, 10, 8, -12];
console.log(diagonalDifference(x))