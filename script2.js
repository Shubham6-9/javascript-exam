// Combining `map` and `filter`: Write a function that takes an array of numbers and returns a new array of squares of even numbers using `filter` and `map`.
function q1(arr){
    let arr2 = (arr.filter((e) => e%2==0)).map((e) => e*e)
    console.log(arr2)
}
q1([1, 2, 3, 4, 5, 6])

// Using `forEach` to Count Occurrences: Write a function that counts how many times each element appears in an array using `forEach`.
function q2(arr){
    let arr2 = []
    arr.forEach((e) => {
        let count=0;
        if(arr2.includes(e)){

        }else{
            arr2.push(e)
            for(let i=0 ; i<arr.length ; i++){
                if(arr[i]==e)
                    count ++;
            }
            console.log(e +" is "+ count +" times")
        }
    })
}
q2(['apple', 'banana', 'orange', 'apple', 'banana', 'apple'])

// Chain `map`, `filter`, and `forEach`: Write a function that filters out numbers less than `5` from an array, doubles the remaining numbers, and logs each doubled value using `forEach`.
function q3(arr){
    ((arr.filter((e) => e>=5)).map((e) => e*2)).forEach((e) => console.log(e));
}
q3([2, 3, 5, 7, 8])