//1 ex
function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}
//2ex
function evenNum(a, b) {
    
    for (let i = a; i >= b; i--) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}
//3ex
function power(a, b = 2) {
    return a ** b
}
let resultPower = power(4, b = 2)
console.log(resultPower);



//4ex
function summN(n) {
    let summ = 0;
    for (let i = 1; i <= n; i++) {
        summ += i;
    }
    return summ;
}

//5ex
function sumEvenOdd(a, b) {
    let evenSum = 0;
    let oddSum = 0;

    for (let i = a; i <= b; i++) {
        if (i % 2 === 0) {
            evenSum += i;
        } else {
            oddSum += i;
        }
    }

    console.log("Sum of even numbers:", evenSum);
    console.log("Sum of odd numbers:", oddSum);
}

//6ex
function longestString(array) {
    if (array.length === 0) {
        return null;
    }

    let longestElement = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i].length > longestElement.length) {
            longestElement = array[i];
        }
    }

    return longestElement;
}