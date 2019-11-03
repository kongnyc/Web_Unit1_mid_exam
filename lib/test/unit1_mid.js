// Write a method that doubles each element in an array.
// console.log("Problem 1")
function doubler(array) {
    return array.map(el=>{
        return el *= 2
    })
}
// console.log(doubler([0,2,3,4]))
// Write a method that returns the factors of a number in ascending order.
// Factors are numbers that divide evenly into a number.

function factors(num) {
    let newArry =[];
    for(let i = 0; i <=num; i++){
        if(num%i === 0){
            newArry.push(i)
        }
    }
    return newArry
}

// Write a method that returns the median of elements in an array
// If the length is even, return the average of the middle two elements.

function median(arr) {
    arr.sort();
   let median= [];
    if((arr.length)%2 === 0){
        median = (arr[Math.floor((arr.length-1) /2 )] + arr[Math.floor((arr.length)/2)])/2
    }
    else{
        median = arr[Math.floor((arr.length-1)/2)]
    }
    return median
}

// console.log("Problem 3")
// console.log(median([10,5,5,11]))

// Write a method that returns the product of all numbers in an array.

function product(arr) {
    let sum = 1;
    if(arr.length){
    arr.forEach(el=>{
        return sum = sum*el})
    }else{
        sum = 0
    }
    return sum
}
// console.log(product([1,2,3]))


// Write a method that returns the largest number in an array.

function largest(arr) {
    let largest = arr[0];
    arr.forEach(el=>{
        if(el>largest){
            largest = el
        }
    })
    return largest
}

// Write a method called 'and' that takes in two arguments. It should check
// return whether or not both arguments have a truthy value.

function and(arg1, arg2) {
if(arg1&&arg2){
    return true
}else{
    return false
}
}

// Write a function that takes in an array and a target. Return whether or
// not the array contains the target

function includes(arr, target) {
    if(arr.includes(target)){
        return true
    }else{
        return false
    }
}

// Write a function that removes all the vowels from a string.

function disemvowel(str) {
    let newStr="";
    for(let el of str){
        if(!el.includes("a")&&!el.includes("e")&&!el.includes("i")&&!el.includes("o")&&!el.includes("u")){
            newStr += el
        }
    }
        return newStr
    }


module.exports = { doubler, factors, median, product, largest, and, includes, disemvowel };
