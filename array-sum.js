function sumNumbersFromArrayr(arr) {
    let sum = 0;
    arr.forEach(element => {
      sum = sum + element;
    });
    return sum;
  }

let x = [1, 2, 3, 4, 10, 11]
console.log(sumNumbersFromArrayr(x))