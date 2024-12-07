// Write a function that checks if all numbers in [2, 4, 6] are even using every, and if at least one number is odd using some.
function q10(arr){
    if(arr.every((e) => e%2==0)){
        console.log("all are even")
    }
    if(arr.some((e) => e%2!=0)){
        console.log("at least one is odd")
    }
}
q10([2, 4, 6])

// Write a function to check if the word "apple" exists in an array of fruits ['banana', 'orange', 'apple'].
function q9(arr){
    if(arr.includes("apple")==true)
        console.log("exsist");
    else{
        console.log("not exist");
    }
}
q9(['banana', 'orange', 'apple'])

//  Find the index of the first element greater than 10 in the array [4, 10, 15, 20].
function q8(arr){
    console.log(arr.find((e) => e>10))
}
q8([4, 10, 15, 20])

// Find the position of the number 5 in the array [10, 20, 5, 40].
function q7(arr){
    console.log(arr.indexOf(5))
}
q7([10, 20, 5, 40])

// Print all the elements of an array using forEach.
function q6(arr){
    arr.forEach((e) => console.log(e))
}
q6([1, 2, 3, 4])

// Write a function that filters out all odd numbers from an array of [1, 2, 3, 4, 5, 6].
function q5(arr){
    console.log(arr.filter((e) => e%2!=0))
}
q5([1, 2, 3, 4, 5, 6])

// Given an array [1, 2, 3, 4], write a function to create a new array with each element doubled using map.
function q4(arr){
    let arr2 = arr.map((e) => e*2);
    console.log(arr2);
}
q4([1, 2, 3, 4])

// Use splice to remove the 3rd element from an array of 5 elements. Show the resulting array.
function q3(arr){
    arr.splice(2, 1);
    console.log(arr)
}
q3([1, 2, 3, 4, 5])

// Write a function that adds a number at the beginning of an array and removes the first element. Return the modified array
function q2(arr){
    arr.unshift(10);
    arr.shift();
    console.log(arr)
}
q2([1, 2, 3, 4, 5])

// Write a JavaScript function that adds a new element to an array and then removes the last element. Log the modified array.
function q1(arr){
    arr.push(10);
    arr.pop();
    console.log(arr)
}
q1([1, 2, 3, 4, 5])