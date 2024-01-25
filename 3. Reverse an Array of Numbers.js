// function reverseAnArrayOfNumbers (num, inputArr){
// inputArr = [10, 20, 30, 40, 50]
// //let inputArr = [-1, 20, 99, 5]
// //let inputArr = [66, 43, 75, 89, 47]
// let array = []


//     console.log(num, inputArr);
// }
// reverseAnArrayOfNumbers(3);
//reverseAnArrayOfNumbers(4);
//reverseAnArrayOfNumbers(2);


function reverseAnArrayOfNumbers(n, arr) {
    //let arr = [10, 20, 30, 40, 50];
    //let arr = [-1, 20, 99, 5];
    
    arr.push(n);
    let print = "";
    for (let i = n - 1; i >= 0; i--) {

        print += arr[i] + " ";

    }

    console.log(print);
}
//reverseAnArrayOfNumbers(3);
//reverseAnArrayOfNumbers(4);
reverseAnArrayOfNumbers(3,[10, 20, 30, 40, 50]);