function compareTriplets(a, b) {
    let result = [0,0]
     for(let i=0; i < 3; i++) {
        if (a[i] > b[i]) {
            result[0]++;
        } else if (a[i] < b[i]) {
            result[1]++;
        }
    };
    return result;
}


let alice = [17, 28, 30]
let bob = [99, 16, 8]
console.log(compareTriplets(alice, bob))